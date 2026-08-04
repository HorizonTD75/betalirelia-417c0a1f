/**
 * Central JSON-LD registry — THE single source of truth for every structured
 * data node emitted by the site.
 *
 * Design rules (do not break):
 *  • ONE @graph per route, built here (never in a page component);
 *  • pure and deterministic: no DOM, no window, no React, no useLocation;
 *  • JSON.stringify-safe output (no undefined, no class instances);
 *  • data comes from the same modules the visible pages consume
 *    (products.ts, variants.ts, faq.ts, lists.ts, breadcrumbs.ts);
 *  • noindex routes return null — no JSON-LD at all;
 *  • BreadcrumbList only where a breadcrumb is really visible;
 *  • no invented data (no GTIN/MPN/SKU on simple products, no reviews,
 *    no authors, no dates, no social profiles, no fake offers).
 *
 * External tooling (static HTML converter, audits) must consume
 * `getStructuredDataManifest()` / `structuredDataRoutes` instead of
 * re-implementing any of these rules.
 */

import {
  AVAILABILITY_URL,
  BreadcrumbItem,
  Node,
  absoluteAsset,
  absoluteUrl,
  bookNode,
  breadcrumbNode,
  faqNode,
  graph,
  itemListNode,
  medicalConditionNode,
  normalizePath,
  normalizePrice,
  offerNode,
  organizationRef,
  pageNode,
  productNode,
  prune,
  serviceNode,
  websiteRef,
} from "./entities";
import { ROUTE_META } from "./routeMeta";
import { CATALOG_PRODUCTS, CatalogProduct, getCatalogProduct, productStatus } from "./products";
import { getVisibleBreadcrumb } from "./breadcrumbs";
import { getItemList } from "./lists";
import { getFaq } from "./faq";
import { getBook } from "./books";
import { organizationNode, websiteNode } from "./organization";

const CATALOGUE_PATH = "/catalogue-aides-basse-vision";

/** Bilans: fixed prices mirror the visible pages. Home visits have none. */
const BILAN_SERVICES: Record<
  string,
  { price?: string; serviceType: string; areaServed?: string }
> = {
  "/bilans-bassevision/essentiel": { price: "75", serviceType: "Bilan basse vision" },
  "/bilans-bassevision/expert": { price: "135", serviceType: "Bilan basse vision" },
  "/bilans-bassevision/suivi": { price: "215", serviceType: "Accompagnement basse vision" },
  // Home visits: the travel supplement depends on distance → no fixed offer.
  "/bilans-bassevision/visites-domicile": {
    serviceType: "Bilan basse vision à domicile",
    areaServed: "Île-de-France",
  },
};

/** Products whose visible price is a "à partir de" starting price → no Offer. */
const STARTING_PRICE_PRODUCTS = new Set(["/boutique/teleagrandisseur-mezzo-focus"]);

/** Informational product pages: LirElia does not sell them → never an Offer. */
const INFORMATIONAL_PRODUCTS = new Set(["/boutique/ray-ban-meta"]);

/** Stable variant identifiers required by the catalogue (SKU convention). */
const VARIANT_SKU: Record<string, string> = {
  "/boutique/horloge-gros-chiffres-frida|blanc": "LIR-FRIDA-BLANC",
  "/boutique/horloge-gros-chiffres-frida|rouge": "LIR-FRIDA-ROUGE",
  "/boutique/horloge-gros-chiffres-frida|vert": "LIR-FRIDA-VERT",
  "/boutique/horloge-gros-chiffres-frida|orange": "LIR-FRIDA-ORANGE",
  "/boutique/horloge-gros-chiffres-frida|bleu": "LIR-FRIDA-BLEU",
  "/boutique/reveil-gros-chiffres-ivar|blanche": "LIR-IVAR-BLANC",
  "/boutique/reveil-gros-chiffres-ivar|noire": "LIR-IVAR-NOIR",
};

const CONTACT_PAGES = new Set(["/contact-conseil", "/rdv-bilan"]);
const ABOUT_PAGES = new Set(["/qui-sommes-nous"]);
const VISIOPRACTICIAN_PATH = "/expert-basse-vision-visiopraticien";

export const isNoIndexRoute = (pathname: string): boolean =>
  ROUTE_META[normalizePath(pathname)]?.noindex === true;

/**
 * Assemble the final graph: the sitewide entities are always emitted first so
 * every `@id` reference (#organization, #website) resolves on every page.
 */
const assemble = (nodes: Node[]): Node =>
  prune(graph([organizationNode(), websiteNode(), ...nodes]));

/** Breadcrumb node when — and only when — a visible trail exists. */
const breadcrumbFor = (path: string): Node | null => {
  const items: BreadcrumbItem[] | undefined = getVisibleBreadcrumb(path);
  return items ? breadcrumbNode(path, items) : null;
};

