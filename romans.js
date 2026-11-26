// ─────────────────────────────────────────────────────────────
// Registre des romans du site « Glossaires ».
// Un roman = une entrée ici + un fichier de données.
//
// Formats de fichier :
//  - "legacy" : le fichier déclare des const globales
//      (identification, chapters, aSuivre). Chargé UNE seule
//      fois par page (les const ne peuvent pas être redéclarées).
//      C'est le format du premier roman (Cyberpunk).
//  - "ns" : le fichier alimente un espace de noms —
//      window.ROMANS_DATA = (window.ROMANS_DATA || {});
//      window.ROMANS_DATA["<id>"] = { identification, chapters, aSuivre };
//      C'est le format RECOMMANDÉ pour tous les romans suivants
//      (aucune collision possible, chargeable dans n'importe quel ordre).
//
//  - "csv" (optionnel) : fichier CSV corrigé à télécharger pour
//      l'import dans l'appli de lecture ; si défini, le site affiche
//      un bouton de téléchargement dans le bandeau du roman.
//  - "csvVer" / "epubVer" (optionnels mais exigés) : version ACTUELLE
//      du fichier livré, affichée à côté du bouton de téléchargement
//      (exigence de Julien du 27/11 : chaque fichier téléchargeable du
//      site porte sa version visible). À mettre à jour à CHAQUE push
//      du fichier correspondant, en même temps que VERSIONS.md.
// ─────────────────────────────────────────────────────────────
const ROMANS = [
  {
    id: "cyberpunk",
    court: "赛博朋克模拟器",
    sub: "Correction du glossaire de l'appli de lecture — raw chinois → français canon Cyberpunk 2077.",
    fichier: "data.js",
    format: "legacy",
    accent: "#2de2e6",
    csv: "csv-glossaire-corrige.csv",
    csvVer: "v1.0"
  },
  {
    id: "honkai-gacha",
    court: "Honkai Gacha",
    sub: "Dimensional Gacha in Honkai Impact · chantier ouvert : original chinois non identifié, glossaire (HI3, JoJo, Danmachi, Star Rail, Nier, Fate) à venir.",
    fichier: "data-honkai-gacha.js",
    format: "ns",
    accent: "#8b5cf6"
  },
  {
    id: "chatgroup-40k",
    court: "超次元群聊",
    sub: "《从战锤开启的超次元综漫》 · glossaire complet 2210 entrées corrigé le 14/11 (marathon 15 blocs, harnais 10/10 à chaque bloc) : raw chinois → canon FR Warhammer 40K, HOTD, FMP, NieR, Muv-Luv, SEED, SAO, Arpeggio, Black Bullet, IS, Gundam 00, Mahouka, Re:Creators, NGNL, Sidonia, DxD, MJP...",
    fichier: "data-chatgroup-40k.js",
    format: "ns",
    accent: "#e0115f",
    csv: "csv-40k-corrige.csv",
    csvVer: "v1.2"
  },
  {
    id: "astartes",
    court: "熊學派的阿斯塔特",
    sub: "《熊學派的阿斯塔特》 (Astartes of the Bear School) · glossaire complet 7017 fiches (marathon 35 blocs + scan v2 + correctifs canon, revu jusqu'au 23/11) : raw chinois → canon FR The Witcher, Warhammer 40K, Tolkien (trad. Ledoux), Game of Thrones, Elden Ring, Dark Souls, Sekiro, Bloodborne, Monster Hunter.",
    fichier: ["data-astartes-1.js", "data-astartes-2.js", "data-astartes-3.js"],
    format: "ns",
    accent: "#d97706",
    csv: "csv-astartes-corrige.csv",
    csvVer: "v1.15",
    epubs: [
      { label: "la section 2 corrigée", ver: "v1.17",
        href: "sources/Astartes%20of%20the%20Bear%20Schoo%20section%202%20-%20corrige%20COMPLET.epub",
        nom: "Astartes of the Bear Schoo section 2 - corrige COMPLET.epub" },
      { label: "la section 3 corrigée", ver: "v1.2",
        href: "sources/Astartes%20of%20the%20Bear%20School%20-%20section%203%20-%20corrig%C3%A9%20COMPLET.epub",
        nom: "Astartes of the Bear School - section 3 - corrigé COMPLET.epub" }
    ]
  },
  // Prochain roman : ajouter une entrée ici + pousser son fichier
  // data-<id>.js au format "ns", puis repousser le site (version++).
];
