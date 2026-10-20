/**
 * Meta Pixel (Facebook) tracking helpers for LIRELIA.
 *
 * Le Pixel est initialisé dans index.html (ID 2202036963709336) et envoie
 * le PageView initial. Ce module centralise tous les autres événements afin
 * qu'aucun appel `fbq()` ne soit dispersé dans les pages.
 *
 * Les données produit (nom, identifiant, prix) proviennent UNIQUEMENT du
 * catalogue existant (src/lib/structuredData/products.ts) : aucune seconde
 * liste de produits n'est maintenue pour Meta. Tout nouveau produit ajouté
 * au catalogue déclenche donc automatiquement son ViewContent.
 *
 * Toutes les fonctions sont défensives : elles ne font rien si `fbq` est
 * absent (script bloqué, extension, SSR/prerender) et n'attendent jamais
 * de réponse réseau — elles ne peuvent donc pas bloquer une navigation
 * ni une redirection Stripe.
 */

import { CATALOG_PRODUCTS, getCatalogProduct } from "@/lib/structuredData/products";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export interface MetaProduct {
  /** Identifiant stable utilisé comme content_id côté Meta. */
  id: string;
  name: string;
  category?: string;
  price: number;
  currency: string;
}

/**
 * Identifiants historiques à conserver tels quels côté Meta
 * (sinon l'identifiant = slug catalogue, stable et sans prix).
 */
const ID_OVERRIDES: Record<string, string> = {
  "loupe-amelie": "amelie",
};

/** Catégorie commerciale envoyée en content_category (facultative). */
const CATEGORY_BY_SLUG: Record<string, string> = {
  "loupe-amelie": "Loupe électronique",
  "loupe-electronique-clover-5": "Loupe électronique",
  "loupe-main-nora": "Loupe en verre",
  "loupe-dome-eclairante-lina": "Loupe en verre",
  "lunettes-loupe-focus": "Lunettes loupes",
  "lunettes-loupe-frontale-alva": "Lunettes loupes",
  "loupe-max-tv": "Lunettes loupes",
  "clip-lunettes-loupe": "Lunettes loupes",
  "lampe-basse-vision-eira": "Lampe basse vision",
  "lampe-loupe-astrid": "Lampe basse vision",
  "lampadaire-solveig": "Lampe basse vision",
  "lampe-tour-cou-aina": "Lampe basse vision",
  "souris-loupe-electronique-vera": "Téléagrandisseur",
  "teleagrandisseur-mezzo-focus": "Téléagrandisseur",
  "horloge-reveil-gros-chiffres-oskar": "Accessoire",
  "reveil-gros-chiffres-ivar": "Accessoire",
  "horloge-gros-chiffres-frida": "Accessoire",
};

/** Prix catalogue ("188.00") → nombre exploitable, ou null si inutilisable. */
function toNumericPrice(price?: string): number | null {
  if (!price) return null;
  const n = Number(String(price).replace(",", ".").replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}

/**
 * Produit Meta correspondant à une fiche produit (chemin canonique).
 * Renvoie null si le chemin n'est pas une fiche produit ou si le prix
 * n'est pas exploitable (produit non vendu / en évaluation) — dans ce cas
 * aucun événement n'est envoyé, aucune valeur n'est inventée.
 */
export function getMetaProductForPath(path: string): MetaProduct | null {
  const product = getCatalogProduct(path);
  if (!product) return null;
  const price = toNumericPrice(product.price);
  if (price === null) return null;
  return {
    id: ID_OVERRIDES[product.slug] ?? product.slug,
    name: product.name,
    category: CATEGORY_BY_SLUG[product.slug],
    price,
    currency: "EUR",
  };
}

/** Liste des fiches produits couvertes par ViewContent (utile aux audits). */
export function listMetaProducts(): MetaProduct[] {
  return CATALOG_PRODUCTS.map((p) => getMetaProductForPath(p.path)).filter(
    (p): p is MetaProduct => p !== null,
  );
}

/** Appelle fbq de façon totalement sûre. */
function fbqSafe(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  try {
    window.fbq(...args);
  } catch {
    /* le tracking ne doit jamais perturber l'expérience utilisateur */
  }
}

/** True si le Pixel Meta est chargé et prêt. */
export function isMetaPixelReady(): boolean {
  return typeof window !== "undefined" && typeof window.fbq !== "undefined" && typeof window.fbq === "function";
}

/** PageView — un appel par affichage réel de page (le premier vient d'index.html). */
export function trackMetaPageView() {
  fbqSafe("track", "PageView");
}

/** ViewContent — affichage d'une fiche produit. */
export function trackMetaViewContent(product: MetaProduct) {
  fbqSafe("track", "ViewContent", {
    content_name: product.name,
    ...(product.category ? { content_category: product.category } : {}),
    content_type: "product",
    content_ids: [product.id],
    value: product.price,
    currency: product.currency,
  });
}

/** InitiateCheckout — clic réel sur un bouton d'achat menant au paiement. */
export function trackMetaInitiateCheckout(product: MetaProduct, quantity = 1) {
  fbqSafe("track", "InitiateCheckout", {
    content_name: product.name,
    ...(product.category ? { content_category: product.category } : {}),
    content_type: "product",
    content_ids: [product.id],
    contents: [{ id: product.id, quantity, item_price: product.price }],
    value: product.price * quantity,
    currency: product.currency,
    num_items: quantity,
  });
}
