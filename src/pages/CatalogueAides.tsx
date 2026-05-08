import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Phone, BookOpen, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import lunettesFocus from "@/assets/products/lunettes-loupes-focus_DMLA.jpg";
import lunettesMaxTv from "@/assets/products/lunettes-loupe_max-tv_grossissement_basse_vision.jpg";
import loupeNoraImg from "@/assets/products/loupe-main-nora-lecture.jpg";
import clipImg from "@/assets/products/clip-lunette-loupe.jpg";
import alvaImg from "@/assets/products/lunette-loupe-frontale-alva-sacoche.jpeg";
import lampeEiraImg from "@/assets/products/lampe-eira-blanche-livre.jpg";
import lampeAstridImg from "@/assets/products/lampe-loupe-astrid-noire.jpg";
import heroBg from "@/assets/aides-lecture-hero.jpg";

// Loupe Amélie : main image from Shopify (real product picture)
const loupeAmelieImg = "https://cdn.shopify.com/s/files/1/0963/4621/0631/files/amelie-main.jpg?v=1773242145";

type Product = {
  name: string;
  usage: string;
  price?: string;
  image: string;
  href: string;
};

type Category = {
  id: string;
  title: string;
  usage: string;
  products: Product[];
  emptyMessage?: string;
};

const categories: Category[] = [
  {
    id: "lunettes-loupes",
    title: "Lunettes loupes",
    usage: "Pour lire, bricoler, coudre ou mieux voir à distance selon le modèle.",
    products: [
      { name: "Lunettes loupe FOCUS", usage: "Pour lire, bricoler ou coudre les mains libres.", price: "89 €", image: lunettesFocus, href: "/boutique/lunettes-loupe-focus" },
      { name: "Lunettes loupe Max-TV", usage: "Pour mieux voir à distance au théâtre, en conférence ou devant un écran.", price: "87 €", image: lunettesMaxTv, href: "/boutique/loupe-max-tv" },
      { name: "Lunette loupe frontale ALVA", usage: "Lunette loupe à LED, 5 grossissements, mains libres.", price: "94 €", image: alvaImg, href: "/boutique/lunettes-loupe-frontale-alva" },
      { name: "Clip lunettes loupe", usage: "Surlunette à clipser sur vos lunettes — grossissement d'appoint.", price: "24,50 €", image: clipImg, href: "/boutique/clip-lunettes-loupe" },
    ],
  },
  {
    id: "loupes-verre",
    title: "Loupes en verre",
    usage: "Des solutions simples et immédiates pour lire un courrier, une étiquette ou un document posé à plat.",
    products: [
      { name: "Loupe à main NORA", usage: "Loupe rectangulaire éclairante x2 et x6, 50 LED réglables.", price: "87,50 €", image: loupeNoraImg, href: "/boutique/loupe-main-nora" },
    ],
    emptyMessage: "Une sélection de loupes en verre sera disponible très prochainement.",
  },
  {
    id: "loupes-electroniques",
    title: "Loupes électroniques",
    usage: "Pour agrandir fortement les textes, améliorer le contraste et retrouver du confort de lecture.",
    products: [
      { name: "Loupe Amélie", usage: "Loupe électronique compacte 3× / 6× / 9× pour la lecture du quotidien.", image: loupeAmelieImg, href: "/boutique/loupe-amelie" },
    ],
  },
  {
    id: "lampes",
    title: "Lampes basse vision",
    usage: "Pour améliorer l'éclairage, réduire la fatigue visuelle et mieux lire au quotidien.",
    products: [
      { name: "Lampe basse vision EIRA", usage: "Lampe pliable, rechargeable, 3 températures de couleur, 100 à 1600 lux.", price: "178 €", image: lampeEiraImg, href: "/boutique/lampe-basse-vision-eira" },
      { name: "Lampe loupe ASTRID", usage: "Lampe loupe à pince, lentille 10,5 cm, x3, LED 6000 lux, 3 températures.", price: "148 €", image: lampeAstridImg, href: "/boutique/lampe-loupe-astrid" },
    ],
  },
  { id: "tele-agrandisseurs", title: "Télé-agrandisseurs", usage: "Pour lire longtemps, écrire, remplir des formulaires et travailler confortablement à domicile.", products: [] },
  { id: "accessoires", title: "Accessoires utiles", usage: "Petits équipements et compléments pour faciliter la lecture, l'organisation et le confort visuel.", products: [] },
];

const CARD_WIDTH = "w-[78vw] sm:w-[320px] md:w-[340px] lg:w-[360px]";

