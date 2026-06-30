import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Phone,
  BookOpen,
  AlertCircle,
  Sparkles,
} from "lucide-react";

import Header from "@/components/layout/Header";
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

import { SITE_URL, buildBreadcrumbJsonLd } from "@/lib/seo";
import type { CatalogueProduct } from "@/data/products/catalogueCategories";

export type ComparisonTable = {
  /** Critère affiché en colonne 1 + ses valeurs par produit (ordre = ordre de `products`). */
  rows: { label: string; values: string[] }[];
};

export type ChoiceCard = {
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
};

export type Benefit = { title: string; text: string };

export type FaqItem = { q: string; a: string };

export type RelatedCategory = {
  title: string;
  text: string;
  href: string;
  label: string;
};

export interface CommercialCategoryPageProps {
  path: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbLabel: string;
  h1: string;
  h1Highlight?: string;
  subtitle: string;
  intro: string;
  guide: { href: string; label: string };

  /** Pas de prix / pas de réassurance commerciale si false. */
  isCommerce?: boolean;

  productsIntro: string;
  productsHeading?: string;
  products: CatalogueProduct[];

  comparison?: ComparisonTable;
  comparisonTitle?: string;
  comparisonIntro?: string;

  choiceCardsTitle?: string;
  choiceCards: ChoiceCard[];

  benefitsTitle: string;
  benefits: Benefit[];

  cautionText: string;

  guideSectionTitle: string;
  guideSectionText: string;

  related: RelatedCategory[];

  faqTitle: string;
  faqItems: FaqItem[];

  finalCtaTitle: string;
  finalCtaText: string;
  /** Boutons « jaunes » (secondary) du CTA final. */
  finalCtaButtons: { label: string; href: string }[];
}

