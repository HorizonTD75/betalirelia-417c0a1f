import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { ROUTE_META } from "@/lib/structuredData/routeMeta";
import { createHeadMetadata, applyHeadMetadata } from "@/lib/headMetadata";
import { renderRouteHead } from "../../vite-plugin-seo-prerender";
import { CHOICE_ARTICLES } from "@/content/choix-loupes/articles";
import { splitChoiceSections } from "@/content/choix-loupes/presentation";

describe("V5.2 publication safeguards", () => {
  it("never grants indexing to any of the seven guides", () => {
    for (const article of CHOICE_ARTICLES) {
      const m = ROUTE_META[article.path.replace(/\/$/, "")];
      expect(createHeadMetadata(article.path, { t: m.title, d: m.description, noindex: m.noindex }).noindex).toBe(true);
    }
  });
  it("retains complete FAQ answers while extracting their existing questions", () => {
    for (const article of CHOICE_ARTICLES) {
      const faq = splitChoiceSections(article.body).find((s) => s.faq);
      expect(faq?.questions.length).toBeGreaterThan(0);
      const original = faq?.content.match(/^### .+/gm) ?? [];
      expect(faq?.questions.map((q) => `### ${q.q}`)).toEqual(original);
      for (const question of faq?.questions ?? []) expect(faq?.content.includes(question.a)).toBe(true);
    }
  });
  it("prepares an existing local share asset for every registered route", () => {
    for (const [path, meta] of Object.entries(ROUTE_META)) {
      const head = createHeadMetadata(path, { t: meta.title, d: meta.description, img: meta.image });
      expect(head.ogImage).toBeDefined();
      expect(existsSync(`public${new URL(head.ogImage ?? "").pathname}`)).toBe(true);
    }
  });
  it("normalizes display branding without altering the production domain", () => {
    for (const [path, meta] of Object.entries(ROUTE_META)) {
      expect(meta.title).not.toMatch(/LirElia|Lirelia/);
      expect(meta.description).not.toMatch(/LirElia|Lirelia/);
      const head = createHeadMetadata(path, { t: meta.title, d: meta.description });
      expect(head.canonical).toBe(`https://lirelia.fr${path === "/" ? "/" : `${path}/`}`);
    }
  });
});

describe("Shared static/runtime head semantics", () => {
  it("replaces rather than duplicates SEO tags for every static route", () => {
    const template = readFileSync("index.html", "utf8");
    for (const [path, meta] of Object.entries(ROUTE_META)) {
      const head = createHeadMetadata(path, { t: meta.title, d: meta.description, noindex: meta.noindex, img: meta.image, og: meta.ogType });
      const html = renderRouteHead(template, head);
      const parsed = new DOMParser().parseFromString(html, "text/html");
      expect(parsed.querySelectorAll("title")).toHaveLength(1);
      expect(parsed.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
      expect(parsed.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(head.canonical);
      expect(parsed.querySelector('meta[property="og:site_name"]')?.getAttribute("content")).toBe("LIRELIA");
      expect(parsed.querySelector('meta[name="twitter:site"]')).toBeNull();
    }
  });
  it("updates metadata and robots on navigation from guide to product", () => {
    document.head.innerHTML = '<title>old</title><title>duplicate</title><meta name="description" content="old"><meta name="description" content="duplicate">';
    applyHeadMetadata(createHeadMetadata("/choisir-loupe-lecture", { t: "Guide | LIRELIA", d: "Guide", noindex: true }));
    expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, follow");
    applyHeadMetadata(createHeadMetadata("/boutique/loupe-amelie", { t: "Amélie | LIRELIA", d: "Amélie", og: "product" }));
    expect(document.title).toBe("Amélie | LIRELIA");
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.querySelectorAll("title")).toHaveLength(1);
    expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("index, follow");
  });
});