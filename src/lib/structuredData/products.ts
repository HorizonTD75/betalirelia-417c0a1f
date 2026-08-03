/**
 * Single source of truth for the commercial catalogue used by BOTH the visible
 * product pages and the JSON-LD structured data (src/lib/structuredData).
 *
 * Prices, availability and Stripe links MUST only be edited here (or in
 * ./variants.ts for products sold in several colours) so that the schema
 * always matches what the visitor sees on the page.
 */

import { AvailabilityStatus, ProductVariant, aggregateStatus } from "@/components/products/availability";
import { fridaVariants, ivarVariants } from "./variants";

import imgClipLunettesLoupe from "@/assets/products/clip-lunette-loupe.jpg";
import imgHorlogeGrosChiffresFrida from "@/assets/products/horloge-reveil-pour-malvoyant-frida.jpg";
import imgHorlogeReveilGrosChiffresOskar from "@/assets/products/horloge-reveil-gros-chiffres-oskar.jpg";
import imgLampadaireSolveig from "@/assets/products/lampadaire-solveig-noir.jpg";
import imgLampeBasseVisionEira from "@/assets/products/lampe-eira-blanche-livre.jpg";
import imgLampeLoupeAstrid from "@/assets/products/lampe-loupe-astrid-noire.jpg";
import imgLampeTourCouAina from "@/assets/products/lampe-tour-cou-aina-noir-blanche.jpg";
import imgLoupeAmelie from "@/assets/products/loupe-electronique-amelie.jpg";
import imgLoupeDomeEclairanteLina from "@/assets/products/loupe-dome-eclairante-lina.jpg";
import imgLoupeElectroniqueClover5 from "@/assets/products/loupe-electronique-clover-5-poignee.jpg";
import imgLoupeMainNora from "@/assets/products/loupe-main-nora-lecture.jpg";
import imgLoupeMaxTv from "@/assets/products/lunettes-loupe-max-tv-grossissement-basse-vision.jpg";
import imgLunettesLoupeFocus from "@/assets/products/lunettes-loupes-focus-dmla.jpg";
import imgLunettesLoupeFrontaleAlva from "@/assets/products/lunette-loupe-frontale-alva-sacoche.jpeg";
import imgReveilGrosChiffresIvar from "@/assets/products/reveil-gros-chiffres-blanc-ivar.jpg";
import imgSourisLoupeElectroniqueVera from "@/assets/products/souris-loupe-electronique-vera-journal.jpg";
import imgTeleagrandisseurMezzoFocus from "@/assets/products/teleagrandisseur-mezzo-basse-vision.jpg";

