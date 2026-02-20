import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Simple in-memory rate limiter: max 5 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limiting by IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Trop de demandes. Veuillez réessayer plus tard." }), {
      status: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const brevoApiKey = Deno.env.get("BREVO_API_KEY")!;

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const body = await req.json();
    const { interet, email, nom, telephone, message, source_url, source_tag } = body;

    // ── 1. Validate required fields
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return new Response(JSON.stringify({ error: "Adresse e-mail invalide." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!nom || typeof nom !== "string" || nom.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Nom requis." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Message requis." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ── 2. Insert into contact_Lirelia (status = "received")
    const { data: insertedRow, error: dbError } = await supabase
      .from("contact_lirelia")
      .insert({
        interet: interet?.trim() || null,
        email: email.trim(),
        nom: nom.trim(),
        telephone: telephone?.trim() || null,
        message: message.trim(),
        source_url: source_url || null,
        source_tag: source_tag || null,
        status: "received",
      })
      .select()
      .single();

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(JSON.stringify({ error: "Erreur lors de l'enregistrement." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const rowId = insertedRow.id;

    // ── 3. Brevo: upsert contact
    const brevoPayload: Record<string, unknown> = {
      email: email.trim(),
      updateEnabled: true,
      attributes: {
        NOM: nom.trim(),
        PHONE: telephone?.trim() || "",
        INTERET: interet?.trim() || "",
        MESSAGE: message.trim(),
        SOURCE_URL: source_url || "",
        SOURCE_TAG: source_tag || "",
      },
    };

    const brevoListId = Deno.env.get("BREVO_LIST_ID");
    if (brevoListId) {
      const listId = parseInt(brevoListId, 10);
      if (!isNaN(listId)) {
        brevoPayload.listIds = [listId];
      }
    }

    let brevoStatus: "brevo_ok" | "brevo_error" = "brevo_ok";
    let brevoResponse: unknown = null;

    try {
      const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(brevoPayload),
      });

      const brevoJson = await brevoRes.json().catch(() => ({ raw: "non-json response" }));
      brevoResponse = brevoJson;

      if (!brevoRes.ok) {
        console.error("Brevo API error:", brevoRes.status, JSON.stringify(brevoJson));
        brevoStatus = "brevo_error";
      }
    } catch (brevoErr) {
      console.error("Brevo fetch failed:", brevoErr);
      brevoStatus = "brevo_error";
      brevoResponse = { error: String(brevoErr) };
    }

    // ── 4. Update status
    await supabase
      .from("contact_lirelia")
      .update({ status: brevoStatus, brevo_response: brevoResponse })
      .eq("id", rowId);

    // ── 5. Return success
    return new Response(JSON.stringify({ success: true, id: rowId }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Erreur serveur inattendue." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
