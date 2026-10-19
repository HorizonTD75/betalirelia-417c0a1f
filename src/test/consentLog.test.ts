import { describe, it, expect, beforeEach } from "vitest";
import { buildEvent, newId, cleanUtm, referrerDomain, getConsentId } from "@/lib/consentLog";

describe("registre de consentement", () => {
  beforeEach(() => localStorage.clear());

  it("identifiants : 8 à 100 caractères, lettres/chiffres/-/_", () => {
    for (const p of ["evt", "imp", "cons"] as const) {
      expect(newId(p)).toMatch(/^[A-Za-z0-9_-]{8,100}$/);
    }
    expect(newId("evt")).not.toBe(newId("evt"));
  });

  it("consent_id stable entre deux événements", () => {
    expect(getConsentId()).toBe(getConsentId());
  });

  it("événement decision : format attendu par le relais, sans IP", () => {
    const e = buildEvent("decision", "imp_abcdefgh", false, false, "refuse", "premier_choix");
    expect(e.banner_version).toBe("v2.0");
    expect(e.decision).toBe("refuse");
    expect(e.action).toBe("premier_choix");
    expect(typeof e.statistics).toBe("boolean");
    expect(typeof e.marketing).toBe("boolean");
    expect(e.impression_id).toBe("imp_abcdefgh");
    expect("ip" in e).toBe(false);
    expect(e.client_time).toMatch(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d[+-]\d\d:\d\d$/);
  });

  it("impression : decision et action vides", () => {
    const e = buildEvent("impression", "imp_abcdefgh", false, false);
    expect(e.decision).toBe("");
    expect(e.action).toBe("");
  });

  it("referrer réduit au domaine, UTM personnel rejeté", () => {
    expect(referrerDomain("https://www.google.com/search?q=x")).toBe("google.com");
    expect(cleanUtm("jean@mail.fr")).toBe("");
    expect(cleanUtm("amelie")).toBe("amelie");
  });
});
