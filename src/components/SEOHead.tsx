import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
}

const SEOHead = ({ title, description, jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", "noindex, nofollow");
    setMeta("googlebot", "noindex, nofollow");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");

    // Remove any canonical link (staging must not declare canonical)
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.remove();

    // Manage JSON-LD structured data
    const existingJsonLd = document.getElementById("seo-jsonld");
    if (jsonLd) {
      if (existingJsonLd) {
        existingJsonLd.textContent = JSON.stringify(jsonLd);
      } else {
        const script = document.createElement("script");
        script.id = "seo-jsonld";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      }
    } else if (existingJsonLd) {
      existingJsonLd.remove();
    }

    // Remove any preload/prefetch hints
    document.querySelectorAll('link[rel="preload"], link[rel="prefetch"], link[rel="dns-prefetch"], link[rel="preconnect"]').forEach(el => el.remove());

  }, [title, description, jsonLd]);

  return null;
};

export default SEOHead;
