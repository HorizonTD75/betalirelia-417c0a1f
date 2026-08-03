/**
 * Central JSON-LD registry — ONE @graph per route.
 *
 * Everything a page needs is derived here from:
 *  • ROUTE_META  (titles/descriptions, mirroring index.html);
 *  • CATALOG_PRODUCTS + variants (prices, stock, Stripe links).
 *
 * Pages never hand-write JSON-LD any more: <SEOHead /> reads this registry.
 * Routes marked `noindex` return null (no structured data at all).
 */

import { AVAILABILITY_URL, BreadcrumbItem, Node, absoluteAsset, absoluteUrl, breadcrumbNode, graph, medicalConditionNode, normalizePath, normalizePrice, organizationRef, pageNode, productNode, serviceNode } from "./entities";
import { ROUTE_META } from "./routeMeta";
import { CATALOG_PRODUCTS, CatalogProduct, getCatalogProduct, productStatus } from "./products";

const CATALOGUE_PATH = "/catalogue-aides-basse-vision";

/** Prices of the bilans, mirroring what the pages display. */
const BILAN_SERVICES: Record<string, { price: string; serviceType: string }> = {
  "/bilans-bassevision/essentiel": { price: "75", serviceType: "Bilan basse vision" },
  "/bilans-bassevision/expert": { price: "135", serviceType: "Bilan basse vision" },
  "/bilans-bassevision/suivi": { price: "215", serviceType: "Accompagnement basse vision" },
  "/bilans-bassevision/visites-domicile": { price: "75", serviceType: "Bilan basse vision à domicile" },
};

export const isNoIndexRoute = (pathname: string): boolean =>
  ROUTE_META[normalizePath(pathname)]?.noindex === true;

const labelFor = (path: string, fallback: string): string =>
  ROUTE_META[path]?.short ?? fallback;

/** Breadcrumb trail built from the URL hierarchy. */
const trail = (path: string, leafName: string): BreadcrumbItem[] => {
  const p = normalizePath(path);
  const items: BreadcrumbItem[] = [{ name: "Accueil", path: "/" }];

  if (p.startsWith("/boutique/")) {
    items.push({ name: labelFor(CATALOGUE_PATH, "Catalogue aides basse vision"), path: CATALOGUE_PATH });
    items.push({ name: leafName, path: p });
    return items;
  }

  let acc = "";
  const segments = p.split("/").filter(Boolean);
  segments.forEach((segment, i) => {
    acc += `/${segment}`;
    const isLeaf = i === segments.length - 1;
    if (isLeaf) items.push({ name: leafName, path: acc });
    else if (ROUTE_META[acc]) items.push({ name: ROUTE_META[acc].short, path: acc });
  });
  return items;
};

const productGroupNode = (product: CatalogProduct): Node => {
  const url = absoluteUrl(product.path);
  const variants = product.variants ?? [];

  return {
    "@type": "ProductGroup",
    "@id": `${url}#product`,
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
      return {
        "@type": "Product",
        "@id": `${url}#variant-${variant.id}`,
        name: variant.label,
        description: variant.description ?? product.description,
        image: [absoluteAsset(variant.image ?? product.image)],
        sku: `${product.slug}-${variant.id}`,
        color: variant.label,
        brand: { "@type": "Brand", name: "LirElia" },
        url: variantUrl,
        offers: {
          "@type": "Offer",
          url: variant.stripeUrl ? variantUrl : variantUrl,
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

const productGraph = (product: CatalogProduct, path: string): Node => {
  const meta = ROUTE_META[path];
  const page = pageNode({
    path,
    type: "ItemPage",
    name: meta?.title ?? product.name,
    description: meta?.description ?? product.description,
    extra: { primaryImageOfPage: { "@id": `${absoluteUrl(path)}#product` } },
  });

  const item = product.variants
    ? productGroupNode(product)
    : productNode({
        path,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        status: productStatus(product),
      });

  return graph([page, item, breadcrumbNode(path, trail(path, product.name))]);
};

/** The single @graph for a route, or null when the route must not be indexed. */
export const getPageGraph = (pathname: string): Node | null => {
  const path = normalizePath(pathname);
  const meta = ROUTE_META[path];

  if (!meta || meta.noindex) return null;

  const product = getCatalogProduct(path);
  if (product) return productGraph(product, path);

  const leaf = meta.short;
  const breadcrumb = breadcrumbNode(path, trail(path, leaf));

  // Home page — WebPage referencing the sitewide Organization / WebSite nodes.
  if (path === "/") {
    return graph([
      pageNode({
        path,
        name: meta.title,
        description: meta.description,
        extra: { about: organizationRef },
      }),
      breadcrumb,
    ]);
  }

  // Bilans and services.
  const bilan = BILAN_SERVICES[path];
  if (bilan) {
    return graph([
      pageNode({ path, name: meta.title, description: meta.description }),
      serviceNode({
        path,
        name: leaf,
        description: meta.description,
        price: bilan.price,
        serviceType: bilan.serviceType,
      }),
      breadcrumb,
    ]);
  }

  // Medical content — MedicalWebPage + the condition it documents.
  if (path.startsWith("/maladies-yeux/")) {
    return graph([
      pageNode({
        path,
        type: "MedicalWebPage",
        name: meta.title,
        description: meta.description,
        extra: {
          about: { "@id": `${absoluteUrl(path)}#condition` },
          audience: { "@type": "MedicalAudience", audienceType: "Patient" },
        },
      }),
      medicalConditionNode(path, leaf, meta.description),
      breadcrumb,
    ]);
  }

  // Catalogue and advice listings.
  const isListing =
    path === CATALOGUE_PATH ||
    path.startsWith(`${CATALOGUE_PATH}/`) ||
    path === "/maladies-yeux" ||
    path === "/aides-lecture-bassevision" ||
    path === "/bilans-bassevision";

  return graph([
    pageNode({
      path,
      type: isListing ? "CollectionPage" : "WebPage",
      name: meta.title,
      description: meta.description,
    }),
    breadcrumb,
  ]);
};

/** Exposed for the audit script. */
export const ALL_GRAPH_ROUTES = Object.keys(ROUTE_META).filter((p) => !ROUTE_META[p].noindex);
export const ALL_PRODUCT_PATHS = CATALOG_PRODUCTS.map((p) => p.path);
