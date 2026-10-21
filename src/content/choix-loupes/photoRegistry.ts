/** Exact V5.5 editorial registry from document 03. */
export interface PhotoBrief { id: string; page: string; slot: string; titre: string; produits: string; scene: string; angle: string; lumiere: string; pointsDeControle: string[]; objectifPedagogique: string; ratio: string; vues: number; altPropose: string; legendeProposee: string; statut: string; assetVerifie?: string }
export const PHOTO_REGISTRY: PhotoBrief[] = [
  {
    "id": "pm-01",
    "page": "/choisir-loupe-lecture/",
    "slot": "hero",
    "titre": "Trois loupes pour lire le même courrier.",
    "produits": "NORA (loupe optique à main), LINA (loupe à poser), Amélie (loupe électronique portable), ou leurs modèles équivalents effectivement présents en stock, nommés dans la légende selon les références utilisées.",
    "scene": "disposer un seul courrier A4 fictif, avec une loupe NORA, une LINA et une Amélie posées à proximité. L'appareil ne doit pas être une maquette générée. Donner envie de comparer sans simuler un essai.",
    "angle": "horizontal 16:10, plan légèrement plongeant, appareils bien reconnaissables, texte du courrier partiellement visible, marge libre utile au recadrage hero.",
    "lumiere": "douce latérale, table neutre, pas de reflets sur les lentilles ni l'écran.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Utiliser un même document d’essai neutre, fabriqué pour la photo, sans données personnelles, et vérifier l’orthographe.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "illustrer la pluralité des solutions disponibles pour un même document, pas démontrer qu'une loupe est meilleure.",
    "ratio": "16:10",
    "vues": 1,
    "altPropose": "Un courrier posé sur une table près d'une loupe optique à main, d'une loupe à poser et d'une loupe électronique.",
    "legendeProposee": "Plusieurs aides peuvent être envisagées pour lire un même document.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "pm-03",
    "page": "/choisir-loupe-lecture/",
    "slot": "pedagogie",
    "titre": "Le même texte, deux grossissements et deux champs visibles.",
    "produits": "deux loupes optiques réelles de grossissements suffisamment distincts, précisément identifiées après l'essai ; ne pas imposer de valeurs ×4/×10 fictives.",
    "scene": "même ligne de texte imprimée sans modification entre les prises, puis photographie au travers de chaque loupe à sa bonne distance d'utilisation. Montrer le nombre de mots effectivement visibles à travers la lentille, non une simulation.",
    "angle": "deux vues 4:3 à angle et taille finale comparable ; appareil/lentille suffisamment visibles pour comprendre qu'il s'agit de deux prises réelles. Préciser les grossissements des loupes effectivement utilisées.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "montrer pourquoi la largeur de texte disponible importe autant que le grossissement.",
    "ratio": "4:3",
    "vues": 2,
    "altPropose": "Une même ligne de texte vue à travers deux loupes optiques de grossissements différents.",
    "legendeProposee": "Sur cet exemple réel, les deux loupes n'affichent pas la même portion de texte ; modèles et puissances précisés sous les images.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "pa-01",
    "page": "/choisir-loupe-lecture/personne-agee/",
    "slot": "hero",
    "titre": "Lire un courrier avec une loupe à poser.",
    "produits": "loupe à poser LINA ou modèle réellement adapté à la scène.",
    "scene": "une personne âgée lit un courrier elle-même, assise normalement, main près du document ; un aidant peut être à proximité mais n'agit pas à sa place. Photo avec ses mains seulement si l'on souhaite préserver l'anonymat.",
    "angle": "horizontal 16:10, vue trois quarts à hauteur de table, loupe et zone de texte lisibles, visage non nécessaire.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "montrer la simplicité de manipulation et respecter l'autonomie de la personne.",
    "ratio": "16:10",
    "vues": 1,
    "altPropose": "Une personne lit son courrier à l'aide d'une loupe à poser sur la feuille.",
    "legendeProposee": "Le bon équipement se juge dans les activités habituelles de la personne.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "pa-02",
    "page": "/choisir-loupe-lecture/personne-agee/",
    "slot": "pedagogie",
    "titre": "Trois documents pour essayer une loupe avant de choisir.",
    "produits": "la même loupe réelle pour les trois clichés, à indiquer en légende.",
    "scene": "1) étiquette d'un produit sans données personnelles, 2) paragraphe d'un courrier fictif, 3) page d'un livre. Loupe réellement utilisée, texte observable ; trois photos distinctes reliées par une grille HTML, pas un poster intégrant des textes.",
    "angle": "3 images 4:3, angle et distance adaptés à l'utilisation normale, décor identique ou très proche.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "souligner qu'un essai sur plusieurs documents révèle des besoins différents.",
    "ratio": "4:3",
    "vues": 3,
    "altPropose": "Trois situations montrant une loupe employée pour une étiquette, un courrier et un livre.",
    "legendeProposee": "Tester plusieurs supports évite de choisir sur un seul échantillon de texte.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "oe-01",
    "page": "/choisir-loupe-lecture/loupe-optique-ou-electronique/",
    "slot": "pedagogie",
    "titre": "Un même paragraphe avec une loupe optique et une loupe électronique.",
    "produits": "NORA (ou autre loupe optique du catalogue) et Amélie / CLOVER 5 (loupe électronique réelle), après validation des modèles.",
    "scene": "même paragraphe de courrier sous les deux appareils, montré séparément en prises réelles. Chercher une taille apparente des caractères proche si possible, noter références et réglages ; ne jamais imposer une comparaison trompeuse.",
    "angle": "deux images 4:3 de taille équilibrée, toute la zone utile clairement visible, reflets évités.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "faire comprendre l'opposition lentille / caméra-écran, non élire un vainqueur.",
    "ratio": "4:3",
    "vues": 2,
    "altPropose": "Un paragraphe lu à travers une loupe optique et affiché sur une loupe électronique.",
    "legendeProposee": "Deux façons de grossir un document, photographiées avec des appareils réels et des réglages précisés.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "oe-02",
    "page": "/choisir-loupe-lecture/loupe-optique-ou-electronique/",
    "slot": "pedagogie",
    "titre": "Le même texte dans trois modes d'affichage réels.",
    "produits": "une loupe électronique vendue par LIRELIA dont on a vérifié les modes (ex. CLOVER 5 seulement si cette référence permet vraiment les trois affichages). Ne pas utiliser Amélie pour inventer un affichage inversé/bicolore.",
    "scene": "photographier le même paragraphe affiché successivement en 1) couleurs naturelles, 2) noir sur blanc (si proposé), 3) jaune sur noir (si proposé). Si la référence ne propose pas ces modes, adapter uniquement après validation éditoriale ou laisser les blocs gris.",
    "angle": "3 vues 4:3 du même appareil, angle stable, écran net sans moiré gênant, même texte et grossissement si possible ; placer des légendes HTML « Couleurs naturelles », « Noir/blanc », « Jaune/noir » uniquement pour les modes réellement photographiés.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "distinguer l'amélioration du contraste du grossissement, sans inventer la fonction d'un appareil.",
    "ratio": "4:3",
    "vues": 3,
    "altPropose": "Trois photographies de l'écran d'une loupe électronique présentant le même texte dans des modes d'affichage différents.",
    "legendeProposee": "Modes d'affichage du modèle photographié, à identifier et vérifier.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "ls-01",
    "page": "/choisir-loupe-lecture/loupe-sur-lunettes/",
    "slot": "hero",
    "titre": "Un clip lunettes loupe sur des lunettes de vue.",
    "produits": "clip lunettes loupe effectivement proposé par LIRELIA et une paire de lunettes de vue réelle.",
    "scene": "clip fixé correctement sur la monture, lentilles abaissées devant les verres habituels ; détail de l'attache visible.",
    "angle": "plan 4:3 de trois quarts sur fond clair, pas de main masquant la charnière.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "expliquer exactement où se trouvent les lentilles grossissantes.",
    "ratio": "4:3",
    "vues": 1,
    "altPropose": "Un clip lunettes loupe fixé devant les verres d'une paire de lunettes de vue.",
    "legendeProposee": "Le clip ajoute des lentilles devant la correction habituelle.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "ls-02",
    "page": "/choisir-loupe-lecture/loupe-sur-lunettes/",
    "slot": "pedagogie",
    "titre": "Les lentilles abaissées, puis relevées.",
    "produits": "le même clip et la même paire de lunettes sur les deux images.",
    "scene": "photo A lentilles en position basse devant les verres ; photo B lentilles relevées au-dessus de la monture. Montrer les charnières, éviter les photos de deux mécanismes différents.",
    "angle": "deux clichés 4:3 strictement comparables, même angle et fond ; légendes HTML « Lentilles abaissées » / « Lentilles relevées ».",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "rendre immédiatement compréhensible le fonctionnement du clip relevable.",
    "ratio": "4:3",
    "vues": 2,
    "altPropose": "Le même clip lunettes loupe présenté lentilles abaissées et lentilles relevées.",
    "legendeProposee": "Les lentilles se relèvent lorsque le grossissement de près n'est plus nécessaire.",
    "statut": "photo vraie vérifiée"
  },
  {
    "id": "ml-01",
    "page": "/choisir-loupe-lecture/lire-mains-libres/",
    "slot": "hero",
    "titre": "Deux mains disponibles sous une lampe loupe.",
    "produits": "lampe loupe ASTRID réelle du catalogue, ou autre modèle dont le dégagement sous lentille convient au geste choisi.",
    "scene": "des mains cousent ou brodent sous une lampe loupe allumée ; les deux mains sont effectivement disponibles, le support tient la loupe ; position du tissu et de la lentille réaliste.",
    "angle": "16:10 de trois quarts, montrer simultanément les deux mains, le tissu, la lentille et une partie du support.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "démontrer l'ergonomie, pas seulement photographier la lampe.",
    "ratio": "16:10",
    "vues": 1,
    "altPropose": "Deux mains travaillent sur un ouvrage de couture sous une lampe loupe articulée.",
    "legendeProposee": "Une lampe loupe sur support permet de manipuler l'ouvrage sans tenir la lentille.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "ml-02",
    "page": "/choisir-loupe-lecture/lire-mains-libres/",
    "slot": "pedagogie",
    "titre": "Écrire sous la caméra d'un téléagrandisseur compatible.",
    "produits": "téléagrandisseur de bureau du catalogue dont le fabricant et l'essai confirment que l'écriture sous la caméra est possible ; ne pas supposer que tous conviennent.",
    "scene": "feuille sur la zone de travail, main tenant un stylo, texte effectivement filmé et visible sur l'écran ; appareil en situation d'utilisation correcte.",
    "angle": "4:3, écran + main + feuille dans le même champ, éviter les doubles images artificielles.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "montrer la place laissée pour écrire et le rapport caméra/document.",
    "ratio": "4:3",
    "vues": 1,
    "altPropose": "Une personne écrit sur une feuille sous la caméra d'un téléagrandisseur adapté à l'écriture.",
    "legendeProposee": "Certains téléagrandisseurs permettent d'écrire sous la caméra ; vérifier cette fonction selon le modèle.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "el-02",
    "page": "/choisir-loupe-lecture/loupe-eclairante-ou-lampe/",
    "slot": "pedagogie",
    "titre": "Éviter un reflet gênant sur un document brillant.",
    "produits": "une vraie loupe éclairante à main du catalogue, et une surface imprimée brillante.",
    "scene": "A) reflet visible qui gêne la lecture ; B) la même loupe légèrement inclinée / éclairage réorienté, reflet réduit. Ne pas retoucher les reflets artificiellement.",
    "angle": "deux vues 4:3, même étiquette/document et mêmes conditions de lumière ; conserver dans la photo la position de la lentille et de la source lumineuse.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "montrer le rôle de l'orientation, sans promettre une disparition universelle des reflets.",
    "ratio": "4:3",
    "vues": 2,
    "altPropose": "Une loupe éclairante au-dessus d'un document brillant, d'abord avec un reflet puis mieux orientée.",
    "legendeProposee": "Un changement d'angle peut diminuer un reflet gênant.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "el-03",
    "page": "/choisir-loupe-lecture/loupe-eclairante-ou-lampe/",
    "slot": "pedagogie",
    "titre": "Le même courrier sous deux éclairages.",
    "produits": "lampe de lecture LIRELIA (par ex. EIRA) ou matériel réellement présent, adapté au document.",
    "scene": "A) ombre portée/reflet dû à un éclairage mal orienté ; B) page éclairée plus uniformément après réorientation. Même courrier A4, réglage photo manuel cohérent, ne pas simuler une maladie visuelle.",
    "angle": "deux vues 4:3, document occupant une place similaire ; garder la lampe partiellement visible.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "faire comprendre le rôle d'un éclairage homogène indépendamment du grossissement.",
    "ratio": "4:3",
    "vues": 2,
    "altPropose": "Une page de courrier photographiée avec un éclairage gênant, puis avec une lampe mieux orientée.",
    "legendeProposee": "Une lumière bien placée peut améliorer la lecture sans changer de loupe.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "te-01",
    "page": "/choisir-loupe-lecture/loupe-portable-ou-grand-ecran/",
    "slot": "pedagogie",
    "titre": "Même texte, deux tailles d'écran.",
    "produits": "une loupe électronique portable réelle (Amélie ou CLOVER 5) et un téléagrandisseur grand écran du catalogue (par ex. Mezzo Focus), références précisées après essai.",
    "scene": "photographier le même paragraphe de courrier, d'abord sur le petit écran, puis sur le grand écran. Régler si possible une taille des caractères proche et comparer la portion de texte visible ; ne pas manipuler numériquement les résultats.",
    "angle": "deux images 4:3, montrer l'appareil entier, écran lisible, documents d'origine visibles en bas.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "expliquer la quantité de texte accessible et le confort de déplacement, pas promettre un taux de lecture.",
    "ratio": "4:3",
    "vues": 2,
    "altPropose": "Le même document affiché sur une loupe électronique portable et sur un téléagrandisseur grand écran.",
    "legendeProposee": "Deux formats de lecture photographiés avec le même document et des réglages explicités.",
    "statut": "bloc gris à réaliser"
  },
  {
    "id": "te-03",
    "page": "/choisir-loupe-lecture/loupe-portable-ou-grand-ecran/",
    "slot": "pedagogie",
    "titre": "Quelle place prend un téléagrandisseur sur une table ?",
    "produits": "téléagrandisseur de bureau réellement vendu par LIRELIA, de préférence celui utilisé dans `te-01` si disponible.",
    "scene": "appareil installé sur une table avec une feuille A4 à côté, un objet courant (tasse, livre) comme repère visuel ; espace suffisant pour le passage et la manipulation du document.",
    "angle": "16:10 de trois quarts, plateau de table et largeur de l'appareil entièrement visibles ; prendre éventuellement une vue supplémentaire de profil si le volume en hauteur est important.",
    "lumiere": "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
    "pointsDeControle": [
      "Lumière douce, fond neutre, appareil photographié sous un angle réaliste ; éviter tout reflet masquant l’écran. Les vues de contraste doivent réellement provenir du dispositif pris en photo, pas d’un montage inventé.",
      "Visages identifiables : obtenir l’autorisation appropriée ; sinon cadrer sur les mains, l’épaule, les objets.",
      "Fichiers : idéalement WebP/JPEG, largeur 1400–1800 px ; jamais gonfler artificiellement une basse résolution."
    ],
    "objectifPedagogique": "permettre de se représenter l'encombrement avant un achat.",
    "ratio": "16:10",
    "vues": 1,
    "altPropose": "Un téléagrandisseur installé sur une table à côté d'une feuille A4, montrant l'espace qu'il occupe.",
    "legendeProposee": "Prévoir l'espace nécessaire à l'appareil et au déplacement des documents ; dimensions exactes à consulter sur sa fiche.",
    "statut": "bloc gris à réaliser"
  }
];
export const getPhotoBrief = (id: string) => PHOTO_REGISTRY.find((photo) => photo.id === id);
