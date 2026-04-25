import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Phone, BookOpen, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

import lunettesPres from "@/assets/products/lunettes-loupes-pres.jpg";
import lunettesLoin from "@/assets/products/lunettes-loupes-loin.jpg";
import loupeElectroniqueImg from "@/assets/loupe-electronique.jpg";
import heroBg from "@/assets/aides-lecture-hero.jpg";

type Product = {
  name: string;
  usage: string;
  price?: string;
  image: string;
  href: string;
  cta?: string;
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
      {
        name: "Lunettes loupe FOCUS",
        usage: "Pour lire, bricoler ou coudre les mains libres.",
        price: "89 €",
        image: lunettesPres,
        href: "/boutique/lunettes-loupe-focus",
      },
      {
        name: "Loupe Max TV",
        usage: "Pour mieux voir à distance au théâtre, en conférence ou devant un écran.",
        image: lunettesLoin,
        href: "/boutique/loupe-max-tv",
      },
    ],
  },
  {
    id: "loupes-verre",
    title: "Loupes en verre",
    usage: "Des solutions simples et immédiates pour lire un courrier, une étiquette ou un document posé à plat.",
    products: [],
    emptyMessage: "Une sélection de loupes en verre sera disponible très prochainement.",
  },
  {
    id: "loupes-electroniques",
    title: "Loupes électroniques",
    usage: "Pour agrandir fortement les textes, améliorer le contraste et retrouver du confort de lecture.",
    products: [
      {
        name: "Loupe Amélie",
        usage: "Loupe électronique compacte 3× / 6× / 9× pour la lecture du quotidien.",
        image: loupeElectroniqueImg,
        href: "/boutique/loupe-amelie",
      },
    ],
  },
  {
    id: "lampes",
    title: "Lampes basse vision",
    usage: "Pour améliorer l'éclairage, réduire la fatigue visuelle et mieux lire au quotidien.",
    products: [],
  },
  {
    id: "tele-agrandisseurs",
    title: "Télé-agrandisseurs",
    usage: "Pour lire longtemps, écrire, remplir des formulaires et travailler confortablement à domicile.",
    products: [],
  },
  {
    id: "accessoires",
    title: "Accessoires utiles",
    usage: "Petits équipements et compléments pour faciliter la lecture, l'organisation et le confort visuel.",
    products: [],
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <Card variant="elevated" className="w-72 sm:w-80 shrink-0 overflow-hidden flex flex-col">
    <div className="aspect-square bg-muted overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
        loading="lazy"
        width={320}
        height={320}
      />
    </div>
    <CardContent className="p-5 flex flex-col flex-1">
      <h3 className="font-serif text-xl font-bold text-foreground mb-2">{product.name}</h3>
      <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-1">{product.usage}</p>
      {product.price && (
        <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
      )}
      <Button asChild variant="secondary" size="default" className="w-full">
        <Link to={product.href}>
          {product.cta ?? "Voir le produit"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

const EmptyCard = ({ message }: { message?: string }) => (
  <Card variant="outline" className="w-72 sm:w-80 shrink-0 border-dashed flex flex-col">
    <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center min-h-[360px]">
      <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
        <Sparkles className="w-7 h-7 text-secondary-foreground" />
      </div>
      <h3 className="font-serif text-xl font-bold text-foreground mb-3">Produits bientôt disponibles</h3>
      <p className="text-base text-muted-foreground leading-relaxed mb-5">
        {message ?? "Cette catégorie sera complétée prochainement avec une sélection de produits testés et utiles pour la basse vision."}
      </p>
      <Button asChild variant="outline" size="default">
        <Link to="/contact-conseil">Demander un conseil</Link>
      </Button>
    </CardContent>
  </Card>
);

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
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Catalogue</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="container pb-8">
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Catalogue des <span className="text-secondary">aides basse vision</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Retrouvez ici les aides visuelles proposées par LirElia : lunettes loupes, loupes en verre, loupes électroniques, lampes adaptées et solutions de lecture. Cette page vous permet de parcourir rapidement les produits disponibles ou bientôt disponibles.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8">
          <div className="container space-y-12">
            {categories.map((cat) => (
              <div key={cat.id} className="border-t-2 border-border pt-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">{cat.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">{cat.usage}</p>
                  </div>
                  {cat.products.length > 0 && (
                    <p className="text-base text-muted-foreground shrink-0">
                      {cat.products.length} produit{cat.products.length > 1 ? "s" : ""} disponible{cat.products.length > 1 ? "s" : ""}
                    </p>
                  )}
                </div>

                {/* Horizontal scroll band */}
                <div className="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
                  <div className="flex gap-5 min-w-min">
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
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                      Vous ne savez pas quel produit choisir ?
                    </h2>
                    <p className="text-lg leading-relaxed text-primary-foreground/90">
                      Chaque situation de basse vision est différente. Si vous hésitez entre plusieurs aides, nous pouvons vous orienter vers la solution la plus adaptée à votre usage : lecture, éclairage, vision de près ou vision de loin.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Button asChild variant="secondary" size="lg">
                      <Link to="/contact-conseil">
                        <Phone className="w-5 h-5" />
                        Demander un conseil
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                      <Link to="/aides-lecture-bassevision">
                        <BookOpen className="w-5 h-5" />
                        Aides à la lecture
                      </Link>
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
