import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getMetaProductForPath, trackMetaViewContent } from "@/lib/metaPixel";

/**
 * Envoie un unique ViewContent Meta par consultation réelle d'une fiche produit.
 *
 * Monté une seule fois dans l'application : uniquement les chemins reconnus
 * comme fiche produit du catalogue déclenchent l'événement (jamais les pages
 * catalogue, catégories, panier, paiement, accueil…).
 *
 * Anti-doublon : un verrou sur l'identifiant produit garantit un seul envoi
 * par produit affiché, quels que soient les re-renders React ; passer d'une
 * fiche à une autre envoie bien un nouvel événement.
 */
const MetaViewContentTracker = () => {
  const { pathname } = useLocation();
  const lastSentRef = useRef<string | null>(null);

  useEffect(() => {
    const product = getMetaProductForPath(pathname);
    if (!product) {
      lastSentRef.current = null;
      return;
    }
    if (lastSentRef.current === product.id) return;
    lastSentRef.current = product.id;
    trackMetaViewContent(product);
  }, [pathname]);

  return null;
};

export default MetaViewContentTracker;
