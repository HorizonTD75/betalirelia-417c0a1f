import nora from "@/assets/products/loupe-main-nora-lecture.jpg";
import lina from "@/assets/products/loupe-dome-eclairante-lina.jpg";
import amelie from "@/assets/products/loupe-electronique-amelie-product.jpeg";
import clip from "@/assets/products/clip-lunette-loupe.jpg";
import focus from "@/assets/products/lunettes-loupes-focus-dmla.jpg";
import eira from "@/assets/products/lampe-eira-blanche-pliee.jpg";
import astrid from "@/assets/products/lampe-loupe-astrid-noire.jpg";
import mezzo from "@/assets/products/teleagrandisseur-mezzo-basse-vision.jpg";
import type { ChoiceImageZone } from "@/content/choix-loupes/articles";

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
const ZONE_PHOTOS: Record<string, (keyof typeof PHOTOS)[]> = {
  "pm-01": ["nora", "lina", "amelie"], "pm-02": ["nora", "lina", "amelie", "clip", "mezzo"],
  "pa-01": ["nora"], "pa-02": ["lina"], "oe-01": ["nora", "amelie"], "ls-01": ["clip"],
  "ml-01": ["focus", "lina", "astrid", "mezzo"], "el-01": ["eira", "nora", "astrid"], "te-02": ["mezzo"],
};

export default function ChoiceImages({ zone, first }: { zone: ChoiceImageZone; first: boolean }) {
  const photos = ZONE_PHOTOS[zone.id];
  const privatePreview = window.location.hostname === "localhost" || window.location.hostname.startsWith("id-preview--");
  if (!photos && !privatePreview) return null;
  if (!photos) return <aside data-choice-pending={zone.id} className="my-8 border border-dashed border-border rounded-lg bg-muted/40 p-5 text-base text-muted-foreground leading-relaxed">
    <p className="font-semibold mb-2">Visuel à réaliser · {zone.id}</p><p>{zone.description}</p>
  </aside>;
  return <div data-choice-images={zone.id} className="my-8">
    <div className={`grid grid-cols-1 ${photos.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-md mx-auto"} gap-5`}>
      {photos.map((key) => { const photo = PHOTOS[key]; return <figure key={key} className="min-w-0 border border-border rounded-lg overflow-hidden bg-card">
        <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading={first ? "eager" : "lazy"} decoding="async" className="w-full aspect-[4/3] object-contain" />
        <figcaption className="p-4 text-lg text-foreground font-semibold border-t border-border">{photo.caption}</figcaption>
      </figure>; })}
    </div>
    <p className="text-base text-muted-foreground leading-relaxed mt-3">Illustrations du matériel LIRELIA, photographié séparément ; il ne s’agit pas d’un essai comparatif.</p>
  </div>;
}