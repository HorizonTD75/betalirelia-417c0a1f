import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }

    const validate = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const res = await fetch(
          `${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: anonKey } }
        );
        const data = await res.json();
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      } catch {
        setStatus("invalid");
      }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    if (!token) return;
    setSubmitting(true);
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (data?.success) {
        setStatus("success");
      } else if (data?.reason === "already_unsubscribed") {
        setStatus("already");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Désinscription – LirElia"
        description="Gérez vos préférences e-mail LirElia."
        canonicalPath="/unsubscribe"
      />
      <Header />
      <main id="main-content" className="py-20">
        <div className="container max-w-lg mx-auto">
          <Card>
            <CardContent className="p-8 text-center space-y-6">
              {status === "loading" && (
                <>
                  <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                  <p className="text-lg text-muted-foreground">Vérification en cours…</p>
                </>
              )}

              {status === "valid" && (
                <>
                  <AlertTriangle className="w-12 h-12 text-secondary mx-auto" />
                  <h1 className="font-serif text-2xl font-bold text-foreground">
                    Confirmer la désinscription
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Vous ne recevrez plus d'e-mails de LirElia.
                  </p>
                  <Button
                    onClick={handleUnsubscribe}
                    disabled={submitting}
                    variant="destructive"
                    size="lg"
                  >
                    {submitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Traitement…</>
                    ) : (
                      "Me désinscrire"
                    )}
                  </Button>
                </>
              )}

              {status === "success" && (
                <>
                  <CheckCircle className="w-12 h-12 text-accent mx-auto" />
                  <h1 className="font-serif text-2xl font-bold text-foreground">
                    Désinscription confirmée
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Vous avez été désinscrit(e) avec succès.
                  </p>
                </>
              )}

              {status === "already" && (
                <>
                  <CheckCircle className="w-12 h-12 text-muted-foreground mx-auto" />
                  <h1 className="font-serif text-2xl font-bold text-foreground">
                    Déjà désinscrit(e)
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Vous êtes déjà désinscrit(e) de nos e-mails.
                  </p>
                </>
              )}

              {status === "invalid" && (
                <>
                  <XCircle className="w-12 h-12 text-destructive mx-auto" />
                  <h1 className="font-serif text-2xl font-bold text-foreground">
                    Lien invalide
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Ce lien de désinscription est invalide ou a expiré.
                  </p>
                </>
              )}

              {status === "error" && (
                <>
                  <XCircle className="w-12 h-12 text-destructive mx-auto" />
                  <h1 className="font-serif text-2xl font-bold text-foreground">
                    Une erreur est survenue
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Veuillez réessayer plus tard.
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
