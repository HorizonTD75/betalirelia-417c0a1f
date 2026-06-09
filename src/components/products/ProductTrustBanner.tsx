import { Lock, Truck, RotateCcw, Eye } from "lucide-react";

const items = [
  { icon: Lock, label: "Paiement sécurisé par Stripe" },
  { icon: Truck, label: "Livraison gratuite en France métropolitaine" },
  { icon: RotateCcw, label: "Retour sous 14 jours" },
  { icon: Eye, label: "Conseil basse vision" },
];

const ProductTrustBanner = () => (
  <div className="rounded-xl border-2 border-primary/20 bg-primary/5 px-3 py-2.5 sm:px-4 sm:py-3">
    <ul className="grid grid-cols-2 gap-x-3 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2 min-w-0">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-sm sm:text-base font-semibold text-foreground leading-tight truncate">{label}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductTrustBanner;
