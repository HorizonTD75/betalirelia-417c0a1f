/**
 * Cookie Consent Manager for LirElia
 *
 * Consent Mode v2 : GA4 (G-CSJL8WM5WM) et Microsoft Clarity sont chargés dès
 * l'arrivée depuis index.html avec un consentement par défaut refusé.
 * Ce module transmet à ces outils les mises à jour de consentement du visiteur.
 */

import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "lirelia_cookie_consent_v2";
const LEGACY_STORAGE_KEY = "lirelia_cookie_consent_v1";
const VISITOR_ID_KEY = "lirelia_visitor_id";
const BANNER_VERSION = 2;

export const GA4_MEASUREMENT_ID = "G-CSJL8WM5WM";

export interface CookieConsent {
  version: number;
  date: string;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

// ── Persisted state ─────────────────────────────────────────────────

function getOrCreateVisitorId(): string {
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

/** Read stored consent, migrating the v1 record if present. */
export function getConsent(): CookieConsent | null {
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    // Silent migration to v2 key on next save
    return parsed;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent(): boolean {
  return !!getConsent()?.analytics;
}

// ── DB logging (fire-and-forget) ────────────────────────────────────

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

// ── Consent Mode wiring ─────────────────────────────────────────────

function updateGtagConsent(analytics: boolean) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
  });
}

function updateClarityConsent(analytics: boolean) {
  if (typeof window === "undefined" || typeof window.clarity !== "function") return;
  try {
    window.clarity("consent", analytics);
  } catch {
    /* no-op */
  }
}

/** Purge known GA4 / Clarity cookies from the current domain when refused. */
function clearAnalyticsCookies() {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const rootDomain = host.split(".").slice(-2).join(".");
  const domains = [host, `.${host}`, `.${rootDomain}`];
  const kill = (name: string) => {
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };
  const analyticsPrefixes = ["_ga", "_gid", "_gat", "_clck", "_clsk", "CLID", "MUID"];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0]?.trim();
    if (!name) return;
    if (analyticsPrefixes.some((p) => name.startsWith(p))) kill(name);
  });
}

/** Track a SPA page_view (GA4 drops it when analytics_storage is denied). */
export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: title ?? document.title,
  });
}

// ── Public API ──────────────────────────────────────────────────────

export function saveConsent(analytics: boolean, marketing: boolean): CookieConsent {
  const consent: CookieConsent = {
    version: BANNER_VERSION,
    date: new Date().toISOString(),
    necessary: true,
    analytics,
    marketing,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  // Remove legacy key after successful save
  localStorage.removeItem(LEGACY_STORAGE_KEY);
  applyConsent(consent);
  logConsentToDb(analytics, marketing);
  return consent;
}

export function acceptAll(): CookieConsent {
  return saveConsent(true, true);
}

export function refuseAll(): CookieConsent {
  return saveConsent(false, false);
}

/** Apply the consent state to GA4, Clarity, and cookie storage. */
export function applyConsent(consent: CookieConsent) {
  updateGtagConsent(consent.analytics);
  updateClarityConsent(consent.analytics);
  if (!consent.analytics) clearAnalyticsCookies();
}

/** Called once on app start. */
export function initConsent() {
  const consent = getConsent();
  if (consent) applyConsent(consent);
  // Sinon, on laisse les valeurs "denied" du Consent Mode par défaut.
}
