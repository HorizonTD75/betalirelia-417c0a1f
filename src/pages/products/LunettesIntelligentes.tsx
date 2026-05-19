import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const LunettesIntelligentes = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Lunettes intelligentes basse vision | Lirelia"
        description="Découvrez prochainement les lunettes intelligentes pour basse vision : usages, limites, conseils et solutions sélectionnées par Lirelia."
        canonicalPath="/aides-lecture-bassevision/lunettes-intelligentes"
        noindex
      />
      <Header />
      <main id="main-content">
        <section className="relative py-12 md:py-16 overflow-hidden bg-primary">
          <div className="container relative z-10">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-base text-primary-foreground/80 flex-wrap mb-5">
              <Link to="/" className="hover:text-secondary transition-colors">Accueil</Link>
              <span>/</span>
              <Link to="/aides-lecture-bassevision" className="hover:text-secondary transition-colors">Aides à la lecture</Link>
              <span>/</span>
              <span className="text-primary-foreground font-semibold">Lunettes intelligentes</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
                Lunettes intelligentes <span className="text-secondary">pour basse vision</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Les lunettes intelligentes font partie des solutions d'aide visuelle les plus récentes.
                Cette page présentera prochainement les usages possibles, les limites, les critères de choix
                et les produits sélectionnés par Lirelia.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto bg-card rounded-2xl border-2 border-primary/30 p-8 md:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-8 h-8 text-secondary" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Contenu en préparation</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Pour un conseil personnalisé sur les aides visuelles adaptées à votre situation,
                vous pouvez contacter Lirelia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact-conseil">
                    Demander un conseil personnalisé
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/catalogue-aides-basse-vision">
                    <ArrowLeft className="w-5 h-5" />
                    Voir le catalogue des aides basse vision
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

export default LunettesIntelligentes;
