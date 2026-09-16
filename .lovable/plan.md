# Suivi Meta Ads (Pixel Facebook) sur LirElia

Ajout du Pixel Meta `2202036963709336` en parallèle du suivi Google existant, avec un utilitaire central réutilisable pour les futurs produits (NORA, réveils, horloges...).

Note : vous avez choisi que le Pixel Meta et son bloc `noscript` soient actifs en permanence, sans passer par la bannière cookies. J'applique ce choix. À signaler tout de même : le Pixel dépose un cookie publicitaire (`_fbp`) et, pour les visiteurs européens, le RGPD demande normalement un accord préalable ; c'est vous qui restez maître de cette décision.

## Ce qui sera fait

1. **Initialisation du Pixel** dans la page principale du site (`index.html`), à côté du code Google existant, avec le bloc `noscript` fourni par Meta placé dans le corps de la page (règle HTML : il ne peut pas rester dans l'en-tête).
2. **PageView** : un seul envoi par page réellement affichée. Le premier est envoyé par le code d'initialisation ; à chaque changement de page dans le site, un nouveau PageView est envoyé une seule fois (même garde anti-doublon que celle déjà utilisée pour Google).
3. **ViewContent sur la fiche Loupe Amélie** (`/boutique/loupe-amelie/`) : envoyé une seule fois à l'affichage de la fiche, avec nom, catégorie, identifiant `amelie`, valeur 188 € et devise EUR.
4. **InitiateCheckout** : envoyé uniquement au clic réel sur les boutons d'achat de la fiche Amélie (les deux boutons menant à Stripe). Le clic et la redirection Stripe ne sont jamais retardés ni bloqués ; si Meta est indisponible ou bloqué, l'achat continue normalement.
5. **Structure générique** : chaque produit suivi est décrit une seule fois (identifiant, nom, catégorie, prix, devise), puis les mêmes fonctions servent pour tous les produits. Ajouter NORA ou un réveil demandera seulement une ligne de description produit et deux appels sur sa fiche.

## Ce qui ne change pas

Design, textes, prix, liens Stripe, logique de paiement, URL, SEO, données structurées, Google Ads / gtag / Analytics / Clarity / Ahrefs : strictement inchangés. Aucun événement Purchase n'est ajouté.

## Détails techniques

- `index.html` : snippet Meta officiel dans `<head>` (après le bloc Google, sans y toucher) ; `<noscript><img .../></noscript>` placé en tête de `<body>` pour rester valide HTML5.
- Nouveau fichier `src/lib/metaPixel.ts` :
  - type `MetaProduct { id, name, category, price, currency }` et registre `META_PRODUCTS` (entrée `amelie` : 188 EUR, catégorie « Loupe électronique »).
  - `trackMetaPageView()`, `trackMetaViewContent(product)`, `trackMetaInitiateCheckout(product)`, chacune protégée par `typeof window.fbq === 'function'` et un `try/catch`, sans `await` ni blocage.
  - déclaration `fbq` sur `Window` (fichier de types dédié ou dans ce module).
- Nouveau hook `src/hooks/useMetaViewContent.ts` : `useEffect` avec `useRef` pour garantir un seul ViewContent par montage/route.
- `src/components/ScrollToTop.tsx` : ajout de `trackMetaPageView()` dans l'effet de suivi de route déjà présent (même clé `pathname + search`, même saut du premier rendu puisque le snippet a déjà envoyé le PageView initial). La logique Google n'est pas touchée.
- `src/pages/products/LoupeAmelie.tsx` : appel du hook ViewContent + `onClick={() => trackMetaInitiateCheckout(META_PRODUCTS.amelie)}` sur les deux liens `STRIPE_URL` (aucun `preventDefault`, `href` inchangé).
- Vérification en navigateur headless : présence de `fbq`, un seul PageView par route, ViewContent unique sur la fiche, InitiateCheckout au clic, redirection Stripe intacte, et absence de régression sur `gtag`.
