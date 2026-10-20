# Rapport V5.2 LIRELIA — 20 octobre 2026

## Modifications
- Sept guides : photos réelles, accroche, points clés, cartes par usage sur la page mère et FAQ natives au clavier. Les articles Markdown complets et leurs liens sont conservés.
- Entrées visibles depuis l’accueil, les aides à la lecture et le catalogue via ChoiceGuideBanner.
- Marque LIRELIA dans les textes, alt, métadonnées, JSON-LD et fichiers publics ; domaines et identifiants conservés.
- Source SEO commune : routeMeta et frontmatter des guides, headMetadata, RouteHeadSync et vite-plugin-seo-prerender. Mise à jour à la navigation et préparation des fichiers HTML par route.
- Deux images locales 1200×630 : og-image.png et og-choisir-loupe.png. Photos NORA et Amélie présentées séparément, sans simulation.
- twitter:site supprimé ; aucun compte X confirmé. Sept guides toujours noindex et hors sitemap.

## Contrôles
- 54 tests réussis : guides, données structurées, consentement et métadonnées.
- 48 affichages (12 routes × 1280, 768, 390 et 360 px) : aucun débordement, aucune image cassée, un H1, aucune erreur JavaScript. FAQ contrôlée avec Entrée au clavier.
- Version publique V5.1 : sept guides accessibles en HTTP 200 ; destinations internes inspectées.
- Transformateur de HTML statique testé pour toutes les routes du registre : un title et un canonical, URL OG cohérente, pas de twitter:site.
- Le convertisseur externe Codex/OVH n’a pas été exécuté : sa sortie et l’existence des images dans cette sortie restent à vérifier.
- Suivi Meta/Google : règles de consentement et code métier non modifiés hors graphie de marque. Tests de consentement réussis ; aucune campagne ni réception réelle d’événement Meta vérifiée.
- Sécurité avant publication : un avertissement existant sur les mots de passe déjà divulgués ; aucun changement de permissions réalisé.

## Publication et confidentialité
Publication Lovable autorisée à 08:32 UTC. Aucun déploiement sur lirelia.fr, aucune indexation demandée. Le site publié Lovable est public ; noindex n’est pas une protection d’accès. Le lien éditeur privé et le site publié sont distincts.

## Consignes Codex
Conserver les balises préparées par route, vérifier title/description/canonical/OG/Twitter dans les fichiers index.html sans JavaScript ; conserver le bloc LIRELIA CONSENT LOADER et copier les deux images OG. Vérifier les FAQ et tous les liens après conversion. Ne pas publier sur OVH sans autorisation.

## Matrice des contrôles navigateur (1280 px)
| Route | Title | Canonical | Robots | OG type | FAQ |
|---|---|---|---|---|---|
| / | LIRELIA — Basse vision & DMLA : bilans et aides lecture | https://lirelia.fr/ | index, follow | website | 0 |
| /aides-lecture-bassevision/ | Aides à la lecture basse vision : loupes et lampes | https://lirelia.fr/aides-lecture-bassevision/ | index, follow | website | 0 |
| /catalogue-aides-basse-vision/ | Catalogue complet des aides à la basse vision — LIRELIA | https://lirelia.fr/catalogue-aides-basse-vision/ | index, follow | website | 0 |
| /boutique/loupe-amelie/ | Loupe électronique Amélie pour basse vision — LIRELIA | https://lirelia.fr/boutique/loupe-amelie/ | index, follow | product | 0 |
| /boutique/loupe-main-nora/ | Loupe à main NORA rectangulaire éclairante LED — LIRELIA | https://lirelia.fr/boutique/loupe-main-nora/ | index, follow | product | 0 |
| /choisir-loupe-lecture/ | Quelle loupe de lecture choisir ? Guide pratique — LIRELIA | https://lirelia.fr/choisir-loupe-lecture/ | noindex, follow | website | 2 |
| /choisir-loupe-lecture/personne-agee/ | Loupe de lecture pour personne âgée : bien choisir — LIRELIA | https://lirelia.fr/choisir-loupe-lecture/personne-agee/ | noindex, follow | website | 3 |
| /choisir-loupe-lecture/loupe-optique-ou-electronique/ | Loupe en verre ou électronique : laquelle choisir ? — LIRELIA | https://lirelia.fr/choisir-loupe-lecture/loupe-optique-ou-electronique/ | noindex, follow | website | 3 |
| /choisir-loupe-lecture/loupe-sur-lunettes/ | Loupe sur lunettes de vue : clip loupe — LIRELIA | https://lirelia.fr/choisir-loupe-lecture/loupe-sur-lunettes/ | noindex, follow | website | 3 |
| /choisir-loupe-lecture/lire-mains-libres/ | Loupe de lecture mains libres : quelle solution ? — LIRELIA | https://lirelia.fr/choisir-loupe-lecture/lire-mains-libres/ | noindex, follow | website | 3 |
| /choisir-loupe-lecture/loupe-eclairante-ou-lampe/ | Loupe éclairante ou lampe de lecture ? Guide — LIRELIA | https://lirelia.fr/choisir-loupe-lecture/loupe-eclairante-ou-lampe/ | noindex, follow | website | 3 |
| /choisir-loupe-lecture/loupe-portable-ou-grand-ecran/ | Loupe portable ou téléagrandisseur : que choisir ? — LIRELIA | https://lirelia.fr/choisir-loupe-lecture/loupe-portable-ou-grand-ecran/ | noindex, follow | website | 3 |

## Exceptions de graphie techniques
- `src/pages/CGV.tsx:50` : domaine ou identifiant technique conservé
- `src/pages/Livraison.tsx:28` : domaine ou identifiant technique conservé
- `src/pages/MentionsLegales.tsx:26` : domaine ou identifiant technique conservé
- `src/pages/MentionsLegales.tsx:53` : domaine ou identifiant technique conservé
- `src/pages/MentionsLegales.tsx:68` : domaine ou identifiant technique conservé
- `src/pages/MentionsLegales.tsx:82` : domaine ou identifiant technique conservé
- `src/pages/MentionsLegales.tsx:96` : domaine ou identifiant technique conservé
- `src/pages/MentionsLegales.tsx:123` : domaine ou identifiant technique conservé
- `src/pages/PolitiqueConfidentialite.tsx:47` : domaine ou identifiant technique conservé
- `src/pages/PolitiqueConfidentialite.tsx:310` : domaine ou identifiant technique conservé
- `src/pages/RetoursRemboursements.tsx:32` : domaine ou identifiant technique conservé
- `src/pages/SavGaranties.tsx:82` : domaine ou identifiant technique conservé
- `src/test/metadataV52.test.ts:34` : test des graphies interdites
- `src/test/metadataV52.test.ts:35` : test des graphies interdites
- `src/components/layout/Header.tsx:6` : domaine ou identifiant technique conservé
