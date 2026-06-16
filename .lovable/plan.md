L'audit signale ~219 occurrences sur 5 axes. Je propose de traiter en priorité ce qui apporte la majorité du score, sans inventer de fichiers fictifs.

## Ce que je vais faire (ce tour)

### 1. Renommage en minuscules (23 fichiers)
Tous les fichiers de `src/assets/products/` contenant des majuscules sont renommés (FRIDA, LINA, IVAR, VERA, DMLA, Mezzo, Senior). Mise à jour automatique de toutes les références (imports React/TSX, `src=`, données, JSON‑LD).

Exemple :
- `horloge-reveil-FRIDA-basse-vision-chiffres-blanc.jpg` → `horloge-reveil-frida-basse-vision-chiffres-blanc.jpg`
- `souris-loupe-electronique-VERA.jpg` → `souris-loupe-electronique-vera.jpg`
- `Senior-television-lunettes-max-tv.jpeg` → `senior-television-lunettes-max-tv.jpeg`

### 2. `width` / `height` intrinsèques (≈102 cas)
Ajout systématique de `width` et `height` réels (lus avec `sharp` sur chaque fichier source) sur toutes les `<img>` qui en manquent :
- pages produits (`src/pages/products/*.tsx`)
- pages bilans, hero (`bilan-domicile`, `bilan-expert-opticien-600`, `bilan-suivi-visio-600`, `aidants-hero-600`, `bilan-hero-600-2`)
- composants partagés : `ProductCard`, `CategoryPageLayout`, `HereditaryDiseasePageLayout`, `Header` (logo), sections accueil (`HeroSection`, `BooksSection`).
- on respecte le ratio natif ; CSS `max-width:100%; height:auto;` conservé.

### 3. Ratios incohérents (cartes catégories, hero, livres)
Les cartes catégories affichent 400×224 mais les sources sont 768×768/768×512 → on conserve les dimensions natives sur la balise `<img>` et on encapsule dans un conteneur `aspect-ratio + object-fit:cover` (modif dans `CategoryPageLayout` et `AidesLecture`/`CatalogueAides`). Idem pour les couvertures de livres (160×226 alors que source 600×960 / 800×1024) → conteneur `aspect-[10/16]` + image native.

### 4. Stratégie de chargement
- Image hero principale de chaque page : `loading="eager"` + `fetchPriority="high"` + `decoding="async"` (une seule par page).
- Toutes les autres images : `loading="lazy" decoding="async"`.
- Logo header : `loading="eager"` (présent dès le 1er écran) mais sans `fetchPriority`.

### 5. Logo Header
Déclaré 56×56 / 80×80 alors que natif 300×169 et 300×200. Je corrige les `width/height` au ratio natif (56×32 et 80×53) avec `object-fit:contain`, ou je passe en SVG si un SVG est déjà dispo dans le projet.

## Ce que je NE ferai PAS (à valider séparément)

Ces points exigent une étape lourde de génération d'images (que vous voudrez peut‑être faire hors Lovable, dans votre pipeline d'export) :

- **Création de vraies variantes responsive** (480/800/1440) et `srcSet`/`sizes` : le brief interdit explicitement les fichiers fictifs. Je n'ai pas d'outil ici pour générer des variantes réellement redimensionnées et compressées sans risquer une dégradation visible. Je peux préparer la structure (props `srcSet`/`sizes` dans `ProductCard`, `CategoryPageLayout`, `HeroSection`) et les câbler dès que vous fournirez les fichiers — ou un OK pour que je génère les variantes avec `sharp` au build.
- **Conversion WebP/AVIF** des sources lourdes : même raison ; à faire dans le pipeline d'export.

## Vérification
Après les modifications : build, vue preview Lovable en desktop / tablette / mobile, contrôle qu'aucune image n'est cassée ni déformée, et que le LCP est bien `eager`.

## Question
Voulez‑vous que je :
- **(A)** applique uniquement les points 1‑5 (renommage + width/height + ratios + loading + logo) — recommandé, sans risque,
- **(B)** en plus, génère mécaniquement des variantes responsive `@1x/@2x` avec `sharp` à partir des sources existantes (vrais fichiers redimensionnés, mêmes contenus, ajoutés dans `src/assets/products/responsive/`) et câble `srcSet`/`sizes` ?

Répondez A ou B et je lance.