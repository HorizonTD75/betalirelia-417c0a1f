import nora from "@/assets/products/loupe-main-nora-lecture.jpg";
import lina from "@/assets/products/loupe-dome-eclairante-lina.jpg";
import amelie from "@/assets/products/loupe-electronique-amelie-product.jpeg";
import clip from "@/assets/products/clip-lunette-loupe.jpg";
import focus from "@/assets/products/lunettes-loupes-focus-dmla.jpg";
import eira from "@/assets/products/lampe-eira-blanche-pliee.jpg";
import astrid from "@/assets/products/lampe-loupe-astrid-noire.jpg";
import mezzo from "@/assets/products/teleagrandisseur-mezzo-basse-vision.jpg";
import { Camera } from "lucide-react";
import type { ChoiceImageZone } from "@/content/choix-loupes/articles";
import { ZONE_TITLES, isActivePhotoZone } from "@/content/choix-loupes/editorialMode";
import { useChoiceMode } from "./ChoiceEditorialContext";

export const PHOTOS = {
  nora: { src: nora, width: 1000, height: 1000, alt: "Loupe rectangulaire NORA tenue au-dessus d’un document imprimé", caption: "Loupe à main NORA" },
  lina: { src: lina, width: 499, height: 499, alt: "Loupe dôme LINA présentée seule", caption: "Loupe à poser LINA" },
  amelie: { src: amelie, width: 600, height: 600, alt: "Loupe électronique Amélie avec sa poignée et son écran", caption: "Loupe électronique Amélie" },
  clip: { src: clip, width: 779, height: 650, alt: "Clip lunettes loupe présenté seul, non fixé à une paire de lunettes", caption: "Clip lunettes loupe" },
  focus: { src: focus, width: 1500, height: 823, alt: "Lunettes loupes FOCUS dans leur étui ouvert", caption: "Lunettes loupes FOCUS" },
  eira: { src: eira, width: 1000, height: 1000, alt: "Lampe EIRA blanche repliée", caption: "Lampe de lecture EIRA" },
  astrid: { src: astrid, width: 1000, height: 906, alt: "Lampe loupe ASTRID noire avec son bras articulé et sa pince", caption: "Lampe loupe ASTRID" },
  mezzo: { src: mezzo, width: 600, height: 688, alt: "Téléagrandisseur Mezzo Focus affichant la photographie d’une murène, avec un livre sous sa caméra", caption: "Téléagrandisseur Mezzo Focus" },
};
/** Photos définitives validées, attribuées par identifiant de zone. Une entrée ici fait disparaître le brief. */
export const FINAL_PHOTOS: Record<string, { src: string; width: number; height: number }> = {};

export function zoneState(id: string): "final" | "brief" | "inactive" {
  return !isActivePhotoZone(id) ? "inactive" : FINAL_PHOTOS[id] ? "final" : "brief";
}

function PhotoBrief({ zone }: { zone: ChoiceImageZone }) {
  const missing = "à préciser";
  const description = zone.id === "ml-01"
    ? "Une seule photographie réelle de situation : une personne écrit, coud ou réalise des mots croisés avec une aide adaptée. Montrer les deux mains disponibles et le document ou l’outil utilisé. Aucun collage de produits ; ne pas présumer des possibilités du modèle."
    : zone.description;
  return <div data-photo-brief={zone.id} className="choice-brief rounded-lg border border-border bg-card p-4 md:p-5 text-foreground">
    <div className="flex items-start gap-3 min-w-0">
      <Camera aria-hidden="true" className="w-6 h-6 text-primary shrink-0 mt-1" />
      <div className="min-w-0"><p className="text-base font-semibold text-muted-foreground">{zone.id} · Photo à réaliser</p>
        <p className="text-xl font-bold text-primary leading-snug">{ZONE_TITLES[zone.id] ?? missing}</p></div>
    </div>
      <details className="choice-brief-more mt-3">
        <summary className="cursor-pointer font-semibold text-primary py-3">Voir les consignes</summary>
        <div className="pt-3 space-y-3 text-lg leading-relaxed border-t border-border">
          <p><strong>Scène exacte :</strong> {description}</p>
          {zone.id === "oe-02" && <p><strong>À vérifier :</strong> photographier uniquement les modes réellement disponibles sur le modèle choisi, avec le même texte.</p>}
          {zone.id === "te-01" && <p><strong>Comparaison :</strong> garder une taille de caractères comparable sur le même document ; indiquer les appareils et réglages utilisés.</p>}
          <p><strong>Cadrage et format :</strong> {zone.id === "ml-01" ? "Une photographie paysage, 1600 × 900 px minimum ; cadrage sur les mains, l’aide et l’activité, sans visage identifiable." : zone.format ?? missing}</p>
          <p><strong>Texte alternatif :</strong> {zone.alt ?? missing}</p>
          <p><strong>Légende :</strong> {zone.caption ?? missing}</p>
          <p><strong>Emplacement :</strong> {["pm-01", "pa-01", "ls-01"].includes(zone.id) ? "Photo principale du bandeau d’ouverture, remplace l’illustration provisoire." : zone.placement ?? missing}</p>
          <p><strong>Statut :</strong> {zone.status ?? missing}</p>
        </div>
      </details>
  </div>;
}

export default function ChoiceImages({ zone, first }: { zone: ChoiceImageZone; first: boolean }) {
  const mode = useChoiceMode();
  if (!isActivePhotoZone(zone.id)) return null;
  const final = FINAL_PHOTOS[zone.id];
  if (final) return <figure data-choice-images={zone.id} data-zone-state="final" className="my-8">
    <img src={final.src} alt={zone.alt ?? ""} width={final.width} height={final.height} loading={first ? "eager" : "lazy"} decoding="async" className="w-full h-auto rounded-lg" />
    {zone.caption && <figcaption className="text-lg mt-3">{zone.caption}</figcaption>}
  </figure>;
  if (mode !== "photos") return null;
  return <div data-choice-images={zone.id} data-zone-state="brief" className="choice-zone my-6"><PhotoBrief zone={zone} /></div>;
}