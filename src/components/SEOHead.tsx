/**
 * SEOHead — JSON-LD only.
 *
 * All meta tags (title, description, canonical, OG, Twitter) are handled
 * statically by the synchronous script in index.html.  This component
 * MUST NOT inject any <title>, <meta>, <link rel="canonical"> or other
 * SEO-related HTML tags.
 *
 * Structured data is NOT written at call sites: it comes from the central
 * registry (src/lib/structuredData/registry.ts) which emits exactly ONE
 * @graph per route and nothing at all on noindex routes.
 *
 * RULE — PERMANENT:
 *   • Never add Helmet / react-helmet-async usage here.
 *   • Never create meta tags via JavaScript in any component.
 *   • Never hand-write JSON-LD in a page: extend the registry instead.
 */

import { useLocation } from "react-router-dom";
import { getPageGraph } from "@/lib/structuredData/registry";

interface SEOHeadProps {
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  title?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  description?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  canonicalPath?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  ogImage?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  ogImageAlt?: string;
  /** @deprecated Kept for call-site compatibility — value is ignored. */
  ogType?: string;
  /** @deprecated Structured data now comes from the central registry. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = (_props: SEOHeadProps = {}) => {
  const { pathname } = useLocation();
  const graph = getPageGraph(pathname);

  if (!graph) return null;

  return (
    <script
      type="application/ld+json"
      data-lirelia-graph="true"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
};

export default SEOHead;
