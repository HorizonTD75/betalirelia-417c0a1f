
- Financial-aid cocoon pages render only from the Markdown articles in src/content/aides-financieres/ via one shared page; frontmatter is SEO spec, never visible text. Why: single editorial source, no duplicated content.
- DMLA cocoon child pages (src/pages/maladies/dmla/) are static JSX generated from the validated Markdown, using DmlaChildLayout; no content arrays/.map. Why: the external static-HTML converter loses mapped lists/FAQ.
- Optional trackers (GA4, Clarity, Meta Pixel, HubSpot, Albacross) load only via the LIRELIA CONSENT LOADER in index.html, triggered by stored consent; consent events go to https://lirelia.fr/api/consent.php via src/lib/consentLog.ts. Why: no tracker before consent, works in static HTML export.
