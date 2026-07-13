import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import paiementSecurise from "@/assets/paiement-securise-stripe-cartes-france.webp";

const items = [
  {
    icon: ShieldCheck,
    label: "Vos garanties d'achat",
    href: "/cgv",
  },
  {
    icon: Truck,
    label: "Livraison gratuite en France métropolitaine",
    href: "/livraison",
  },
  {
    icon: RotateCcw,
    label: "Retour sous 14 jours et remboursement",
    href: "/retours-remboursements",
  },
];

const ProductTrustBanner = () => (
  <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-3 sm:p-4 space-y-3">
    <img
      src={paiementSecurise}
      alt="Cartes CB, Visa, Mastercard et American Express acceptées — paiement sécurisé via Stripe"
      width={2035}
      height={263}
      loading="lazy"
      decoding="async"
      className="block w-full h-auto max-w-full rounded-md"
    />
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
      {items.map(({ icon: Icon, label, href }) => (
        <li key={label}>
          <Link
            to={href}
            className="flex items-center gap-2 rounded-lg p-2 -m-2 hover:bg-primary/10 focus-visible:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-sm sm:text-base font-semibold text-foreground leading-tight underline-offset-4 hover:underline">
              {label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductTrustBanner;
