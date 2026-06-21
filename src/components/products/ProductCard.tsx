import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { getHeroSrcSet } from "@/lib/heroSrcSet";

export interface Product {
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  /** Intrinsic image width in pixels. Defaults to 800. */
  imageWidth?: number;
  /** Intrinsic image height in pixels. Defaults to 800. */
  imageHeight?: number;
  description: string;
  features: string[];
  idealFor: string[];
  priceRange?: string;
  shopLink?: string;
  shopLabel?: string;
  secondaryShopLink?: string;
  secondaryShopLabel?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const w = product.imageWidth ?? 800;
  const h = product.imageHeight ?? 800;
  return (
    <Card variant="elevated" className="h-full flex flex-col border-t-4 border-t-secondary overflow-hidden">
      <div className="rounded-t-2xl overflow-hidden border-b-2 border-border bg-muted/30 aspect-[400/224]">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={w}
          height={h}
        />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        {product.priceRange && (
          <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-secondary/25 text-secondary-foreground border border-secondary/40 text-base font-bold">
            {product.priceRange}
          </span>
        )}
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {product.description}
        </p>
        <div>
          <h4 className="font-serif text-lg font-bold text-foreground mb-2">Caractéristiques</h4>
          <ul className="space-y-2">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-base">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold text-foreground mb-2">Idéal pour</h4>
          <ul className="space-y-1">
            {product.idealFor.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-base text-muted-foreground">
                <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        {product.shopLink && (
          <Button variant="secondary" className="w-full" asChild>
            <Link to={product.shopLink}>
              <ShoppingBag className="w-5 h-5" />
              {product.shopLabel || "Voir le produit"}
            </Link>
          </Button>
        )}
        {product.secondaryShopLink && (
          <Button variant="secondary" className="w-full" asChild>
            <Link to={product.secondaryShopLink}>
              <ShoppingBag className="w-5 h-5" />
              {product.secondaryShopLabel || "Voir le produit"}
            </Link>
          </Button>
        )}
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/contact-conseil?produit=${product.slug}`}>
            Être conseillé(e)
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
