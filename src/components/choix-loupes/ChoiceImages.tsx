import nora from "@/assets/products/loupe-main-nora-x6.jpeg";
import lina from "@/assets/products/loupe-dome-eclairante-lina.jpg";
import amelie from "@/assets/products/loupe-electronique-amelie-product.jpeg";
import clip from "@/assets/products/clip-lunette-loupe.jpg";
import focus from "@/assets/products/lunettes-loupes-focus-dmla.jpg";
import eira from "@/assets/products/lampe-eira-blanche-pliee.jpg";
import astrid from "@/assets/products/lampe-loupe-astrid-noire.jpg";
import mezzo from "@/assets/products/teleagrandisseur-mezzo-basse-vision.jpg";
import type { ChoiceImageZone } from "@/content/choix-loupes/articles";
import { isActivePhotoZone } from "@/content/choix-loupes/editorialMode";
import PhotoBriefSlot from "./PhotoBriefSlot";

export const PHOTOS = {
  nora: { src: nora, width: 768, height: 768, alt: "Loupe à main NORA agrandissant les caractères d’une étiquette imprimée", caption: "Loupe à main NORA" },
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
  return !isActivePhotoZone(id) ? "inactive" : id === "ls-02" || FINAL_PHOTOS[id] ? "final" : "brief";
}

export default function ChoiceImages({ zone, first }: { zone: ChoiceImageZone; first: boolean }) {
  if (!isActivePhotoZone(zone.id)) return null;
  const final = FINAL_PHOTOS[zone.id];
  if (final) return <figure data-choice-images={zone.id} data-zone-state="final" className="my-8">
    <img src={final.src} alt={zone.alt ?? ""} width={final.width} height={final.height} loading={first ? "eager" : "lazy"} decoding="async" className="w-full h-auto rounded-lg" />
    {zone.caption && <figcaption className="text-lg mt-3">{zone.caption}</figcaption>}
  </figure>;
  return <PhotoBriefSlot id={zone.id} first={first} />;
}