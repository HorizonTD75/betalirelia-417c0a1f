import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Send, HelpCircle, ArrowRight } from "lucide-react";

const ContactFormSection = () => {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Card variant="highlighted" className="overflow-hidden">
            <div className="bg-secondary/10 p-2">
              <div className="flex items-center gap-2 justify-center text-secondary-foreground">
                <HelpCircle className="w-5 h-5" />
                <span className="font-semibold">Vous hésitez ?</span>
              </div>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">
                Décrivez votre situation
              </CardTitle>
              <CardDescription className="text-lg">
                En 2 minutes, vous pouvez décrire ce qui gêne (vous ou votre proche). 
                Je vous réponds par e-mail et nous décidons ensemble de la meilleure première étape.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 text-lg border-2 border-input rounded-xl bg-background focus:border-primary focus:ring-4 focus:ring-ring/20 transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold mb-2">
                    Votre e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 text-lg border-2 border-input rounded-xl bg-background focus:border-primary focus:ring-4 focus:ring-ring/20 transition-all"
                    placeholder="jean@exemple.fr"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="situation" className="block text-lg font-semibold mb-2">
                  Décrivez brièvement votre situation
                </label>
                <textarea
                  id="situation"
                  rows={4}
                  className="w-full px-4 py-3 text-lg border-2 border-input rounded-xl bg-background focus:border-primary focus:ring-4 focus:ring-ring/20 transition-all resize-none"
                  placeholder="Par exemple : Ma mère a été diagnostiquée DMLA il y a 3 mois. Elle n'arrive plus à lire son courrier..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg">
                  <Send className="w-5 h-5" />
                  Demander un RDV ou un conseil
                </Button>
                <Button variant="outline" size="lg">
                  Lire la FAQ sur les bilans
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-center text-muted-foreground italic">
                Astuce aidant : vous pouvez remplir ce formulaire à la place de votre proche, 
                puis venir au bilan avec lui/elle.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
