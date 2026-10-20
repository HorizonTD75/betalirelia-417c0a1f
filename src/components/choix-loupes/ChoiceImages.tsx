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
import { CHOICE_PHOTO_BRIEFS_ENABLED, ZONE_TITLES, zoneAspect } from "@/content/choix-loupes/editorialMode";

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
/** Illustrations provisoires du matériel : jamais considérées comme la photo pédagogique validée. */
const ZONE_PHOTOS: Record<string, (keyof typeof PHOTOS)[]> = {
  "pm-01": ["nora", "lina", "amelie"], "pm-02": ["nora", "lina", "amelie", "clip", "mezzo"],
  "pa-01": ["nora"], "pa-02": ["lina"], "oe-01": ["nora", "amelie"], "ls-01": ["clip"],
  "ml-01": ["focus", "lina", "astrid", "mezzo"], "el-01": ["eira", "nora", "astrid"], "te-02": ["mezzo"],
};
/** Photos définitives validées, attribuées par identifiant de zone. Une entrée ici fait disparaître le brief. */
export const FINAL_PHOTOS: Record<string, { src: string; width: number; height: number }> = {};

export function zoneState(id: string): "final" | "provisional" | "brief" {
  return FINAL_PHOTOS[id] ? "final" : ZONE_PHOTOS[id] ? "provisional" : "brief";
}

function PhotoBrief({ zone }: { zone: ChoiceImageZone }) {
  const missing = "à préciser";
  return <div data-photo-brief={zone.id} className="choice-brief rounded-lg border-2 border-dashed border-primary/40 bg-muted/50 overflow-hidden grid grid-cols-1 md:grid-cols-[2fr_3fr]">
    <div className="choice-brief-frame flex flex-col items-center justify-center text-center gap-2 p-6 bg-card/60 border-b md:border-b-0 md:border-r border-dashed border-primary/30 min-w-0" style={{ aspectRatio: zoneAspect(zone.format) }}>
      <Camera aria-hidden="true" className="w-10 h-10 text-primary" />
      <p className="text-base font-bold tracking-wide text-primary">PHOTO À RÉALISER · {zone.id}</p>
      <p className="text-xl font-bold text-foreground leading-snug max-w-xl">{ZONE_TITLES[zone.id] ?? missing}</p>
    </div>
    <div className="p-5 space-y-3 text-lg leading-relaxed min-w-0">
      <p><strong className="text-primary">À photographier :</strong> {zone.description}</p>
      <p><strong className="text-primary">Objectif pédagogique :</strong> {zone.caption ?? missing}</p>
      <p><strong className="text-primary">Cadrage et format :</strong> {zone.format ?? missing}</p>
      <details className="choice-brief-more">
        <summary className="cursor-pointer font-semibold text-primary py-1">Texte alternatif, légende et statut prévus</summary>
        <div className="pt-2 space-y-2">
          <p><strong>Texte alternatif :</strong> {zone.alt ?? missing}</p>
          <p><strong>Légende :</strong> {zone.caption ?? missing}</p>
          <p><strong>Emplacement :</strong> {zone.placement ?? missing}</p>
          <p><strong>Statut :</strong> {zone.status ?? missing}</p>
        </div>
      </details>
    </div>
  </div>;
}

export default function ChoiceImages({ zone, first }: { zone: ChoiceImageZone; first: boolean }) {
  const final = FINAL_PHOTOS[zone.id];
  if (final) return <figure data-choice-images={zone.id} data-zone-state="final" className="my-8">
    <img src={final.src} alt={zone.alt ?? ""} width={final.width} height={final.height} loading={first ? "eager" : "lazy"} decoding="async" className="w-full h-auto rounded-lg" />
    {zone.caption && <figcaption className="text-lg mt-3">{zone.caption}</figcaption>}
  </figure>;
  const photos = ZONE_PHOTOS[zone.id];
  const showBrief = CHOICE_PHOTO_BRIEFS_ENABLED;
  if (!photos && !showBrief) return null;
  return <div data-choice-images={zone.id} data-zone-state={photos ? "provisional" : "brief"} className="choice-zone my-8 space-y-4">
    {photos && <div>
      <div className={`grid grid-cols-1 ${photos.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-md mx-auto"} gap-5`}>
        {photos.map((key) => { const photo = PHOTOS[key]; return <figure key={key} className="min-w-0 border border-border rounded-lg overflow-hidden bg-card">
          <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading={first ? "eager" : "lazy"} decoding="async" className="w-full aspect-[4/3] object-contain" />
          <figcaption className="p-4 text-lg text-foreground font-semibold border-t border-border">{photo.caption}</figcaption>
        </figure>; })}
      </div>
      <p className="text-base text-muted-foreground leading-relaxed mt-3">Illustration provisoire du matériel LIRELIA, photographié séparément ; il ne s’agit pas d’un essai comparatif.</p>
    </div>}
    {showBrief && <PhotoBrief zone={zone} />}
  </div>;
}