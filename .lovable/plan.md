

## Plan : Corriger l'export HTML statique (v10)

Le site React fonctionne correctement. Les 3 problemes signales proviennent uniquement de l'export HTML statique deploye sur www.lirelia.fr.

### Problemes identifies

1. **Mention RGPD manquante** sous les boutons d'envoi des formulaires (Contact, Bilan, Club)
2. **Page aides-lecture tronquee** : seul le hero + footer sont captures, tout le contenu intermediaire est absent
3. **Lien "Faire le point sur mes besoins"** absent car inclus dans le contenu non capture

### Cause racine

Le script Puppeteer de capture du DOM ne laisse pas assez de temps au rendu React pour hydrater completement certaines pages (lazy loading, images, composants conditionnels). La page aides-lecture semble particulierement affectee.

### Corrections a appliquer

1. **Augmenter le delai d'attente Puppeteer** avant capture du DOM (passer de ~2s a ~5s par page, avec attente explicite du dernier element rendu)
2. **Ajouter une verification post-capture** : pour chaque page HTML generee, verifier la presence de marqueurs cles :
   - Formulaires : presence du texte "Politique de confidentialite" (composant RGPDConsent)
   - Aides-lecture : presence du texte "Faire le point sur mes besoins"
3. **Re-executer la capture** sur les 46 routes avec le script corrige
4. **Corriger les chemins relatifs** des assets (images, CSS) comme dans les versions precedentes
5. **Generer le zip v10** et le mettre a disposition

### Details techniques

- Le script Puppeteer utilisera `page.waitForSelector` sur des elements specifiques a chaque page avant capture
- Fallback : `page.waitForTimeout(5000)` si le selecteur n'est pas trouve
- Verification automatique post-export sur les pages critiques (contact, bilans, club, aides-lecture)

