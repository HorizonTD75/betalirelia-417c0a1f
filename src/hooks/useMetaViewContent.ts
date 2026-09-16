import { useEffect, useRef } from "react";
import { trackMetaViewContent, type MetaProduct } from "@/lib/metaPixel";

/**
 * Envoie un unique ViewContent Meta par affichage réel de la fiche produit.
 * Réutilisable sur toutes les fiches produits LirElia.
 */
export function useMetaViewContent(product: MetaProduct) {
  const sentForRef = useRef<string | null>(null);

  useEffect(() => {
    if (sentForRef.current === product.id) return;
    sentForRef.current = product.id;
    trackMetaViewContent(product);
  }, [product]);
}
