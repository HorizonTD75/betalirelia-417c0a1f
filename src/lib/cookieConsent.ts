/**
 * Cookie Consent Manager for LirElia
 * Manages user cookie preferences, conditional script loading,
 * and server-side consent traceability (RGPD).
 */

import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "lirelia_cookie_consent_v1";
const VISITOR_ID_KEY = "lirelia_visitor_id";
const BANNER_VERSION = 1;

export interface CookieConsent {
  version: number;
  date: string;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

/** Get or create a stable anonymous visitor ID (UUIDv4-like). */
function getOrCreateVisitorId(): string {
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

/** Read stored consent, or null if none exists. */
export function getConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

/** Log consent choice to the database (fire-and-forget). */
function logConsentToDb(analytics: boolean, marketing: boolean) {
  const visitorId = getOrCreateVisitorId();
  supabase
    .from("cookie_consents")
    .insert({
      visitor_id: visitorId,
      consent_given: true,
      analytics,
      marketing,
      banner_version: BANNER_VERSION,
      page_url: window.location.href,
      user_agent: navigator.userAgent?.slice(0, 512) || null,
    })
    .then(({ error }) => {
      if (error) console.warn("Cookie consent log failed:", error.message);
    });
}

/** Persist consent choices. */
export function saveConsent(analytics: boolean, marketing: boolean): CookieConsent {
  const consent: CookieConsent = {
    version: BANNER_VERSION,
    date: new Date().toISOString(),
    necessary: true,
    analytics,
    marketing,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  applyConsent(consent);
  logConsentToDb(analytics, marketing);
  return consent;
}

/** Accept all categories. */
export function acceptAll(): CookieConsent {
  return saveConsent(true, true);
}

/** Refuse all optional categories. */
export function refuseAll(): CookieConsent {
  return saveConsent(false, false);
}

// ── Script injection helpers ────────────────────────────────────────

let analyticsLoaded = false;
let marketingLoaded = false;

export const GA4_MEASUREMENT_ID = "G-W8TF25BQ5X";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Returns true if the visitor has consented to analytics. */
export function hasAnalyticsConsent(): boolean {
  const c = getConsent();
  return !!c?.analytics;
}

/** Sends a GA4 page_view (no-op if GA4 not yet loaded / no consent). */
export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: title ?? document.title,
  });
}

function loadAnalyticsScripts() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;

  // Google Analytics 4 (gtag.js) — loaded only after analytics consent
  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag as (...args: unknown[]) => void;
    gtag("js", new Date());
    // send_page_view: false — SPA route changes fire page_view manually
    gtag("config", GA4_MEASUREMENT_ID, { send_page_view: false });
    // Initial page_view for the entry route
    trackPageView(window.location.pathname + window.location.search);
  }

  // Ahrefs Web Analytics is loaded unconditionally from index.html (no cookie, no persistent identifier).
  // Microsoft Clarity is loaded unconditionally from index.html (id: xc2ym1vcsn).


}

function loadMarketingScripts() {
  if (marketingLoaded) return;
  marketingLoaded = true;
  // No marketing scripts present yet — placeholder for future pixels
}

/** Apply consent by loading or skipping scripts. */
export function applyConsent(consent: CookieConsent) {
  if (consent.analytics) loadAnalyticsScripts();
  if (consent.marketing) loadMarketingScripts();
}

/** On app start, apply stored consent if it exists. */
export function initConsent() {
  const consent = getConsent();
  if (consent) applyConsent(consent);
}
