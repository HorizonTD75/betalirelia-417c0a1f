import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const brevoApiKey = Deno.env.get("BREVO_API_KEY")!;

  try {
    const body = await req.json();
    const { email, prenom, nom, telephone, type, souhait, themes, needZoomHelp, message, source_url, source_tag } = body;

    // Validate required fields
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return new Response(JSON.stringify({ error: "Adresse e-mail invalide." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!prenom || typeof prenom !== "string" || prenom.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Prénom requis." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Brevo: upsert contact with club-specific attributes
    const brevoPayload: Record<string, unknown> = {
      email: email.trim(),
      updateEnabled: true,
      attributes: {
        PRENOM: prenom.trim(),
        NOM: (nom || "").trim(),
        SMS: (telephone || "").trim(),
        ROLE: type || "",
        TYPE: type || "",
        SOUHAIT: souhait || "",
        THEMES: themes || "",
        ZOOM_HELP: needZoomHelp ? "Oui" : "Non",
        MESSAGE: message || "",
        SOURCE_URL: source_url || "",
        SOURCE_TAG: source_tag || "",
      },
    };

    // Add to club list if configured
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
      // Handle "duplicate" as success (contact already exists, attributes updated)
      if (brevoRes.status === 400 && brevoJson?.code === "duplicate_parameter") {
        console.log("Contact already exists in Brevo, updating attributes...");
        // Update existing contact attributes
        const updateRes = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email.trim())}`, {
          method: "PUT",
          headers: {
            "api-key": brevoApiKey,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            attributes: brevoPayload.attributes,
            listIds: brevoPayload.listIds || [],
          }),
        });

        if (!updateRes.ok) {
          const updateJson = await updateRes.json().catch(() => ({}));
          console.error("Brevo update error:", updateRes.status, JSON.stringify(updateJson));
          return new Response(JSON.stringify({ error: "Erreur lors de la mise à jour du contact." }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
      } else {
        console.error("Brevo API error:", brevoRes.status, JSON.stringify(brevoJson));
        return new Response(JSON.stringify({ error: "Erreur lors de l'inscription." }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    return new Response(JSON.stringify({ success: true }), {
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
