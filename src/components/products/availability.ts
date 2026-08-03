export type AvailabilityStatus = "available" | "out_of_stock" | "discontinued" | "coming_soon";

export interface AvailabilityMeta {
  badge: string;
  /** Badge visual style (semantic tokens only). */
  badgeClass: string;
  /** Label used on the (disabled) purchase button. */
  buttonLabel: string;
  /** Explanatory message shown near the purchase area. */
  message?: string;
  purchasable: boolean;
}

export const AVAILABILITY: Record<AvailabilityStatus, AvailabilityMeta> = {
  available: {
    badge: "Disponible",
    badgeClass: "bg-accent/20 text-accent-foreground border-accent/50",
    buttonLabel: "Acheter ce produit",
    purchasable: true,
  },
  out_of_stock: {
    badge: "Rupture temporaire",
    badgeClass: "bg-destructive/15 text-destructive border-destructive/40",
    buttonLabel: "Produit temporairement indisponible",
    message:
      "Ce produit est momentanément en rupture de stock. Il sera de nouveau proposé dès réapprovisionnement.",
    purchasable: false,
  },
  discontinued: {
    badge: "Produit non disponible",
    badgeClass: "bg-muted text-muted-foreground border-border",
    buttonLabel: "Produit non disponible",
    message:
      "Ce produit n'est plus proposé. Nous vous invitons à découvrir les autres produits de la même catégorie.",
    purchasable: false,
  },
  coming_soon: {
    badge: "Bientôt disponible",
    badgeClass: "bg-secondary/25 text-secondary-foreground border-secondary/50",
    buttonLabel: "Bientôt disponible",
    message: "Ce produit sera bientôt disponible sur LirElia.",
    purchasable: false,
  },
};

export interface ProductVariant {
  id: string;
  /** Colour or option name written out in full. */
  label: string;
  /** Visual hint (CSS colour token or hex) for the option. */
  swatch?: string;
  /** Variant photo shown on the variant card. */
  image?: string;
  /** Accessible description of the variant photo. */
  imageAlt?: string;
  /** Short sentence describing the variant. */
  description?: string;
  /** Formatted price, e.g. "26,40 €". */
  price?: string;
  stripeUrl?: string;
  buyLabel: string;
  /** Explicit aria-label for the purchase link. */
  buyAriaLabel?: string;
  status: AvailabilityStatus;
}


/** Aggregate status of a product from its variants. */
export const aggregateStatus = (variants: ProductVariant[]): AvailabilityStatus => {
  if (variants.some((v) => v.status === "available")) return "available";
  if (variants.some((v) => v.status === "coming_soon")) return "coming_soon";
  if (variants.every((v) => v.status === "discontinued")) return "discontinued";
  return "out_of_stock";
};
