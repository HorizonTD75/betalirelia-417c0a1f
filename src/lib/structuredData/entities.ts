/**
 * Structured-data primitives.
 *
 * Rules enforced here:
 *  • one single @graph per page (see registry.ts);
 *  • every URL is absolute and HTTPS;
 *  • stable @id anchors (#organization, #website, #webpage, #product, #breadcrumb…);
 *  • Organization and WebSite are DEFINED ONCE sitewide (static block in
 *    index.html) and only REFERENCED here by @id.
 */

export const SITE_URL = "https://lirelia.fr";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Normalise a route to a path without trailing slash ("/" stays "/"). */
export const normalizePath = (path: string): string =>
  path.replace(/\/+$/, "") || "/";

/**
 * Absolute canonical URL for a route path.
 * The site canonicalises every URL WITH a trailing slash, so fragments and
 * query parameters must always come AFTER that slash
 * (e.g. https://lirelia.fr/boutique/x/#product, .../x/?couleur=bleu).
 */
export const absoluteUrl = (path: string): string => {
  const p = normalizePath(path);
  return p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}/`;
};


/** Absolute URL for a bundled asset (Vite returns a root-relative path). */
export const absoluteAsset = (asset: string): string =>
  asset.startsWith("http") ? asset : `${SITE_URL}${asset}`;

export const organizationRef = { "@id": ORGANIZATION_ID };
export const websiteRef = { "@id": WEBSITE_ID };

export type Node = Record<string, unknown>;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const breadcrumbNode = (path: string, items: BreadcrumbItem[]): Node => ({
  "@type": "BreadcrumbList",
  "@id": `${absoluteUrl(path)}#breadcrumb`,
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

interface PageNodeInput {
  path: string;
  name: string;
  description: string;
  /** WebPage subtype: WebPage, CollectionPage, MedicalWebPage, AboutPage… */
  type?: string;
  /** Extra properties merged into the node (about, mainEntity…). */
  extra?: Node;
  /** Whether a BreadcrumbList node exists on the same page. */
  hasBreadcrumb?: boolean;
}

export const pageNode = ({
  path,
  name,
  description,
  type = "WebPage",
  extra,
  hasBreadcrumb = true,
}: PageNodeInput): Node => {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "fr-FR",
    isPartOf: websiteRef,
    publisher: organizationRef,
    ...(hasBreadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    ...extra,
  };
};

export type SchemaAvailability =
  | "https://schema.org/InStock"
  | "https://schema.org/OutOfStock"
  | "https://schema.org/Discontinued"
  | "https://schema.org/PreOrder";

export const AVAILABILITY_URL: Record<string, SchemaAvailability> = {
  available: "https://schema.org/InStock",
  out_of_stock: "https://schema.org/OutOfStock",
  discontinued: "https://schema.org/Discontinued",
  coming_soon: "https://schema.org/PreOrder",
};

/** "37 €" / "26,40 €" → "37.00" / "26.40" */
export const normalizePrice = (price: string): string => {
  const value = Number(price.replace(/[^\d,.]/g, "").replace(",", "."));
  return Number.isFinite(value) ? value.toFixed(2) : price;
};

interface OfferInput {
  url: string;
  price: string;
  availability: SchemaAvailability;
}

export const offerNode = ({ url, price, availability }: OfferInput): Node => ({
  "@type": "Offer",
  url,
  priceCurrency: "EUR",
  price: normalizePrice(price),
  availability,
  itemCondition: "https://schema.org/NewCondition",
  seller: organizationRef,
});

interface ProductNodeInput {
  path: string;
  name: string;
  description: string;
  image: string;
  price: string;
  status: string;
  /** Optional @id suffix override, used by variant sub-products. */
  id?: string;
  /** Offer URL override (variant URLs carry a ?couleur= parameter). */
  offerUrl?: string;
  /** Set to false when the visible price is a "à partir de" starting price. */
  withOffer?: boolean;
  extra?: Node;
}

export const productNode = ({
  path,
  name,
  description,
  image,
  price,
  status,
  id,
  offerUrl,
  withOffer = true,
  extra,
}: ProductNodeInput): Node => {
  const url = absoluteUrl(path);
  return {
    "@type": "Product",
    "@id": id ?? `${url}#product`,
    name,
    description,
    image: [absoluteAsset(image)],
    brand: { "@type": "Brand", name: "LirElia" },
    url: offerUrl ?? url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    ...(withOffer
      ? {
          offers: offerNode({
            url: offerUrl ?? url,
            price,
            availability: AVAILABILITY_URL[status] ?? "https://schema.org/InStock",
          }),
        }
      : {}),
    ...extra,
  };
};

interface ServiceNodeInput {
  path: string;
  name: string;
  description: string;
  price?: string;
  serviceType?: string;
  areaServed?: string;
}

export const serviceNode = ({
  path,
  name,
  description,
  price,
  serviceType = "Bilan basse vision",
  areaServed = "France",
}: ServiceNodeInput): Node => {
  const url = absoluteUrl(path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType,
    provider: organizationRef,
    areaServed: { "@type": "Country", name: areaServed },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            url,
            priceCurrency: "EUR",
            price: normalizePrice(price),
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
};

export const medicalConditionNode = (path: string, name: string, description: string): Node => ({
  "@type": "MedicalCondition",
  "@id": `${absoluteUrl(path)}#condition`,
  name,
  description,
});

/** Wrap nodes into the single @graph emitted for a page. */
export const graph = (nodes: Node[]): Node => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});

/** ItemList reflecting the visible order of a listing page. */
export const itemListNode = (
  path: string,
  items: { name: string; path: string }[],
  extra?: Node,
): Node => ({
  "@type": "ItemList",
  "@id": `${absoluteUrl(path)}#itemlist`,
  numberOfItems: items.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    url: absoluteUrl(item.path),
  })),
  ...extra,
});

/** FAQPage node — only for FAQs entirely visible on the page. */
export const faqNode = (path: string, items: { q: string; a: string }[]): Node => ({
  "@type": "FAQPage",
  "@id": `${absoluteUrl(path)}#faq`,
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

interface BookNodeInput {
  path: string;
  name: string;
  description: string;
  image: string;
  numberOfPages?: number;
  bookFormat?: string;
  sameAs?: string;
}

export const bookNode = ({
  path,
  name,
  description,
  image,
  numberOfPages,
  bookFormat,
  sameAs,
}: BookNodeInput): Node => {
  const url = absoluteUrl(path);
  return {
    "@type": "Book",
    "@id": `${url}#book`,
    name,
    description,
    image: [absoluteAsset(image)],
    url,
    inLanguage: "fr-FR",
    publisher: organizationRef,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    ...(numberOfPages ? { numberOfPages } : {}),
    ...(bookFormat ? { bookFormat } : {}),
    ...(sameAs ? { sameAs } : {}),
  };
};

/** Remove undefined values so the graph is always JSON-serialisable as-is. */
export const prune = <T>(node: T): T =>
  JSON.parse(JSON.stringify(node, (_k, v) => (v === undefined ? undefined : v))) as T;
