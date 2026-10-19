/**
 * Cookie Consent Manager for LirElia — bandeau v2.0
 *
 * Aucun traceur optionnel n'est chargé avant consentement : le chargeur
 * « LIRELIA CONSENT LOADER » d'index.html expose lireliaLoadStatistics()
 * (GA4 + Clarity) et lireliaLoadMarketing() (Meta Pixel, HubSpot, Albacross).
 * Ce module enregistre le choix, appelle ces chargeurs, et coupe ce qui
 * peut l'être lors d'un refus ou d'un retrait.
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
    lireliaLoadStatistics?: () => void;
    lireliaLoadMarketing?: () => void;
  }
}

function getOrCreateVisitorId(): string {
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

/** Choix enregistré (clé v2, ou ancienne clé v1 encore valable). */
export function getConsent(): CookieConsent | null {
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (typeof parsed !== "object" || parsed === null) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics === true;
}

export function hasMarketingConsent(): boolean {
  return getConsent()?.marketing === true;
}

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
      page_url: window.location.origin + window.location.pathname,
      user_agent: navigator.userAgent?.slice(0, 512) || null,
    })
    .then(({ error }) => {
      if (error) console.warn("Cookie consent log failed:", error.message);
    });
}

// ── Coupure des traceurs ────────────────────────────────────────────

function denyStatistics() {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }
  try {
    window.clarity?.("consent", false);
  } catch {
    /* no-op */
  }
}

function denyMarketing() {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
  try {
    window.fbq?.("consent", "revoke");
  } catch {
    /* no-op */
  }
}

const STAT_PREFIXES = ["_ga", "_gid", "_gat", "_clck", "_clsk", "CLID", "MUID", "ANONCHK", "SM"];
const MARKETING_PREFIXES = ["_fbp", "_fbc", "hubspotutk", "__hstc", "__hssc", "__hssrc", "__hs", "messagesUtk", "_nQc", "albacross"];

/** Supprime les cookies optionnels accessibles en JavaScript sur ce domaine. */
function clearCookies(prefixes: string[]) {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const rootDomain = host.split(".").slice(-2).join(".");
  const domains = [host, `.${host}`, `.${rootDomain}`];
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0]?.trim();
    if (!name || !prefixes.some((p) => name.startsWith(p))) return;
    for (const d of domains) document.cookie = `${name}=; ${expired}; domain=${d}`;
    document.cookie = `${name}=; ${expired}`;
  });
}

/** SPA page_view GA4 (sans effet tant que GA4 n'est pas autorisé/chargé). */
export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!hasAnalyticsConsent()) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: title ?? document.title,
  });
}

/** Applique un choix : charge les catégories autorisées, coupe les autres. */
export function applyConsent(consent: CookieConsent) {
  if (consent.analytics) window.lireliaLoadStatistics?.();
  else {
    denyStatistics();
    clearCookies(STAT_PREFIXES);
  }
  if (consent.marketing) window.lireliaLoadMarketing?.();
  else {
    denyMarketing();
    clearCookies(MARKETING_PREFIXES);
  }
}

export function saveConsent(analytics: boolean, marketing: boolean): CookieConsent {
  const consent: CookieConsent = {
    version: BANNER_VERSION,
    date: new Date().toISOString(),
    necessary: true,
    analytics,
    marketing,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch {
    /* stockage indisponible : le choix vaut pour la page en cours */
  }
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

/** Au démarrage : le chargeur d'index.html a déjà chargé ce qui est autorisé. */
export function initConsent() {
  const consent = getConsent();
  if (consent) applyConsent(consent);
}
