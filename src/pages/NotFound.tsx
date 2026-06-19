import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, BookOpen, Stethoscope, ArrowRight, Home } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const cards = [
  {
    to: "/maladies-yeux",
    icon: Eye,
    title: "Comprendre les maladies des yeux",
    desc: "DMLA, glaucome, cataracte, rétinopathies : des explications claires pour mieux comprendre votre situation visuelle.",
  },
  {
    to: "/aides-lecture-bassevision",
    icon: BookOpen,
    title: "Découvrir les aides à la lecture",
    desc: "Loupes, lampes, télé-agrandisseurs et outils numériques choisis pour la basse vision.",
  },
  {
    to: "/bilans-bassevision",
    icon: Stethoscope,
    title: "Découvrir les bilans et l'accompagnement",
    desc: "Bilan Essentiel, Expert ou de Suivi : une évaluation personnalisée par un visiopraticien.",
  },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — URL inexistante :", location.pathname);
    // Hint static hosts (OVH) that this is a real 404, when possible.
    const meta = document.querySelector('meta[name="prerender-status-code"]');
    if (!meta) {
      const m = document.createElement("meta");
      m.setAttribute("name", "prerender-status-code");
      m.setAttribute("content", "404");
      document.head.appendChild(m);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Page introuvable | LirElia" description="Cette page n'existe pas ou a été déplacée. Retrouvez l'ensemble des solutions LirElia : maladies des yeux, aides à la lecture, bilans basse vision." />
      <Header />
      <main id="main-content" className="flex-1 bg-background">
        {/* Hero */}
        <section className="py-16 lg:py-20 bg-primary/5 border-b border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p
                aria-hidden="true"
                className="font-serif text-7xl md:text-8xl font-bold text-primary/20 mb-4 select-none"
              >
                404
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Cette page est introuvable, mais nos solutions restent accessibles
              </h1>
              <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
            </div>
          </div>
        </section>

        {/* Texte principal */}
        <section className="py-12 lg:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-foreground leading-relaxed">
              <p>
                Le lien que vous avez utilisé est peut-être ancien, incomplet, ou la page que vous recherchez a été déplacée. Vous pouvez revenir à l'accueil ou poursuivre votre visite à partir des principales rubriques de LirElia.
              </p>
              <p>
                LirElia accompagne les personnes malvoyantes, leurs proches et leurs aidants. Vous y trouverez des informations claires pour mieux comprendre la basse vision et les principales maladies des yeux, des conseils pour préserver l'autonomie, des bilans personnalisés, ainsi qu'une sélection d'aides à la lecture et au quotidien.
              </p>
              <p>
                Retrouvez ici nos solutions pour la basse vision : loupes et téléagrandisseurs, éclairage adapté, outils numériques, conseils pratiques et accompagnement. Notre objectif est de vous aider à identifier des solutions concrètes, adaptées à vos besoins et à votre manière de vivre.
              </p>
              <p className="font-semibold">
                Vous pouvez commencer par revenir à l'accueil ou choisir l'une des rubriques proposées ci-dessous.
              </p>

              <div className="pt-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/">
                    <Home className="w-5 h-5" aria-hidden="true" />
                    Retour à l'accueil
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cartes rubriques */}
        <section className="pb-16 lg:pb-20" aria-labelledby="rubriques-principales">
          <div className="container">
            <h2 id="rubriques-principales" className="sr-only">
              Rubriques principales
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map(({ to, icon: Icon, title, desc }) => (
                <Link
                  key={to}
                  to={to}
                  className="group block bg-card border-2 border-border rounded-2xl p-6 hover:border-primary hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">
                    {desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold">
                    Découvrir
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
