import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

type Item = {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
  href: string;
  accent: "primary" | "secondary";
};

const trustItems: Item[] = [
  {
    icon: ShieldCheck,
    title: "Vos garanties d'achat",
    text: "Conditions générales de vente claires : paiement sécurisé, garanties et service après-vente.",
    href: "/cgv",
    accent: "primary",
  },
  {
    icon: Truck,
    title: "Livraison gratuite en France métropolitaine",
    text: "Préparation et expédition après validation du paiement, environ 5 jours ouvrés.",
    href: "/livraison",
    accent: "secondary",
  },
  {
    icon: RotateCcw,
    title: "Retour sous 14 jours et remboursement",
    text: "Vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation.",
    href: "/retours-remboursements",
    accent: "primary",
  },
];

const ProductTrustGrid = () => (
  <div className="grid gap-3 sm:grid-cols-3">
    {trustItems.map(({ icon: Icon, title, text, href, accent }) => {
      const isPrimary = accent === "primary";
      return (
        <Link
          key={title}
          to={href}
          className={`block rounded-xl border-2 p-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            isPrimary
              ? "border-primary/30 bg-primary/5 hover:bg-primary/10"
              : "border-secondary/40 bg-secondary/10 hover:bg-secondary/20"
          }`}
        >
          <div
            className={`mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg ${
              isPrimary ? "bg-primary/10 text-primary" : "bg-secondary/20 text-secondary-foreground"
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="text-base font-bold leading-snug text-foreground underline-offset-4 hover:underline">{title}</p>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">{text}</p>
        </Link>
      );
    })}
  </div>
);

export default ProductTrustGrid;
