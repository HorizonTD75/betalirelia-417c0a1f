// Server-side helper invoked by Brevo edge functions after a successful
// form submission. Sends confirmation + admin notification emails via
// `send-transactional-email` using the service-role JWT. Anonymous callers
// cannot reach this code path; that's enforced inside send-transactional-email.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SERVICE_TEMPLATE_ALLOWLIST = new Set([
  "contact-confirmation",
  "club-registration",
  "bilan-confirmation",
  "admin-notification",
]);

export interface FormEmailSpec {
  templateName: string;
  recipientEmail?: string;
  idempotencyKey: string;
  templateData?: Record<string, unknown>;
}

export interface FormEmailsPayload {
  confirmation?: FormEmailSpec;
  admin?: FormEmailSpec;
}

function valid(spec: unknown): spec is FormEmailSpec {
  if (!spec || typeof spec !== "object") return false;
  const s = spec as Record<string, unknown>;
  return (
    typeof s.templateName === "string" &&
    SERVICE_TEMPLATE_ALLOWLIST.has(s.templateName) &&
    typeof s.idempotencyKey === "string" &&
    s.idempotencyKey.length > 0 &&
    s.idempotencyKey.length <= 200
  );
}

export async function sendFormEmails(payload: FormEmailsPayload | undefined) {
  if (!payload) return;

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceKey) {
    console.error("[send-form-emails] Missing Supabase env vars");
    return;
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  const tasks: Promise<unknown>[] = [];
  for (const spec of [payload.confirmation, payload.admin]) {
    if (!valid(spec)) continue;
    tasks.push(
      supabase.functions
        .invoke("send-transactional-email", {
          body: {
            templateName: spec.templateName,
            recipientEmail: spec.recipientEmail,
            idempotencyKey: spec.idempotencyKey,
            templateData: spec.templateData ?? {},
          },
        })
        .catch((err) => {
          console.error("[send-form-emails] invoke failed", spec.templateName, err);
        }),
    );
  }
  // Fire-and-forget; we don't want email failures to block the form flow.
  await Promise.allSettled(tasks);
}
