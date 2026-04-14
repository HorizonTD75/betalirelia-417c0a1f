

## Plan : Retirer la mention RGPD des formulaires dans l'export HTML v15

### Objectif
Partir de l'archive `lirelia-site-html-local-v15.tar.gz` fournie, supprimer la phrase RGPD visible sous les boutons d'envoi dans les 3 formulaires (Contact Conseil, Contact Bilan, Club), puis regénérer un zip prêt à déployer.

### Pages concernées
- `contact-conseil/index.html` — bouton "Envoyer ma demande de conseil"
- `rdv-bilan/index.html` — bouton "Demander un rendez-vous"
- `club/index.html` — bouton "Je m'inscris"

### Action technique
1. Extraire l'archive v15 dans un répertoire temporaire
2. Dans chaque fichier HTML des 3 pages, rechercher et supprimer le bloc `<p>` contenant "En envoyant ce formulaire, vous acceptez que vos données soient utilisées..." et le lien "Politique de confidentialité"
3. Vérifier qu'aucun autre contenu n'est impacté
4. Repackager en `lirelia-v16-static.zip` sans modifier la structure de répertoires, le CSS, ni aucun autre fichier

### Livrable
Un fichier zip identique au v15 mais sans la mention RGPD sous les boutons de validation des formulaires.

