# Intégration privée du cocon « Quelle loupe de lecture choisir ? » — V5.1

## Périmètre

Créer ensemble les sept pages, sans conflit avec les adresses existantes :

1. `/choisir-loupe-lecture/` — Quelle loupe de lecture choisir ?
2. `/choisir-loupe-lecture/personne-agee/` — Quelle loupe choisir pour une personne âgée ?
3. `/choisir-loupe-lecture/loupe-optique-ou-electronique/` — Loupe en verre ou loupe électronique : laquelle choisir ?
4. `/choisir-loupe-lecture/loupe-sur-lunettes/` — Peut-on fixer une loupe sur ses lunettes de vue ?
5. `/choisir-loupe-lecture/lire-mains-libres/` — Comment lire en gardant les mains libres ?
6. `/choisir-loupe-lecture/loupe-eclairante-ou-lampe/` — Loupe éclairante ou lampe de lecture : que choisir ?
7. `/choisir-loupe-lecture/loupe-portable-ou-grand-ecran/` — Loupe portable ou grand écran : quand choisir un téléagrandisseur ?

Les sept fichiers 00 à 06 et les consignes 07, 08, 11, 13 et 15 ont été lus. Aucun conflit de route détecté.

## Contenus et présentation

- Conserver intégralement les textes entre les délimiteurs de contenu public, les H1 et les métadonnées validées. Ne pas afficher les notes internes, le YAML ou les commentaires d’images.
- Reprendre la charte actuelle : bleu et or, Source Sans 3, grands caractères, liens soulignés et navigation au clavier.
- Présenter les six guides de la page mère en cartes ou liste lisible ; conserver les tableaux accessibles et les questions/réponses entièrement visibles.
- Réutiliser les photographies locales autorisées de NORA, LINA, Amélie, clip, FOCUS, lampes et téléagrandisseur, après contrôle visuel. Les légender comme illustrations du matériel, jamais comme essais comparatifs.
- Laisser les photos de contraste, mesures, lentilles relevées et autres démonstrations manquantes en emplacements discrets « visuel à réaliser », avec leur identifiant et description.

## Liens et protection

- Conserver les liens réciproques des Markdown et les destinations internes, avec slash final ; dans la prévisualisation, les liens Lirelia doivent rester dans la maquette plutôt qu’ouvrir le site public.
- Ajouter uniquement les liens contextuels demandés sur les huit pages existantes et les quatre fiches produits ; ne retirer aucun lien.
- Ajouter `noindex` aux sept pages. Utiliser la prévisualisation Lovable réservée aux personnes ayant accès au projet ; ne pas créer de lien de partage public. Si une ouverture anonyme est constatée, arrêter et demander la fermeture de cet accès avant d’y exposer les nouveaux textes.
- Ne rien publier, ne pas modifier le sitemap public ni demander d’indexation. Les modifications restent dans la version de travail.
- Ne pas modifier les menus, styles globaux, formulaires, prix, variantes, paiements, suivi publicitaire ou pages maladies/livres.

## Détails techniques

- Conserver les Markdown comme source éditoriale et utiliser une présentation commune dédiée, compatible avec les conventions du projet.
- Étendre les mécanismes existants de métadonnées et de fil d’Ariane sans Helmet ni second système SEO ; conserver l’interdiction de FAQPage et d’Article avec auteur/date.
- Ne pas émettre de données structurées sur les routes privées si le registre existant les exclut sur `noindex` ; préparer le fil d’Ariane pour la future validation publique sans contourner cette règle.
- Documenter les choix d’architecture et ajouter des tests ciblés sur l’extraction du contenu public, les sept adresses et les règles d’exclusion.

## Vérification et rapport

- Contrôler les sept pages sur ordinateur et smartphone : texte complet, H1 unique, questions visibles, tableaux lisibles, images présentes, absence de débordement et navigation au clavier.
- Vérifier les liens entrants/sortants, les métadonnées exactes et `noindex`, puis exécuter les tests concernés.
- Fournir un rapport recensant les sept routes, les fichiers modifiés, les visuels réemployés, les zones encore à illustrer et les limites des contrôles.
- La conversion HTML statique et la validation éditoriale restent des étapes séparées : ne pas déclarer le cocon publiable sur la seule base de la prévisualisation.