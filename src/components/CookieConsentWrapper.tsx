import { useState, useEffect } from "react";
import CookieConsentBanner from "./CookieConsentBanner";
import { initConsent } from "@/lib/cookieConsent";
import { flushConsentQueue } from "@/lib/consentLog";

/**
 * Initialise le consentement au démarrage, renvoie les événements du
 * registre non confirmés, et rouvre les réglages sur demande.
 */
const CookieConsentWrapper = () => {
  const [key, setKey] = useState(0);
  const [forceOpen, setForceOpen] = useState(false);

  useEffect(() => {
    initConsent();
    void flushConsentQueue();
    const handler = () => {
      setForceOpen(true);
      setKey((k) => k + 1);
    };
    window.addEventListener("lirelia:open-cookie-prefs", handler);
    return () => window.removeEventListener("lirelia:open-cookie-prefs", handler);
  }, []);

  return (
    <CookieConsentBanner key={key} forceOpen={forceOpen} onClose={() => setForceOpen(false)} />
  );
};

export default CookieConsentWrapper;
