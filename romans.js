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
// ─────────────────────────────────────────────────────────────
const ROMANS = [
  {
    id: "cyberpunk",
    court: "赛博朋克模拟器",
    sub: "Correction du glossaire de l'appli de lecture — raw chinois → français canon Cyberpunk 2077.",
    fichier: "data.js",
    format: "legacy",
    accent: "#2de2e6",
    csv: "csv-glossaire-corrige.csv"
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
    court: "Chatgroup 40K",
    sub: "从战锤开启的超次元综漫 · glossaire multi-franchises (Warhammer 40K, NieR: Automata, Muv-Luv, Full Metal Panic!, Aldnoah.Zero, Black Bullet, HOTD…) · marathon CSV : bloc 1 (Vol 1-3, 204 entrées) livré.",
    fichier: "data-chatgroup-40k.js",
    format: "ns",
    accent: "#b91c1c"
  }
  // Prochain roman : ajouter une entrée ici + pousser son fichier
  // data-<id>.js au format "ns", puis repousser le site (version++).
];