const ProductCardCommercial = ({
  product,
  showPrice,
}: {
  product: CatalogueProduct;
  showPrice: boolean;
}) => (
  <Card
    variant="elevated"
    className="h-full overflow-hidden flex flex-col focus-within:ring-2 focus-within:ring-primary"
  >
    <div className="aspect-[4/3] bg-muted overflow-hidden">
      <img
        src={product.image}
        alt={product.alt}
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
        {showPrice && product.price ? (
          <p
            className="text-2xl font-bold text-primary m-0"
            aria-label={`Prix : ${product.price} TTC`}
          >
            {product.price}
          </p>
        ) : product.status ? (
          <p className="text-base font-semibold text-accent leading-snug m-0">
            {product.status}
          </p>
        ) : (
          <span />
        )}
        <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
          <Link to={product.productUrl}>
            {product.ctaLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const productsGridCols = (n: number) => {
  if (n <= 1) return "grid-cols-1";
  if (n === 2) return "grid-cols-1 md:grid-cols-2";
  if (n === 3) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  // 4+
  return "grid-cols-1 md:grid-cols-2";
};

const CommercialCategoryPage = (props: CommercialCategoryPageProps) => {
  const {
    path,
    seoTitle,
    seoDescription,
    breadcrumbLabel,
    h1,
    h1Highlight,
    subtitle,
    intro,
    guide,
    isCommerce = true,
    productsIntro,
    productsHeading = "Nos produits",
    products,
    comparison,
    comparisonTitle = "Comparer les modèles",
    comparisonIntro,
    choiceCardsTitle = "Quel modèle choisir ?",
    choiceCards,
    benefitsTitle,
    benefits,
    cautionText,
    guideSectionTitle,
    guideSectionText,
    related,
    faqTitle,
    faqItems,
    finalCtaTitle,
    finalCtaText,
    finalCtaButtons,
  } = props;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    {
      name: "Catalogue des aides basse vision",
      path: "/catalogue-aides-basse-vision",
    },
    { name: breadcrumbLabel, path },
  ]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: breadcrumbLabel,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${p.productUrl}`,
      name: p.name,
    })),
  };

  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  const jsonLd = [breadcrumbJsonLd, itemListJsonLd, ...(faqJsonLd ? [faqJsonLd] : [])];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={path}
        jsonLd={jsonLd}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative bg-primary overflow-hidden">
          <div className="container relative py-12 md:py-16">
            <nav
              aria-label="Fil d'Ariane"
              className="flex items-center gap-2 text-base text-primary-foreground/80 flex-wrap mb-6"
            >
              <Link to="/" className="hover:text-secondary transition-colors">
                Accueil
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                to="/catalogue-aides-basse-vision"
                className="hover:text-secondary transition-colors"
              >
                Catalogue des aides basse vision
              </Link>
              <span aria-hidden="true">/</span>
              <span
                className="text-primary-foreground font-semibold"
                aria-current="page"
              >
                {breadcrumbLabel}
              </span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
                {h1}
                {h1Highlight ? (
                  <>
                    {" "}
                    <span className="text-secondary">{h1Highlight}</span>
                  </>
                ) : null}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-5">
                {subtitle}
              </p>
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-6 max-w-3xl">
                {intro}
              </p>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10"
              >
                <Link to={guide.href}>
                  <BookOpen className="w-5 h-5" />
                  {guide.label}
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* PRODUITS */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                {productsHeading}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {productsIntro}
              </p>
            </div>
            <div className={`grid gap-6 md:gap-8 ${productsGridCols(products.length)}`}>
              {products.map((p) => (
                <ProductCardCommercial
                  key={p.productUrl}
                  product={p}
                  showPrice={isCommerce}
                />
              ))}
            </div>
          </div>
        </section>

        {/* COMPARAISON — cartes verticales accessibles (responsive sans scroll horizontal) */}
        {comparison && products.length >= 2 ? (
          <section className="py-12 md:py-16 bg-muted/40">
            <div className="container">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {comparisonTitle}
              </h2>
              {comparisonIntro ? (
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {comparisonIntro}
                </p>
              ) : (
                <div className="mb-8" />
              )}
              <div
                className={`grid gap-6 ${
                  products.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : products.length === 3
                    ? "grid-cols-1 md:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
                {products.map((p, idx) => (
                  <article
                    key={p.productUrl}
                    className="rounded-2xl border-2 border-border bg-card p-6 shadow-card"
                  >
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">
                      {p.name}
                    </h3>
                    <dl className="divide-y divide-border">
                      {comparison.rows.map((row) => (
                        <div
                          key={row.label}
                          className="py-3 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-4"
                        >
                          <dt className="text-base font-semibold text-foreground">
                            {row.label}
                          </dt>
                          <dd className="text-base text-muted-foreground">
                            {row.values[idx] ?? "—"}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <Button
                      asChild
                      variant="secondary"
                      size="lg"
                      className="mt-5 w-full sm:w-auto"
                    >
                      <Link to={p.productUrl}>
                        Voir la fiche
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* QUEL MODÈLE CHOISIR */}
        {choiceCards.length > 0 ? (
          <section className="py-12 md:py-16">
            <div className="container">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                {choiceCardsTitle}
              </h2>
              <div
                className={`grid gap-6 mb-8 ${
                  choiceCards.length >= 3
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
                {choiceCards.map((c) => (
                  <Card key={c.title} variant="default" className="p-6">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">
                      {c.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                      {c.text}
                    </p>
                    <Button asChild variant="secondary">
                      <Link to={c.href}>
                        {c.ctaLabel}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
              <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-5 md:p-6 flex items-start gap-4">
                <AlertCircle
                  className="w-6 h-6 text-accent shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-base md:text-lg text-foreground leading-relaxed mb-3">
                    {cautionText}
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/contact-conseil">
                      <Phone className="w-5 h-5" />
                      Demander un conseil
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* BÉNÉFICES */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              {benefitsTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border-2 border-border bg-card p-5 shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary-foreground flex items-center justify-center mb-3">
                    <Sparkles className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {b.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-snug">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RÉASSURANCE — uniquement si vente */}
        {isCommerce ? (
          <section className="py-12 md:py-16">
            <div className="container">
              <ProductTrustGrid />
            </div>
          </section>
        ) : null}

        {/* GUIDE */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {guideSectionTitle}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              {guideSectionText}
            </p>
            <Button asChild variant="default" size="lg">
              <Link to={guide.href}>
                <BookOpen className="w-5 h-5" />
                {guide.label}
              </Link>
            </Button>
          </div>
        </section>

        {/* DÉCOUVREZ ÉGALEMENT */}
        {related.length > 0 ? (
          <section className="py-12 md:py-16">
            <div className="container">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Découvrez également
              </h2>
              <div
                className={`grid gap-6 ${
                  related.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {related.map((r) => (
                  <Card key={r.href} variant="elevated" className="p-6 flex flex-col">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">
                      {r.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 flex-1">
                      {r.text}
                    </p>
                    <Button asChild variant="secondary" className="mt-auto self-start">
                      <Link to={r.href}>
                        {r.label}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* FAQ */}
        {faqItems.length > 0 ? (
          <section className="py-12 md:py-16 bg-muted/40">
            <div className="container max-w-4xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                {faqTitle}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-2 border-border rounded-xl px-5 bg-card"
                  >
                    <AccordionTrigger className="text-left font-serif text-lg md:text-xl font-bold text-foreground hover:no-underline py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        ) : null}

        {/* CTA FINAL */}
        <section className="py-16 bg-primary">
          <div className="container max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {finalCtaTitle}
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
              {finalCtaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch flex-wrap">
              {finalCtaButtons.map((b) => (
                <Button key={b.href + b.label} asChild variant="secondary" size="lg">
                  <Link to={b.href}>
                    {b.label}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              ))}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10"
              >
                <Link to="/contact-conseil">
                  <Phone className="w-5 h-5" />
                  Demander un conseil
                </Link>
              </Button>
            </div>
            <div className="mt-8">
              <Link
                to="/catalogue-aides-basse-vision"
                className="inline-flex items-center gap-2 text-base text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour au catalogue
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommercialCategoryPage;
