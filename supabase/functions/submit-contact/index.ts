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

  try {
    const { name, email, phone, selected_product, message } = await req.json();

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return new Response(JSON.stringify({ error: "Nom invalide" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Email invalide" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 2000) {
      return new Response(JSON.stringify({ error: "Message invalide" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert into database
    const { data, error } = await supabase.from("contact_requests").insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      selected_product: selected_product || null,
      message: message.trim(),
    }).select().single();

    if (error) {
      console.error("Database insert error:", error);
      return new Response(JSON.stringify({ error: "Erreur lors de l'enregistrement" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send email notification using Lovable AI gateway (Resend-like approach via edge)
    // For now, log the submission. Email sending can be configured later with a provider.
    console.log("New contact request:", {
      id: data.id,
      name: name.trim(),
      email: email.trim(),
      selected_product,
      created_at: data.created_at,
    });

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