const productGroupNode = (product: CatalogProduct): Node => {
  const url = absoluteUrl(product.path);
  const variants = product.variants ?? [];

  return {
    "@type": "ProductGroup",
    "@id": `${url}#product-group`,
    name: product.name,
    description: product.description,
    image: [absoluteAsset(product.image)],
    brand: { "@type": "Brand", name: "LirElia" },
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    productGroupID: product.slug,
    variesBy: "https://schema.org/color",
    hasVariant: variants.map((variant) => {
      const variantUrl = `${url}?couleur=${variant.id}`;
      const sku = VARIANT_SKU[`${product.path}|${variant.id}`];
      return {
        "@type": "Product",
        "@id": `${url}#variant-${variant.id}`,
        name: variant.label,
        description: variant.description ?? product.description,
        image: [absoluteAsset(variant.image ?? product.image)],
        ...(sku ? { sku, mpn: sku } : {}),
        color: variant.label,
        brand: { "@type": "Brand", name: "LirElia" },
        url: variantUrl,
        isVariantOf: { "@id": `${url}#product-group` },
        offers: {
          "@type": "Offer",
          url: variantUrl,
          priceCurrency: "EUR",
          price: normalizePrice(variant.price ?? product.price),
          availability: AVAILABILITY_URL[variant.status] ?? "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: organizationRef,
        },
      };
    }),
  };
};

/** Simple product page (WebPage + Product [+ Offer] + BreadcrumbList). */
const productGraph = (product: CatalogProduct, path: string): Node => {
  const meta = ROUTE_META[path];
  const url = absoluteUrl(path);
  const hasBreadcrumb = Boolean(getVisibleBreadcrumb(path));
  const anchor = product.variants ? "#product-group" : "#product";

  const page = pageNode({
    path,
    type: "ItemPage",
    name: meta?.title ?? product.name,
    description: meta?.description ?? product.description,
    hasBreadcrumb,
    extra: {
      primaryImageOfPage: { "@type": "ImageObject", url: absoluteAsset(product.image) },
      mainEntity: { "@id": `${url}${anchor}` },
    },
  });

  const item = product.variants
    ? productGroupNode(product)
    : STARTING_PRICE_PRODUCTS.has(path)
      ? // "à partir de" price: a single Offer would misrepresent the
        // configurations, so the Product carries no offer at all.
        productNode({
          path,
          name: product.name,
          description: product.description,
          image: product.image,
          price: product.price,
          status: productStatus(product),
          withOffer: false,
        })
      : productNode({
          path,
          name: product.name,
          description: product.description,
          image: product.image,
          price: product.price,
          status: productStatus(product),
        });

  const nodes: Node[] = [page, item];
  const crumb = breadcrumbFor(path);
  if (crumb) nodes.push(crumb);
  const faq = getFaq(path);
  if (faq) nodes.push(faqNode(path, faq));
  return assemble(nodes);
};

/** Informational product page: `about` a Product, never an Offer. */
const informationalProductGraph = (path: string): Node => {
  const meta = ROUTE_META[path];
  const product = getCatalogProduct(path);
  const url = absoluteUrl(path);
  const hasBreadcrumb = Boolean(getVisibleBreadcrumb(path));

  const about: Node = {
    "@type": "Product",
    "@id": `${url}#product`,
    name: product?.name ?? meta.short,
    description: product?.description ?? meta.description,
    ...(product ? { image: [absoluteAsset(product.image)] } : {}),
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };

  const nodes: Node[] = [
    pageNode({
      path,
      name: meta.title,
      description: meta.description,
      hasBreadcrumb,
      extra: { about: { "@id": `${url}#product` } },
    }),
    about,
  ];
  const crumb = breadcrumbFor(path);
  if (crumb) nodes.push(crumb);
  return assemble(nodes);
};