const ProductCard = ({ product }: { product: Product }) => (
  <Card
    variant="elevated"
    className={`${CARD_WIDTH} shrink-0 overflow-hidden flex flex-col group relative transition-all hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary`}
  >
    <Link
      to={product.href}
      className="absolute inset-0 z-10 focus:outline-none"
      aria-label={`Voir le produit ${product.name}`}
    >
      <span className="sr-only">{product.name}</span>
    </Link>
    <div className="aspect-[4/3] bg-muted overflow-hidden">
      <img
        src={product.image}
        alt={`Photo du produit ${product.name}`}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
        loading="lazy"
        width={400}
        height={300}
      />
    </div>
    <CardContent className="p-4 flex flex-col flex-1">
      <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{product.name}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-snug mb-4 flex-1">{product.usage}</p>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        {product.price ? (
          <p className="text-lg md:text-xl font-bold text-primary m-0">{product.price}</p>
        ) : <span />}
        <Button asChild variant="secondary" size="sm" className="relative z-20 ml-auto">
          <Link to={product.href} aria-label={`Voir le produit ${product.name}`}>
            Voir le produit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const EmptyCard = ({ message }: { message?: string }) => (
  <Card variant="outline" className={`${CARD_WIDTH} shrink-0 border-dashed flex flex-col`}>
    <CardContent className="p-5 flex flex-col items-center text-center h-full justify-center min-h-[280px]">
      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
        <Sparkles className="w-6 h-6 text-secondary-foreground" />
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground mb-2">Produits bientôt disponibles</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-snug mb-4">
        {message ?? "Cette catégorie sera complétée prochainement avec une sélection de produits testés et utiles pour la basse vision."}
      </p>
      <Button asChild variant="outline" size="sm">
        <Link to="/contact-conseil">Demander un conseil</Link>
      </Button>
    </CardContent>
  </Card>
);

const CategoryCarousel = ({ cat }: { cat: Category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative">
      {canLeft && (
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Faire défiler vers la gauche"
          className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {canRight && (
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Faire défiler vers la droite"
          className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-3 scroll-smooth snap-x"
      >
        <div className="flex gap-4 md:gap-5 min-w-min pr-8">
          {cat.products.length > 0 ? (
            cat.products.map((p) => (
              <div key={p.name} className="snap-start">
                <ProductCard product={p} />
              </div>
            ))
          ) : (
            <div className="snap-start">
              <EmptyCard message={cat.emptyMessage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CatalogueAides = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Catalogue des aides basse vision | LirElia"
        description="Parcourez le catalogue LirElia : lunettes loupes, loupes en verre, loupes électroniques, lampes adaptées et solutions de lecture pour la basse vision."
        canonicalPath="/catalogue-aides-basse-vision"
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img src={heroBg} alt="Solutions et aides techniques pour la lecture en basse vision" className="w-full h-full object-cover opacity-40" loading="eager" fetchPriority="high" width={1440} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="container relative py-16 lg:py-20">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-primary-foreground/80 flex-wrap mb-6">
              <Link to="/" className="hover:text-secondary transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-primary-foreground font-semibold">Catalogue</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6 animate-fade-in">
                <span className="text-base font-semibold">Aides à la lecture &amp; basse vision</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5 animate-slide-up">
                Catalogue des <span className="text-secondary">aides basse vision</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl animate-slide-up delay-100">
                Parcourez rapidement les solutions pour lire, écrire et gagner en autonomie au quotidien.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact-conseil">
                    <HelpCircle className="w-6 h-6" />
                    Besoin d'aide pour choisir&nbsp;?
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Sticky cat nav */}
        <nav aria-label="Navigation des catégories" className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border shadow-sm">
          <div className="container py-3">
            <div className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
              {categories.map((cat) => (
                <a key={cat.id} href={`#${cat.id}`} className="snap-start shrink-0 inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border-2 border-primary/20 text-sm sm:text-base font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors whitespace-nowrap">
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Categories */}
        <section className="py-8 md:py-10">
          <div className="container space-y-8 md:space-y-10">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-32 border-t-4 border-secondary/40 pt-5">
                <div className="mb-4">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-1">{cat.title}</h2>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground">{cat.usage}</p>
                </div>
                <CategoryCarousel cat={cat} />
              </div>
            ))}
          </div>
        </section>

        {/* Help block */}
        <section className="py-16 bg-muted/40">
          <div className="container">
            <Card variant="primary" className="overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
                  <div className="max-w-2xl">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Vous ne savez pas quel produit choisir ?</h2>
                    <p className="text-lg leading-relaxed text-primary-foreground/90">
                      Chaque situation de basse vision est différente. Si vous hésitez entre plusieurs aides, nous pouvons vous orienter vers la solution la plus adaptée à votre usage : lecture, éclairage, vision de près ou vision de loin.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Button asChild variant="secondary" size="lg">
                      <Link to="/contact-conseil"><Phone className="w-5 h-5" />Demander un conseil</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                      <Link to="/aides-lecture-bassevision"><BookOpen className="w-5 h-5" />Aides à la lecture</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CatalogueAides;
