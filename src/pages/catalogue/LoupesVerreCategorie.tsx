import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, Zap, Eye, PackageOpen, Clock, BookOpen, Phone, AlertCircle } from "lucide-react";

import Header from "@/components/layout/Header";
import { FAQ_BY_ROUTE } from "@/lib/structuredData/faq";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductTrustGrid from "@/components/products/ProductTrustGrid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { LOUPES_VERRE_PRODUCTS, type LoupeVerreProduct } from "@/data/products/loupesVerre";

const PAGE_PATH = "/catalogue-aides-basse-vision/loupes-verre";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const faqItems = FAQ_BY_ROUTE["/catalogue-aides-basse-vision/loupes-verre"];

const benefits = [
  {
    icon: Zap,
    title: "Utilisation immédiate",
    text: "Aucun menu ni réglage complexe : la loupe peut être utilisée dès sa prise en main.",
  },
  {
    icon: Eye,
    title: "Image optique naturelle",
    text: "Le document est observé directement à travers la lentille, sans écran électronique.",
  },
  {
    icon: PackageOpen,
    title: "Format compact",
    text: "Une loupe optique se range facilement à proximité de l'endroit où elle est utilisée.",
  },
  {
    icon: Clock,
    title: "Adaptée aux lectures ponctuelles",
    text: "Pour consulter un courrier, une étiquette, une notice, un prix ou un détail pendant quelques instants.",
  },
];

const ProductCardCommercial = ({
  product,
  ctaLabel,
}: {
  product: LoupeVerreProduct;
  ctaLabel: string;
}) => (
  <Card
    variant="elevated"
    className="h-full overflow-hidden flex flex-col focus-within:ring-2 focus-within:ring-primary"
  >
    <div className="aspect-[4/3] bg-muted overflow-hidden">
      <img
        src={product.mainImage}
        alt={product.imageAlt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        width={800}
        height={600}
      />
    </div>
    <CardContent className="p-5 flex flex-col flex-1">
      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
        {product.name}
      </h3>
      <p className="text-base md:text-lg text-muted-foreground leading-snug mb-4">
        {product.shortDescription}
      </p>
      <ul className="space-y-2 mb-5">
        {product.keyFeatures.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2 text-base text-foreground">
            <Check className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-2xl font-bold text-primary m-0" aria-label={`Prix : ${product.price} TTC`}>
          {product.price}
        </p>
        <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
          <Link to={product.productUrl}>
            {ctaLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const LoupesVerreCategorie = () => {
  const [nora, lina] = LOUPES_VERRE_PRODUCTS;

export default LoupesVerreCategorie;
