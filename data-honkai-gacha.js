// ─────────────────────────────────────────────────────────────
// Données du roman « honkai-gacha »
// Dimensional Gacha in Honkai Impact (HI3 multi-mondes)
// Format « ns » : window.ROMANS_DATA["honkai-gacha"] = { … },
// aucun risque de collision avec data.js (format legacy).
//
// ÉTAT : TABLEAU VIDE. Le chantier vient de s'ouvrir : Shenn
// fournira les entrées du glossaire (chinois → français) plus
// tard, par sections de chapitres ; chaque section ajoutera un
// objet chapitre dans chapters[] ci-dessous.
// ─────────────────────────────────────────────────────────────
window.ROMANS_DATA = window.ROMANS_DATA || {};
window.ROMANS_DATA["honkai-gacha"] = {
  identification: {
    titre: "Dimensional Gacha in Honkai Impact",
    lignes: [
      "Webnovel #34931144900504805 (miroir xnovel.app/10206), statut « ongoing », 575 ch. EN, note 4.13, 1,9 M de vues.",
      "Traducteur : SleepingHostage (même pseudo sur Patreon). Schéma « Arthorain » confirmé : MC renommé « Takatsuki Sen », titre probablement réécrit ; autres œuvres du traducteur : Naruto Chimera Technique, Bleach, Rin Nohara.",
      "Original chinois : NON IDENTIFIÉ à ce jour : recherches exhaustives (Qidian, QQ阅读, Fanqie, Faloo, 话本, trxs, WTR-Lab, agrégateurs), candidats éliminés un à un ; cheminement complet dans le Knowledge lecture-webnovels.",
      "Découverte clé : « Senba Academy » = 千羽学园, l'école de Mei à 长空市 (Changkong City). Le ch. 1 EN « Disturbance at Senba Academy » recoupe les bouquets refusés de la « reine » 千羽学园女王大人.",
      "Hook : le héros a écrit lui-même son système gacha avant de transmigrer (« Good news… Bad news… ») ; 3e effondrement ; countdown gacha dès le ch. 84.",
      "Mondes traversés : 1 HI3 → 2 JoJo → 3 HI3 → 4 Danmachi → 5 Star Rail → 6 Nier → 7 Fate (+ Black Bullet ch. 566-570, + Elysian Realm ch. 568-570).",
      "Source texte : EPUB fusionné dans sources/, ⚠️ il ne contient que les ch. 84 → 575 ; les ch. 1 à 83 en sont absents.",
      "Synonyme gacha : 抽卡 / 抽奖 (tirage de cartes)."
    ]
  },
  chapters: [],
  aSuivre: [
    "Shenn fournira les premières entrées du glossaire (chinois → français canon Honkai / JoJo / Danmachi / Star Rail / Nier / Fate) plus tard, par sections de chapitres.",
    "Chaque section livrée s'ajoute dans chapters[] avec le même format que le roman cyberpunk (id, title, terms[], characters[], corrige).",
    "L'identification de l'original chinois reste un chantier ouvert : toute nouvelle piste (titre ZH, auteur, plateforme, dispo des raws) sera consignée ici et dans le Knowledge."
  ]
};
