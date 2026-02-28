import { useEffect } from "react";

const BASE_URL = "https://betalirelia.lovable.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
}

const SEOHead = ({ title, description, canonicalPath, ogImage, ogType = "website", jsonLd }: SEOHeadProps) => {
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

    const absoluteUrl = canonicalPath ? `${BASE_URL}${canonicalPath}` : undefined;
    const imageUrl = ogImage || DEFAULT_OG_IMAGE;

    // SEO basics
    setMeta("description", description);
    setMeta("robots", "noindex, nofollow");
    setMeta("googlebot", "noindex, nofollow");

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:image", imageUrl, "property");
    if (absoluteUrl) {
      setMeta("og:url", absoluteUrl, "property");
    }

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (absoluteUrl) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", absoluteUrl);
    } else if (canonical) {
      canonical.remove();
    }

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

  }, [title, description, canonicalPath, ogImage, ogType, jsonLd]);

  return null;
};

export default SEOHead;
