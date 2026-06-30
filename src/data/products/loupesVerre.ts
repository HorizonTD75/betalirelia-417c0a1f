/**
 * Données produits centralisées pour la catégorie « Loupes en verre ».
 *
 * Cette source unique alimente :
 *  - la carte produit dans le catalogue mère (/catalogue-aides-basse-vision/)
 *  - la page catégorie commerciale (/catalogue-aides-basse-vision/loupes-verre/)
 *
 * Les fiches produit (/boutique/loupe-main-nora, /boutique/loupe-dome-eclairante-lina)
 * peuvent également importer `price`, `name`, `mainImage` et `imageAlt` depuis ce
 * fichier pour rester synchronisées avec un seul point de mise à jour.
 */

import loupeNoraImg from "@/assets/products/loupe-main-nora-lecture.jpg";
import loupeDomeLinaImg from "@/assets/products/loupe-dome-eclairante-lina.jpg";

export type LoupeVerreProduct = {
  slug: string;
  name: string;
  category: "loupes-verre";
  shortDescription: string;
  /** Prix TTC affiché (chaîne formatée FR) */
  price: string;
  /** Prix TTC numérique pour le JSON-LD / tri */
  priceNumber: number;
  priceCurrency: "EUR";
  mainImage: string;
  imageAlt: string;
  /** URL canonique de la fiche produit */
  productUrl: string;
  productType: string;
  magnification: string;
  lighting: string;
  powerSupply: string;
  weight: string;
  keyFeatures: string[];
  mainUses: string;
  availability: "InStock" | "OutOfStock";
};

export const LOUPE_NORA: LoupeVerreProduct = {
  slug: "loupe-main-nora",
  name: "Loupe à main NORA",
  category: "loupes-verre",
  shortDescription:
    "Une grande loupe rectangulaire éclairante pour lire un courrier, une notice, une étiquette ou observer un détail.",
  price: "87,50 €",
  priceNumber: 87.5,
  priceCurrency: "EUR",
  mainImage: loupeNoraImg,
  imageAlt: "La loupe à main de lecture NORA, pour malvoyants léger, DMLA, glaucome.",
  productUrl: "/boutique/loupe-main-nora",
  productType: "Loupe à main rectangulaire",
  magnification: "×2 (grande lentille) et ×6 (lentille ronde 25 mm)",
  lighting: "50 LED réglables (3 niveaux)",
  powerSupply: "3 piles AAA (non fournies)",
  weight: "190 g",
  keyFeatures: [
    "Grande lentille rectangulaire ×2",
    "Petite lentille intégrée ×6",
    "Éclairage LED réglable",
    "Format à main",
  ],
  mainUses: "Lectures ponctuelles et observation de détails",
  availability: "InStock",
};

export const LOUPE_LINA: LoupeVerreProduct = {
  slug: "loupe-dome-eclairante-lina",
  name: "Loupe dôme éclairante rechargeable LINA",
  category: "loupes-verre",
  shortDescription:
    "Une loupe dôme stable et rechargeable, à poser directement sur le document pour lire sans avoir à maintenir la loupe en hauteur.",
  price: "86,20 €",
  priceNumber: 86.2,
  priceCurrency: "EUR",
  mainImage: loupeDomeLinaImg,
  imageAlt: "La loupe dôme de lecture LINA posée sur une table",
  productUrl: "/boutique/loupe-dome-eclairante-lina",
  productType: "Loupe dôme à poser",
  magnification: "Ajustable d'environ ×2 à ×3",
  lighting: "LED intégré",
  powerSupply: "Batterie rechargeable",
  weight: "—",
  keyFeatures: [
    "Grossissement ajustable ×2 à ×3",
    "Loupe stable à poser",
    "Éclairage LED intégré",
    "Batterie rechargeable",
  ],
  mainUses: "Lecture stable sur un document posé",
  availability: "InStock",
};

export const LOUPES_VERRE_PRODUCTS: LoupeVerreProduct[] = [LOUPE_NORA, LOUPE_LINA];
