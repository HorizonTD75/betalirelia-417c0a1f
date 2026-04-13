
Objectif: corriger le vrai blocage. Le problème ne vient pas de la case RGPD elle-même, mais de la bannière cookies globale qui recouvre toute la fenêtre.

1. Cause identifiée
- `src/components/CookieConsentBanner.tsx` utilise un conteneur plein écran (`fixed inset-0 z-[9999]`).
- Même si l’overlay a déjà `pointer-events-none`, le conteneur parent reste cliquable sur toute la page.
- Résultat: tant que la bannière est affichée, les clics sur les formulaires derrière elle (dont la case RGPD) sont interceptés.

2. Correction à appliquer
- Rendre le conteneur global de la bannière transparent aux clics:
  - ajouter `pointer-events-none` sur le wrapper plein écran.
- Rendre uniquement le cartouche cookies interactif:
  - ajouter `pointer-events-auto` sur le panneau visible.
- Conserver l’overlay visuel non interactif.
- Mettre à jour la phrase du texte cookies pour rester cohérent avec le bouton:
  - remplacer “personnaliser vos choix” par “gérer vos choix”.

3. Ajustement accessibilité/comportement
- La bannière ne doit plus être traitée comme une modale bloquante si l’utilisateur doit pouvoir continuer à remplir un formulaire derrière.
- Je prévois donc d’enlever `aria-modal="true"` et de garder une sémantique compatible avec une bannière/panneau de préférences.

4. Vérifications après correction
- Tester les 3 boutons cookies:
  - Tout accepter
  - Tout refuser
  - Gérer
- Tester les formulaires avec bannière visible:
  - `/contact-conseil`
  - `/rdv-bilan`
  - inscription Club
- Vérifier qu’on peut:
  - cliquer la case RGPD
  - cliquer le lien de politique de confidentialité
  - soumettre le formulaire une fois la case cochée
- Vérifier sur desktop et mobile.

5. Fichiers concernés
- `src/components/CookieConsentBanner.tsx`
- éventuellement `src/components/CookieConsentWrapper.tsx` si un petit ajustement d’ouverture des préférences est nécessaire
- pas de correction prioritaire à faire dans `src/components/RGPDConsent.tsx`, qui est déjà structurellement correcte pour ce bug précis

6. Détail technique
```text
Avant:
[wrapper plein écran capte les clics]
  └─ [overlay]
  └─ [panel]

Après:
[wrapper plein écran pointer-events-none]
  └─ [overlay pointer-events-none]
  └─ [panel pointer-events-auto]
```

7. Suite proposée
- J’applique cette correction sur la bannière.
- Je vérifie ensuite le parcours complet formulaire + cookies.
- Si vous le souhaitez ensuite, je régénère aussi une nouvelle version de l’export HTML local pour garder la même correction dans la version exportée.
