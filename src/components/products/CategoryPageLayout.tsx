import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard, { type Product } from "./ProductCard";
import type { LucideIcon } from "lucide-react";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/lib/seo";
import { getHeroSrcSet } from "@/lib/heroSrcSet";

interface BuyingCriteria {
  title: string;
  description: string;
}

interface CategoryPageProps {
  icon: LucideIcon;
  heroImage: string;
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

  const pageUrl = seo.canonicalPath ? `${SITE_URL}${seo.canonicalPath}` : SITE_URL;
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: seo.title,
    description: seo.description,
    isPartOf: { "@id": "https://lirelia.fr/#website" },
    publisher: { "@id": "https://lirelia.fr/#organization" },
    inLanguage: "fr-FR",
  };
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Aides à la lecture basse vision", path: "/aides-lecture-bassevision" },
    { name: title, path: seo.canonicalPath ?? "/" },
  ]);
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.shopLink ? `${SITE_URL}${p.shopLink}` : pageUrl,
      ...(p.image ? { image: p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}` } : {}),
    })),
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        jsonLd={[collectionJsonLd, breadcrumbJsonLd, itemListJsonLd]}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0">
            {(() => {
              const v = getHeroSrcSet(heroImage);
              return (
                <img
                  src={v?.src ?? heroImage}
                  srcSet={v?.srcSet}
                  sizes="100vw"
                  alt=""
                  className="w-full h-full object-cover opacity-20"
                  aria-hidden="true"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={heroImageWidth}
                  height={heroImageHeight}
                />
              );
            })()}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-5xl">
              <Link
                to="/aides-lecture-bassevision"
                className="inline-flex items-center gap-2 text-base text-primary-foreground/80 hover:text-primary-foreground mb-5 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour aux aides à la lecture
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                  <span className="text-secondary">{title}</span>
                </h1>
              </div>
              <p className="font-serif text-xl md:text-2xl text-primary-foreground/90 mb-5 font-semibold">
                {subtitle}
              </p>
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-6 max-w-3xl">
                {intro}
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to={`/contact-conseil?produit=${encodeURIComponent(subject)}`}>
                  {heroCtaText}
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
          </svg>
          </div>
        </section>

        {/* PRODUCTS GRID — fond crème pour rythmer */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/40 text-sm font-semibold mb-4">
                Notre sélection
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Des produits choisis avec soin
              </h2>
              <p className="text-xl text-muted-foreground">
                Des produits choisis pour leur qualité, leur ergonomie et leur adaptation aux besoins des personnes malvoyantes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* BUYING GUIDE — fond clair + cartes alternées colorées */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent border border-accent/30 text-sm font-semibold mb-4">
                  Guide d'achat
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {buyingGuide.title}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {buyingGuide.intro}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {buyingGuide.criteria.map((c, i) => {
                  const tints = [
                    "bg-accent/5 border-accent/30",
                    "bg-secondary/10 border-secondary/40",
                    "bg-primary/5 border-primary/30",
                    "bg-muted border-border",
                  ];
                  const tint = tints[i % tints.length];
                  return (
                    <div key={i} className={`rounded-2xl border-2 p-6 shadow-sm ${tint}`}>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                        <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                        {c.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{c.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Besoin d'un conseil personnalisé ?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Chaque situation visuelle est unique. Contactez-nous pour un échange gratuit 
                et sans engagement — nous vous aiderons à trouver la solution la plus adaptée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
                <Button variant="default" size="lg" className="text-xl whitespace-normal text-center h-auto py-3" asChild>
                  <Link to={`/contact-conseil?produit=${encodeURIComponent(subject)}`}>
                    {bottomCtaText}
                    <ArrowRight className="w-6 h-6 shrink-0" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="whitespace-normal text-center h-auto py-3" asChild>
                  <Link to="/aides-lecture-bassevision">
                    <ArrowLeft className="w-5 h-5 shrink-0" />
                    Toutes les aides à la lecture
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPageLayout;
