import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail, MapPin, Clock } from "lucide-react";

const AppointmentSection = () => {
  return (
    <section className="py-20 bg-muted" id="rdv">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prendre rendez-vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vous pouvez choisir un créneau, appeler, ou faire une demande par e-mail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Calendrier */}
          <div className="bg-card rounded-2xl border-2 border-border p-8 text-center shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Calendrier</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Réservez directement un créneau disponible
            </p>
            <Button variant="default" className="w-full">
              Choisir un créneau
            </Button>
          </div>

          {/* Téléphone */}
          <div className="bg-card rounded-2xl border-2 border-border p-8 text-center shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Téléphone</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Appelez-nous pour un premier échange
            </p>
            <Button variant="secondary" className="w-full" asChild>
              <a href="tel:0123456789">01 23 45 67 89</a>
            </Button>
          </div>

          {/* Formulaire */}
          <div className="bg-card rounded-2xl border-2 border-border p-8 text-center shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Formulaire</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Demandez un RDV, réponse par e-mail
            </p>
            <Button variant="accent" className="w-full">
              Demander un RDV
            </Button>
          </div>
        </div>

        {/* Location info */}
        <div className="mt-12 bg-card rounded-2xl border-2 border-border p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Cabinet à Palaiseau (91120)</h4>
                <p className="text-muted-foreground">4 rue Léon Blum</p>
                <p className="text-muted-foreground">Opticien partenaire à Antony (92160)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Bilan à domicile</h4>
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
