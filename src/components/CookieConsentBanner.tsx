import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getConsent, saveConsent } from "@/lib/cookieConsent";
import {
  buildEvent,
  newId,
  sendConsentEvent,
  type ConsentAction,
  type ConsentDecision,
} from "@/lib/consentLog";

interface Props {
  /** Ouverture volontaire depuis « Gérer les cookies » (réglages directs). */
  forceOpen?: boolean;
  onClose?: () => void;
}

/**
 * LIRELIA COOKIE BANNER v2.0 — bandeau compact fixé en bas, sans fond
 * sombre ni fenêtre plein écran. Accepter / Refuser à égalité visuelle.
 */
const CookieConsentBanner = ({ forceOpen = false, onClose }: Props) => {
  const existing = getConsent();
  const [visible, setVisible] = useState(forceOpen || !existing);
  const [showPrefs, setShowPrefs] = useState(forceOpen);
  // Par défaut désactivés ; préremplis avec le choix existant lors d'une modification.
  const [statistics, setStatistics] = useState(existing?.analytics === true);
  const [marketing, setMarketing] = useState(existing?.marketing === true);
  const impressionId = useRef<string>(newId("imp"));
  const impressionSent = useRef(false);

  // Une seule « impression » par affichage réel du bandeau.
  useEffect(() => {
    if (!visible || impressionSent.current) return;
    impressionSent.current = true;
    const c = getConsent();
    sendConsentEvent(
      buildEvent("impression", impressionId.current, c?.analytics === true, c?.marketing === true),
    );
  }, [visible]);

  if (!visible) return null;

  const decide = (decision: ConsentDecision, stats: boolean, mkt: boolean) => {
    const previous = getConsent();
    let action: ConsentAction = "premier_choix";
    if (previous) {
      const hadOptional = previous.analytics === true || previous.marketing === true;
      action = hadOptional && !stats && !mkt ? "retrait" : "modification";
    }
    saveConsent(stats, mkt);
    sendConsentEvent(buildEvent("decision", impressionId.current, stats, mkt, decision, action));
    setVisible(false);
    onClose?.();
  };

  const btn =
    "flex-1 min-h-11 min-w-0 px-4 text-lg font-bold bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2";

  return (
    <div
      id="lirelia-cookie-banner"
      role="region"
      aria-label="Choix des cookies"
      className="fixed inset-x-0 bottom-0 z-[9999] flex justify-center pointer-events-none sm:px-4 sm:pb-4"
    >
      <div
        className={`pointer-events-auto w-full sm:max-w-2xl bg-card text-foreground border-t-2 sm:border-2 border-primary sm:rounded-xl shadow-xl overflow-y-auto ${showPrefs ? "max-h-[75vh]" : "max-h-[32vh]"} sm:max-h-[70vh] px-4 pt-3 sm:p-5`}
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        {!showPrefs ? (
          <>
            <h2 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
              Cookies sur LIRELIA
            </h2>
            <p className="text-base text-foreground leading-snug mt-0.5">
              Avec votre accord, nous utilisons des cookies pour mesurer la fréquentation du site
              et améliorer nos contenus. À vous de choisir !
            </p>
            <div className="flex flex-row gap-3 mt-2">
              <Button type="button" onClick={() => decide("accepte", true, true)} className="flex-1 min-h-11 min-w-0 px-4 text-lg font-bold bg-secondary text-primary border-2 border-secondary hover:bg-secondary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                Accepter
              </Button>
              <Button type="button" onClick={() => decide("refuse", false, false)} className={btn}>
                Refuser
              </Button>
            </div>
            <div className="mt-1 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <button
                type="button"
                onClick={() => setShowPrefs(true)}
                className="text-base font-semibold text-primary underline underline-offset-4 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Personnaliser mes choix
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
              Personnaliser mes choix
            </h2>
            <div className="space-y-2 mt-2">
              <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted">
                <div className="min-w-0">
                  <p className="text-base font-semibold">Cookies nécessaires</p>
                  <p className="text-base text-muted-foreground">Toujours actifs. Mémorisent votre choix.</p>
                </div>
                <Switch checked disabled aria-label="Cookies nécessaires, toujours actifs" />
              </div>
              <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted">
                <label htmlFor="cc-stats" className="min-w-0">
                  <span className="block text-base font-semibold">Mesure d'audience</span>
                  <span className="block text-base text-muted-foreground">Google Analytics, Microsoft Clarity.</span>
                </label>
                <Switch id="cc-stats" checked={statistics} onCheckedChange={setStatistics} />
              </div>
              <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted">
                <label htmlFor="cc-mkt" className="min-w-0">
                  <span className="block text-base font-semibold">Marketing et publicité</span>
                  <span className="block text-base text-muted-foreground">Meta (Facebook), HubSpot, Albacross.</span>
                </label>
                <Switch id="cc-mkt" checked={marketing} onCheckedChange={setMarketing} />
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-2">
              <Button
                type="button"
                onClick={() => decide("personnalise", statistics, marketing)}
                className={btn}
              >
                Enregistrer mes choix
              </Button>
            </div>
            {!forceOpen && (
              <button
                type="button"
                onClick={() => setShowPrefs(false)}
                className="mt-2 text-base text-primary underline underline-offset-4 py-1"
              >
                Retour
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;

/** Rouvre les réglages sans effacer le choix existant (lien « Gérer les cookies »). */
export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent("lirelia:open-cookie-prefs"));
}
