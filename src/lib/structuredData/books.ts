/**
 * Books published by LirElia — only fields visible and verified on the page.
 *
 * RULE: no offer, no price, no availability unless a price is displayed on
 * LirElia itself. The upcoming caregiver book carries no commercial data.
 */

import bookAidants from "@/assets/book-aidant.jpg";
import bookDmla from "@/assets/couverture-ebook-dmla.jpg";

export interface BookInfo {
  path: string;
  name: string;
  description: string;
  image: string;
  /** Visible page count, when displayed. */
  numberOfPages?: number;
  /** Visible format, e.g. "Kindle" (EBook) or "Paperback". */
  bookFormat?: "https://schema.org/EBook" | "https://schema.org/Paperback";
  /** External retailer page, when a link is displayed. */
  sameAs?: string;
}

export const BOOKS: Record<string, BookInfo> = {
  "/livre-dmla-votre-vie-ne-sarrete-pas": {
    path: "/livre-dmla-votre-vie-ne-sarrete-pas",
    name: "DMLA — Votre vie ne s'arrête pas",
    description:
      "170 pages de solutions concrètes pour vivre avec la DMLA : adapter son quotidien, s'équiper en aides à la lecture et retrouver l'autonomie.",
    image: bookDmla,
    numberOfPages: 170,
    bookFormat: "https://schema.org/EBook",
    sameAs: "https://www.amazon.fr/dp/B0GXS47Q9B",
  },
  "/livre-aider-proche-dmla": {
    path: "/livre-aider-proche-dmla",
    name: "Aider un proche atteint de DMLA",
    description:
      "Le guide des aidants : comprendre la DMLA de votre proche, l'accompagner au quotidien et préserver votre propre équilibre émotionnel.",
    image: bookAidants,
  },
};

export const getBook = (path: string): BookInfo | undefined => BOOKS[path];
