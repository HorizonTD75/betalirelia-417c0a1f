import { describe, expect, it } from "vitest";
import {
  getPageGraph,
  getStructuredDataManifest,
  isNoIndexRoute,
  structuredDataRoutes,
} from "@/lib/structuredData/registry";
import { ROUTE_META } from "@/lib/structuredData/routeMeta";

type Node = Record<string, unknown>;

const nodesOf = (g: unknown): Node[] => (g as { "@graph": Node[] })["@graph"];
const typeOf = (n: Node) => n["@type"] as string;
const indexable = Object.keys(ROUTE_META).filter((p) => !ROUTE_META[p].noindex);
const noindex = Object.keys(ROUTE_META).filter((p) => ROUTE_META[p].noindex);

const collectUrls = (value: unknown, out: string[] = []): string[] => {
  if (typeof value === "string") {
    if (/^https?:\/\//.test(value)) out.push(value);
  } else if (Array.isArray(value)) {
    value.forEach((v) => collectUrls(v, out));
  } else if (value && typeof value === "object") {
    Object.values(value as Node).forEach((v) => collectUrls(v, out));
  }
  return out;
};

describe("structured data registry", () => {
  it("emits exactly one @graph per indexable route", () => {
    for (const path of indexable) {
      const g = getPageGraph(path) as Node | null;
      expect(g, path).toBeTruthy();
      expect(g!["@context"], path).toBe("https://schema.org");
      expect(Array.isArray(g!["@graph"]), path).toBe(true);
      expect(nodesOf(g).length, path).toBeGreaterThan(0);
    }
  });

  it("emits nothing on noindex routes", () => {
    for (const path of noindex) {
      expect(getPageGraph(path), path).toBeNull();
      expect(isNoIndexRoute(path), path).toBe(true);
    }
    expect(getPageGraph("/route-inexistante")).toBeNull();
  });

  it("is deterministic and JSON-serialisable", () => {
    for (const path of indexable) {
      const a = JSON.stringify(getPageGraph(path));
      const b = JSON.stringify(getPageGraph(path));
      expect(a, path).toBe(b);
      expect(a, path).not.toContain("undefined");
    }
  });

  it("resolves every @id reference inside its own page graph", () => {
    for (const path of indexable) {
      const nodes = nodesOf(getPageGraph(path));
      const declared = new Set<string>();
      const walkDeclared = (n: unknown) => {
        if (Array.isArray(n)) return n.forEach(walkDeclared);
        if (n && typeof n === "object") {
          const node = n as Node;
          if (node["@type"] && typeof node["@id"] === "string") declared.add(node["@id"] as string);
          Object.values(node).forEach(walkDeclared);
        }
      };
      nodes.forEach(walkDeclared);

      const refs: string[] = [];
      const walkRefs = (n: unknown) => {
        if (Array.isArray(n)) return n.forEach(walkRefs);
        if (n && typeof n === "object") {
          const node = n as Node;
          if (!node["@type"] && typeof node["@id"] === "string") refs.push(node["@id"] as string);
          Object.values(node).forEach(walkRefs);
        }
      };
      nodes.forEach(walkRefs);

      for (const ref of refs) expect(declared.has(ref), `${path} → ${ref}`).toBe(true);
    }
  });

  it("always defines Organization and WebSite, exactly once", () => {
    for (const path of indexable) {
      const types = nodesOf(getPageGraph(path)).map(typeOf);
      expect(types.filter((t) => t === "OnlineStore" || t === "Organization").length, path).toBe(1);
      expect(types.filter((t) => t === "WebSite").length, path).toBe(1);
    }
  });

  it("uses absolute HTTPS URLs everywhere", () => {
    for (const path of indexable) {
      for (const url of collectUrls(getPageGraph(path))) {
        expect(url.startsWith("https://"), `${path} → ${url}`).toBe(true);
      }
    }
  });

  it("keeps breadcrumb positions sequential from 1", () => {
    for (const path of indexable) {
      const crumb = nodesOf(getPageGraph(path)).find((n) => typeOf(n) === "BreadcrumbList");
      if (!crumb) continue;
      const items = crumb.itemListElement as Node[];
      items.forEach((item, i) => expect(item.position, `${path}#${i}`).toBe(i + 1));
      expect(items[0].name, path).toBe("Accueil");
    }
  });

  it("prices are decimal strings in EUR", () => {
    for (const path of indexable) {
      const offers: Node[] = [];
      const walk = (n: unknown) => {
        if (Array.isArray(n)) return n.forEach(walk);
        if (n && typeof n === "object") {
          const node = n as Node;
          if (node["@type"] === "Offer") offers.push(node);
          Object.values(node).forEach(walk);
        }
      };
      walk(nodesOf(getPageGraph(path)));
      for (const offer of offers) {
        expect(offer.priceCurrency, path).toBe("EUR");
        expect(String(offer.price), path).toMatch(/^\d+\.\d{2}$/);
        expect(String(offer.availability), path).toMatch(/^https:\/\/schema\.org\//);
      }
    }
  });

  it("never puts an Offer on informational or starting-price products", () => {
    const noOffer = ["/boutique/ray-ban-meta", "/boutique/teleagrandisseur-mezzo-focus"];
    for (const path of noOffer) {
      const json = JSON.stringify(getPageGraph(path));
      expect(json, path).not.toContain('"Offer"');
      expect(json, path).not.toContain("priceCurrency");
    }
  });

  it("describes FRIDA and IVAR as ProductGroup with variant offers", () => {
    for (const path of [
      "/boutique/horloge-gros-chiffres-frida",
      "/boutique/reveil-gros-chiffres-ivar",
    ]) {
      const group = nodesOf(getPageGraph(path)).find((n) => typeOf(n) === "ProductGroup");
      expect(group, path).toBeTruthy();
      const variants = group!.hasVariant as Node[];
      expect(variants.length, path).toBeGreaterThan(1);
      for (const variant of variants) {
        expect(String(variant.sku), path).toMatch(/^LIR-/);
        expect(String(variant.url), path).toContain("?couleur=");
        expect((variant.offers as Node).availability, path).toBeTruthy();
      }
    }
  });

  it("marks the FRIDA white variant as out of stock", () => {
    const group = nodesOf(getPageGraph("/boutique/horloge-gros-chiffres-frida")).find(
      (n) => typeOf(n) === "ProductGroup",
    );
    const white = (group!.hasVariant as Node[]).find((v) => v.sku === "LIR-FRIDA-BLANC");
    expect((white!.offers as Node).availability).toBe("https://schema.org/OutOfStock");
  });

  it("uses MedicalWebPage + MedicalCondition on disease pages", () => {
    const diseases = indexable.filter(
      (p) => p.startsWith("/maladies-yeux/") && p !== "/maladies-yeux/maladies-hereditaires",
    );
    expect(diseases.length).toBeGreaterThan(5);
    for (const path of diseases) {
      const types = nodesOf(getPageGraph(path)).map(typeOf);
      expect(types, path).toContain("MedicalWebPage");
      expect(types, path).toContain("MedicalCondition");
    }
  });

  it("uses Service nodes on the bilan pages", () => {
    for (const path of [
      "/bilans-bassevision/essentiel",
      "/bilans-bassevision/expert",
      "/bilans-bassevision/suivi",
      "/bilans-bassevision/visites-domicile",
    ]) {
      const service = nodesOf(getPageGraph(path)).find((n) => typeOf(n) === "Service");
      expect(service, path).toBeTruthy();
    }
    const domicile = nodesOf(getPageGraph("/bilans-bassevision/visites-domicile")).find(
      (n) => typeOf(n) === "Service",
    );
    expect(domicile!.offers, "home visits have no fixed price").toBeUndefined();
  });

  it("exposes a manifest usable without React or a DOM", () => {
    const manifest = getStructuredDataManifest();
    expect(Object.keys(manifest).length).toBe(Object.keys(ROUTE_META).length);
    for (const [route, entry] of Object.entries(manifest)) {
      if (entry.indexable) expect(entry.graph, route).toBeTruthy();
      else expect(entry.graph, route).toBeNull();
    }
    expect(structuredDataRoutes().length).toBe(Object.keys(ROUTE_META).length);
  });
});
