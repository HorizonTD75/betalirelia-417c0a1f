import { BookOpen, Contrast, FileText, Glasses, Hand, LampDesk, Monitor, Search, ShieldCheck, SlidersHorizontal, Sun, Tag, Wrench, ZoomIn, type LucideIcon } from "lucide-react";

export function CriteriaStrip({ items }: { items: { icon: LucideIcon; title: string; text?: string }[] }) {
  return <ul className="choice-criteria-strip">{items.map(({ icon: Icon, title, text }) => <li key={title}>
    <span className="choice-icon" aria-hidden="true"><Icon /></span><div><p className="text-xl font-bold text-primary">{title}</p>{text && <p className="text-lg mt-2 leading-relaxed">{text}</p>}</div>
  </li>)}</ul>;
}

export function ContrastModesHTML() {
  return <div className="choice-contrast-example">
    <p className="text-lg font-bold text-primary mb-4">Exemples de principe — modes variables selon l’appareil</p>
    <div className="choice-contrast-grid" role="group" aria-label="Schéma de principe de trois rendus contrastés">
      {["Noir sur blanc", "Blanc sur noir", "Jaune sur noir"].map((label, i) => <div key={label} className={`choice-contrast-panel choice-contrast-${i}`}><p className="font-bold text-xl">Le même texte</p><p className="text-lg mt-2">{label}</p></div>)}
    </div>
    <p className="text-lg mt-4">Schéma de principe, pas une photographie d’appareil ni la liste garantie des modes d’un produit.</p>
  </div>;
}

export function FieldOfViewHTML() {
  return <div className="choice-field-example">
    <p className="text-lg font-bold text-primary mb-4">Schéma de principe · Champ visible</p>
    <div className="choice-duo"><div><p className="choice-field-window text-3xl">Lire quelques</p></div><div><p className="choice-field-window text-xl">Lire quelques mots d’un courrier</p></div></div>
    <p className="text-lg mt-4">Exemple schématique : le champ visible dépend notamment du grossissement et de la géométrie de l’appareil.</p>
  </div>;
}

export function FunctionCards() {
  return <CriteriaStrip items={[
    { icon: ZoomIn, title: "Grossissement", text: "Agrandir ou réduire l’image affichée sur l’écran." },
    { icon: Contrast, title: "Contraste", text: "Selon le modèle, renforcer les couleurs naturelles ou afficher le texte avec deux couleurs contrastées." },
  ]} />;
}

export function GuideOpening({ index }: { index: number }) {
  if (index === 1) return <CriteriaStrip items={[{ icon: Hand, title: "Prise en main", text: "Une loupe lourde ou difficile à maintenir devient fatigante, même si l’image est nette." }, { icon: ShieldCheck, title: "Stabilité", text: "La loupe à poser conserve une distance stable avec le papier." }, { icon: Sun, title: "Éclairage", text: "La lumière doit aider à lire sans produire de reflets gênants." }, { icon: SlidersHorizontal, title: "Commandes accessibles", text: "Les réglages doivent rester accessibles, même lorsque la personne porte ses lunettes habituelles." }]} />;
  if (index === 2) return <CriteriaStrip items={[{ icon: Search, title: "Loupe optique", text: "Une lentille pour agrandir le texte." }, { icon: Monitor, title: "Loupe électronique", text: "Une caméra et un écran pour afficher le document." }]} />;
  if (index === 4) return <CriteriaStrip items={[
    { icon: Glasses, title: "Lunettes loupes", text: "Leur efficacité dépend de la distance de travail prévue par les lentilles." },
    { icon: LampDesk, title: "Lampe loupe", text: "Vérifier la hauteur libre sous la lentille et la stabilité du bras." },
    { icon: Monitor, title: "Téléagrandisseur", text: "S’assurer que le modèle envisagé convient réellement à l’écriture." },
  ]} />;
  if (index === 5) return <CriteriaStrip items={[{ icon: LampDesk, title: "Lampe de lecture", text: "Éclaire le document sans grossir les caractères." }, { icon: Search, title: "Loupe éclairante", text: "Ajoute de la lumière à une lentille grossissante." }]} />;
  return null;
}

export function SectionCues({ title }: { title: string }) {
  if (/Essayez avec des documents/.test(title)) return <CriteriaStrip items={[{ icon: Tag, title: "Étiquette", text: "Un emballage ou une étiquette pour voir si le petit texte devient accessible." }, { icon: FileText, title: "Courrier", text: "Un courrier reçu à la maison, pour juger la lecture de plusieurs lignes." }, { icon: BookOpen, title: "Livre", text: "Un livre ou un journal, si la personne souhaite retrouver une lecture suivie." }]} />;
  if (/Pour quelles activités utiliser/.test(title)) return <CriteriaStrip items={[{ icon: FileText, title: "Lire" }, { icon: Wrench, title: "Travaux de détail" }, { icon: Hand, title: "Garder les mains disponibles" }]} />;
  if (/La taille de la zone visible/.test(title)) return <CriteriaStrip items={[{ icon: Search, title: "Loupe portable", text: "Pour quelques mots" }, { icon: Monitor, title: "Grand écran", text: "Pour lire longtemps, selon le confort observé" }]} />;
  if (/véritable poste de lecture/.test(title)) return <CriteriaStrip items={[{ icon: BookOpen, title: "Lecture" }, { icon: Hand, title: "Manipulation" }, { icon: Monitor, title: "Écran" }]} />;
  return null;
}