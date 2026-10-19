/**
 * LIRELIA CONSENT REGISTRY — transmission au registre de consentement.
 *
 * Envoie les événements « impression » et « decision » du bandeau cookies
 * au relais OVH https://lirelia.fr/api/consent.php (qui transmet à Google
 * Sheets). JavaScript standard (fetch), aucune clé ni variable privée :
 * fonctionne à l'identique dans le HTML statique.
 *
 * Aucun champ IP : le relais récupère l'adresse côté serveur.
 * Les échecs ne bloquent jamais le choix du visiteur ; ils sont gardés
 * dans une petite file locale et renvoyés (même event_id) au plus 3 fois.
 */

export const CONSENT_ENDPOINT = "https://lirelia.fr/api/consent.php";
export const BANNER_VERSION_LABEL = "v2.0";

const CONSENT_ID_KEY = "lirelia_consent_id";
const QUEUE_KEY = "lirelia_consent_queue";
const MAX_ATTEMPTS = 3;
const MAX_QUEUE = 10;

export type ConsentDecision = "accepte" | "refuse" | "personnalise";
export type ConsentAction = "premier_choix" | "modification" | "retrait";

export interface ConsentEvent {
  event_type: "impression" | "decision";
  decision: ConsentDecision | "";
  action: ConsentAction | "";
  event_id: string;
  impression_id: string;
  consent_id: string;
  page: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  device: "mobile" | "desktop" | "tablet";
  banner_version: string;
  statistics: boolean;
  marketing: boolean;
  client_time: string;
}

function uuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID().replace(/-/g, "");
  }
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`;
}

/** Identifiant : préfixe + aléatoire ; 8–100 caractères [A-Za-z0-9_-]. */
export function newId(prefix: "evt" | "imp" | "cons"): string {
  return `${prefix}_${uuid()}`.replace(/[^A-Za-z0-9_-]/g, "").slice(0, 100);
}

/** Identifiant pseudonyme stable du consentement (aucune donnée personnelle). */
export function getConsentId(): string {
  try {
    let id = localStorage.getItem(CONSENT_ID_KEY);
    if (!id || !/^[A-Za-z0-9_-]{8,100}$/.test(id)) {
      id = newId("cons");
      localStorage.setItem(CONSENT_ID_KEY, id);
    }
    return id;
  } catch {
    return newId("cons");
  }
}

/** Heure locale du navigateur au format ISO 8601 avec décalage (+02:00). */
export function isoLocalTime(date = new Date()): string {
  const pad = (n: number) => String(Math.abs(Math.trunc(n))).padStart(2, "0");
  const off = -date.getTimezoneOffset();
  const sign = off >= 0 ? "+" : "-";
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}` +
    `${sign}${pad(off / 60)}:${pad(off % 60)}`
  );
}

export function detectDevice(): "mobile" | "desktop" | "tablet" {
  const w = window.innerWidth;
  const ua = navigator.userAgent || "";
  if (/iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return "tablet";
  if (w < 768) return "mobile";
  if (w < 1024 && navigator.maxTouchPoints > 0) return "tablet";
  return "desktop";
}

/** Domaine de provenance uniquement (jamais l'URL complète). */
export function referrerDomain(ref = document.referrer): string {
  if (!ref) return "";
  try {
    return new URL(ref).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/** Paramètre UTM nettoyé : rejeté s'il ressemble à une donnée personnelle. */
export function cleanUtm(value: string | null): string {
  if (!value) return "";
  const v = value.trim().slice(0, 100);
  if (/@/.test(v) || /\d{6,}/.test(v)) return "";
  return v.replace(/[^\p{L}\p{N} _.\-+]/gu, "");
}

export function buildEvent(
  type: "impression" | "decision",
  impressionId: string,
  statistics: boolean,
  marketing: boolean,
  decision: ConsentDecision | "" = "",
  action: ConsentAction | "" = "",
): ConsentEvent {
  const params = new URLSearchParams(window.location.search);
  return {
    event_type: type,
    decision,
    action,
    event_id: newId("evt"),
    impression_id: impressionId,
    consent_id: getConsentId(),
    page: window.location.pathname,
    referrer: referrerDomain(),
    utm_source: cleanUtm(params.get("utm_source")),
    utm_medium: cleanUtm(params.get("utm_medium")),
    utm_campaign: cleanUtm(params.get("utm_campaign")),
    device: detectDevice(),
    banner_version: BANNER_VERSION_LABEL,
    statistics: statistics === true,
    marketing: marketing === true,
    client_time: isoLocalTime(),
  };
}

// ── File d'attente (renvois limités, même event_id) ────────────────

interface Queued {
  event: ConsentEvent;
  attempts: number;
}

function readQueue(): Queued[] {
  try {
    const q = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
    return Array.isArray(q) ? q : [];
  } catch {
    return [];
  }
}

function writeQueue(q: Queued[]) {
  try {
    if (q.length) localStorage.setItem(QUEUE_KEY, JSON.stringify(q.slice(-MAX_QUEUE)));
    else localStorage.removeItem(QUEUE_KEY);
  } catch {
    /* stockage indisponible : pas de renvoi */
  }
}

async function post(event: ConsentEvent): Promise<boolean> {
  try {
    const res = await fetch(CONSENT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
      keepalive: true,
      credentials: "omit",
    });
    if (!res.ok) return false;
    const data = await res.json().catch(() => null);
    // inserted:false = déjà enregistré → confirmé aussi.
    return !!data && data.ok === true;
  } catch {
    return false;
  }
}

/** Envoi non bloquant ; en cas d'échec l'événement est conservé pour renvoi. */
export function sendConsentEvent(event: ConsentEvent): void {
  void post(event).then((ok) => {
    if (ok) return;
    const q = readQueue().filter((x) => x.event.event_id !== event.event_id);
    q.push({ event, attempts: 1 });
    writeQueue(q);
  });
}

/** Renvoie les événements non confirmés (au chargement de l'application). */
export async function flushConsentQueue(): Promise<void> {
  const q = readQueue();
  if (!q.length) return;
  const remaining: Queued[] = [];
  for (const item of q) {
    const ok = await post(item.event);
    if (!ok && item.attempts + 1 < MAX_ATTEMPTS) {
      remaining.push({ event: item.event, attempts: item.attempts + 1 });
    }
  }
  writeQueue(remaining);
}
