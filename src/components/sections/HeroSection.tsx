import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-background" id="hero">
      <div className="container">
        {/* Tags navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
          <span className="px-4 py-2 rounded-full bg-card border-2 border-border text-foreground font-semibold text-sm">
            Antony / Palaiseau
          </span>
          <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            patients
          </span>
          <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            aidants
          </span>
          <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            bilans
          </span>
          <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            produits
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Continuer à vivre avec une basse vision, c'est possible.
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 animate-slide-up delay-100">
              Ici, vous trouverez une approche pratique : comprendre la basse vision, 
              faire un bilan fonctionnel, choisir des aides utiles au quotidien.
            </p>

            <Button 
              variant="secondary" 
              size="lg" 
              className="animate-slide-up delay-200 border-2 border-secondary-foreground/20"
            >
              Je veux faire un bilan
            </Button>

            {/* Illustration on mobile below CTA */}
            <div className="mt-8 lg:hidden">
              <img
                src={heroIllustration}
                alt="Équipe d'accompagnement basse vision"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Right side - Appointment Card */}
          <div className="order-1 lg:order-2">
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border-2 border-border animate-fade-in">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Prendre rendez-vous
              </h2>
              <p className="text-muted-foreground mb-6">
                Vous pouvez choisir un créneau, appeler, ou faire une demande par e-mail.
              </p>

              <div className="space-y-3">
                <Button 
                  variant="secondary" 
                  className="w-full justify-start gap-3 text-left"
                  size="lg"
                >
                  <Calendar className="w-5 h-5 shrink-0" />
                  Calendrier : RDV téléphonique
                </Button>

                <Button 
                  variant="secondary" 
                  className="w-full justify-between gap-3"
                  size="lg"
                  asChild
                >
                  <a href="tel:0123456789">
                    <span>Tél : 01 23 45 67 89</span>
                    <Phone className="w-5 h-5 shrink-0 text-primary" />
                  </a>
                </Button>

                <Button 
                  variant="secondary" 
                  className="w-full justify-start gap-3 text-left"
                  size="lg"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  Formulaire : demandez un RDV
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Consultations :</strong> Palaiseau (91120) et Antony (92160).
                </p>
                <p className="text-sm text-muted-foreground">
                  Bilan à domicile possible.
                </p>
                <div className="flex gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero illustration for desktop - below content */}
        <div className="hidden lg:block mt-8">
          <img
            src={heroIllustration}
            alt="Équipe d'accompagnement basse vision"
            className="w-full max-w-3xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;