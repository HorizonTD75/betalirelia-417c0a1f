/**
 * Books published by LirElia — only fields visible and verified on the page.
 *
 * RULE: no offer, price, format, page count or ISBN unless confirmed.
 * ASIN is an Amazon identifier, never an ISBN.
 */

import bookAidants from "@/assets/livre-aider-proche.jpg";
import bookDmla from "@/assets/livre-dmla-votre-vie.jpg";

export interface BookInfo {
  path: string;
  name: string;
  alternativeHeadline?: string;
  description: string;
  image: string;
  numberOfPages?: number;
  bookFormat?: "https://schema.org/EBook" | "https://schema.org/Paperback";
  /** External retailer page, when a link is displayed. */
  sameAs?: string;
  /** Amazon Standard Identification Number (not an ISBN). */
  asin?: string;
  /** Self-published (Amazon KDP): the author is also the publisher. */
  selfPublished?: boolean;
}

export const BOOKS: Record<string, BookInfo> = {
  "/livre-dmla-votre-vie-ne-sarrete-pas": {
    path: "/livre-dmla-votre-vie-ne-sarrete-pas",
    name: "DMLA – Votre vie ne s'arrête pas",
    alternativeHeadline: "Comprendre la DMLA, s’équiper, s’organiser… et garder le moral",
    description:
      "Un guide pratique pour les personnes atteintes de DMLA : comprendre la maladie, s’équiper en aides à la lecture, organiser son quotidien et garder le moral.",
    image: bookDmla,
    sameAs: "https://www.amazon.fr/dp/B0GY8312XT",
    asin: "B0GY8312XT",
    selfPublished: true,
  },
  "/livre-aider-proche-dmla": {
    path: "/livre-aider-proche-dmla",
    name: "DMLA – Aider un proche sans s'épuiser",
    alternativeHeadline: "Guide pratique des aidants pour comprendre la basse vision et préserver l’autonomie",
    description:
      "Le guide pratique des aidants : comprendre la basse vision d’un proche atteint de DMLA, l’accompagner au quotidien et préserver son autonomie sans s’épuiser.",
    image: bookAidants,
    sameAs: "https://www.amazon.fr/dp/B0HNGMNBQ1",
    asin: "B0HNGMNBQ1",
  },
};

export const getBook = (path: string): BookInfo | undefined => BOOKS[path];
