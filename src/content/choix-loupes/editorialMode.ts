/**
 * MODE ÉDITORIAL — briefs photo visibles.
 * Actif pendant la phase de conception pour préparer les 20 prises de vue du cocon.
 * À PASSER À `false` AVANT TOUTE MISE EN LIGNE PUBLIQUE : les consignes de prise de vue
 * ne doivent jamais apparaître sur le site final (un test vérifie la valeur attendue).
 */
export const CHOICE_PHOTO_BRIEFS_ENABLED = true;

/** Titres de travail compréhensibles des 20 emplacements photo (aucun résultat inventé). */
export const ZONE_TITLES: Record<string, string> = {
  "pm-01": "Un même courrier et trois types de loupes",
  "pm-02": "Les cinq familles d’appareils côte à côte",
  "pm-03": "Comparer deux grossissements sur le même texte",
  "pa-01": "Lire un courrier avec une loupe à poser, accompagné d’un proche",
  "pa-02": "Trois documents familiers comme supports d’essai",
  "pa-03": "Une table d’essai prête à l’emploi",
  "oe-01": "Le même paragraphe : loupe optique et loupe électronique",
  "oe-02": "Un même texte en trois modes d’affichage",
  "oe-03": "Schéma : largeur du champ de lecture",
  "ls-01": "Le clip fixé sur des lunettes de vue",
  "ls-02": "Lentilles du clip relevées puis abaissées",
  "ls-03": "Lire à la bonne distance de travail",
  "ml-01": "Quatre situations de travail les mains libres",
  "ml-02": "Écrire sous un téléagrandisseur",
  "el-01": "Lampe, loupe éclairante et lampe loupe sur le même objet",
  "el-02": "D’où viennent les reflets sur un emballage brillant",
  "el-03": "La même page avec un mauvais puis un bon éclairage",
  "te-01": "Loupe portable et téléagrandisseur sur la même page",
  "te-02": "Un téléagrandisseur de bureau en usage",
  "te-03": "L’encombrement réel d’un téléagrandisseur",
};

/** Ratio d’affichage déduit du format demandé, pour juger le rythme visuel de la page. */
export function zoneAspect(format = ""): string {
  const size = format.match(/(\d{3,4})\s*×\s*(\d{3,4})/);
  if (size) return `${size[1]} / ${size[2]}`;
  if (/carr/i.test(format)) return "1 / 1";
  return "16 / 9";
}
