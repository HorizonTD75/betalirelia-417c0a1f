import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import nora from "@/assets/products/loupe-main-nora-lecture.jpg";

export default function ChoiceGuideBanner({ context }: { context: "home" | "reading" | "catalogue" }) {
  const compact = context === "catalogue";
  return <aside data-choice-entry={context} className={`flex flex-col sm:flex-row items-center gap-6 border-y border-border bg-muted/40 ${compact ? "py-5" : "py-7 md:py-9"}`}>
    <img src={nora} alt="Loupe à main NORA tenue au-dessus d’un document imprimé" width={1000} height={1000} loading="lazy" className={`${compact ? "w-28 h-24" : "w-full sm:w-48 h-44"} object-contain bg-card shrink-0`} />
    <div className="min-w-0 flex-1">
      <h2 className={`${compact ? "text-xl" : "text-2xl md:text-3xl"} font-bold text-primary leading-snug mb-3`}>Quelle loupe de lecture choisir ?</h2>
      <p className="text-xl leading-relaxed mb-4">Repérez la solution selon ce que vous souhaitez lire.</p>
      <Button asChild variant={compact ? "outline" : "secondary"}><a href="/choisir-loupe-lecture/">{context === "reading" ? "Quelle loupe de lecture choisir ?" : "Trouver la loupe adaptée"}<ArrowRight aria-hidden="true" /></a></Button>
    </div>
  </aside>;
}