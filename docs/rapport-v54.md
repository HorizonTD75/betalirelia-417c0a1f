# LIRELIA V5.4 — contrôles en Preview

Aucune publication déclenchée ; lirelia.fr inchangé.

## Images et modes

- Suppression de la galerie NORA/LINA/Amélie et de la galerie des cinq appareils injectées aux marqueurs. Les cinq vignettes individuelles des cartes familles restent présentes.
- Aucune répétition du même fichier image dans le contenu principal d'une page lors des contrôles.
- Lecture est le mode par défaut : aucun encart de prise de vue. Préparer les photos montre deux consignes compactes par page, détails fermés initialement. Le mode éditorial est exclu des compilations de production.
- Aucune photographie définitive n'est attachée : les démonstrations manquantes ne sont pas simulées. Les compositions pédagogiques accueilleront ces photos une fois fournies.

| Page | Images dans le contenu principal en Lecture | Emplacements actifs en Préparer les photos |
|---|---:|---|
| Page mère | 5 | pm-01, pm-03 |
| Personne âgée | 1 | pa-01, pa-02 |
| Optique ou électronique | 1 | oe-01, oe-02 |
| Loupe sur lunettes | 1 | ls-01, ls-02 |
| Mains libres | 1 | ml-01, ml-02 |
| Éclairage | 1 | el-02, el-03 |
| Portable ou grand écran | 1 | te-01, te-03 |

Total : 14 emplacements actifs. ls-03 reste en réserve ; pm-02, pa-03, oe-03, el-01 et te-02 sont désactivés. pm-03 n'apparaît qu'une fois en préparation. Les nombres d'images excluent le logo commun et comptent les éléments img, pas les icônes.

## Présentation

Page mère : quatre usages courts, explications dépliables, cinq cartes familles, distinction grossissement/contraste, six cartes de guides, FAQ et appel final. Pages filles : sections pédagogiques différenciées, zones d'activité et consignes compactes ; textes éditoriaux conservés. En-tête commun non modifié : sa réduction au défilement n'a pas été traitée pour éviter d'affecter les autres pages.

## Contrôles réellement exécutés

- Sept routes à 1440, 768, 375 et 320 px, dans les deux modes : 28 parcours, 56 états, captures effectuées ; aucune erreur JavaScript, aucun débordement horizontal, un seul H1 et aucune image cassée détectée.
- Consignes initialement fermées ; ouverture d'une consigne et d'une FAQ au clavier sur chaque parcours.
- Six liens de guides cliqués, cinq liens de cartes familles vérifiés (quatre destinations distinctes ; les deux familles optiques partagent une catégorie), un lien produit NORA cliqué.
- Sept pages contrôlées avec reflow équivalent à un zoom 200 % via CSS dans Chromium ; ce n'est pas un contrôle manuel du zoom navigateur.
- Sept H1 vérifiés à 320 px : aucun point d'interrogation seul sur sa ligne.
- Aucun lien isolé Qui sommes-nous dans le contenu principal ; lien du footer conservé. Aucun encart photo dans le footer.
- Préférence de réduction des animations activée pendant les parcours.
- 30 tests réussis : plan V5.4, métadonnées partagées, expiration du consentement et événements de consentement. Dernier signal de compilation : OK.
- SEO/OG, URL et suivi analytique non modifiés par cette intervention. Conversion HTML OVH non vérifiée.

## Retouche du bandeau RGPD demandée pendant les contrôles

Lien Politique de cookies retiré du bandeau ; aucun doublon dans le panneau. Page et lien du footer conservés. Accepter : jaune de la charte, texte bleu foncé gras. Refuser strictement inchangé et toujours après Accepter ; Personnaliser mes choix conservé.

Comparaison des rectangles avant/après à 1280, 375 et 320 px : dimensions et position du panneau, dimensions et arrondi d'Accepter identiques ; géométrie et styles calculés de Refuser identiques. Personnalisation, refus au clavier et mémorisation après rechargement vérifiés. Logique, durée de 12 mois, transmission OVH/Google Sheets et trackers non modifiés ; livraison effective au relais externe non revalidée.

## Fichiers modifiés pour cette livraison

- src/content/choix-loupes/editorialMode.ts
- src/components/choix-loupes/ChoiceEditorialContext.tsx (nouveau)
- src/components/choix-loupes/ChoiceImages.tsx
- src/pages/choix-loupes/ChoiceArticlePage.tsx
- src/pages/choix-loupes/choice-article.css
- src/test/choiceArticles.test.ts
- src/components/CookieConsentBanner.tsx (retouche séparée RGPD)
- AGENTS.md
- roadmap.md
- docs/rapport-v54.md (ce rapport)