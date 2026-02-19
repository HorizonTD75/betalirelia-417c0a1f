import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const brevoApiKey = Deno.env.get("BREVO_API_KEY")!;

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const body = await req.json();
    const { topic, email, full_name, telephone, message, source_url, source_tag } = body;

    // ── 1. Validate required fields ──────────────────────────────────────────
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return new Response(JSON.stringify({ error: "Adresse e-mail invalide." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!full_name || typeof full_name !== "string" || full_name.trim().length === 0) {
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

    // ── 2. Insert into contact_requests (status = "received") ─────────────────
    const { data: insertedRow, error: dbError } = await supabase
      .from("contact_requests")
      .insert({
        topic: topic?.trim() || null,
        email: email.trim(),
        full_name: full_name.trim(),
        telephone: telephone?.trim() || null,
        message: message.trim(),
        source_url: source_url || null,
        source_tag: source_tag || null,
        status: "received",
        // keep legacy columns populated too for backward compatibility
        name: full_name.trim(),
        phone: telephone?.trim() || null,
        selected_product: topic?.trim() || null,
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

    // ── 3. Brevo: upsert contact ──────────────────────────────────────────────
    const brevoPayload: Record<string, unknown> = {
      email: email.trim(),
      updateEnabled: true,
      attributes: {
        TOPIC: topic?.trim() || "",
        FULL_NAME: full_name.trim(),
        TELEPHONE: telephone?.trim() || "",
        MESSAGE: message.trim(),
        SOURCE_URL: source_url || "",
        SOURCE_TAG: source_tag || "",
      },
    };

    // Optionally add to a list if BREVO_LIST_ID secret is set
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
          "Accept": "application/json",
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

    // ── 4. Update status + brevo_response ────────────────────────────────────
    await supabase
      .from("contact_requests")
      .update({ status: brevoStatus, brevo_response: brevoResponse })
      .eq("id", rowId);

    // ── 5. Return success to the front (even if Brevo failed) ─────────────────
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
