import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail, MapPin, Clock } from "lucide-react";

const AppointmentSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background" id="rdv">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prendre rendez-vous
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Vous pouvez choisir un créneau, appeler, ou faire une demande par e-mail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Calendrier */}
          <div className="bg-card rounded-2xl border-2 border-secondary/30 p-8 text-center shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-secondary/40 text-primary flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Calendrier</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Réservez directement un créneau disponible
            </p>
            <Button variant="secondary" className="w-full border-2 border-secondary-foreground/20">
              Choisir un créneau
            </Button>
          </div>

          {/* Téléphone */}
          <div className="bg-card rounded-2xl border-2 border-secondary/30 p-8 text-center shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-secondary/40 text-primary flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Téléphone</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Appelez-nous pour un premier échange
            </p>
            <Button variant="secondary" className="w-full border-2 border-secondary-foreground/20" asChild>
              <a href="tel:0123456789">01 23 45 67 89</a>
            </Button>
          </div>

          {/* Formulaire */}
          <div className="bg-card rounded-2xl border-2 border-secondary/30 p-8 text-center shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-secondary/40 text-primary flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Formulaire</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Demandez un RDV, réponse par e-mail
            </p>
            <Button variant="secondary" className="w-full border-2 border-secondary-foreground/20">
              Demander un RDV
            </Button>
          </div>
        </div>

        {/* Location info */}
        <div className="mt-12 bg-card rounded-2xl border-2 border-secondary/30 p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/30 text-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Cabinet à Palaiseau (91120)</h4>
                <p className="text-muted-foreground">4 rue Léon Blum</p>
                <p className="text-muted-foreground">Opticien partenaire à Antony (92160)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/30 text-primary flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">Bilan à domicile</h4>
                <p className="text-muted-foreground">Possible selon besoin et distance.</p>
                <p className="text-muted-foreground">Contactez-nous pour en discuter.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;