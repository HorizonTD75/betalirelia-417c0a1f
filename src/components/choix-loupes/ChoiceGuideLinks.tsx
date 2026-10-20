const HUB = "/choisir-loupe-lecture/";
const linkClass = "text-primary font-semibold underline underline-offset-4 decoration-2 hover:decoration-secondary";

const LINKS: Record<string, { label: string; slug: string }[]> = {
  home: [{ label: "Comment choisir une loupe de lecture ?", slug: "" }],
  reading: [{ label: "Choisir une loupe de lecture selon vos besoins", slug: "" }],
  catalogue: [{ label: "Vous hésitez entre plusieurs loupes ?", slug: "" }],
  "loupes-verre": [{ label: "Comparer les loupes selon l’usage", slug: "" }, { label: "Loupe en verre ou loupe électronique : laquelle choisir ?", slug: "loupe-optique-ou-electronique/" }],
  "loupes-electroniques": [{ label: "Comprendre quelle loupe choisir", slug: "" }, { label: "Loupe en verre ou loupe électronique : laquelle choisir ?", slug: "loupe-optique-ou-electronique/" }, { label: "Loupe portable ou grand écran ?", slug: "loupe-portable-ou-grand-ecran/" }],
  "lunettes-loupes": [{ label: "Quelle loupe de lecture choisir ?", slug: "" }, { label: "Peut-on fixer une loupe sur ses lunettes de vue ?", slug: "loupe-sur-lunettes/" }, { label: "Comment lire en gardant les mains libres ?", slug: "lire-mains-libres/" }],
  lampes: [{ label: "Quelle loupe de lecture choisir ?", slug: "" }, { label: "Loupe éclairante ou lampe de lecture : que choisir ?", slug: "loupe-eclairante-ou-lampe/" }],
  "tele-agrandisseurs": [{ label: "Quelle loupe de lecture choisir ?", slug: "" }, { label: "Loupe portable ou grand écran : quand choisir un téléagrandisseur ?", slug: "loupe-portable-ou-grand-ecran/" }],
  clip: [{ label: "Peut-on fixer une loupe sur ses lunettes de vue ?", slug: "loupe-sur-lunettes/" }],
  focus: [{ label: "Comment lire en gardant les mains libres ?", slug: "lire-mains-libres/" }],
  nora: [{ label: "Loupe en verre ou loupe électronique : laquelle choisir ?", slug: "loupe-optique-ou-electronique/" }],
  lina: [{ label: "Loupe éclairante ou lampe de lecture : que choisir ?", slug: "loupe-eclairante-ou-lampe/" }],
};

/** Real anchors preserve per-route synchronous metadata and static-export navigation. */
export default function ChoiceGuideLinks({ context }: { context: string }) {
  const links = LINKS[context];
  if (!links) return null;
  return <ul className="list-none p-0 mt-6 space-y-3 text-lg leading-relaxed" aria-label="Guides de choix des loupes">
    {links.map((link) => <li key={link.slug}><a href={HUB + link.slug} className={linkClass}>{link.label}</a></li>)}
  </ul>;
}