/** The single @graph for a route, or null when the route must not be indexed. */
export const getPageGraph = (pathname: string): Node | null => {
  const path = normalizePath(pathname);
  const meta = ROUTE_META[path];

  if (!meta || meta.noindex) return null;

  const leaf = meta.short;
  const crumb = breadcrumbFor(path);
  const list = getItemList(path);
  const faq = getFaq(path);

  const withExtras = (nodes: Node[]): Node => {
    const all = [...nodes];
    if (crumb) all.push(crumb);
    if (faq) all.push(faqNode(path, faq));
    return assemble(all);
  };

  // ---- Home page: the sitewide entities live here -------------------------
  if (path === "/") {
    return assemble([
      pageNode({
        path,
        name: meta.title,
        description: meta.description,
        hasBreadcrumb: false,
        extra: { about: organizationRef },
      }),
    ]);
  }

  // ---- Products ----------------------------------------------------------
  if (INFORMATIONAL_PRODUCTS.has(path)) return informationalProductGraph(path);
  const product = getCatalogProduct(path);
  if (product) return productGraph(product, path);

  // ---- Books -------------------------------------------------------------
  const book = getBook(path);
  if (book) {
    return withExtras([
      pageNode({
        path,
        name: meta.title,
        description: meta.description,
        hasBreadcrumb: Boolean(crumb),
        extra: { mainEntity: { "@id": `${absoluteUrl(path)}#book` } },
      }),
      bookNode(book),
    ]);
  }

  // ---- Bilans (services) -------------------------------------------------
  const bilan = BILAN_SERVICES[path];
  if (bilan) {
    return withExtras([
      pageNode({
        path,
        name: meta.title,
        description: meta.description,
        hasBreadcrumb: Boolean(crumb),
        extra: { mainEntity: { "@id": `${absoluteUrl(path)}#service` } },
      }),
      serviceNode({
        path,
        name: leaf,
        description: meta.description,
        price: bilan.price,
        serviceType: bilan.serviceType,
        areaServed: bilan.areaServed,
      }),
    ]);
  }

  // ---- Visiopraticien: a described service, no named Person --------------
  if (path === VISIOPRACTICIAN_PATH) {
    return withExtras([
      pageNode({
        path,
        name: meta.title,
        description: meta.description,
        hasBreadcrumb: Boolean(crumb),
        extra: { mainEntity: { "@id": `${absoluteUrl(path)}#service` } },
      }),
      serviceNode({
        path,
        name: "Accompagnement par un visiopraticien expert basse vision",
        description: meta.description,
        serviceType: "Accompagnement basse vision",
      }),
    ]);
  }

  // ---- Medical leaf pages ------------------------------------------------
  const isDiseaseLeaf =
    path.startsWith("/maladies-yeux/") && path !== "/maladies-yeux/maladies-hereditaires";
  if (isDiseaseLeaf) {
    return withExtras([
      pageNode({
        path,
        type: "MedicalWebPage",
        name: meta.title,
        description: meta.description,
        hasBreadcrumb: Boolean(crumb),
        extra: {
          about: { "@id": `${absoluteUrl(path)}#condition` },
          audience: { "@type": "MedicalAudience", audienceType: "Patient" },
        },
      }),
      medicalConditionNode(path, leaf, meta.description),
    ]);
  }

  // ---- Listings (catalogue, categories, hubs) -----------------------------
  if (list) {
    return withExtras([
      pageNode({
        path,
        type: "CollectionPage",
        name: meta.title,
        description: meta.description,
        hasBreadcrumb: Boolean(crumb),
        extra: { mainEntity: { "@id": `${absoluteUrl(path)}#itemlist` } },
      }),
      itemListNode(path, list, { name: leaf }),
    ]);
  }

  // ---- Institutional pages ------------------------------------------------
  const type = ABOUT_PAGES.has(path)
    ? "AboutPage"
    : CONTACT_PAGES.has(path)
      ? "ContactPage"
      : path === CATALOGUE_PATH || path.startsWith(`${CATALOGUE_PATH}/`)
        ? "CollectionPage"
        : "WebPage";

  return withExtras([
    pageNode({
      path,
      type,
      name: meta.title,
      description: meta.description,
      hasBreadcrumb: Boolean(crumb),
      ...(ABOUT_PAGES.has(path) ? { extra: { about: organizationRef } } : {}),
      ...(CONTACT_PAGES.has(path)
        ? {
            extra: {
              about: organizationRef,
              mainEntity: {
                "@type": "ContactPoint",
                telephone: "+33768474235",
                email: "contact@lirelia.fr",
                contactType: "customer service",
                availableLanguage: "French",
                areaServed: "FR",
              },
            },
          }
        : {}),
    }),
  ]);
};

/* ------------------------------------------------------------------------- */
/* Exports for tooling that runs WITHOUT React (static HTML converter, audit) */
/* ------------------------------------------------------------------------- */

export interface StructuredDataEntry {
  indexable: boolean;
  graph: Record<string, unknown> | null;
}

export type StructuredDataManifest = Record<string, StructuredDataEntry>;

/** Every known route with its indexability and its complete graph. */
export const getStructuredDataManifest = (): StructuredDataManifest => {
  const manifest: StructuredDataManifest = {};
  for (const path of Object.keys(ROUTE_META)) {
    const indexable = !ROUTE_META[path].noindex;
    manifest[path] = {
      indexable,
      graph: indexable ? (getPageGraph(path) as Record<string, unknown> | null) : null,
    };
  }
  return manifest;
};

/** Same data, ready to iterate. */
export const structuredDataRoutes = (): Array<{ route: string } & StructuredDataEntry> =>
  Object.entries(getStructuredDataManifest()).map(([route, entry]) => ({ route, ...entry }));

/** Exposed for the audit script. */
export const ALL_GRAPH_ROUTES = Object.keys(ROUTE_META).filter((p) => !ROUTE_META[p].noindex);
export const ALL_PRODUCT_PATHS = CATALOG_PRODUCTS.map((p) => p.path);
export { websiteRef, offerNode };
