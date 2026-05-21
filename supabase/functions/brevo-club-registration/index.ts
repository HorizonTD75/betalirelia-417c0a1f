import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { sendFormEmails, type FormEmailsPayload } from "../_shared/send-form-emails.ts";


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

function normalizeFrenchPhone(phone?: string | null): { formatted: string | null; isMobile: boolean } {
  if (!phone || typeof phone !== "string") return { formatted: null, isMobile: false };

  const cleaned = phone.replace(/[^\d+]/g, "").trim();
  let normalized: string | null = null;

  if (/^0\d{9}$/.test(cleaned)) {
    normalized = `+33${cleaned.slice(1)}`;
  } else if (/^\+33\d{9}$/.test(cleaned)) {
    normalized = cleaned;
  } else if (/^0033\d{9}$/.test(cleaned)) {
    normalized = `+${cleaned.slice(2)}`;
  } else if (/^33\d{9}$/.test(cleaned)) {
    normalized = `+${cleaned}`;
  }

  if (!normalized) return { formatted: null, isMobile: false };

  // Mobile numbers start with +336 or +337
  const isMobile = /^\+33[67]/.test(normalized);
  return { formatted: normalized, isMobile };
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
    const { email, prenom, nom, telephone, type, souhait, themes, themePropose, needZoomHelp, message, source_url, source_tag } =
      body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return jsonResponse({ error: "Adresse e-mail invalide." }, 400);
    }

    if (!prenom || typeof prenom !== "string" || prenom.trim().length === 0) {
      return jsonResponse({ error: "Prénom requis." }, 400);
    }

    // Server-side length limits
    const tooLong = (v: unknown, max: number) => typeof v === "string" && v.length > max;
    if (
      tooLong(prenom, 100) ||
      tooLong(nom, 150) ||
      tooLong(email, 254) ||
      tooLong(message, 5000) ||
      tooLong(themePropose, 500) ||
      tooLong(souhait, 500) ||
      tooLong(themes, 500) ||
      tooLong(type, 100) ||
      tooLong(telephone, 30) ||
      tooLong(source_url, 2048) ||
      tooLong(source_tag, 100)
    ) {
      return jsonResponse({ error: "Champ trop long." }, 400);
    }

    const { formatted: normalizedPhone, isMobile } = normalizeFrenchPhone(telephone);

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

    // Build INTERET: concatenate theme propose with existing "Club" context
    let finalInteret = "Club";
    if (themePropose && typeof themePropose === "string" && themePropose.trim()) {
      finalInteret = `Club\nThème proposé : ${themePropose.trim()}`;
    }

    const brevoAttributes: Record<string, unknown> = {
      PRENOM: prenom.trim(),
      NOM: (nom || "").trim(),
      ROLE: type || "",
      TYPE: type || "",
      SOUHAIT: souhait || "",
      THEMES: themes || "",
      ZOOM_HELP: needZoomHelp ? "Oui" : "Non",
      MESSAGE: message || "",
      INTERET: finalInteret,
      SOURCE_URL: source_url || "",
      SOURCE_TAG: source_tag || "",
    };

    if (normalizedPhone) {
      if (isMobile) {
        brevoAttributes.SMS = normalizedPhone;
      } else {
        brevoAttributes.PHONE = normalizedPhone;
      }
    }

    const brevoPayload: Record<string, unknown> = {
      email: email.trim(),
      updateEnabled: true,
      attributes: brevoAttributes,
    };

    // Club list = 12 (hardcoded), fallback to env vars
    const brevoClubListId = 12;
    brevoPayload.listIds = [brevoClubListId];

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
        const duplicateIds = brevoJson?.metadata?.duplicate_identifiers || [];
        const isSMSDuplicate = duplicateIds.includes("SMS");

        // If SMS is the duplicate reason, retry without phone first
        if (isSMSDuplicate) {
          console.log("SMS duplicate on create, retrying without phone...");
          const attrsWithoutPhone = { ...brevoAttributes };
          delete attrsWithoutPhone.SMS;
          delete attrsWithoutPhone.PHONE;
          const retryPayload = { ...brevoPayload, attributes: attrsWithoutPhone };

          const retryRes = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: { "api-key": brevoApiKey, "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(retryPayload),
          });

          if (retryRes.ok) {
            await supabase.from("contact_lirelia").update({ status: "brevo_ok", brevo_response: JSON.stringify({ phone_skipped: true }) }).eq("id", rowId);
            return jsonResponse({ success: true }, 200);
          }

          // If retry POST also fails with duplicate_parameter (email exists), do PUT without phone
          const retryJson = await retryRes.json().catch(() => ({}));
          if (retryRes.status === 400 && retryJson?.code === "duplicate_parameter") {
            console.log("Email also exists, doing PUT without phone...");
            const putRes = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email.trim())}`, {
              method: "PUT",
              headers: { "api-key": brevoApiKey, "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify({ attributes: attrsWithoutPhone, listIds: brevoPayload.listIds || [] }),
            });
            if (putRes.ok || putRes.status === 204) {
              await supabase.from("contact_lirelia").update({ status: "brevo_ok", brevo_response: JSON.stringify({ updated: true, phone_skipped: true }) }).eq("id", rowId);
              return jsonResponse({ success: true }, 200);
            }
          }
        }

        // Standard email duplicate: just update
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

          // If SMS duplicate, retry without phone to still register the contact
          const isSMSDuplicate = updateJson?.message === "Unable to update contact, SMS is already associated with another Contact";
          const isInvalidPhone = updateJson?.message === "Invalid phone number";

          if (isSMSDuplicate || isInvalidPhone) {
            console.log("Phone issue detected, retrying without phone...");
            const attrsWithoutPhone = { ...brevoAttributes };
            delete attrsWithoutPhone.SMS;
            delete attrsWithoutPhone.PHONE;

            const retryRes = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email.trim())}`, {
              method: "PUT",
              headers: {
                "api-key": brevoApiKey,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                attributes: attrsWithoutPhone,
                listIds: brevoPayload.listIds || [],
              }),
            });

            if (retryRes.ok) {
              await supabase
                .from("contact_lirelia")
                .update({
                  status: "brevo_ok",
                  brevo_response: JSON.stringify({ updated: true, phone_skipped: true }),
                })
                .eq("id", rowId);
              return jsonResponse({ success: true }, 200);
            }
          }

          await supabase
            .from("contact_lirelia")
            .update({
              status: "brevo_error",
              brevo_response: JSON.stringify(updateJson),
            })
            .eq("id", rowId);

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

      // If phone issue on initial create, retry without phone
      const isSMSDuplicate = brevoJson?.message === "Unable to update contact, SMS is already associated with another Contact";
      const isInvalidPhone = brevoJson?.message === "Invalid phone number";

      if (isSMSDuplicate || isInvalidPhone) {
        console.log("Phone issue on create, retrying without phone...");
        const attrsWithoutPhone = { ...brevoAttributes };
        delete attrsWithoutPhone.SMS;
        delete attrsWithoutPhone.PHONE;

        const retryPayload = { ...brevoPayload, attributes: attrsWithoutPhone };
        const retryRes = await fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: {
            "api-key": brevoApiKey,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(retryPayload),
        });

        if (retryRes.ok || retryRes.status === 400) {
          // Handle duplicate on retry too
          if (retryRes.status === 400) {
            const retryJson = await retryRes.json().catch(() => ({}));
            if (retryJson?.code === "duplicate_parameter") {
              // Update existing contact without phone
              await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email.trim())}`, {
                method: "PUT",
                headers: { "api-key": brevoApiKey, "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ attributes: attrsWithoutPhone, listIds: brevoPayload.listIds || [] }),
              });
            }
          }
          await supabase.from("contact_lirelia").update({ status: "brevo_ok", brevo_response: JSON.stringify({ phone_skipped: true }) }).eq("id", rowId);
          return jsonResponse({ success: true }, 200);
        }
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
