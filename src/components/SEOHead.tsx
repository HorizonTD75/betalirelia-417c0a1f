import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({
  title,
  description,
  canonicalPath,
  ogImage,
  ogImageAlt = "LirElia — Expert en basse vision, bilans et aides à la lecture",
  ogType = "website",
  jsonLd,
}: SEOHeadProps) => {
  const absoluteUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : undefined;
  const imageUrl = ogImage || DEFAULT_OG_IMAGE;

  const jsonLdBlocks = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />
      {absoluteUrl && <meta property="og:url" content={absoluteUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Canonical */}
      {absoluteUrl && <link rel="canonical" href={absoluteUrl} />}

      {/* Hreflang */}
      {absoluteUrl && <link rel="alternate" hrefLang="fr" href={absoluteUrl} />}
      {absoluteUrl && <link rel="alternate" hrefLang="x-default" href={absoluteUrl} />}

      {/* JSON-LD structured data */}
      {jsonLdBlocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
