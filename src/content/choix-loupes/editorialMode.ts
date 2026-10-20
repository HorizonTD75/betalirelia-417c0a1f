/** Explicit development-only capability: production bundles cannot enable editorial UI. */
export const CHOICE_PHOTO_BRIEFS_ENABLED = import.meta.env.DEV;
export const DEFAULT_CHOICE_MODE = "reading" as const;
export type ChoiceMode = "reading" | "photos";

/** V5.4 supersedes the historical twenty-zone plan; reserve zones never render. */
export const ACTIVE_PHOTO_ZONES = [
  ["pm-01", "pm-03"], ["pa-01", "pa-02"], ["oe-01", "oe-02"],
  ["ls-01", "ls-02"], ["ml-01", "ml-02"], ["el-02", "el-03"], ["te-01", "te-03"],
] as const;
export const HERO_PHOTO_ZONES = ["pm-01", "pa-01", undefined, "ls-01", undefined, undefined, undefined] as const;
export const RESERVE_PHOTO_ZONES = ["ls-03"] as const;
export const isActivePhotoZone = (id: string) => ACTIVE_PHOTO_ZONES.some((ids) => ids.some((active) => active === id));
export const canPreparePhotos = (development: boolean) => development;

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
  "ml-01": "Une situation réelle avec les mains disponibles",
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
