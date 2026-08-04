import { describe, expect, it } from "vitest";
import {
  getPageGraph,
  getStructuredDataManifest,
  isNoIndexRoute,
  structuredDataRoutes,
} from "@/lib/structuredData/registry";
import { ROUTE_META } from "@/lib/structuredData/routeMeta";
import { ivarVariants, resolveVariantId } from "@/lib/structuredData/variants";

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
  it("uses canonical trailing-slash URLs, with fragments and params after the slash", () => {
    for (const path of indexable) {
      for (const url of collectUrls(getPageGraph(path))) {
        if (!url.startsWith("https://lirelia.fr")) continue;
        const [base] = url.split(/[#?]/);
        // Asset files (images, PDFs) are not canonical page URLs.
        if (/\.[a-z0-9]{2,4}$/i.test(base)) continue;
        expect(base.endsWith("/"), `${path} → ${url}`).toBe(true);
      }
    }
  });

  it("declares a customer-paid return policy", () => {
    const org = nodesOf(getPageGraph("/")).find(
      (n) => typeOf(n) === "OnlineStore" || typeOf(n) === "Organization",
    );
    const policy = org!.hasMerchantReturnPolicy as Node;
    expect(policy.returnFees).toBe("https://schema.org/ReturnFeesCustomerResponsibility");
    expect(policy.returnMethod).toBe("https://schema.org/ReturnByMail");
  });

  it("never invents an MPN", () => {
    for (const path of indexable) {
      expect(JSON.stringify(getPageGraph(path)), path).not.toContain('"mpn"');
    }
  });

  it("uses the real manufacturer brands", () => {
    const brandsOf = (path: string) => {
      const found: string[] = [];
      const walk = (n: unknown) => {
        if (Array.isArray(n)) return n.forEach(walk);
        if (n && typeof n === "object") {
          const node = n as Node;
          if (node["@type"] === "Brand") found.push(String(node.name));
          Object.values(node).forEach(walk);
        }
      };
      walk(nodesOf(getPageGraph(path)));
      return found;
    };
    expect(brandsOf("/boutique/teleagrandisseur-mezzo-focus")).toContain("Reinecker");
    expect(brandsOf("/boutique/ray-ban-meta")).toContain("Ray-Ban");
    expect(brandsOf("/boutique/horloge-gros-chiffres-frida")).toEqual(
      expect.arrayContaining(["LirElia"]),
    );
  });

  it("scopes bilan services to Palaiseau / Île-de-France", () => {
    const areaNames = (path: string) => {
      const service = nodesOf(getPageGraph(path)).find((n) => typeOf(n) === "Service");
      return (service!.areaServed as Node[]).map((a) => String(a.name));
    };
    for (const path of [
      "/bilans-bassevision/essentiel",
      "/bilans-bassevision/expert",
      "/bilans-bassevision/suivi",
    ]) {
      expect(areaNames(path), path).toEqual(["Palaiseau", "Île-de-France"]);
    }
    expect(areaNames("/bilans-bassevision/visites-domicile")).toEqual(["Île-de-France"]);
    expect(areaNames("/expert-basse-vision-visiopraticien")).toEqual([
      "Palaiseau",
      "Île-de-France",
    ]);
  });

  it("lists only published financial-aid child pages", () => {
    const list = nodesOf(getPageGraph("/aides-financieres-basse-vision")).find(
      (n) => typeOf(n) === "ItemList",
    );
    const urls = (list!.itemListElement as Node[]).map((i) => String(i.url));
    expect(urls).toEqual(["https://lirelia.fr/aides-financieres-basse-vision/financer-aide-visuelle/"]);
    for (const url of urls) expect(indexable).toContain(url.replace("https://lirelia.fr", "").replace(/\/$/, ""));
  });

  it("credits Thierry DUCROS as book author and never LirElia as publisher", () => {
    for (const path of ["/livre-dmla-votre-vie-ne-sarrete-pas", "/livre-aider-proche-dmla"]) {
      const nodes = nodesOf(getPageGraph(path));
      const book = nodes.find((n) => typeOf(n) === "Book");
      const person = nodes.find((n) => typeOf(n) === "Person");
      expect(book, path).toBeTruthy();
      expect(person!.name, path).toBe("Thierry DUCROS");
      expect((book!.author as Node)["@id"], path).toBe(person!["@id"]);
      const publisher = book!.publisher as Node | undefined;
      if (publisher) expect(publisher["@id"], path).toBe(person!["@id"]);
    }
  });

  it("builds working variant URLs (?couleur= after the trailing slash)", () => {
    for (const [path, ids] of [
      ["/boutique/horloge-gros-chiffres-frida", ["blanc", "rouge", "vert", "orange", "bleu"]],
      ["/boutique/reveil-gros-chiffres-ivar", ["blanche", "noire"]],
    ] as [string, string[]][]) {
      const group = nodesOf(getPageGraph(path)).find((n) => typeOf(n) === "ProductGroup");
      const urls = (group!.hasVariant as Node[]).map((v) => String(v.url));
      expect(urls, path).toEqual(ids.map((id) => `https://lirelia.fr${path}/?couleur=${id}`));
    }
  });
  it("completes the MerchantReturnPolicy with merchantReturnLink and no generic url", () => {
    const org = nodesOf(getPageGraph("/")).find(
      (n) => typeOf(n) === "OnlineStore" || typeOf(n) === "Organization",
    );
    const policy = org!.hasMerchantReturnPolicy as Node;
    expect(policy.merchantReturnLink).toBe("https://lirelia.fr/retours-remboursements/");
    expect(policy.url).toBeUndefined();
    expect(policy.returnPolicyCountry).toBe("FR");
    expect(policy.applicableCountry).toBe("FR");
    expect(policy.refundType).toBe("https://schema.org/FullRefund");
    expect(policy.returnLabelSource).toBe(
      "https://schema.org/ReturnLabelCustomerResponsibility",
    );
    expect(policy.merchantReturnDays).toBe(14);
  });

  it("uses LirElia Basse Vision as alternateName", () => {
    const org = nodesOf(getPageGraph("/")).find(
      (n) => typeOf(n) === "OnlineStore" || typeOf(n) === "Organization",
    );
    expect(org!.name).toBe("LirElia");
    expect(org!.legalName).toBe("HORIZON TD");
    expect(org!.alternateName).toBe("LirElia Basse Vision");
  });

  it("credits Thierry DUCROS as author AND publisher of the DMLA book", () => {
    const nodes = nodesOf(getPageGraph("/livre-dmla-votre-vie-ne-sarrete-pas"));
    const book = nodes.find((n) => typeOf(n) === "Book")!;
    const person = nodes.find((n) => typeOf(n) === "Person")!;
    expect(person["@id"]).toBe("https://lirelia.fr/#author-thierry-ducros");
    expect(person.name).toBe("Thierry DUCROS");
    expect((book.author as Node)["@id"]).toBe(person["@id"]);
    expect((book.publisher as Node)["@id"]).toBe(person["@id"]);
  });

  it("gives the upcoming caregiver book no publisher, offer, price or availability", () => {
    const nodes = nodesOf(getPageGraph("/livre-aider-proche-dmla"));
    const book = nodes.find((n) => typeOf(n) === "Book")!;
    expect((book.author as Node)["@id"]).toBe("https://lirelia.fr/#author-thierry-ducros");
    expect(book.publisher).toBeUndefined();
    expect(book.offers).toBeUndefined();
    expect(JSON.stringify(book)).not.toContain("priceCurrency");
    expect(JSON.stringify(book)).not.toContain("availability");
  });

  it("keeps the IVAR variant ids and supports blanc/noir aliases", () => {
    const group = nodesOf(getPageGraph("/boutique/reveil-gros-chiffres-ivar")).find(
      (n) => typeOf(n) === "ProductGroup",
    )!;
    const urls = (group.hasVariant as Node[]).map((v) => String(v.url));
    expect(urls).toEqual([
      "https://lirelia.fr/boutique/reveil-gros-chiffres-ivar/?couleur=blanche",
      "https://lirelia.fr/boutique/reveil-gros-chiffres-ivar/?couleur=noire",
    ]);
    expect(resolveVariantId(ivarVariants, "blanche")).toBe("blanche");
    expect(resolveVariantId(ivarVariants, "noire")).toBe("noire");
    expect(resolveVariantId(ivarVariants, "blanc")).toBe("blanche");
    expect(resolveVariantId(ivarVariants, "noir")).toBe("noire");
    expect(resolveVariantId(ivarVariants, "NOIR")).toBe("noire");
  });

  it("never resolves an unknown colour, so aria-current is never \"undefined\"", () => {
    for (const bad of [null, undefined, "", "rose", "undefined"]) {
      expect(resolveVariantId(ivarVariants, bad)).toBeNull();
    }
    expect(resolveVariantId(ivarVariants, "blanc")).not.toBe("undefined");
  });

  it("excludes the four unpublished financial-aid pages everywhere", () => {
    const future = [
      "/aides-financieres-basse-vision/dossier-mdph-pch",
      "/aides-financieres-basse-vision/aides-sociales-droits",
      "/aides-financieres-basse-vision/adapter-logement",
      "/aides-financieres-basse-vision/travail-etudes",
    ];
    const manifest = getStructuredDataManifest();
    const list = nodesOf(getPageGraph("/aides-financieres-basse-vision")).find(
      (n) => typeOf(n) === "ItemList",
    )!;
    const urls = (list.itemListElement as Node[]).map((i) => String(i.url));
    expect(list.numberOfItems).toBe(1);
    expect(urls.length).toBe(1);
    for (const route of future) {
      expect(manifest[route], route).toBeUndefined();
      expect(indexable, route).not.toContain(route);
      expect(urls.join(" "), route).not.toContain(route);
    }
  });

  it("survives a JSON.stringify → JSON.parse round trip on every route", () => {
    for (const path of indexable) {
      const graph = getPageGraph(path);
      expect(JSON.parse(JSON.stringify(graph)), path).toEqual(graph);
    }
  });
});
