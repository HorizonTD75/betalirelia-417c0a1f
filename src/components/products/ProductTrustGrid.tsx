import { CreditCard, Gift, RotateCcw, Truck } from "lucide-react";

const trustItems = [
  {
    icon: CreditCard,
    title: "Paiement sécurisé",
    text: "Visa, MasterCard, PayPal",
  },
  {
    icon: Truck,
    title: "Expédition sous 48 h",
    text: "en France métropolitaine",
  },
  {
    icon: Gift,
    title: "Livraison gratuite",
    text: "à partir de 100 € d'achat en France métropolitaine",
  },
  {
    icon: RotateCcw,
    title: "Retour accepté sous 15 jours",
    text: "si le produit ne convient pas",
  },
];

const ProductTrustGrid = () => (
  <div className="grid gap-4 sm:grid-cols-2">
    {trustItems.map(({ icon: Icon, title, text }) => (
      <div key={title} className="rounded-2xl border-2 border-border bg-muted p-5">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="text-lg font-bold leading-snug text-foreground">{title}</p>
        <p className="mt-1 text-base leading-relaxed text-muted-foreground">{text}</p>
      </div>
    ))}
  </div>
);

export default ProductTrustGrid;