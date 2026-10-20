/** Faithful reading cues only; the full editorial source remains the seven Markdown articles. */
export const CHOICE_PRESENTATION = [
  { photo: "nora", lead: "Lire le prix d’un produit, parcourir son courrier ou retrouver le plaisir d’un roman : une loupe de lecture ne se choisit pas de la même façon pour tous ces usages.", essentials: ["Une loupe optique à main, éventuellement éclairante, peut suffire pour une recherche rapide.", "Le bon critère est la facilité à lire plusieurs paragraphes, pas seulement la puissance annoncée.", "Une solution portable pour les courses et un appareil stable à domicile peuvent se compléter."] },
  { photo: "lina", lead: "L’âge, à lui seul, ne permet pas de choisir.", essentials: ["Un courrier reçu à la maison, une page de journal, une étiquette ou une grille de mots croisés sont de meilleurs supports d’essai.", "La loupe à poser conserve une distance stable avec le papier.", "Le choix final doit rester celui de la personne qui lira avec la loupe."] },
  { photo: "amelie", lead: "Une loupe optique agrandit le texte au moyen d’une lentille. Une loupe électronique de lecture capte le document avec une caméra et affiche l’image sur un écran.", essentials: ["La loupe optique reste une solution efficace.", "La loupe électronique : grossissement et contraste.", "Lire une ligne entière change le choix.", "Un essai vaut mieux qu’une comparaison de puissances."] },
  { photo: "clip", lead: "Vous portez déjà des lunettes de vue et souhaitez grossir un texte sans tenir une loupe ?", essentials: ["Le clip se fixe devant les verres habituels.", "La distance de travail doit être vérifiée.", "Clip, lunettes loupes ou lunettes de lecture : ne pas confondre."] },
  { photo: "astrid", lead: "Écrire une adresse, faire des mots croisés, suivre une recette en cuisinant ou enfiler une aiguille : dans ces situations, tenir une loupe à main peut devenir une contrainte.", essentials: ["Pour lire à plat : les loupes à poser.", "Pour coudre, broder ou bricoler : lunettes loupes et clips.", "Pour travailler sous une lentille : la lampe loupe.", "Pour lire et écrire : le téléagrandisseur."] },
  { photo: "eira", lead: "Un courrier reste lisible près d’une fenêtre, mais devient difficile à déchiffrer le soir. Une étiquette semble trop petite, même sous une bonne lumière.", essentials: ["Une lampe de lecture éclaire le document sans grossir.", "Une loupe éclairante ajoute de la lumière à une lentille grossissante.", "Ne confondez pas puissance et confort."] },
  { photo: "mezzo", lead: "Une petite loupe électronique peut suffire pour lire un prix ou quelques lignes d’un courrier. La situation change lorsqu’il faut parcourir plusieurs pages de journal, lire un roman ou remplir régulièrement des documents.", essentials: ["La taille de la zone visible change la lecture.", "Le téléagrandisseur : un véritable poste de lecture.", "Le grand écran n’est pas adapté à toutes les situations."] },
] as const;

export function splitChoiceSections(body: string) {
  return body.split(/(?=^## )/m).map((source) => {
    const heading = source.match(/^## (.+)\n/);
    const title = heading?.[1] ?? "";
    const content = heading ? source.slice(heading[0].length) : source;
    const faq = /^Questions (fréquentes|pratiques)/i.test(title);
    return { title, content, faq, questions: faq ? content.split(/(?=^### )/m).filter((part) => /^### /m.test(part)).map((part) => {
      const question = part.match(/^### (.+)\n/);
      return { q: question?.[1] ?? "", a: question ? part.slice(question[0].length) : part };
    }) : [] };
  });
}