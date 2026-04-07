import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function normalizeFrenchPhone(phone?: string | null) {
  if (!phone || typeof phone !== "string") return null;

  const cleaned = phone.replace(/[^\d+]/g, "").trim();

  // Format français classique : 0612345678
  if (/^0\d{9}$/.test(cleaned)) {
    return `+33${cleaned.slice(1)}`;
  }

  // Déjà au bon format : +33612345678
  if (/^\+33\d{9}$/.test(cleaned)) {
    return cleaned;
  }

  // Format 0033XXXXXXXXX
  if (/^0033\d{9}$/.test(cleaned)) {
    return `+${cleaned.slice(2)}`;
  }

  // Format 33XXXXXXXXX
  if (/^33\d{9}$/.test(cleaned)) {
    return `+${cleaned}`;
  }

  return null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const brevoApiKey = Deno.env.get("BREVO_API_KEY");
  if (!brevoApiKey) {
    return jsonResponse({ error: "BREVO_API_KEY manquante." }, 500);
  }

  try {
    const body = await req.json();
    const { email, prenom, nom, telephone, type, souhait, themes, needZoomHelp, message, source_url, source_tag } =
      body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return jsonResponse({ error: "Adresse e-mail invalide." }, 400);
    }

    if (!prenom || typeof prenom !== "string" || prenom.trim().length === 0) {
      return jsonResponse({ error: "Prénom requis." }, 400);
    }

    const normalizedPhone = normalizeFrenchPhone(telephone);

    if (telephone && !normalizedPhone) {
      return jsonResponse({ error: "Numéro de téléphone invalide. Utilisez un numéro français à 10 chiffres." }, 400);
    }

    const fullName = [prenom?.trim(), nom?.trim()].filter(Boolean).join(" ");

    const { data: insertedRow, error: dbInsertError } = await supabase
      .from("contact_lirelia")
      .insert({
        interet: "Club",
        email: email.trim(),
        nom: fullName,
        telephone: normalizedPhone || null,
        message: message?.trim() || null,
        source_url: source_url || null,
        source_tag: source_tag || "club",
        status: "received",
      })
      .select()
      .single();

    if (dbInsertError) {
      console.error("DB insert error:", dbInsertError);
      return jsonResponse({ error: "Erreur lors de l'enregistrement." }, 500);
    }

    const rowId = insertedRow.id;

    const brevoAttributes: Record<string, unknown> = {
      PRENOM: prenom.trim(),
      NOM: (nom || "").trim(),
      ROLE: type || "",
      TYPE: type || "",
      SOUHAIT: souhait || "",
      THEMES: themes || "",
      ZOOM_HELP: needZoomHelp ? "Oui" : "Non",
      MESSAGE: message || "",
      SOURCE_URL: source_url || "",
      SOURCE_TAG: source_tag || "",
    };

    if (normalizedPhone) {
      brevoAttributes.SMS = normalizedPhone;
    }

    const brevoPayload: Record<string, unknown> = {
      email: email.trim(),
      updateEnabled: true,
      attributes: brevoAttributes,
    };

    const brevoClubListId = Deno.env.get("BREVO_CLUB_LIST_ID");
    const brevoListId = Deno.env.get("BREVO_LIST_ID");
    const listId = brevoClubListId || brevoListId;

    if (listId) {
      const parsedId = parseInt(listId, 10);
      if (!isNaN(parsedId)) {
        brevoPayload.listIds = [parsedId];
      }
    }

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

    if (!brevoRes.ok) {
      if (brevoRes.status === 400 && brevoJson?.code === "duplicate_parameter") {
        console.log("Contact already exists in Brevo, updating attributes...");

        const updateRes = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email.trim())}`, {
          method: "PUT",
          headers: {
            "api-key": brevoApiKey,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            attributes: brevoAttributes,
            listIds: brevoPayload.listIds || [],
          }),
        });

        if (!updateRes.ok) {
          const updateJson = await updateRes.json().catch(() => ({}));
          console.error("Brevo update error:", updateRes.status, JSON.stringify(updateJson));

          await supabase
            .from("contact_lirelia")
            .update({
              status: "brevo_error",
              brevo_response: JSON.stringify(updateJson),
            })
            .eq("id", rowId);

          if (updateJson?.message === "Invalid phone number") {
            return jsonResponse({ error: "Numéro de téléphone invalide." }, 400);
          }

          if (updateJson?.message === "Unable to update contact, SMS is already associated with another Contact") {
            return jsonResponse({ error: "Ce numéro de téléphone est déjà associé à un autre contact." }, 400);
          }

          return jsonResponse({ error: "Erreur lors de la mise à jour du contact." }, 500);
        }

        await supabase
          .from("contact_lirelia")
          .update({
            status: "brevo_ok",
            brevo_response: JSON.stringify({ updated: true }),
          })
          .eq("id", rowId);

        return jsonResponse({ success: true }, 200);
      }

      console.error("Brevo API error:", brevoRes.status, JSON.stringify(brevoJson));

      await supabase
        .from("contact_lirelia")
        .update({
          status: "brevo_error",
          brevo_response: JSON.stringify(brevoJson),
        })
        .eq("id", rowId);

      if (brevoJson?.message === "Invalid phone number") {
        return jsonResponse({ error: "Numéro de téléphone invalide." }, 400);
      }

      return jsonResponse({ error: "Erreur lors de l'inscription." }, 500);
    }

    await supabase
      .from("contact_lirelia")
      .update({
        status: "brevo_ok",
        brevo_response: JSON.stringify(brevoJson),
      })
      .eq("id", rowId);

    return jsonResponse({ success: true }, 200);
  } catch (err) {
    console.error("Unexpected error:", err);
    return jsonResponse({ error: "Erreur serveur inattendue." }, 500);
  }
});
