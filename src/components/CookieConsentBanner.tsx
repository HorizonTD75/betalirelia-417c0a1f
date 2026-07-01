import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  getConsent,
  acceptAll,
  refuseAll,
  saveConsent,
} from "@/lib/cookieConsent";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    acceptAll();
    setVisible(false);
  };
  const handleRefuse = () => {
    refuseAll();
    setVisible(false);
  };
  const handleSavePrefs = () => {
    // Une seule catégorie "Mesure d'audience" pilote GA4 + Clarity.
    saveConsent(analytics, analytics);
    setVisible(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center pointer-events-none"
      role="dialog"
      aria-label="Gestion des cookies"
      aria-modal="false"
    >
      <div className="absolute inset-0 bg-foreground/40" aria-hidden="true" />

      <div className="relative pointer-events-auto w-full max-w-xl mx-3 sm:mx-4 mb-3 sm:mb-0 bg-card rounded-2xl shadow-xl border border-border p-5 sm:p-6 md:p-7 animate-in slide-in-from-bottom-4 fade-in duration-300">
        {!showPrefs ? (
          /* ── Vue principale ── */
          <>
            <div className="flex items-start gap-3 mb-5">
              <Shield className="w-7 h-7 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">
                  Votre vie privée nous importe
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  LirElia utilise des cookies nécessaires au bon fonctionnement du site et,
                  avec votre accord, des cookies de mesure d’audience afin d’améliorer votre
                  expérience.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  En savoir plus dans notre{" "}
                  <Link
                    to="/politique-cookies"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    politique de cookies
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Boutons côte à côte, taille équivalente */}
            <div className="flex flex-row items-stretch justify-center gap-3 sm:gap-4">
              <Button
                type="button"
                size="lg"
                onClick={handleRefuse}
                className="flex-1 max-w-[240px] text-base min-h-12 bg-card text-primary border-2 border-primary hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Refuser
              </Button>
              <Button
                type="button"
                size="lg"
                onClick={handleAccept}
                className="flex-1 max-w-[240px] text-base min-h-12 bg-secondary text-secondary-foreground border-2 border-secondary hover:bg-secondary/90 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 font-bold"
              >
                Accepter
              </Button>
            </div>

            {/* Lien Gérer discret, bas droite */}
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrefs(true)}
                className="text-sm text-muted-foreground hover:text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Gérer
              </button>
            </div>
          </>
        ) : (
          /* ── Vue préférences ── */
          <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-xl font-bold text-foreground">
                Paramétrer mes cookies
              </h2>
              <button
                onClick={() => setShowPrefs(false)}
                className="p-2 rounded-lg hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Retour"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-muted/50">
                <div className="flex-1">
                  <p className="text-base font-semibold text-foreground">
                    Cookies nécessaires
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Indispensables au fonctionnement du site et à la mémorisation de vos préférences.
                  </p>
                </div>
                <Switch checked disabled aria-label="Cookies nécessaires — toujours actifs" />
              </div>

              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-muted/50">
                <div className="flex-1">
                  <p className="text-base font-semibold text-foreground">
                    Mesure d’audience et amélioration du site
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Google Analytics 4 et Microsoft Clarity, pour comprendre la fréquentation
                    et améliorer l’expérience.
                  </p>
                </div>
                <Switch
                  checked={analytics}
                  onCheckedChange={setAnalytics}
                  aria-label="Cookies de mesure d’audience"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                size="lg"
                onClick={handleRefuse}
                className="flex-1 min-h-12 bg-card text-primary border-2 border-primary hover:bg-primary/5"
              >
                Tout refuser
              </Button>
              <Button
                type="button"
                size="lg"
                onClick={handleSavePrefs}
                className="flex-1 min-h-12 bg-secondary text-secondary-foreground border-2 border-secondary hover:bg-secondary/90 font-bold"
              >
                Enregistrer mes choix
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;

/** Reopens the cookie preferences banner. */
export function openCookiePreferences() {
  localStorage.removeItem("lirelia_cookie_consent_v1");
  localStorage.removeItem("lirelia_cookie_consent_v2");
  window.dispatchEvent(new CustomEvent("lirelia:open-cookie-prefs"));
}
