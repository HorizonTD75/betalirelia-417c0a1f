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



  return (
    <div className="min-h-screen">
      <SEOHead
        title="Loupes en verre pour malvoyants et basse vision | LirElia"
        description="Découvrez les loupes en verre LirElia pour agrandir textes, courriers et détails. Comparez nos modèles à main et nos loupes dôme éclairantes."
        canonicalPath={PAGE_PATH}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="relative bg-primary overflow-hidden">
          <div className="container relative py-12 md:py-16">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-primary-foreground/80 flex-wrap mb-6">
              <Link to="/" className="hover:text-secondary transition-colors">Accueil</Link>
              <span aria-hidden="true">/</span>
              <Link to="/catalogue-aides-basse-vision" className="hover:text-secondary transition-colors">
                Catalogue des aides basse vision
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-primary-foreground font-semibold" aria-current="page">Loupes en verre</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
                Loupes en verre <span className="text-secondary">pour la basse vision</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-5">
                Des loupes simples et immédiatement utilisables pour agrandir les textes et les détails du quotidien.
              </p>
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-6 max-w-3xl">
                Découvrez les loupes en verre sélectionnées par LirElia pour faciliter les petites lectures du quotidien. Loupe à main éclairante ou loupe dôme à poser : comparez les modèles disponibles, leurs grossissements et leurs principales caractéristiques.
              </p>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10"
              >
                <Link to="/aides-lecture-bassevision/loupes-verre">
                  <BookOpen className="w-5 h-5" />
                  Comprendre les différents types de loupes
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* PRODUITS */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                Nos loupes en verre
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Deux formats complémentaires sont actuellement proposés : une loupe à main pour les consultations ponctuelles et une loupe dôme stable à poser directement sur le document.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <ProductCardCommercial product={nora} ctaLabel="Découvrir la loupe NORA" />
              <ProductCardCommercial product={lina} ctaLabel="Découvrir la loupe LINA" />
            </div>
          </div>
        </section>

        {/* COMPARAISON — cartes verticales accessibles */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Comparer les loupes NORA et LINA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[nora, lina].map((p) => (
                <article key={p.slug} className="rounded-2xl border-2 border-border bg-card p-6 shadow-card">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">{p.name}</h3>
                  <dl className="divide-y divide-border">
                    {[
                      ["Format", p.productType],
                      ["Grossissement", p.magnification],
                      ["Éclairage", p.lighting],
                      ["Alimentation", p.powerSupply],
                      ["Usage principal", p.mainUses],
                      ["Prix TTC", p.price],
                    ].map(([label, value]) => (
                      <div key={label} className="py-3 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4">
                        <dt className="text-base font-semibold text-foreground">{label}</dt>
                        <dd className="text-base text-muted-foreground">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <Button asChild variant="secondary" size="lg" className="mt-5 w-full sm:w-auto">
                    <Link to={p.productUrl}>
                      Voir la fiche {p.slug === "loupe-main-nora" ? "NORA" : "LINA"}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* QUELLE LOUPE CHOISIR */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Quelle loupe choisir ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card variant="default" className="p-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">
                  Loupe NORA : pour une utilisation à main
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                  La loupe NORA convient particulièrement pour consulter rapidement un courrier, une étiquette, une notice ou un détail. Sa grande lentille permet de voir une zone relativement large, tandis que la petite lentille offre un grossissement plus important pour les très petits caractères.
                </p>
                <Button asChild variant="secondary">
                  <Link to={nora.productUrl}>Voir la loupe NORA<ArrowRight className="w-5 h-5" /></Link>
                </Button>
              </Card>
              <Card variant="default" className="p-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">
                  Loupe LINA : pour davantage de stabilité
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                  La loupe LINA se pose directement sur le document. Elle convient particulièrement aux personnes qui fatiguent en tenant une loupe ou qui recherchent une image plus stable pour lire un courrier, une facture, une notice ou faire des mots croisés.
                </p>
                <Button asChild variant="secondary">
                  <Link to={lina.productUrl}>Voir la loupe LINA<ArrowRight className="w-5 h-5" /></Link>
                </Button>
              </Card>
            </div>
            <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-5 md:p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-accent shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p className="text-base md:text-lg text-foreground leading-relaxed mb-3">
                  Le grossissement le plus élevé n'est pas toujours le plus confortable. Lorsque le grossissement augmente, la zone visible devient généralement plus petite. En cas de doute, LirElia peut vous aider à comparer les solutions.
                </p>
                <Button asChild variant="outline">
                  <Link to="/contact-conseil">
                    <Phone className="w-5 h-5" />Demander un conseil
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BÉNÉFICES */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Pourquoi choisir une loupe en verre ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border-2 border-border bg-card p-5 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary-foreground flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-base text-muted-foreground leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RÉASSURANCE */}
        <section className="py-12 md:py-16">
          <div className="container">
            <ProductTrustGrid />
          </div>
        </section>

        {/* LIEN GUIDE */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Besoin de mieux comprendre les différents modèles ?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              La page conseil consacrée aux loupes en verre explique plus en détail les différences entre loupe à main, loupe rectangulaire, loupe dôme et loupe règle, ainsi que l'influence du grossissement, du champ visible et de l'éclairage.
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/aides-lecture-bassevision/loupes-verre">
                <BookOpen className="w-5 h-5" />
                Consulter le guide sur les loupes en verre
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Questions fréquentes sur les loupes en verre
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

        {/* CTA FINAL */}
        <section className="py-16 bg-primary">
          <div className="container max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Découvrez nos loupes en verre
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Consultez les fiches détaillées de NORA et LINA pour comparer leurs caractéristiques et choisir le format correspondant le mieux à votre utilisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
              <Button asChild variant="secondary" size="lg">
                <Link to={nora.productUrl}>Découvrir NORA<ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to={lina.productUrl}>Découvrir LINA<ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                <Link to="/contact-conseil"><Phone className="w-5 h-5" />Demander un conseil</Link>
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

export default LoupesVerreCategorie;
