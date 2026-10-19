import { describe, it, expect, beforeEach } from "vitest";
import { isConsentValid, getConsent, saveConsent } from "@/lib/cookieConsent";

const now = new Date("2026-10-19T12:00:00Z");

describe("durée du consentement : 12 mois", () => {
  beforeEach(() => localStorage.clear());

  it("accord de moins de 12 mois : conservé", () => {
    expect(isConsentValid({ date: "2025-11-01T00:00:00Z" }, now)).toBe(true);
  });
  it("choix de plus de 12 mois : nouvelle demande", () => {
    expect(isConsentValid({ date: "2025-10-18T12:00:00Z" }, now)).toBe(false);
  });
  it("sans date : nouvelle demande", () => {
    expect(isConsentValid({}, now)).toBe(false);
  });
  it("refus récent respecté, choix expiré ignoré sans être effacé", () => {
    localStorage.setItem("lirelia_cookie_consent_v2", JSON.stringify({ version: 2, date: new Date().toISOString(), necessary: true, analytics: false, marketing: false }));
    expect(getConsent()?.analytics).toBe(false);
    localStorage.setItem("lirelia_cookie_consent_v2", JSON.stringify({ version: 2, date: "2020-01-01T00:00:00Z", necessary: true, analytics: true, marketing: true }));
    expect(getConsent()).toBeNull();
    expect(localStorage.getItem("lirelia_cookie_consent_v2")).not.toBeNull();
  });
  it("modification volontaire : nouvelle date", () => {
    const c = saveConsent(true, false);
    expect(Date.now() - new Date(c.date).getTime()).toBeLessThan(5000);
  });
});