export interface CatalogProduct {
  /** Last URL segment, used as a stable identifier. */
  slug: string;
  /** Canonical path, without trailing slash. */
  path: string;
  name: string;
  description: string;
  /** Bundled main image (absolute URL is derived at build time). */
  image: string;
  /** Price in euros, dot-separated, e.g. "37.00". */
  price: string;
  /** Availability for single-variant products. */
  status?: AvailabilityStatus;
  /** Colour/option variants when the product is sold in several versions. */
  variants?: ProductVariant[];
}

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    slug: "clip-lunettes-loupe",
    path: "/boutique/clip-lunettes-loupe",
    name: "Clip lunettes loupe",
    description:
      "Surlunette loupe à clipser sur monture : grossissements 1,4x, 1,7x ou 2x, relevable, vision binoculaire, 14 g.",
    image: imgClipLunettesLoupe,
    price: "24.50",
    status: "available",
  },
  {
    slug: "horloge-gros-chiffres-frida",
    path: "/boutique/horloge-gros-chiffres-frida",
    name: "Horloge gros chiffres FRIDA",
    description:
      "Horloge réveil FRIDA pour basse vision : très gros chiffres lumineux de 52 mm en 5 couleurs au choix, affichage cyclique, thermomètre et double alimentation.",
    image: imgHorlogeGrosChiffresFrida,
    price: "37.00",
    variants: fridaVariants,
  },
  {
    slug: "horloge-reveil-gros-chiffres-oskar",
    path: "/boutique/horloge-reveil-gros-chiffres-oskar",
    name: "Horloge réveil gros chiffres OSKAR",
    description:
      "Horloge réveil OSKAR : gros chiffres lumineux 45 mm sur fond noir, thermomètre intégré et double alimentation, pour la basse vision et la DMLA.",
    image: imgHorlogeReveilGrosChiffresOskar,
    price: "38.40",
    status: "available",
  },
  {
    slug: "lampadaire-solveig",
    path: "/boutique/lampadaire-solveig",
    name: "Lampadaire SOLVEIG",
    description:
      "Lampadaire SOLVEIG pour basse vision : 5 000 lux, 84 LED, 3 températures de couleur, hauteur réglable et télécommande.",
    image: imgLampadaireSolveig,
    price: "179.00",
    status: "available",
  },
  {
    slug: "lampe-basse-vision-eira",
    path: "/boutique/lampe-basse-vision-eira",
    name: "Lampe basse vision EIRA",
    description:
      "Lampe de lecture EIRA pour basse vision et DMLA : 3 températures de couleur, 100 à 1 600 lux, batterie 6 h, pliable.",
    image: imgLampeBasseVisionEira,
    price: "178.00",
    status: "available",
  },
  {
    slug: "lampe-loupe-astrid",
    path: "/boutique/lampe-loupe-astrid",
    name: "Lampe loupe ASTRID",
    description:
      "Lampe loupe ASTRID à bras articulé : grossissement x3, lentille 10,5 cm, éclairage LED 6 000 lux, 3 températures de couleur.",
    image: imgLampeLoupeAstrid,
    price: "148.00",
    status: "available",
  },
  {
    slug: "lampe-tour-cou-aina",
    path: "/boutique/lampe-tour-cou-aina",
    name: "Lampe tour de cou AINA",
    description:
      "Lampe de lecture mains libres AINA, portée autour du cou ou posée sur la table — 2 modes d'éclairage, 3 températures de couleur, batterie rechargeable.",
    image: imgLampeTourCouAina,
    price: "49.20",
    status: "available",
  },
  {
    slug: "loupe-amelie",
    path: "/boutique/loupe-amelie",
    name: "Loupe électronique Amélie",
    description:
      "Loupe de lecture électronique ultra-compacte avec trois grossissements (3×, 6×, 9×), écran lumineux de 11 cm et éclairage LED intégré. Idéale pour DMLA, glaucome ou cataracte.",
    image: imgLoupeAmelie,
    price: "188.00",
    status: "available",
  },
  {
    slug: "loupe-dome-eclairante-lina",
    path: "/boutique/loupe-dome-eclairante-lina",
    name: "Loupe dôme éclairante rechargeable LINA",
    description:
      "Loupe dôme éclairante rechargeable LINA : grossissement x2 à x3, à poser sur le texte pour lire courrier, notices et mots croisés en cas de basse vision ou DMLA.",
    image: imgLoupeDomeEclairanteLina,
    price: "86.20",
    status: "available",
  },
  {
    slug: "loupe-electronique-clover-5",
    path: "/boutique/loupe-electronique-clover-5",
    name: "Loupe électronique CLOVER 5",
    description:
      "Loupe électronique CLOVER 5 : grossissement 4x à 20x, écran HD 5'', modes forts contrastes, poignée repliable et 4 h d'autonomie.",
    image: imgLoupeElectroniqueClover5,
    price: "539.00",
    status: "available",
  },
  {
    slug: "loupe-main-nora",
    path: "/boutique/loupe-main-nora",
    name: "Loupe à main NORA",
    description:
      "Loupe à main NORA rectangulaire éclairante : grande lentille x2 et petite lentille x6, 50 LED avec 3 niveaux d'intensité.",
    image: imgLoupeMainNora,
    price: "87.50",
    status: "available",
  },
  {
    slug: "loupe-max-tv",
    path: "/boutique/loupe-max-tv",
    name: "Lunettes loupe Max-TV",
    description:
      "Lunettes loupe Max-TV : grossissement 2,1x pour regarder la télévision ou un écran à 2 à 5 mètres, avec réglage indépendant.",
    image: imgLoupeMaxTv,
    price: "87.00",
    status: "available",
  },
  {
    slug: "lunettes-loupe-focus",
    path: "/boutique/lunettes-loupe-focus",
    name: "Lunettes Loupe FOCUS",
    description:
      "Lunettes loupe FOCUS : grossissement 2,5x, réglage indépendant et mains libres pour lecture, couture et activités de près.",
    image: imgLunettesLoupeFocus,
    price: "89.00",
    status: "available",
  },
  {
    slug: "lunettes-loupe-frontale-alva",
    path: "/boutique/lunettes-loupe-frontale-alva",
    name: "Lunette Loupe Frontale ALVA",
    description:
      "Lunette loupe frontale ALVA à LED : 5 grossissements (1x à 3,5x), mains libres, batterie rechargeable.",
    image: imgLunettesLoupeFrontaleAlva,
    price: "94.00",
    status: "available",
  },
  {
    slug: "reveil-gros-chiffres-ivar",
    path: "/boutique/reveil-gros-chiffres-ivar",
    name: "Réveil gros chiffres IVAR",
    description:
      "Réveil IVAR : gros chiffres lumineux blancs sur fond noir, ultra-compact, thermomètre intégré et double alimentation, pour basse vision et DMLA.",
    image: imgReveilGrosChiffresIvar,
    price: "26.40",
    variants: ivarVariants,
  },
  {
    slug: "souris-loupe-electronique-vera",
    path: "/boutique/souris-loupe-electronique-vera",
    name: "Souris loupe électronique VERA",
    description:
      "Souris loupe électronique VERA : caméra de lecture connectée à la télévision pour agrandir textes, journaux et documents en basse vision.",
    image: imgSourisLoupeElectroniqueVera,
    price: "158.00",
    status: "available",
  },
  {
    slug: "teleagrandisseur-mezzo-focus",
    path: "/boutique/teleagrandisseur-mezzo-focus",
    name: "Téléagrandisseur Mezzo Focus",
    description:
      "Téléagrandisseur Mezzo Focus : solution de lecture pour les personnes atteintes de basse vision, DMLA ou troubles visuels importants.",
    image: imgTeleagrandisseurMezzoFocus,
    price: "2582.00",
    status: "available",
  },
];

export const getCatalogProduct = (path: string): CatalogProduct | undefined =>
  CATALOG_PRODUCTS.find((p) => p.path === path.replace(/\/+$/, ""));

/** Effective availability: aggregated from variants when the product has some. */
export const productStatus = (p: CatalogProduct): AvailabilityStatus =>
  p.variants ? aggregateStatus(p.variants) : p.status ?? "available";
