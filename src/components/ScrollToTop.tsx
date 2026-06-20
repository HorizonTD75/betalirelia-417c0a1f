import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/cookieConsent";

const ScrollToTop = () => {
  const { pathname, hash, search } = useLocation();
  const lastTrackedRef = useRef<string | null>(null);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Fire a single GA4 page_view per route change (no-op if GA4 not loaded).
  // The initial page_view is sent by the loader itself, so we skip first run here.
  useEffect(() => {
    const key = pathname + search;
    if (lastTrackedRef.current === key) return;
    if (lastTrackedRef.current !== null) {
      // Defer slightly so document.title is updated by the route's meta script.
      setTimeout(() => trackPageView(key), 50);
    }
    lastTrackedRef.current = key;
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
