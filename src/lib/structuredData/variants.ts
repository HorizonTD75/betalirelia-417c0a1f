/**
 * Colour variants for the multi-variant products (FRIDA, IVAR).
 *
 * Single source of truth: consumed by the product pages (VariantChoiceGrid)
 * AND by the ProductGroup JSON-LD in src/lib/structuredData/registry.ts.
 */

import { ProductVariant } from "@/components/products/availability";

import fridaImgBlanc from "@/assets/products/horloge-reveil-frida-basse-vision-chiffres-blanc.jpg";
import fridaImgVert from "@/assets/products/horloge-reveil-frida-chiffres-vert.jpg";
import fridaImgOrange from "@/assets/products/horloge-pour-malvoyant-frida-orange-dmla.jpg";
import fridaImgRouge from "@/assets/products/horloge-reveil-malvoyant-frida-rouge.jpg";
import fridaImgBleu from "@/assets/products/horloge-pour-malvoyant-frida-chiffres-bleu.jpg";
import ivarImgPrincipale from "@/assets/products/reveil-gros-chiffres-blanc-ivar.jpg";
import ivarImgNoir from "@/assets/products/reveil-gros-chiffres-noir-ivar.jpg";

export const fridaVariants: ProductVariant[] = [
  { id: "blanc", label: "FRIDA chiffres blancs", description: "Horloge réveil gros chiffres avec affichage blanc sur fond noir.", price: "37 €", image: fridaImgBlanc, imageAlt: "Horloge réveil FRIDA avec gros chiffres blancs", swatch: "#ffffff", buyLabel: "Acheter FRIDA blanc", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres blancs", stripeUrl: "https://buy.stripe.com/aFa5kEeeGbC711lgo52Fa0h", status: "out_of_stock" },
  { id: "rouge", label: "FRIDA chiffres rouges", description: "Horloge réveil gros chiffres avec affichage rouge sur fond noir.", price: "37 €", image: fridaImgRouge, imageAlt: "Horloge réveil FRIDA avec gros chiffres rouges", swatch: "#e53935", buyLabel: "Acheter FRIDA rouge", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres rouges", stripeUrl: "https://buy.stripe.com/eVq8wQb2ufSn9xR6Nv2Fa0i", status: "available" },
  { id: "vert", label: "FRIDA chiffres verts", description: "Horloge réveil gros chiffres avec affichage vert sur fond noir.", price: "37 €", image: fridaImgVert, imageAlt: "Horloge réveil FRIDA avec gros chiffres verts", swatch: "#43a047", buyLabel: "Acheter FRIDA vert", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres verts", stripeUrl: "https://buy.stripe.com/7sY6oIc6y6hNbFZ2xf2Fa0j", status: "available" },
  { id: "orange", label: "FRIDA chiffres orange", description: "Horloge réveil gros chiffres avec affichage orange sur fond noir.", price: "37 €", image: fridaImgOrange, imageAlt: "Horloge réveil FRIDA avec gros chiffres orange", swatch: "#fb8c00", buyLabel: "Acheter FRIDA orange", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres orange", stripeUrl: "https://buy.stripe.com/fZufZi5Ia0XtdO77Rz2Fa0l", status: "available" },
  { id: "bleu", label: "FRIDA chiffres bleus", description: "Horloge réveil gros chiffres avec affichage bleu sur fond noir.", price: "37 €", image: fridaImgBleu, imageAlt: "Horloge réveil FRIDA avec gros chiffres bleus", swatch: "#42a5f5", buyLabel: "Acheter FRIDA bleu", buyAriaLabel: "Acheter l'horloge FRIDA avec chiffres bleus", stripeUrl: "https://buy.stripe.com/14A3cw7QicGb6lF2xf2Fa0k", status: "available" },
];

export const ivarVariants: ProductVariant[] = [
  {
    id: "blanche",
    label: "IVAR coque blanche",
    description: "Réveil parlant gros chiffres avec coque blanche.",
    price: "26,40 €",
    image: ivarImgPrincipale,
    imageAlt: "Réveil parlant IVAR avec gros chiffres et coque blanche",
    buyLabel: "Acheter IVAR blanc",
    buyAriaLabel: "Acheter le réveil IVAR avec coque blanche",
    stripeUrl: "https://buy.stripe.com/4gM5kE9Yq9tZfWfc7P2Fa0c",
    status: "available",
  },
  {
    id: "noire",
    label: "IVAR coque noire",
    description: "Réveil parlant gros chiffres avec coque noire.",
    price: "26,40 €",
    image: ivarImgNoir,
    imageAlt: "Réveil parlant IVAR avec gros chiffres et coque noire",
    buyLabel: "Acheter IVAR noir",
    buyAriaLabel: "Acheter le réveil IVAR avec coque noire",
    stripeUrl: "https://buy.stripe.com/5kQ00k7Qi35B7pJdbT2Fa0m",
    status: "available",
  },
];
