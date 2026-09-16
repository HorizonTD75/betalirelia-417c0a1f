/**
 * Meta Pixel (Facebook) tracking helpers for LirElia.
 *
 * Le Pixel est initialisé dans index.html (ID 2202036963709336) et envoie
 * le PageView initial. Ce module centralise tous les autres événements afin
 * qu'aucun appel `fbq()` ne soit dispersé dans les pages.
 *
 * Toutes les fonctions sont défensives : elles ne font rien si `fbq` est
 * absent (script bloqué, extension, SSR/prerender) et n'attendent jamais
 * de réponse réseau — elles ne peuvent donc pas bloquer une navigation
 * ni une redirection Stripe.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export interface MetaProduct {
  /** Identifiant stable utilisé comme content_id côté Meta. */
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
}

/**
 * Registre des produits suivis côté Meta.
 * Pour ajouter un produit (NORA, réveils, horloges…) : ajouter une entrée ici,
 * puis appeler les fonctions génériques depuis sa fiche produit.
 */
export const META_PRODUCTS = {
  amelie: {
    id: "amelie",
    name: "Loupe électronique Amélie",
    category: "Loupe électronique",
    price: 188.0,
    currency: "EUR",
  },
} satisfies Record<string, MetaProduct>;

export type MetaProductId = keyof typeof META_PRODUCTS;

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
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

/** PageView — un appel par affichage réel de page (le premier vient d'index.html). */
export function trackMetaPageView() {
  fbqSafe("track", "PageView");
}

/** ViewContent — affichage d'une fiche produit. */
export function trackMetaViewContent(product: MetaProduct) {
  fbqSafe("track", "ViewContent", {
    content_name: product.name,
    content_category: product.category,
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
    content_category: product.category,
    content_type: "product",
    content_ids: [product.id],
    contents: [{ id: product.id, quantity, item_price: product.price }],
    value: product.price * quantity,
    currency: product.currency,
    num_items: quantity,
  });
}
