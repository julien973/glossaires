# VERSIONS des fichiers livrés

Règle posée par Julien le 21/11/2026 : chaque fichier livré dans ce dépôt porte sa **propre version**, indépendante de la version du site (qui, elle, change à chaque page et ne compte pas ici). Sa toute première mise en ligne = **v1.0**. Chaque modification, correction ou mise à jour = **+0.1** (v1.1, v1.2, v1.3...). Une refonte structurelle du fichier = passage au majeur suivant (v2.0). Chaque futur push annonce la version du fichier dans son message de commit et met ce registre à jour dans la foulée. Ce registre est le journal des versions lui-même : il est daté, pas versionné.

Registre créé le 21/11/2026.

## csv-astartes-corrige.csv (glossaire Astartes 《熊學派的阿斯塔特》, import appli)

**Version actuelle : v1.9** (21/11/2026, 739 863 octets, md5 350c881fc28d6016909ef17229d23bc7, 7025 entrées.)

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

**Version actuelle : v1.4** (21/11/2026, 623 834 octets, md5 04ed0918cb34c9c616873324bf68dd14, blob 305c162d07a54e2864dcb56b2d384ad059bb59db.)

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
