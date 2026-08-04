import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard, { type Product } from "./ProductCard";
import type { LucideIcon } from "lucide-react";
import { getHeroSrcSet } from "@/lib/heroSrcSet";

interface BuyingCriteria {
  title: string;
  description: string;
}

interface CategoryPageProps {
  icon: LucideIcon;
  heroImage: string;
  /** Optional descriptive alt for the hero image (accessibility). */
  heroImageAlt?: string;
  /** Intrinsic width of the hero image. Defaults to 1920. */
  heroImageWidth?: number;
  /** Intrinsic height of the hero image. Defaults to 1080. */
  heroImageHeight?: number;
  title: string;
  subtitle: string;
  intro: string;
  semanticKeywords: string;
  products: Product[];
  buyingGuide: {
    title: string;
    intro: string;
    criteria: BuyingCriteria[];
  };
  ctaText: string;
  /** Text for the hero CTA button */
  heroCta?: string;
  /** Text for the bottom CTA button */
  bottomCta?: string;
  /** Subject pre-fill for contact-conseil */
  contactSubject?: string;
  /** Optional CTA to the matching commercial catalogue category. */
  catalogueCta?: {
    title: string;
    text: string;
    label: string;
    href: string;
  };
  seo: {
    title: string;
    description: string;
    canonicalPath?: string;
  };
}

const CategoryPageLayout = ({
  icon: Icon,
  heroImage,
  heroImageAlt,
  heroImageWidth = 1920,
  heroImageHeight = 1080,
  title,
  subtitle,
  intro,
  semanticKeywords,
  products,
  buyingGuide,
  ctaText,
  heroCta,
  bottomCta,
  contactSubject,
  catalogueCta,
  seo,
}: CategoryPageProps) => {
  const subject = contactSubject || title.toLowerCase();
  const heroCtaText = heroCta || ctaText;
  const bottomCtaText = bottomCta || `Demandez-nous des informations sur les ${title.toLowerCase()}`;

export default CategoryPageLayout;
