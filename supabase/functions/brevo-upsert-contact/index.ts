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
    const { interet, email, nom, telephone, message, source_url, source_tag, role, rgpd_ok, list_key } = body;

    // Server-side allowlist of Brevo list IDs. Callers may only select via a safe key.
    const BREVO_LIST_IDS: Record<string, number> = {
      contact: 14,
      bilan: 13,
    };

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

    // ── 1b. Server-side length limits (defense against client maxLength bypass)
    const tooLong = (v: unknown, max: number) =>
      typeof v === "string" && v.length > max;
    if (
      tooLong(nom, 150) ||
      tooLong(email, 254) ||
      tooLong(message, 5000) ||
      tooLong(interet, 200) ||
      tooLong(telephone, 30) ||
      tooLong(source_url, 2048) ||
      tooLong(source_tag, 100) ||
      tooLong(role, 100)
    ) {
      return new Response(JSON.stringify({ error: "Champ trop long." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ── 2. Insert into contact_lirelia (status = "received")
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

    // ── 3. Brevo: fetch existing contact to get current INTERET and ROLE
    let existingInteret = "";
    let existingRole = "";

    try {
      const getRes = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email.trim())}`, {
        method: "GET",
        headers: {
          "api-key": brevoApiKey,
          Accept: "application/json",
        },
      });
      if (getRes.ok) {
        const existing = await getRes.json();
        existingInteret = existing?.attributes?.INTERET || "";
        existingRole = existing?.attributes?.ROLE || "";
      }
    } catch (e) {
      console.log("Could not fetch existing Brevo contact (may be new):", e);
    }

    // ── 4. Build INTERET and ROLE with append logic
    let finalInteret = existingInteret;
    if (interet && interet.trim()) {
      if (finalInteret && finalInteret.trim()) {
        finalInteret = finalInteret.trimEnd() + "\n" + interet.trim();
      } else {
        finalInteret = interet.trim();
      }
    }

    let finalRole = existingRole;
    if (role && role.trim()) {
      if (finalRole && finalRole.trim()) {
        finalRole = finalRole.trimEnd() + "\n" + role.trim();
      } else {
        finalRole = role.trim();
      }
    }

    // ── 5. Brevo: upsert contact
    // ── 5. Normalize phone and assign to SMS (mobile) or PHONE (landline)
    let normalizedPhone: string | null = null;
    let isMobilePhone = false;
    if (telephone && typeof telephone === "string") {
      const cleaned = telephone.replace(/[\s\-\.\(\)]/g, "").trim();
      if (/^0\d{9}$/.test(cleaned)) {
        normalizedPhone = `+33${cleaned.slice(1)}`;
      } else if (/^\+33\d{9}$/.test(cleaned)) {
        normalizedPhone = cleaned;
      }
      if (normalizedPhone) {
        isMobilePhone = /^\+33[67]/.test(normalizedPhone);
      }
    }

    const brevoAttributes: Record<string, unknown> = {
      NOM: nom.trim(),
      INTERET: finalInteret,
      MESSAGE: message.trim(),
      SOURCE_URL: source_url || "",
      SOURCE_TAG: source_tag || "",
    };

    if (normalizedPhone) {
      if (isMobilePhone) {
        brevoAttributes.SMS = normalizedPhone;
      } else {
        brevoAttributes.PHONE = normalizedPhone;
      }
    }

    // Add ROLE if provided
    if (role !== undefined) {
      brevoAttributes.ROLE = finalRole;
    }

    // Add RGPD_OK as boolean if provided
    if (rgpd_ok !== undefined) {
      brevoAttributes.RGPD_OK = rgpd_ok === true;
    }

    const brevoPayload: Record<string, unknown> = {
      email: email.trim(),
      updateEnabled: true,
      attributes: brevoAttributes,
    };

    // Use explicit list ID from request, fallback to env var
    const resolvedListId = (typeof list_key === "string" && BREVO_LIST_IDS[list_key]) || null;
    const fallbackListId = parseInt(Deno.env.get("BREVO_LIST_ID") || "", 10);
    const finalListId = resolvedListId || (Number.isFinite(fallbackListId) ? fallbackListId : null);
    if (finalListId) {
      brevoPayload.listIds = [finalListId];
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
        const brevoJson = brevoResponse as any;
        console.error("Brevo API error:", brevoRes.status, JSON.stringify(brevoJson));
        
        // If SMS duplicate or invalid phone, retry without phone
        const isSMSDuplicate = brevoJson?.message === "Unable to update contact, SMS is already associated with another Contact";
        const isInvalidPhone = brevoJson?.message === "Invalid phone number";
        
        if (isSMSDuplicate || isInvalidPhone) {
          console.log("Phone issue, retrying without phone...");
          const attrsWithoutPhone = { ...brevoAttributes };
          delete attrsWithoutPhone.SMS;
          delete attrsWithoutPhone.PHONE;
          
          const retryPayload = { ...brevoPayload, attributes: attrsWithoutPhone };
          try {
            const retryRes = await fetch("https://api.brevo.com/v3/contacts", {
              method: "POST",
              headers: { "api-key": brevoApiKey, "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify(retryPayload),
            });
            const retryJson = await retryRes.json().catch(() => ({}));
            
            if (retryRes.status === 400 && retryJson?.code === "duplicate_parameter") {
              // Update existing contact without phone
              await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email.trim())}`, {
                method: "PUT",
                headers: { "api-key": brevoApiKey, "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ attributes: attrsWithoutPhone, listIds: brevoPayload.listIds ? brevoPayload.listIds : [] }),
              });
            }
            brevoStatus = "brevo_ok";
            brevoResponse = { phone_skipped: true };
          } catch (retryErr) {
            console.error("Retry without phone failed:", retryErr);
            brevoStatus = "brevo_error";
          }
        } else {
          brevoStatus = "brevo_error";
        }
      }
    } catch (brevoErr) {
      console.error("Brevo fetch failed:", brevoErr);
      brevoStatus = "brevo_error";
      brevoResponse = { error: String(brevoErr) };
    }

    // ── 6. Update status
    await supabase
      .from("contact_lirelia")
      .update({ status: brevoStatus, brevo_response: brevoResponse })
      .eq("id", rowId);

    // ── 7. Return success
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
