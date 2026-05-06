import { Lock, Truck, RotateCcw, Eye } from "lucide-react";

type Item = {
  icon: typeof Lock;
  title: string;
  text: string;
  accent: "primary" | "secondary";
};

const trustItems: Item[] = [
  {
    icon: Lock,
    title: "Paiement sécurisé",
    text: "Paiement par carte bancaire via Stripe, transaction sécurisée.",
    accent: "primary",
  },
  {
    icon: Truck,
    title: "Expédition rapide",
    text: "Préparation et expédition sous 48 h ouvrées selon disponibilité.",
    accent: "secondary",
  },
  {
    icon: RotateCcw,
    title: "Retour sous 15 jours",
    text: "Vous disposez d'un délai de retour si le produit ne vous convient pas.",
    accent: "primary",
  },
  {
    icon: Eye,
    title: "Conseil basse vision",
    text: "Des produits sélectionnés pour la lecture, le confort visuel et l'autonomie.",
    accent: "secondary",
  },
];

const ProductTrustGrid = () => (
  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
    {trustItems.map(({ icon: Icon, title, text, accent }) => {
      const isPrimary = accent === "primary";
      return (
        <div
          key={title}
          className={`rounded-xl border-2 p-4 ${
            isPrimary
              ? "border-primary/30 bg-primary/5"
              : "border-secondary/40 bg-secondary/10"
          }`}
        >
          <div
            className={`mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg ${
              isPrimary ? "bg-primary/10 text-primary" : "bg-secondary/20 text-secondary-foreground"
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="text-base font-bold leading-snug text-foreground">{title}</p>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">{text}</p>
        </div>
      );
    })}
  </div>
);

export default ProductTrustGrid;
