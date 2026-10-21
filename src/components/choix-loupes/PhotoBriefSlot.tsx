import { Camera, Search, BookOpen, Glasses, Hand, Sun, Monitor } from "lucide-react";
import { getPhotoBrief } from "@/content/choix-loupes/photoRegistry";
import { useChoiceMode } from "./ChoiceEditorialContext";
import clipLowered from "@/assets/products/clip-lunette-loupe-baisse.jpeg";
import clipRaised from "@/assets/products/clip-lunette-loupe-releve.jpeg";

export const VERIFIED_SLOT_PHOTOS = {
  "ls-02": [
    { src: clipLowered, width: 600, height: 600, alt: "Le clip lunettes loupe fixé sur des lunettes de vue, lentilles abaissées devant les verres.", caption: "Lentilles abaissées" },
    { src: clipRaised, width: 600, height: 600, alt: "Le même clip sur les mêmes lunettes de vue, lentilles relevées au-dessus des verres.", caption: "Lentilles relevées" },
  ],
};

export default function PhotoBriefSlot({ id, first = false }: { id: string; first?: boolean }) {
  const mode = useChoiceMode();
  const brief = getPhotoBrief(id);
  if (!brief) return null;
  if (id === "ls-02") return <div data-choice-images={id} data-zone-state="final" className="choice-zone choice-photo-pair">
    <div className="choice-duo">{VERIFIED_SLOT_PHOTOS[id].map((photo) => <figure key={photo.src}>
      <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading={first ? "eager" : "lazy"} decoding="async" />
      <figcaption>{photo.caption}</figcaption>
    </figure>)}</div>
    <p className="text-lg mt-4">{brief.legendeProposee}</p>
  </div>;
  if (mode !== "photos") {
    const Icon = id.startsWith("ls") ? Glasses : id.startsWith("ml") ? Hand : id.startsWith("el") ? Sun : id.startsWith("te") ? Monitor : id.startsWith("pa") ? BookOpen : Search;
    return <div data-choice-images={id} data-zone-state="principle" className="choice-principle-motif" aria-hidden="true"><Icon /></div>;
  }
  return <div data-choice-images={id} data-zone-state="brief" className={`choice-zone choice-photo-slot choice-ratio-${brief.ratio.replace(":", "-")}`}>
    <div data-photo-brief={id} className="choice-brief">
      <div className="flex items-start gap-3"><Camera aria-hidden="true" className="w-7 h-7 shrink-0 mt-1" /><div>
        <p className="text-base font-bold">PHOTO À RÉALISER · {id}</p><p className="text-xl font-bold leading-snug mt-2">{brief.titre}</p>
      </div></div>
      <dl className="choice-brief-summary">
        <div><dt>Produits</dt><dd>{brief.produits}</dd></div>
        <div><dt>Scène exacte</dt><dd>{brief.scene}</dd></div>
        <div><dt>Cadrage</dt><dd>{brief.angle}</dd></div>
      </dl>
      <details className="choice-brief-more">
        <summary>Voir toutes les consignes</summary>
        <div className="space-y-4 pt-4">
          <p><strong>Éclairage :</strong> {brief.lumiere}</p>
          <p><strong>Objectif pédagogique :</strong> {brief.objectifPedagogique}</p>
          <ul className="list-disc pl-6 space-y-2">{brief.pointsDeControle.map((point) => <li key={point}>{point}</li>)}</ul>
          <p><strong>Format :</strong> {brief.vues > 1 ? `${brief.vues} vues distinctes · ` : ""}{brief.ratio}</p>
          <p><strong>Texte alternatif prévu :</strong> {brief.altPropose}</p>
          <p><strong>Légende prévue :</strong> {brief.legendeProposee}</p>
        </div>
      </details>
    </div>
  </div>;
}