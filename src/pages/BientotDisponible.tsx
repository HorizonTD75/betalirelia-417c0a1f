import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Eye, BookOpen, Stethoscope, MessageCircle, Home } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const cards = [
  { to: "/comprendre-basse-vision", icon: Eye, title: "Comprendre la basse vision" },
  { to: "/aides-lecture-bassevision", icon: BookOpen, title: "Découvrir les aides à la lecture" },
  { to: "/bilans-bassevision", icon: Stethoscope, title: "Consulter les bilans LirElia" },
  { to: "/", icon: Home, title: "Retour à l'accueil" },
];

const BientotDisponible = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Bientôt disponible | LirElia"
        description="Cette page LirElia arrive très prochainement. En attendant, retrouvez les maladies des yeux, les aides à la lecture et nos bilans basse vision."
      />
      <Header />
      <main id="main-content" className="flex-1 bg-background">
        {/* Hero */}
        <section className="py-16 lg:py-20 bg-primary/5 border-b border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-primary" aria-hidden="true" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Cette page arrive bientôt
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
                Nous préparons actuellement ce contenu afin de vous proposer une information claire, accessible et réellement utile.
              </p>
              <p>
                LirElia accompagne les personnes malvoyantes, leurs proches et leurs aidants pour mieux comprendre la basse vision, préserver l'autonomie et identifier les aides les plus adaptées à chaque situation.
              </p>
              <p>
                En attendant la publication de cette page, vous pouvez déjà découvrir nos informations sur les maladies des yeux, nos conseils pour mieux lire et organiser votre quotidien, nos aides techniques, ainsi que les bilans et accompagnements proposés par LirElia.
              </p>
              <p className="font-semibold">
                Poursuivez votre visite en choisissant l'une des rubriques suivantes.
              </p>
            </div>
          </div>
        </section>

        {/* Cartes rubriques */}
        <section className="pb-12" aria-labelledby="rubriques-bientot">
          <div className="container">
            <h2 id="rubriques-bientot" className="sr-only">
              Rubriques disponibles
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cards.map(({ to, icon: Icon, title }) => (
                <Link
                  key={to + title}
                  to={to}
                  className="group block bg-card border-2 border-border rounded-2xl p-5 hover:border-primary hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground leading-snug">
                    {title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold mt-3">
                    Voir
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="pb-16 lg:pb-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
              <p className="text-lg text-foreground mb-4">
                Une question ? Contactez-nous directement.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact-conseil">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BientotDisponible;
