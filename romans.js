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
// ─────────────────────────────────────────────────────────────
const ROMANS = [
  {
    id: "cyberpunk",
    court: "赛博朋克模拟器",
    sub: "Correction du glossaire de l'appli de lecture — raw chinois → français canon Cyberpunk 2077.",
    fichier: "data.js",
    format: "legacy",
    accent: "#2de2e6"
  }
  // Prochain roman : ajouter une entrée ici + pousser son fichier
  // data-<id>.js au format "ns", puis repousser le site (version++).
];
