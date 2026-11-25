# VERSIONS des fichiers livrés

Règle posée par Julien le 21/11/2026 : chaque fichier livré dans ce dépôt porte sa **propre version**, indépendante de la version du site (qui, elle, change à chaque page et ne compte pas ici). Sa toute première mise en ligne = **v1.0**. Chaque modification, correction ou mise à jour = **+0.1** (v1.1, v1.2, v1.3...). Une refonte structurelle du fichier = passage au majeur suivant (v2.0). Chaque futur push annonce la version du fichier dans son message de commit et met ce registre à jour dans la foulée. Ce registre est le journal des versions lui-même : il est daté, pas versionné.

Registre créé le 21/11/2026.

## csv-astartes-corrige.csv (glossaire Astartes 《熊學派的阿斯塔特》, import appli)

**Version actuelle : v1.14** (25/11/2026, 740 119 octets, md5 697cb51c7d4f678e4fccad2f30359582, 7027 entrées.)

| Version | Date | Taille | md5 | Changement |
| --- | --- | --- | --- | --- |
| v1.0 | 16/11/2026 | 717 003 o | 9f69edd4c4c969727ed3784b3eed557c | Première mise en ligne (6848 entrées, fin du marathon des 35 blocs) |
| v1.1 | 16/11/2026 | 717 023 o | f8ba57d0c7378d7e01df4d7ddf911cf3 | Correctif canon, 5 fiches |
| v1.2 | 16/11/2026 | 717 416 o | 603170e846cbdbe5909f88151ac8f8c5 | Audit, 14 fiches renotées après lecture du contexte |
| v1.3 | 17/11/2026 | 745 523 o | a7ba48c6baa3f243694c3bfab03000aa | Scan des chapitres FR, 231 nouvelles fiches (7079 fiches) |
| v1.4 | 17/11/2026 | 745 645 o | e5e1fff130f4ce71a9731632e30656c5 | Correctif canon, 7 fiches |
| v1.5 | 17/11/2026 | 738 504 o | ae1329249d14d4ce2b83665b786df554 | Nettoyage des titres, 7017 fiches |
| v1.6 | 19/11/2026 | 738 892 o | 38bbd8d54b96b6c43310380530bc4971 | Correctif contextuel, 15 fiches renotées |
| v1.7 | 21/11/2026 | 739 608 o | a41f3eae6e5930c6ad2f47005d6fb18e | Réparation post-marathon (20 corrections, 6 ajouts), 7023 entrées |
| v1.8 | 21/11/2026 | 739 859 o | 58b3733e79698919bd6554b98021b39e | Ajout des 2 entrées Felicia Kelly (trou ZH 182-183 comblé), 7025 entrées |
| v1.9 | 21/11/2026 | 739 863 o | 350c881fc28d6016909ef17229d23bc7 | Correctif du format des 2 lignes Felicia (type character en colonne 1 au lieu de category) : import appli réparé |
| v1.10 | 23/11/2026 | 739 931 o | 6299c20e4d60e7835ced8ac0a3504998 | Canon Diluc (décision de Shenn du 22/11, alignement sur l'EPUB v1.8) : fiche « Diruk, Diruk » → « Diluc, Diluc », note enrichie après relecture du passage (Astartes médecin des Enfants de l'Empereur, figure du souvenir d'Abdel, manipulations subtiles sur le Second Cœur) ; comptes inchangés : 7025 entrées ; les fiches « Gene-seed » restent « Gene-seed » (règle prose ≠ CSV) |
| v1.11 | 23/11/2026 | 739 892 o | 3362ae00862d79f4a8934b5d6e963f62 | Canon potions (décision de Shenn du 23/11, alignement sur l'EPUB v1.9) : 4 fiches réalignées : « Foudre, Foudre » → « Tonnerre, Tonnerre » ; « Tempête de neige, Tempête de neige » → « Blizzard, Blizzard » ; « élixir Tempête de neige » → « élixir Blizzard » ; tr de « Thunder and Snowstorm » → « Tonnerre et Blizzard ». Les fiches ZH-raw 雷霆/暴风雪 (météo possible en chinois) restent inchangées ; comptes inchangés : 7025 entrées |
| v1.12 | 23/11/2026 | 740 112 o | 52099b93097ab9978bc494267ca3281a | Canon suite audit des termes entre crochets (décision de Shenn du 23/11) : 13 fiches réalignées (Philtre de Petri, Huile contre les vestiges, Décocté de Raffard le Blanc, Décoction de foglet, Vent du nord aux graphies 北风/北風, note du fragment 纯白) + 2 fiches créées (派翠的魔药 = Philtre de Petri base, 甜嘴 = Raff Tout-miel), 7027 entrées |
| v1.13 | 23/11/2026 | 740 064 o | 493d998cbb5e2f23c4dadf73f44ef302 | Import appli réparé : la note enrichie de Diluc (v1.10) faisait 138 caractères, l'appli impose 100 max par note (erreur « Row 1830, column F » à l'import, rien n'était importé) ; note comprimée à 90 caractères, 7027 entrées inchangées ; scan complet du fichier : aucune autre note au-dessus de la limite |
| v1.14 | 25/11/2026 | 740 119 o | 697cb51c7d4f678e4fccad2f30359582 | Renotes contextuelles après la question de Shenn sur les Profonds (lecture ZH 105 à 135) : fiche 深潜者 (Profonds) = clin d'œil aux Profonds de Lovecraft, ici vodyanoï corrompus au service de Dagon ; fiche 堕落半鱼人 (Vodyanoï Corrompus) : ce sont eux les Profonds, déchus de la Dame du Lac, et non un peuple au service d'un autre ; 7027 entrées inchangées |

## csv-40k-corrige.csv (glossaire 《从战锤开启的超次元综漫》)

**Version actuelle : v1.2** (14/11/2026, 225 493 octets, md5 ee5a916db8216c0cd054e16a9c002f92.)

| Version | Date | Taille | md5 | Changement |
| --- | --- | --- | --- | --- |
| v1.0 | 14/11/2026 | 163 886 o | 99c35f943be442bdb9e2208389e7da8f | Première mise en ligne (marathon 15 blocs) |
| v1.1 | 14/11/2026 | 225 400 o | 3397501893c7c4452c80d81194c163ee | Pass notes complet (1466 notes) |
| v1.2 | 14/11/2026 | 225 493 o | ee5a916db8216c0cd054e16a9c002f92 | Pass TR complet (59 traductions reformulées ou corrigées) |

## csv-glossaire-corrige.csv

**Version actuelle : v1.0** (05/11/2026, 86 467 octets, md5 3f0731d01456d806593adf620779ca00.) Première mise en ligne (glossaire corrigé final, 792 entrées, 608 lignes modifiées). Aucune modification depuis.

## sources/Astartes of the Bear Schoo section 2 - corrige COMPLET.epub (EPUB section 2 réparé, import appli)

**Version actuelle : v1.10** (23/11/2026, 620 939 octets, md5 5967af952b36feb001ec8db93a6c3143, blob 9966b0609abbae633558cdef6d5d4ba442e0609b.)

Note : avant v1.0, ce même EPUB a été publié pendant le marathon sous des noms intermédiaires (« corrige (blocs 1-x sur 34) ») ; l'historique complet est dans les messages de commit.

| Version | Date | Taille | md5 | Changement |
| --- | --- | --- | --- | --- |
| v1.0 | 21/11/2026 | 614 268 o | 4619f9361c4321b42eed84d19a4ef493 | Première mise en ligne sous ce nom (fin du marathon, 34/34) |
| v1.1 | 21/11/2026 | 616 983 o | fe704829115c07042068e0265a86917e | Erratum : restauration du texte du traducteur avant la frontière (occurrence du ch. 73) |
| v1.2 | 21/11/2026 | 616 977 o | 61cbb17b80aebb0b8726eb9ca50c26d8 | Errata de l'audit glossaire (6 corrections de texte) |
| v1.3 | 21/11/2026 | 622 953 o | 31366a76a85968b2886da20d9e471f5f | Traduction et insertion des chapitres ZH 182-183 (le trou comblé) |
| v1.4 | 21/11/2026 | 623 834 o | 04ed0918cb34c9c616873324bf68dd14 | Mise en page v4.4 appliquée : titres ## en texte (l1/l2) + séparateurs *** (sep), balises h1/h2/hr converties (ignorées par l'appli) ; 10 séparations perdues restaurées, 4 anomalies d'origine normalisées ; corps du texte inchangé |
| v1.5 | 22/11/2026 | 621 233 o | 64eec390ad455b56e60f0d55c74e2d19 | Refonte qualité : prose de la traduction boostée restaurée verbatim après la tuerie de Vizima (89 blocs), fixes canoniques (Stygga→Stessa ×61, Eaux Sombres ×14, Gene-seed, Donjon Rouge, Conseil restreint, Sterne Noire), doublon majordome du ch. 110 supprimé (31 §), trou ZH 182-183 conservé (47 §), mise en page v4.4 conservée |
| v1.6 | 22/11/2026 | 621 230 o | 20ae79a992abceb030390195a6904d0a | Terme « Graine génétique » partout dans la zone post-tuerie (décision de Shenn : « Gene-seed » est le terme anglais, ne va pas dans la prose) : 13 occurrences restaurées verbatim depuis le boost, 12 « Gene-seed » natifs du boost et 1 dans le trou harmonisés avec leurs articles ; l'avant-tuerie est inchangée |
| v1.7 | 22/11/2026 | 620 950 o | 35a07ab916cbdd52791fa1d99255d8a4 | Réparation de la zone 101-201 (reste de la section 2 après v1.6, 88 blocs l1 = ZH 105-200) en 4 pushes (b1 : lots 1-2, blocs 101-116 ; b2-b3 : lots 2-3, blocs 117-125 ; b4 : blocs 126-201) : double contrôle ligne à ligne FR/ZH de chaque bloc, prose boostée conservée verbatim, 187 fusions de paragraphes éclatés + omission du ch. 21 restituée + 5 fusions de tirets orphels d’onomatopées (b138, b139 x2, b177, b181), Stygga → Stessa x13 (le titre « comte de Stygga » du ch. 111, légitime, est conservé), « Graine génétique » harmonisé (avant-tuerie intacte), 3 guillemets de dialogue refermés (b188), 2 tirets séparateurs de scène conservés (b156, b175), mégas B164 / B177 / B182 vérifiés complets contre leurs chapitres ZH multiples |
| v1.8 | 22/11/2026 | 620 959 o | 61d57d0e22dee53d1ad74b8de407f02f | Décisions finales de Shenn (feu vert import donné) : harmonisation « Graine génétique » étendue à l'avant-tuerie, 71 occurrences (articles ajustés au féminin : le/du/un/son/ce → la/de la/une/sa/cette, pluriel « Gene-seeds » → « Graines génétiques », titres du Volume 1, chapitre 11 « Mentos, Graine génétique », titre de section dans toc.ncx et nav.xhtml inclus) ; « Diruk » x14 → « Diluc » (le ZH écrit 狄路克, romanisation Diluc ; le personnage appartient à la mémoire des Enfants de l'Empereur, correction approuvée). Le CSV glossaire garde « Gene-seed » (règle prose ≠ CSV). Zéro « Gene-seed » et zéro « Diruk » restants dans l'EPUB |
| v1.9 | 23/11/2026 | 620 944 o | 9232ef7a776f581908191f5bfa25b3c0 | Harmonisation canonique des potions (décision de Shenn du 23/11) : ZH119[3] 雷霆/暴風雪 = potions du sorceleur, canon Wiki Officiel du Sorceleur ; 22 occurrences corrigées dans la prose (11 « Foudre » → « Tonnerre », 11 « Tempête de neige » → « Blizzard ») avec accords harmonisés (une→un, de la→du, La première/La seconde→Le premier/Le second, elle→il) ; occurrences météo et franchises (Foudre d'Alzur, foudre rouge/draconique Elden Ring, Tempête Rieuse, tempêtes figurées) intactes ; touche uniquement chap_cffbdc49 |
| v1.10 | 23/11/2026 | 620 939 o | 5967af952b36feb001ec8db93a6c3143 | Harmonisation canon suite audit des termes entre crochets (feu vert de Shenn du 23/11) : 11 occurrences corrigées dans la prose (【Élixir de Petri】 → 【Philtre de Petri】 x1, 【Huile contre les reliquats】 et 【Huile contre les reliques】 → 【Huile contre les vestiges】 x2, 【Décoction de Raffard Blanc Pur】 → 【Décocté de Raffard le Blanc】 x1 plus une occurrence en liste sans crochets x1, 【Décoction de Petit Foglette】 → 【Décoction de foglet】 x1, 【Tout-Doux】 → 【Tout-miel】 x5) ; canon vérifié : Wiki Officiel du Sorceleur, graphie « Décocté » de The Witcher 3, surnom officiel « Raff Tout-miel » de La Garde de Nuit ; touche uniquement chap_cffbdc49 |

## Autres EPUB fusionnés livrés

| Fichier | Version actuelle | Remarque |
| --- | --- | --- |
| Dimensional_Gacha_in_Honkai_Impact-fusionne.epub | v4.4 | Chaîne v1 à v4.4 documentée (fusion, sections, numérotation, titres en texte) |
| Dragon_Ball_Multiverse_Travel-fusionne.epub | v5 | Chaîne v1 à v5 (fusion 16 volumes, pass dub, titres de volumes) |
| Dragon_Ball_Yamcha_the_Strongest_Earthling-fusionne.epub | v1 | Première mise en ligne, aucune modification depuis |
| New_World_Different_Dimension_The_Path_of_Natsu_Dragneel-fusionne.epub | v1 | Première mise en ligne, aucune modification depuis |
| Dimensional_Chat_Group_Starting_On_Warhammer_40K-fusionne.epub | v1 | Première mise en ligne, aucune modification depuis |

## Sources de référence (bruts, pas des livrables corrigés)

Le dossier `sources/` contient aussi les fichiers bruts de référence (PDF 1-497, EPUB originaux, export original du glossaire Astartes, fusionne v2.2 du même roman). Ils servent de référence aux chantiers et ne portent pas de version ici : ce qui est versionné, c'est ce que nous livrons.
