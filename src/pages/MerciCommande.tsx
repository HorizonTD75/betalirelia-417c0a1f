import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MerciCommande = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id") || "";
    const amountCents = parseInt(params.get("amount_total") || "", 10);
    const value = !isNaN(amountCents) && amountCents > 0 ? amountCents / 100 : 1.0;

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18278542630/31-RCLbH980cEKba8YtE",
        value,
        currency: "EUR",
        transaction_id: sessionId,
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card variant="highlighted" className="text-center py-12">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-accent" aria-hidden="true" />
                </div>
                <h1 className="font-serif text-3xl font-bold text-foreground">
                  Merci pour votre commande !
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  Votre commande a bien été enregistrée et votre paiement confirmé. Vous recevrez un
                  e-mail de confirmation dans les prochaines minutes.
                </p>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/catalogue-aides-basse-vision">
                    <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                    Retourner au catalogue
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MerciCommande;
