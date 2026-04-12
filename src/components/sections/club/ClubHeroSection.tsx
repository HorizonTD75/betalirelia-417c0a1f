import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import clubHeroImage from "@/assets/club-hero.jpg";

const ClubHeroSection = () => {
  const scrollToProgram = () => {
    document.getElementById("program")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src={clubHeroImage}
          alt="Session du Club LirElia en visioconférence"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          decoding="async"
          width={1440}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
      </div>
      <div className="container relative py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-8">
            <Users className="w-5 h-5" />
            <span className="text-lg font-semibold">Gratuit · Ouvert à tous</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Club LirElia : rencontres &amp; échanges
            <br />
            <span className="text-secondary">pour rompre l'isolement</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl">
            Un espace d'échanges entre personnes concernées et aidants :
            astuces, retours d'expérience, mini-conférences et moments simples,
            en visioconférence, avec un animateur.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" onClick={scrollToProgram}>
              Voir le programme du mois
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#inscription">
                Rejoindre le Club
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default ClubHeroSection;
