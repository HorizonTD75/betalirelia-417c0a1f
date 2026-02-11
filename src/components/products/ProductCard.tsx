import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export interface Product {
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  features: string[];
  idealFor: string[];
  priceRange?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card variant="elevated" className="h-full flex flex-col">
      <div className="rounded-t-2xl overflow-hidden border-b-2 border-border">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        {product.priceRange && (
          <span className="text-lg font-semibold text-primary">{product.priceRange}</span>
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
      <CardFooter>
        <Button variant="outline" className="w-full">
          Être conseillé(e)
          <ArrowRight className="w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
