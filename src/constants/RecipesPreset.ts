import { Recipe } from "../types";

export const RECIPES_PRESET: Recipe[] = [
  // Recettes Slave
  {
    id: '20',
    name: 'Pirojki',
    ingredients: ['500g farine', '200ml lait', '1 oeuf', '50g beurre', '100g viande hachée'],
    instructions: ['Mélanger la farine, le lait, l’oeuf et le beurre', 'Faire revenir la viande hachée', 'Former des boules et les farcir', 'Cuire au four'],
    category: 'plat principal',
    prepTime: 30,
    cookTime: 30,
    servings: 4
  },
  {
    id: '21',
    name: 'Pelmeni',
    ingredients: ['500g farine', '200g viande hachée', '1 oeuf', '1 oignon'],
    instructions: ['Mélanger la farine, la viande hachée, l’oeuf et l’oignon', 'Former des boules et les farcir', 'Cuire dans l’eau'],
    category: 'plat principal',
    prepTime: 30,
    cookTime: 30,
    servings: 4
  },
  {
    id: '22',
    name: 'Koulibiac',
    ingredients: ['500g pâte feuilletée', '200g saumon', '1 oignon', '1 bouquet aneth'],
    instructions: ['Étaler la pâte', 'Faire revenir le saumon et l’oignon', 'Ajouter l’aneth', 'Enfourner'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '23',
    name: 'Syrniki',
    ingredients: ['500g fromage blanc', '100g farine', '1 oeuf', '1 cuillère sucre'],
    instructions: ['Mélanger le fromage blanc, la farine, l’oeuf et le sucre', 'Former des boules et les aplatir', 'Cuire à la poêle'],
    category: 'dessert',
    prepTime: 15,
    cookTime: 15,
    servings: 4
  },
  // Recettes Serbe
  {
    id: '24',
    name: 'Ćevapi',
    ingredients: [
      '500g de bœuf haché',
      '250g d\'agneau haché',
      '1 oignon finement haché',
      '2 gousses d\'ail écrasées',
      '1 cuillère à café de paprika',
      '1 cuillère à café de sel',
      '1/2 cuillère à café de poivre noir',
      '1/4 tasse d\'eau gazeuse'
    ],
    instructions: [
      'Mélanger tous les ingrédients dans un grand bol',
      'Couvrir et réfrigérer pendant au moins 2 heures, idéalement toute une nuit',
      'Former des petites saucisses d\'environ 5-7 cm de long',
      'Griller sur un barbecue ou une poêle chaude pendant 3-4 minutes de chaque côté',
      'Servir avec du pain sans gluten, des oignons émincés et de l\'ajvar'
    ],
    category: 'plat principal',
    prepTime: 30,
    cookTime: 10,
    servings: 6
  },
  {
    id: '25',
    name: 'Pljeskavica',
    ingredients: ['500g viande hachée', '1 oignon', '1 bouquet persil', '1 cuillère paprika'],
    instructions: ['Mélanger la viande hachée, l’oignon, le persil et le paprika', 'Former des steaks', 'Cuire au barbecue'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 15,
    servings: 4
  },
  {
    id: '26',
    name: 'Gibanica sans gluten',
    ingredients: [
      '500g de feuilles de riz (en remplacement de la pâte filo)',
      '500g de fromage blanc',
      '300g de feta émiettée',
      '6 œufs',
      '250ml de yaourt nature',
      '250ml d\'huile végétale',
      '1 cuillère à café de sel'
    ],
    instructions: [
      'Préchauffer le four à 200°C',
      'Mélanger le fromage blanc, la feta, les œufs, le yaourt, l\'huile et le sel',
      'Huiler un grand plat à four',
      'Alterner des couches de feuilles de riz et de mélange au fromage',
      'Terminer par une couche de feuilles de riz et badigeonner d\'huile',
      'Cuire pendant 45-50 minutes jusqu\'à ce que le dessus soit doré',
      'Laisser refroidir 15 minutes avant de servir'
    ],
    category: 'plat principal',
    prepTime: 30,
    cookTime: 50,
    servings: 8
  },
  {
    id: '27',
    name: 'Sarma végétarienne',
    ingredients: [
      '12 grandes feuilles de chou fermenté',
      '300g de riz à grain rond',
      '2 oignons hachés',
      '2 carottes râpées',
      '100g de champignons hachés',
      '2 cuillères à soupe d\'huile végétale',
      '1 cuillère à soupe de paprika',
      '1 cuillère à café de thym séché',
      'Sel et poivre noir'
    ],
    instructions: [
      'Faire revenir l\'oignon dans l\'huile, ajouter les carottes et les champignons',
      'Ajouter le riz, le paprika, le thym, le sel et le poivre, cuire 5 minutes',
      'Laisser refroidir le mélange',
      'Remplir chaque feuille de chou avec le mélange et rouler',
      'Disposer les rouleaux dans une casserole, couvrir d\'eau',
      'Mijoter à feu doux pendant 2 heures',
      'Servir chaud avec de la crème fraîche'
    ],
    category: 'plat principal',
    prepTime: 45,
    cookTime: 120,
    servings: 6
  },
  {
    id: '28',
    name: 'Popara (Pudding de pain serbe)',
    ingredients: [
      '400g de pain rassis sans gluten',
      '500ml de lait',
      '250ml d\'eau',
      '100g de fromage blanc',
      '100g de beurre',
      '1 cuillère à café de sel'
    ],
    instructions: [
      'Couper le pain en petits morceaux',
      'Dans une casserole, faire chauffer le lait, l\'eau, le beurre et le sel',
      'Ajouter le pain et cuire à feu doux en remuant constamment',
      'Quand le mélange devient épais, ajouter le fromage blanc',
      'Continuer à cuire en remuant jusqu\'à ce que le fromage soit fondu',
      'Servir chaud, éventuellement avec du yaourt'
    ],
    category: 'petit déjeuner',
    prepTime: 10,
    cookTime: 20,
    servings: 4
  },
  {
    id: '29',
    name: 'Kajmak maison',
    ingredients: [
      '1L de crème entière',
      '1 cuillère à café de sel'
    ],
    instructions: [
      'Verser la crème dans un grand récipient peu profond',
      'Couvrir d\'un linge propre et laisser reposer à température ambiante pendant 12 heures',
      'Écrémer la partie supérieure épaissie et la mettre dans un bol',
      'Ajouter le sel et mélanger délicatement',
      'Répéter le processus chaque jour pendant 10-14 jours, en ajoutant la crème épaissie au bol',
      'Conserver au réfrigérateur et consommer dans les 2 semaines'
    ],
    category: 'apéro',
    prepTime: 20,
    cookTime: 0,
    servings: 8
  },
  {
    id: '30',
    name: 'Ajvar',
    ingredients: [
      '1kg de poivrons rouges',
      '1 grosse aubergine',
      '4 gousses d\'ail',
      '100ml d\'huile d\'olive',
      '2 cuillères à soupe de vinaigre de vin rouge',
      'Sel et poivre noir'
    ],
    instructions: [
      'Griller les poivrons et l\'aubergine au four jusqu\'à ce que la peau soit noircie',
      'Laisser refroidir, puis peler et retirer les graines',
      'Hacher grossièrement les légumes et l\'ail',
      'Cuire le mélange dans une casserole à feu doux avec l\'huile pendant 1h30, en remuant régulièrement',
      'Ajouter le vinaigre, le sel et le poivre',
      'Mixer jusqu\'à obtenir une consistance lisse',
      'Mettre en bocaux stérilisés et conserver au réfrigérateur'
    ],
    category: 'apéro',
    prepTime: 30,
    cookTime: 120,
    servings: 10
  },
  {
    id: '31',
    name: 'Slatko',
    ingredients: ['500g fruits', '200g sucre', '1 citron'],
    instructions: ['Cuire les fruits avec le sucre et le citron', 'Laisser refroidir'],
    category: 'dessert',
    prepTime: 15,
    cookTime: 30,
    servings: 4
  },
  {
    id: '32',
    name: 'Rakija',
    ingredients: ['1kg fruits', '500g sucre', '1l eau'],
    instructions: ['Mélanger les fruits, le sucre et l’eau', 'Laisser fermenter'],
    category: 'apéro',
    prepTime: 15,
    cookTime: 30,
    servings: 4
  },
  {
    id: '33',
    name: 'Pita',
    ingredients: ['500g pâte filo', '200g viande hachée', '1 oignon', '1 bouquet persil'],
    instructions: ['Étaler la pâte', 'Faire revenir la viande hachée, l’oignon et le persil', 'Enfourner'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '34',
    name: 'Urnebes salata',
    ingredients: [
      '300g de fromage blanc',
      '2 poivrons rouges grillés et pelés',
      '2 gousses d\'ail écrasées',
      '1 cuillère à café de paprika fort',
      '2 cuillères à soupe d\'huile d\'olive',
      'Sel au goût'
    ],
    instructions: [
      'Mixer les poivrons grillés pour obtenir une purée',
      'Dans un bol, mélanger le fromage blanc, la purée de poivrons, l\'ail et le paprika',
      'Ajouter l\'huile d\'olive et le sel, bien mélanger',
      'Réfrigérer pendant au moins 2 heures avant de servir',
      'Servir comme tartinade avec du pain sans gluten ou des légumes crus'
    ],
    category: 'apéro',
    prepTime: 20,
    cookTime: 0,
    servings: 6
  },
  {
    id: '35',
    name: 'Punjene paprike (Poivrons farcis)',
    ingredients: [
      '6 gros poivrons',
      '400g de bœuf haché',
      '100g de riz à grain rond',
      '1 oignon haché',
      '1 œuf',
      '2 gousses d\'ail écrasées',
      '1 cuillère à café de paprika',
      '400g de sauce tomate',
      'Sel et poivre noir'
    ],
    instructions: [
      'Préchauffer le four à 180°C',
      'Couper le haut des poivrons et retirer les graines',
      'Mélanger le bœuf, le riz, l\'oignon, l\'œuf, l\'ail, le paprika, le sel et le poivre',
      'Farcir les poivrons avec ce mélange',
      'Placer les poivrons dans un plat allant au four',
      'Verser la sauce tomate autour et sur les poivrons',
      'Cuire au four pendant 1h30, en arrosant régulièrement de sauce',
      'Servir chaud avec de la crème fraîche'
    ],
    category: 'plat principal',
    prepTime: 30,
    cookTime: 90,
    servings: 6
  },
  {
    id: '36',
    name: 'Karađorđeva šnicla',
    ingredients: ['500g viande', '200g fromage', '1 oeuf', '1 bouquet persil'],
    instructions: ['Aplatir la viande', 'Ajouter le fromage, l’oeuf et le persil', 'Rouler et cuire'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },{
    id: '37',
    name: 'Crnac (Gâteau au chocolat serbe)',
    ingredients: [
      '500g de farine de riz',
      '200g de sucre',
      '100g de cacao non sucré',
      '3 œufs',
      '250ml de lait végétal',
      '150ml d\'huile végétale',
      '1 sachet de levure chimique sans gluten',
      '1 cuillère à café d\'extrait de vanille',
      '1 pincée de sel'
    ],
    instructions: [
      'Préchauffer le four à 180°C et graisser un moule à gâteau',
      'Dans un grand bol, mélanger la farine de riz, le sucre, le cacao, la levure et le sel',
      'Dans un autre bol, battre les œufs avec le lait, l\'huile et l\'extrait de vanille',
      'Incorporer délicatement les ingrédients liquides aux ingrédients secs',
      'Verser la pâte dans le moule préparé',
      'Cuire au four pendant 35-40 minutes, jusqu\'à ce qu\'un cure-dent inséré au centre en ressorte propre',
      'Laisser refroidir avant de démouler',
      'Saupoudrer de sucre glace avant de servir'
    ],
    category: 'dessert',
    prepTime: 20,
    cookTime: 40,
    servings: 8
  },
  {
    id: '38',
    name: 'Paprikaš (Ragoût de poulet au paprika)',
    ingredients: [
      '1kg de poulet coupé en morceaux',
      '3 oignons émincés',
      '3 poivrons rouges coupés en lanières',
      '3 cuillères à soupe de paprika doux',
      '1 cuillère à soupe de paprika fort',
      '2 tomates pelées et coupées en dés',
      '2 cuillères à soupe d\'huile végétale',
      '500ml de bouillon de poulet sans gluten',
      'Sel et poivre noir',
      'Persil frais haché pour la garniture'
    ],
    instructions: [
      'Dans une grande casserole, faire chauffer l\'huile et y faire revenir les oignons jusqu\'à ce qu\'ils soient translucides',
      'Ajouter les morceaux de poulet et faire dorer de tous les côtés',
      'Incorporer les deux types de paprika et bien mélanger pour enrober la viande',
      'Ajouter les poivrons et les tomates, puis verser le bouillon',
      'Assaisonner avec du sel et du poivre',
      'Porter à ébullition, puis réduire le feu et laisser mijoter à couvert pendant 45 minutes',
      'Retirer le couvercle et laisser mijoter encore 15 minutes pour épaissir la sauce',
      'Ajuster l\'assaisonnement si nécessaire',
      'Servir chaud, garni de persil frais, avec du riz ou des pommes de terre'
    ],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 60,
    servings: 6
  },
  {
    id: '39',
    name: 'Kompot (Compote de fruits serbe)',
    ingredients: [
      '1kg de fruits mixtes (pommes, poires, prunes, abricots)',
      '200g de sucre',
      '1.5L d\'eau',
      '1 bâton de cannelle',
      '3 clous de girofle',
      'Zeste d\'un citron'
    ],
    instructions: [
      'Laver et couper les fruits en quartiers ou en tranches, retirer les noyaux si nécessaire',
      'Dans une grande casserole, verser l\'eau et ajouter le sucre, le bâton de cannelle, les clous de girofle et le zeste de citron',
      'Porter à ébullition en remuant pour dissoudre le sucre',
      'Ajouter les fruits et réduire le feu',
      'Laisser mijoter doucement pendant 15-20 minutes, jusqu\'à ce que les fruits soient tendres mais pas trop cuits',
      'Retirer du feu et laisser refroidir à température ambiante',
      'Retirer les épices et le zeste de citron',
      'Réfrigérer avant de servir',
      'Servir frais, avec ou sans les fruits, selon les préférences'
    ],
    category: 'dessert',
    prepTime: 15,
    cookTime: 20,
    servings: 6
  },
  {
    id: '40',
    name: 'Pogača (Pain traditionnel serbe sans gluten)',
    ingredients: [
      '400g de farine de riz',
      '100g de farine de tapioca',
      '2 cuillères à café de gomme xanthane',
      '1 sachet de levure sèche',
      '1 cuillère à café de sucre',
      '1 cuillère à café de sel',
      '250ml de lait tiède',
      '60ml d\'huile d\'olive',
      '1 œuf battu',
      'Graines de sésame pour la garniture'
    ],
    instructions: [
      'Dans un grand bol, mélanger les farines, la gomme xanthane, la levure, le sucre et le sel',
      'Ajouter le lait tiède et l\'huile d\'olive, mélanger pour former une pâte',
      'Pétrir la pâte pendant 5-7 minutes jusqu\'à ce qu\'elle devienne lisse',
      'Couvrir le bol et laisser lever la pâte dans un endroit chaud pendant 1 heure',
      'Préchauffer le four à 200°C',
      'Rabattre la pâte et la placer dans un moule à tarte graissé',
      'Avec un couteau, faire des incisions en forme de losanges sur le dessus',
      'Badigeonner d\'œuf battu et saupoudrer de graines de sésame',
      'Laisser reposer encore 15 minutes',
      'Cuire au four pendant 25-30 minutes, jusqu\'à ce que le pain soit doré',
      'Laisser refroidir sur une grille avant de servir'
    ],
    category: 'apéro',
    prepTime: 90,
    cookTime: 30,
    servings: 8
  },
  {
    id: '41',
    name: 'Paprenjaci (Biscuits au poivre serbes)',
    ingredients: [
      '300g de farine de riz',
      '100g de farine d\'amande',
      '200g de sucre roux',
      '100g de miel',
      '100g de beurre ramolli',
      '2 œufs',
      '1 cuillère à café de bicarbonate de soude',
      '1 cuillère à café de cannelle moulue',
      '1 cuillère à café de poivre noir fraîchement moulu',
      '1/2 cuillère à café de clou de girofle moulu',
      'Zeste d\'un citron'
    ],
    instructions: [
      'Dans un grand bol, crémer le beurre avec le sucre jusqu\'à obtention d\'un mélange léger et mousseux',
      'Ajouter les œufs un par un, puis incorporer le miel et le zeste de citron',
      'Dans un autre bol, mélanger les farines, le bicarbonate de soude et les épices',
      'Incorporer progressivement le mélange sec aux ingrédients humides pour former une pâte',
      'Envelopper la pâte dans du film alimentaire et réfrigérer pendant au moins 2 heures',
      'Préchauffer le four à 180°C et tapisser une plaque de cuisson de papier sulfurisé',
      'Étaler la pâte sur une surface farinée et découper des formes avec un emporte-pièce',
      'Placer les biscuits sur la plaque de cuisson et cuire pendant 10-12 minutes',
      'Laisser refroidir sur une grille avant de servir'
    ],
    category: 'dessert',
    prepTime: 150,
    cookTime: 12,
    servings: 30
  },
  {
    id: '42',
    name: 'Vanilice (Biscuits à la vanille)',
    ingredients: [
      '300g de farine de riz',
      '200g de beurre ramolli',
      '100g de sucre glace',
      '100g de noix moulues',
      '1 sachet de sucre vanillé',
      'Sucre glace pour saupoudrer'
    ],
    instructions: [
      'Préchauffer le four à 180°C',
      'Mélanger le beurre et le sucre glace jusqu\'à obtenir une consistance crémeuse',
      'Ajouter les noix moulues et le sucre vanillé, bien mélanger',
      'Incorporer progressivement la farine de riz pour former une pâte',
      'Former de petites boules et les placer sur une plaque de cuisson',
      'Cuire pendant 12-15 minutes jusqu\'à ce qu\'elles soient légèrement dorées',
      'Laisser refroidir puis saupoudrer généreusement de sucre glace'
    ],
    category: 'dessert',
    prepTime: 30,
    cookTime: 15,
    servings: 30
  },
  {
    id: '43',
    name: 'Knedle',
    ingredients: ['500g pommes de terre', '200g farine', '1 oeuf', '1 cuillère sucre'],
    instructions: ['Cuire les pommes de terre', 'Écraser et mélanger avec la farine, l’oeuf et le sucre', 'Former des boules et les cuire dans l’eau'],
    category: 'dessert',
    prepTime: 15,
    cookTime: 30,
    servings: 4
  },
  {
    id: '44',
    name: 'Tufahija',
    ingredients: ['500g pommes', '200g sucre', '100g noix'],
    instructions: ['Cuire les pommes avec le sucre', 'Ajouter les noix'],
    category: 'dessert',
    prepTime: 15,
    cookTime: 30,
    servings: 4
  },
  {
    id: '45',
    name: 'Dolma',
    ingredients: ['500g viande hachée', '1 oignon', '1 bouquet persil', '1 cuillère paprika', '1 chou'],
    instructions: ['Mélanger la viande hachée, l’oignon, le persil et le paprika', 'Farcir le chou et cuire dans l’eau'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '46',
    name: 'Baklava',
    ingredients: ['500g pâte filo', '200g noix', '200g beurre', '200g sucre'],
    instructions: ['Étaler la pâte', 'Ajouter les noix et le sucre', 'Enfourner'],
    category: 'dessert',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '47',
    name: 'Šopska salata',
    ingredients: [
      '4 tomates mûres',
      '2 concombres',
      '1 poivron vert',
      '1 oignon rouge',
      '200g de feta',
      '2 cuillères à soupe d\'huile d\'olive',
      '1 cuillère à soupe de vinaigre de vin rouge',
      'Sel et poivre noir'
    ],
    instructions: [
      'Couper les tomates, concombres et poivron en dés',
      'Émincer finement l\'oignon rouge',
      'Mélanger les légumes dans un saladier',
      'Assaisonner avec l\'huile d\'olive, le vinaigre, le sel et le poivre',
      'Émietter la feta sur le dessus',
      'Servir frais'
    ],
    category: 'entrée',
    prepTime: 15,
    cookTime: 0,
    servings: 4
  },
  {
    id: '48',
    name: 'Pita sa sirom',
    ingredients: ['500g pâte filo', '200g feta', '200g beurre'],
    instructions: ['Étaler la pâte', 'Ajouter la feta et le beurre', 'Enfourner'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '49',
    name: 'Proja (pain de maïs serbe)',
    ingredients: [
      '300g de farine de maïs',
      '200g de fromage blanc',
      '200ml de yaourt nature',
      '3 œufs',
      '100ml d\'huile végétale',
      '1 cuillère à café de bicarbonate de soude',
      '1 cuillère à café de sel'
    ],
    instructions: [
      'Préchauffer le four à 200°C',
      'Mélanger tous les ingrédients dans un grand bol jusqu\'à obtenir une pâte homogène',
      'Verser la pâte dans un moule à gâteau huilé',
      'Cuire pendant 30-35 minutes jusqu\'à ce que le dessus soit doré',
      'Laisser refroidir légèrement avant de couper en morceaux'
    ],
    category: 'petit déjeuner',
    prepTime: 15,
    cookTime: 35,
    servings: 8
  },
  // Recettes Indienne
  {
    id: '50',
    name: 'Tandoori',
    ingredients: ['500g poulet', '200ml yaourt', '1 cuillère curry', '1 cuillère paprika'],
    instructions: ['Mélanger le poulet, le yaourt, le curry et le paprika', 'Cuire au four'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '51',
    name: 'Naan',
    ingredients: ['500g farine', '200ml lait', '1 sachet levure', '1 cuillère sel'],
    instructions: ['Mélanger la farine, le lait, la levure et le sel', 'Former des boules et les cuire au four'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '52',
    name: 'Samosa',
    ingredients: ['500g farine', '200g pommes de terre', '1 oignon', '1 cuillère curry'],
    instructions: ['Mélanger la farine, les pommes de terre, l’oignon et le curry', 'Former des triangles et les cuire au four'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '53',
    name: 'Lassi mangue',
    ingredients: ['1 mangue', '200ml yaourt', '1 cuillère sucre'],
    instructions: ['Mixer la mangue, le yaourt et le sucre'],
    category: 'dessert',
    prepTime: 5,
    cookTime: 0,
    servings: 4
  },
  {
    id: '54',
    name: 'Riz basmati',
    ingredients: ['200g riz', '1 cuillère curcuma', '1 cuillère cumin', 'Sel'],
    instructions: ['Cuire le riz avec le curcuma, le cumin et le sel'],
    category: 'plat principal',
    prepTime: 5,
    cookTime: 15,
    servings: 4
  },
  {
    id: '55',
    name: 'Dahl',
    ingredients: ['200g lentilles', '1 oignon', '1 cuillère curry', '1 cuillère cumin'],
    instructions: ['Cuire les lentilles avec l’oignon, le curry et le cumin'],
    category: 'plat principal',
    prepTime: 5,
    cookTime: 15,
    servings: 4
  },
  {
    id: '56',
    name: 'Poulet korma',
    ingredients: ['500g poulet', '200ml lait de coco', '1 cuillère curry', '1 cuillère cumin'],
    instructions: ['Faire revenir le poulet', 'Ajouter le lait de coco, le curry et le cumin'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '57',
    name: 'Chapati',
    ingredients: ['500g farine', '200ml eau', '1 cuillère sel'],
    instructions: ['Mélanger la farine, l’eau et le sel', 'Former des boules et les cuire à la poêle'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '58',
    name: 'Poulet tikka masala',
    ingredients: ['500g poulet', '200ml yaourt', '1 cuillère curry', '1 cuillère cumin'],
    instructions: ['Faire revenir le poulet', 'Ajouter le yaourt, le curry et le cumin'],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: '59',
    name: 'Raita',
    ingredients: [
      '200ml yaourt grec',
      '1 concombre',
      '1 cuillère à soupe de menthe fraîche hachée',
      '1/4 cuillère à café de cumin moulu',
      '1 pincée de sel',
      '1 pincée de poivre noir'
    ],
    instructions: [
      'Épépiner et râper grossièrement le concombre',
      'Mélanger le yaourt, le concombre râpé, la menthe hachée, le cumin, le sel et le poivre',
      'Réfrigérer pendant au moins 30 minutes avant de servir'
    ],
    category: 'apéro',
    prepTime: 10,
    cookTime: 0,
    servings: 4
  },
  {
    id: '60',
    name: 'Biryani aux légumes',
    ingredients: [
      '300g de riz basmati',
      '500g de légumes variés (carottes, petits pois, haricots verts, chou-fleur)',
      '2 oignons',
      '3 gousses d\'ail',
      '2 cm de gingembre frais',
      '2 cuillères à soupe d\'huile de coco',
      '1 cuillère à café de cumin',
      '1 cuillère à café de coriandre moulue',
      '1/2 cuillère à café de curcuma',
      '1/4 cuillère à café de cannelle moulue',
      '2 feuilles de laurier',
      '3 cardamomes vertes',
      'Sel et poivre',
      'Coriandre fraîche pour la garniture'
    ],
    instructions: [
      'Rincer le riz et le faire tremper pendant 30 minutes',
      'Couper les légumes en morceaux de taille égale',
      'Hacher finement l\'oignon, l\'ail et le gingembre',
      'Dans une grande casserole, faire chauffer l\'huile de coco et y faire revenir les épices pendant 1 minute',
      'Ajouter l\'oignon, l\'ail et le gingembre, et faire revenir jusqu\'à ce que l\'oignon soit translucide',
      'Ajouter les légumes et faire sauter pendant 5 minutes',
      'Ajouter le riz égoutté et 600ml d\'eau',
      'Porter à ébullition, puis réduire le feu et laisser mijoter à couvert pendant 15-20 minutes',
      'Laisser reposer 5 minutes avant de servir',
      'Garnir de coriandre fraîche'
    ],
    category: 'plat principal',
    prepTime: 45,
    cookTime: 30,
    servings: 4
  },
  // Recettes Russe
  {
    id: '19',
    name: 'Bortsch',
    ingredients: [
      '500g de boeuf à braiser',
      '1 oignon',
      '2 carottes',
      '2 betteraves',
      '1/4 de chou blanc',
      '2 pommes de terre',
      '2 gousses d\'ail',
      '2 cuillères à soupe de concentré de tomates',
      '1 cuillère à café de vinaigre de cidre',
      '1 feuille de laurier',
      'Sel et poivre',
      'Crème fraîche pour servir (facultatif)'
    ],
    instructions: [
      'Couper le boeuf en cubes et le faire revenir dans une grande casserole',
      'Ajouter l\'oignon émincé et faire revenir jusqu\'à ce qu\'il soit translucide',
      'Ajouter les carottes, les betteraves et les pommes de terre coupées en dés',
      'Verser 1,5L d\'eau, ajouter le laurier et laisser mijoter pendant 1h30',
      'Ajouter le chou émincé, l\'ail écrasé et le concentré de tomates',
      'Laisser mijoter encore 30 minutes',
      'Assaisonner avec le sel, le poivre et le vinaigre',
      'Servir chaud avec une cuillère de crème fraîche si désiré'
    ],
    category: 'plat principal',
    prepTime: 30,
    cookTime: 120,
    servings: 6
  },
  {
    id: '62',
    name: 'Salade Olivier sans gluten',
    ingredients: [
      '4 pommes de terre',
      '3 carottes',
      '200g de petits pois surgelés',
      '2 pommes',
      '2 oeufs durs',
      '100g de jambon sans gluten',
      '2 cornichons',
      '200g de mayonnaise sans gluten',
      'Sel et poivre'
    ],
    instructions: [
      'Faire cuire les pommes de terre et les carottes à l\'eau, puis les laisser refroidir',
      'Cuire les petits pois selon les instructions du paquet',
      'Couper les pommes de terre, les carottes, les pommes, les oeufs, le jambon et les cornichons en petits dés',
      'Mélanger tous les ingrédients dans un grand bol',
      'Ajouter la mayonnaise et mélanger délicatement',
      'Assaisonner avec le sel et le poivre',
      'Réfrigérer au moins 2 heures avant de servir'
    ],
    category: 'entrée',
    prepTime: 30,
    cookTime: 20,
    servings: 6
  },
  // Recettes Mexicaine
  {
    id: "63",
    name: "Tacos au poulet sans gluten",
    ingredients: [
      "500g de poulet émincé",
      "8 tortillas de maïs",
      "1 oignon",
      "2 poivrons",
      "2 cuillères à soupe d\"huile d\"olive",
      "2 cuillères à café de paprika fumé",
      "1 cuillère à café de cumin",
      "Sel et poivre"
    ],
    instructions: [
      "Faire revenir l\"oignon et les poivrons émincés dans l\"huile d\"olive",
      "Ajouter le poulet et les épices, cuire jusqu\"à ce que le poulet soit doré",
      "Réchauffer les tortillas de maïs",
      "Garnir les tortillas avec le mélange de poulet et de légumes"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: "64",
    name: "Guacamole",
    ingredients: [
      "3 avocats mûrs",
      "1 tomate",
      "1 oignon rouge",
      "1 citron vert",
      "1 piment jalapeño (facultatif)",
      "Coriandre fraîche",
      "Sel"
    ],
    instructions: [
      "Écraser les avocats à la fourchette",
      "Ajouter la tomate et l\"oignon finement coupés",
      "Incorporer le jus de citron vert",
      "Ajouter le piment jalapeño émincé si désiré",
      "Ciseler la coriandre et l\"ajouter au mélange",
      "Saler à goût et bien mélanger"
    ],
    category: "apéro",
    prepTime: 15,
    cookTime: 0,
    servings: 6
  },
  {
    id: "65",
    name: "Chili sin carne sans gluten",
    ingredients: [
      "400g de haricots rouges en conserve",
      "400g de haricots noirs en conserve",
      "2 oignons",
      "3 gousses d\"ail",
      "2 poivrons",
      "400g de tomates concassées",
      "200ml de bouillon de légumes sans gluten",
      "2 cuillères à soupe d\"huile d\"olive",
      "2 cuillères à café de cumin",
      "2 cuillères à café de paprika",
      "1 cuillère à café de piment en poudre",
      "Sel et poivre"
    ],
    instructions: [
      "Faire revenir les oignons et l\"ail dans l\"huile d\"olive",
      "Ajouter les poivrons coupés en dés et les épices",
      "Incorporer les tomates concassées et le bouillon",
      "Ajouter les haricots égouttés et rincer",
      "Laisser mijoter 30 minutes à feu doux",
      "Ajuster l\"assaisonnement"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 40,
    servings: 6
  },
  {
    id: "66",
    name: "Salade de quinoa à la mexicaine",
    ingredients: [
      "250g de quinoa",
      "1 boîte de maïs",
      "1 boîte de haricots noirs",
      "2 tomates",
      "1 avocat",
      "1 oignon rouge",
      "Jus de 2 citrons verts",
      "3 cuillères à soupe d\"huile d\"olive",
      "Coriandre fraîche",
      "Sel et poivre"
    ],
    instructions: [
      "Cuire le quinoa selon les instructions du paquet",
      "Mélanger le quinoa refroidi avec le maïs et les haricots égouttés",
      "Ajouter les tomates et l\"avocat en dés, ainsi que l\"oignon finement émincé",
      "Préparer une vinaigrette avec le jus de citron vert et l\"huile d\"olive",
      "Assaisonner la salade avec la vinaigrette, le sel et le poivre",
      "Parsemer de coriandre ciselée avant de servir"
    ],
    category: "entrée",
    prepTime: 20,
    cookTime: 15,
    servings: 4
  },
  {
    id: "67",
    name: "Fajitas de boeuf sans gluten",
    ingredients: [
      "500g de boeuf émincé",
      "8 tortillas de maïs",
      "2 poivrons",
      "1 oignon",
      "2 cuillères à soupe d\"huile d\"olive",
      "2 cuillères à café de cumin",
      "1 cuillère à café de paprika fumé",
      "Jus d\"un citron vert",
      "Sel et poivre"
    ],
    instructions: [
      "Faire mariner le boeuf avec les épices et le jus de citron vert",
      "Faire revenir l\"oignon et les poivrons émincés dans l\"huile d\"olive",
      "Ajouter le boeuf et cuire à feu vif",
      "Réchauffer les tortillas de maïs",
      "Servir le mélange de boeuf et légumes dans les tortillas"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 15,
    servings: 4
  },
  {
    id: "68",
    name: "Salsa de tomates fraîches",
    ingredients: [
      "4 tomates mûres",
      "1 oignon rouge",
      "1 piment jalapeño",
      "1 gousse d\"ail",
      "Jus d\"un citron vert",
      "Coriandre fraîche",
      "Sel"
    ],
    instructions: [
      "Couper les tomates en petits dés",
      "Hacher finement l\"oignon rouge et le piment jalapeño",
      "Écraser l\"ail",
      "Mélanger tous les ingrédients dans un bol",
      "Ajouter le jus de citron vert et la coriandre ciselée",
      "Saler à goût et laisser reposer au frais 30 minutes avant de servir"
    ],
    category: "apéro",
    prepTime: 15,
    cookTime: 0,
    servings: 6
  },
  // Recettes Japonaise
  {
    id: "69",
    name: "Sushi bowl au saumon",
    ingredients: [
      "300g de riz à sushi",
      "300g de saumon frais",
      "1 avocat",
      "1 concombre",
      "2 cuillères à soupe de graines de sésame",
      "4 cuillères à soupe de sauce soja sans gluten",
      "2 cuillères à soupe de vinaigre de riz",
      "1 cuillère à soupe de wasabi (facultatif)"
    ],
    instructions: [
      "Cuire le riz selon la méthode traditionnelle (voir recette Katsudon)",
      "Couper le saumon, l\"avocat et le concombre en dés",
      "Mélanger le riz cuit avec le vinaigre de riz",
      "Disposer le riz dans des bols",
      "Ajouter les dés de saumon, d\"avocat et de concombre",
      "Saupoudrer de graines de sésame",
      "Servir avec la sauce soja et le wasabi à part"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 20,
    servings: 4
  },
  {
    id: "70",
    name: "Miso soup",
    ingredients: [
      "4 cuillères à soupe de pâte de miso sans gluten",
      "4 tasses d\"eau",
      "100g de tofu soyeux",
      "1 oignon vert",
      "1 feuille d\"algue nori",
      "50g de champignons shiitake"
    ],
    instructions: [
      "Faire chauffer l\"eau dans une casserole",
      "Couper le tofu en petits cubes",
      "Émincer finement l\"oignon vert et les champignons",
      "Ajouter les champignons à l\"eau chaude et laisser mijoter 2 minutes",
      "Diluer la pâte de miso dans un peu d\"eau chaude",
      "Ajouter le miso dilué, le tofu et l\"oignon vert à la soupe",
      "Couper la feuille de nori en petits morceaux et l\"ajouter à la soupe",
      "Servir immédiatement"
    ],
    category: "entrée",
    prepTime: 10,
    cookTime: 5,
    servings: 4
  },
  {
    id: "71",
    name: "Poulet teriyaki",
    ingredients: [
      "4 filets de poulet",
      "4 cuillères à soupe de sauce soja sans gluten",
      "2 cuillères à soupe de mirin",
      "2 cuillères à soupe de sucre",
      "1 cuillère à soupe de gingembre râpé",
      "1 gousse d\"ail écrasée",
      "1 cuillère à soupe d\"huile de sésame"
    ],
    instructions: [
      "Mélanger la sauce soja, le mirin, le sucre, le gingembre et l\"ail pour faire la sauce teriyaki",
      "Faire mariner les filets de poulet dans la moitié de la sauce pendant 30 minutes",
      "Faire chauffer l\"huile de sésame dans une poêle",
      "Cuire les filets de poulet 5-6 minutes de chaque côté",
      "Ajouter le reste de la sauce et laisser caraméliser",
      "Servir avec du riz blanc cuit à la vapeur"
    ],
    category: "plat principal",
    prepTime: 40,
    cookTime: 15,
    servings: 4
  },
  {
    id: "72",
    name: "Salade de wakamé",
    ingredients: [
      "50g d\"algues wakamé séchées",
      "1 concombre",
      "2 cuillères à soupe de vinaigre de riz",
      "1 cuillère à soupe d\"huile de sésame",
      "1 cuillère à café de sucre",
      "Graines de sésame pour la garniture"
    ],
    instructions: [
      "Réhydrater les algues wakamé dans de l\"eau froide pendant 5 minutes, puis les égoutter",
      "Couper le concombre en fines tranches",
      "Mélanger le vinaigre de riz, l\"huile de sésame et le sucre pour faire la vinaigrette",
      "Mélanger les algues, le concombre et la vinaigrette",
      "Saupoudrer de graines de sésame avant de servir"
    ],
    category: "entrée",
    prepTime: 15,
    cookTime: 0,
    servings: 4
  },
  {
    id: "73",
    name: "Yakitori de poulet",
    ingredients: [
      "500g de poulet coupé en morceaux",
      "4 cuillères à soupe de sauce soja sans gluten",
      "2 cuillères à soupe de mirin",
      "2 cuillères à soupe de saké (ou vin blanc)",
      "1 cuillère à soupe de sucre",
      "1 oignon vert",
      "Brochettes en bois"
    ],
    instructions: [
      "Mélanger la sauce soja, le mirin, le saké et le sucre dans une casserole",
      "Faire réduire la sauce à feu doux jusqu\"à ce qu\"elle épaississe",
      "Enfiler les morceaux de poulet sur les brochettes",
      "Faire griller les brochettes 5-6 minutes de chaque côté",
      "Badigeonner les brochettes avec la sauce pendant la cuisson",
      "Garnir d\"oignon vert émincé avant de servir"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 15,
    servings: 4
  },
  {
    id: "74",
    name: "Onigiri (boules de riz)",
    ingredients: [
      "300g de riz à sushi",
      "1 feuille d\"algue nori",
      "100g de thon en conserve",
      "2 cuillères à soupe de mayonnaise",
      "1 cuillère à café de sauce soja sans gluten",
      "Sel"
    ],
    instructions: [
      "Cuire le riz selon la méthode traditionnelle (voir recette Katsudon)",
      "Mélanger le thon, la mayonnaise et la sauce soja",
      "Former des boules de riz avec les mains mouillées",
      "Faire un creux dans chaque boule et y mettre la garniture au thon",
      "Refermer la boule de riz pour enfermer la garniture",
      "Couper la feuille de nori en bandes et entourer partiellement chaque onigiri",
      "Servir immédiatement ou emballer dans du film alimentaire pour plus tard"
    ],
    category: "entrée",
    prepTime: 30,
    cookTime: 20,
    servings: 4
  },
  {
    id: "75",
    name: "Katsudon",
    ingredients: [
      "2 tasses de riz japonais à grains courts",
      "2 escalopes de porc, poulet ou dinde",
      "1 oeuf battu",
      "1 tasse de chapelure de riz ou de millet",
      "1 oignon",
      "2 oeufs",
      "1/2 tasse de dashi (ou bouillon de poulet)",
      "2 cuillères à soupe de sauce soja sans gluten",
      "1 cuillère à soupe de mirin",
      "1 cuillère à soupe de sucre",
      "Huile pour la friture"
    ],
    instructions: [
      "Préparation du riz (méthode traditionnelle japonaise) :",
      "- Rincer le riz plusieurs fois jusqu\"à ce que l\"eau soit claire",
      "- Laisser le riz tremper dans l\"eau froide pendant 30 minutes",
      "- Égoutter le riz et le placer dans une casserole avec 2,5 tasses d\"eau",
      "- Porter à ébullition, puis réduire à feu doux et couvrir",
      "- Cuire pendant 15 minutes sans soulever le couvercle",
      "- Retirer du feu et laisser reposer 10 minutes, toujours couvert",
      "- Remuer délicatement le riz avec une spatule en bois",
      "Préparation du katsu :",
      "- Assaisonner les escalopes de porc avec du sel et du poivre",
      "- Les passer dans la farine, puis dans l\"oeuf battu, et enfin dans la chapelure",
      "- Faire frire dans l\"huile chaude jusqu\"à ce qu\"elles soient dorées et croustillantes",
      "- Couper en tranches",
      "Préparation de la sauce :",
      "- Faire revenir l\"oignon émincé dans une poêle",
      "- Ajouter le dashi, la sauce soja, le mirin et le sucre, porter à ébullition",
      "- Ajouter le porc frit et verser les oeufs battus par-dessus",
      "- Couvrir et cuire jusqu\"à ce que les oeufs soient cuits",
      "Servir le katsu et la sauce sur un bol de riz chaud"
    ],
    category: "plat principal",
    prepTime: 45,
    cookTime: 30,
    servings: 2
  },
  // Recettes Chinoise
  {
    id: "76",
    name: "Poulet Kung Pao",
    ingredients: [
      "500g de blanc de poulet coupé en dés",
      "100g de cacahuètes non salées",
      "3 oignons verts",
      "2 gousses d\"ail",
      "1 morceau de gingembre frais",
      "5 piments séchés",
      "2 cuillères à soupe de sauce soja sans gluten",
      "1 cuillère à soupe de vinaigre de riz",
      "1 cuillère à soupe de vin de riz shaoxing (ou xérès sec)",
      "1 cuillère à soupe de sucre",
      "1 cuillère à café d\"huile de sésame",
      "2 cuillères à soupe de fécule de maïs",
      "Huile végétale pour la cuisson"
    ],
    instructions: [
      "Mélanger le poulet avec 1 cuillère à soupe de sauce soja et 1 cuillère à soupe de fécule de maïs",
      "Préparer la sauce en mélangeant le reste de sauce soja, le vinaigre, le vin, le sucre et l\"huile de sésame",
      "Faire chauffer l\"huile dans un wok et faire revenir le poulet jusqu\"à ce qu\"il soit doré",
      "Retirer le poulet et réserver",
      "Dans le même wok, faire revenir l\"ail, le gingembre et les piments séchés",
      "Ajouter les cacahuètes et faire griller légèrement",
      "Remettre le poulet dans le wok, ajouter la sauce et les oignons verts",
      "Cuire jusqu\"à ce que la sauce épaississe",
      "Servir chaud avec du riz"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 15,
    servings: 4
  },
  {
    id: "77",
    name: "Mapo Tofu",
    ingredients: [
      "400g de tofu ferme",
      "200g de porc haché",
      "2 gousses d\"ail",
      "1 morceau de gingembre frais",
      "2 oignons verts",
      "2 cuillères à soupe de pâte de haricots noirs",
      "1 cuillère à soupe de pâte de piment (doubanjiang)",
      "1 cuillère à café de poivre du Sichuan moulu",
      "200ml de bouillon de poulet sans gluten",
      "1 cuillère à soupe de sauce soja sans gluten",
      "1 cuillère à café de sucre",
      "2 cuillères à café de fécule de maïs",
      "Huile végétale pour la cuisson"
    ],
    instructions: [
      "Couper le tofu en cubes de 2 cm et les faire blanchir dans l\"eau bouillante pendant 2 minutes",
      "Faire chauffer l\"huile dans un wok et faire revenir le porc haché",
      "Ajouter l\"ail et le gingembre émincés",
      "Incorporer la pâte de haricots noirs et la pâte de piment, faire revenir",
      "Verser le bouillon, la sauce soja et le sucre, porter à ébullition",
      "Ajouter le tofu délicatement et laisser mijoter 5 minutes",
      "Mélanger la fécule de maïs avec un peu d\"eau et l\"ajouter pour épaissir la sauce",
      "Saupoudrer de poivre du Sichuan et d\"oignons verts ciselés",
      "Servir chaud avec du riz"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: "78",
    name: "Rouleaux de printemps",
    ingredients: [
      "8 feuilles de riz",
      "100g de vermicelles de riz",
      "200g de crevettes cuites",
      "1 carotte",
      "1 concombre",
      "50g de pousses de soja",
      "8 feuilles de menthe",
      "8 feuilles de basilic thaï",
      "4 cuillères à soupe de sauce nuoc-mâm sans gluten"
    ],
    instructions: [
      "Faire tremper les vermicelles de riz dans l\"eau chaude pendant 10 minutes, puis égoutter",
      "Couper les légumes en fines lamelles",
      "Tremper une feuille de riz dans l\"eau tiède jusqu\"à ce qu\"elle ramollisse",
      "Disposer les ingrédients au centre de la feuille : vermicelles, crevettes, légumes et herbes",
      "Replier les côtés et rouler serré",
      "Répéter l\"opération pour tous les rouleaux",
      "Servir avec la sauce nuoc-mâm"
    ],
    category: "entrée",
    prepTime: 30,
    cookTime: 0,
    servings: 4
  },
  {
    id: "79",
    name: "Aubergines à la sichuanaise",
    ingredients: [
      "2 grandes aubergines",
      "3 gousses d\"ail",
      "1 morceau de gingembre frais",
      "2 oignons verts",
      "2 cuillères à soupe de sauce soja sans gluten",
      "1 cuillère à soupe de vinaigre de riz noir",
      "1 cuillère à soupe de sucre",
      "1 cuillère à café d\"huile de sésame",
      "1 cuillère à café de pâte de piment (optionnel)",
      "Huile végétale pour la cuisson"
    ],
    instructions: [
      "Couper les aubergines en bâtonnets de 5 cm",
      "Faire chauffer l\"huile dans un wok et faire frire les aubergines jusqu\"à ce qu\"elles soient dorées",
      "Retirer les aubergines et réserver",
      "Dans le même wok, faire revenir l\"ail et le gingembre émincés",
      "Ajouter la sauce soja, le vinaigre, le sucre et la pâte de piment",
      "Remettre les aubergines dans le wok et mélanger avec la sauce",
      "Cuire jusqu\"à ce que les aubergines soient tendres",
      "Ajouter l\"huile de sésame et les oignons verts ciselés",
      "Servir chaud comme accompagnement"
    ],
    category: "apéro",
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: "80",
    name: "Soupe Won Ton",
    ingredients: [
      "Pour les won tons :",
      "200g de porc haché",
      "100g de crevettes hachées",
      "1 cuillère à soupe de gingembre râpé",
      "1 cuillère à soupe de sauce soja sans gluten",
      "1 cuillère à café d\"huile de sésame",
      "20 feuilles de won ton sans gluten (à base de farine de riz)",
      "Pour le bouillon :",
      "1,5L de bouillon de poulet sans gluten",
      "2 oignons verts",
      "1 cuillère à soupe de sauce soja sans gluten",
      "Sel et poivre"
    ],
    instructions: [
      "Mélanger le porc, les crevettes, le gingembre, la sauce soja et l\"huile de sésame",
      "Déposer une cuillère à café de farce au centre de chaque feuille de won ton",
      "Humidifier les bords et plier pour former des petits paquets",
      "Porter le bouillon à ébullition avec la sauce soja",
      "Ajouter les won tons et cuire 3-4 minutes jusqu\"à ce qu\"ils remontent à la surface",
      "Ajuster l\"assaisonnement et ajouter les oignons verts ciselés",
      "Servir chaud"
    ],
    category: "entrée",
    prepTime: 30,
    cookTime: 15,
    servings: 4
  },
  {
    id: "81",
    name: "Porc au caramel",
    ingredients: [
      "500g de porc (échine ou épaule) coupé en cubes",
      "3 cuillères à soupe de sucre",
      "2 cuillères à soupe de sauce soja sans gluten",
      "1 cuillère à soupe de sauce poisson sans gluten",
      "1 cuillère à soupe de vinaigre de riz",
      "2 gousses d\"ail",
      "1 morceau de gingembre frais",
      "1 oignon",
      "1 piment rouge (facultatif)",
      "2 oignons verts",
      "Huile végétale pour la cuisson"
    ],
    instructions: [
      "Dans une casserole, faire fondre le sucre à sec jusqu\"à obtention d\"un caramel doré",
      "Ajouter le porc et remuer pour bien l\"enrober de caramel",
      "Ajouter la sauce soja, la sauce poisson et le vinaigre",
      "Incorporer l\"ail et le gingembre émincés, ainsi que l\"oignon coupé en quartiers",
      "Ajouter un peu d\"eau si nécessaire et laisser mijoter à feu doux pendant 45 minutes",
      "Si utilisé, ajouter le piment émincé 5 minutes avant la fin de la cuisson",
      "La sauce doit être sirupeuse",
      "Garnir d\"oignons verts ciselés et servir avec du riz"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 50,
    servings: 4
  },
  // Recettes Coréenne
  
  {
    id: "82",
    name: "Bibimbap",
    ingredients: [
      "300g de riz",
      "200g de boeuf haché",
      "1 carotte",
      "1 courgette",
      "100g de pousses de soja",
      "100g d\"épinards",
      "4 oeufs",
      "2 cuillères à soupe de sauce gochujang sans gluten",
      "2 cuillères à soupe de sauce soja sans gluten",
      "2 cuillères à soupe d\"huile de sésame",
      "2 gousses d\"ail",
      "Graines de sésame",
      "Huile végétale pour la cuisson"
    ],
    instructions: [
      "Cuire le riz selon les instructions",
      "Faire sauter séparément la carotte, la courgette et les pousses de soja avec de l\"ail",
      "Blanchir les épinards et les assaisonner avec de l\"huile de sésame",
      "Faire sauter le boeuf avec la sauce soja",
      "Faire frire les oeufs au plat",
      "Dans des bols, disposer le riz et arranger les légumes et le boeuf par-dessus",
      "Ajouter l\"oeuf au plat et la sauce gochujang",
      "Saupoudrer de graines de sésame et servir"
    ],
    category: "plat principal",
    prepTime: 30,
    cookTime: 20,
    servings: 4
  },
  {
    id: "83",
    name: "Kimchi",
    ingredients: [
      "1 chou chinois",
      "1/4 tasse de sel",
      "1/4 tasse de piment coréen en poudre (gochugaru)",
      "4 oignons verts",
      "4 gousses d\"ail",
      "1 morceau de gingembre frais",
      "2 cuillères à soupe de sauce poisson sans gluten",
      "1 cuillère à soupe de sucre"
    ],
    instructions: [
      "Couper le chou en morceaux et le saler pendant 2 heures",
      "Rincer et égoutter le chou",
      "Mixer l\"ail, le gingembre, la sauce poisson et le sucre",
      "Ajouter le piment en poudre à ce mélange",
      "Enrober le chou de cette préparation",
      "Ajouter les oignons verts coupés en tronçons",
      "Tasser le tout dans un bocal et laisser fermenter à température ambiante 3-5 jours",
      "Conserver au réfrigérateur"
    ],
    category: "apéro",
    prepTime: 30,
    cookTime: 0,
    servings: 8
  },
  {
    id: "84",
    name: "Bulgogi",
    ingredients: [
      "500g de boeuf finement tranché",
      "3 cuillères à soupe de sauce soja sans gluten",
      "1 cuillère à soupe de sucre brun",
      "2 cuillères à soupe d\"huile de sésame",
      "3 gousses d\"ail",
      "1 oignon",
      "1 poire asiatique (ou pomme)",
      "2 oignons verts",
      "1 cuillère à soupe de graines de sésame"
    ],
    instructions: [
      "Mixer l\"oignon, l\"ail et la poire pour faire une purée",
      "Mélanger cette purée avec la sauce soja, le sucre et l\"huile de sésame",
      "Mariner le boeuf dans ce mélange pendant au moins 30 minutes",
      "Faire chauffer une poêle ou un gril et y cuire le boeuf par petites quantités",
      "Garnir d\"oignons verts ciselés et de graines de sésame",
      "Servir avec du riz et des feuilles de laitue pour l\"envelopper"
    ],
    category: "plat principal",
    prepTime: 40,
    cookTime: 10,
    servings: 4
  },
  {
    id: "85",
    name: "Japchae",
    ingredients: [
      "250g de nouilles de patate douce (dangmyeon)",
      "200g de boeuf émincé",
      "1 carotte",
      "1 oignon",
      "100g de champignons shiitake",
      "100g d\"épinards",
      "3 cuillères à soupe de sauce soja sans gluten",
      "2 cuillères à soupe d\"huile de sésame",
      "2 cuillères à soupe de sucre",
      "2 gousses d\"ail",
      "Graines de sésame"
    ],
    instructions: [
      "Cuisson traditionnelle des nouilles de patate douce :",
      "- Porter une grande casserole d\"eau à ébullition",
      "- Ajouter les nouilles et les cuire pendant 6-7 minutes en remuant doucement",
      "- Vérifier la texture : elles doivent être translucides et élastiques, mais pas trop molles",
      "- Égoutter les nouilles et les rincer immédiatement à l\"eau froide pour arrêter la cuisson",
      "- Égoutter à nouveau et couper les nouilles en longueurs plus courtes avec des ciseaux",
      "- Assaisonner les nouilles avec 1 cuillère à soupe de sauce soja et 1 cuillère à soupe d\"huile de sésame",
      "Faire revenir le boeuf avec 1 cuillère à soupe de sauce soja",
      "Faire sauter séparément la carotte, l\"oignon et les champignons",
      "Blanchir les épinards et les assaisonner avec de l\"huile de sésame",
      "Dans un grand wok ou une poêle, faire sauter les nouilles assaisonnées pendant 2-3 minutes",
      "Ajouter le reste de sauce soja, l\"huile de sésame, le sucre et l\"ail écrasé aux nouilles",
      "Incorporer tous les légumes sautés et le boeuf aux nouilles",
      "Mélanger délicatement tous les ingrédients en veillant à ne pas briser les nouilles",
      "Chauffer l\"ensemble pendant 2-3 minutes supplémentaires pour que les saveurs se mélangent",
      "Saupoudrer de graines de sésame avant de servir",
      "Le Japchae peut être servi chaud, à température ambiante, ou même froid"
    ],
    category: "plat principal",
    prepTime: 30,
    cookTime: 25,
    servings: 4
  },
  {
    id: "86",
    name: "Dakgalbi",
    ingredients: [
      "500g de poulet découpé en morceaux",
      "1 chou chinois",
      "1 patate douce",
      "1 carotte",
      "2 oignons verts",
      "4 cuillères à soupe de gochujang (pâte de piment coréenne sans gluten)",
      "2 cuillères à soupe de sauce soja sans gluten",
      "2 cuillères à soupe de sirop de riz",
      "2 gousses d\"ail",
      "1 cuillère à soupe d\"huile de sésame"
    ],
    instructions: [
      "Mélanger le gochujang, la sauce soja, le sirop de riz, l\"ail écrasé et l\"huile de sésame pour faire la marinade",
      "Enrober le poulet de cette marinade et laisser reposer 30 minutes",
      "Couper les légumes en morceaux",
      "Dans une grande poêle, disposer le poulet mariné et les légumes",
      "Cuire à feu moyen-vif en remuant régulièrement pendant 15-20 minutes",
      "Servir directement dans la poêle avec du riz"
    ],
    category: "plat principal",
    prepTime: 40,
    cookTime: 20,
    servings: 4
  },
  {
    id: "87",
    name: "Pajeon (crêpe aux oignons verts)",
    ingredients: [
      "200g de farine de riz",
      "50g de fécule de pomme de terre",
      "250ml d\"eau",
      "1 oeuf",
      "1 bouquet d\"oignons verts",
      "100g de fruits de mer mélangés (optionnel)",
      "Huile pour la cuisson",
      "Pour la sauce :",
      "3 cuillères à soupe de sauce soja sans gluten",
      "1 cuillère à soupe de vinaigre de riz",
      "1 cuillère à café de sucre",
      "Graines de sésame"
    ],
    instructions: [
      "Mélanger la farine de riz, la fécule, l\"eau et l\"oeuf pour faire une pâte lisse",
      "Couper les oignons verts en tronçons de 5 cm",
      "Faire chauffer de l\"huile dans une poêle",
      "Verser une louche de pâte et répartir les oignons verts (et les fruits de mer si utilisés)",
      "Cuire 3-4 minutes de chaque côté jusqu\"à ce que ce soit doré et croustillant",
      "Préparer la sauce en mélangeant tous les ingrédients",
      "Servir les pajeon chauds avec la sauce"
    ],
    category: "entrée",
    prepTime: 15,
    cookTime: 10,
    servings: 4
  },
  {
    id: "88",
    name: "Samgyeopsal-gui (Porc grillé)",
    ingredients: [
      "500g de poitrine de porc tranchée",
      "1 tête d\"ail entière",
      "2 oignons verts",
      "Feuilles de laitue pour servir",
      "Pour la sauce ssamjang :",
      "2 cuillères à soupe de doenjang (pâte de soja fermenté sans gluten)",
      "1 cuillère à soupe de gochujang sans gluten",
      "1 cuillère à café d\"huile de sésame",
      "1 gousse d\"ail écrasée",
      "1 oignon vert finement ciselé"
    ],
    instructions: [
      "Préparer la sauce ssamjang en mélangeant tous les ingrédients",
      "Faire griller les tranches de porc sur un gril ou une poêle très chaude",
      "Griller également les gousses d\"ail entières",
      "Servir le porc grillé avec les feuilles de laitue, l\"ail grillé, les oignons verts et la sauce ssamjang",
      "Chacun compose son propre ssam en enveloppant le porc et les accompagnements dans une feuille de laitue"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 15,
    servings: 4
  },
  {
    id: "89",
    name: "Tteokbokki (Gâteaux de riz épicés)",
    ingredients: [
      "500g de gâteaux de riz cylindriques (tteok)",
      "100g de gâteaux de poisson (eomuk)",
      "2 cuillères à soupe de gochugaru (flocons de piment coréen)",
      "2 cuillères à soupe de gochujang sans gluten",
      "1 cuillère à soupe de sucre",
      "2 cuillères à soupe de sauce soja sans gluten",
      "2 gousses d\"ail",
      "2 oignons verts",
      "500ml d\"eau ou de bouillon"
    ],
    instructions: [
      "Dans une casserole, mélanger l\"eau, le gochugaru, le gochujang, le sucre, la sauce soja et l\"ail écrasé",
      "Porter à ébullition et ajouter les gâteaux de riz et de poisson",
      "Laisser mijoter à feu moyen en remuant régulièrement jusqu\"à ce que la sauce épaississe et que les gâteaux de riz soient tendres (environ 15-20 minutes)",
      "Ajouter les oignons verts ciselés en fin de cuisson",
      "Servir chaud"
    ],
    category: "plat principal",
    prepTime: 10,
    cookTime: 20,
    servings: 4
  },
  // Recettes Thaïlandaise
  {
    id: "90",
    name: "Pad Thai",
    ingredients: [
      "200g de nouilles de riz",
      "200g de tofu ferme",
      "100g de germes de soja",
      "2 oeufs",
      "2 oignons verts",
      "50g de cacahuètes concassées",
      "2 cuillères à soupe de sauce tamari (alternative sans gluten à la sauce soja)",
      "2 cuillères à soupe de sauce de poisson sans gluten",
      "2 cuillères à soupe de sucre de palme (ou cassonade)",
      "2 cuillères à soupe de vinaigre de riz",
      "1 citron vert",
      "2 gousses d\"ail",
      "Huile végétale pour la cuisson"
    ],
    instructions: [
      "Faire tremper les nouilles dans l\"eau chaude selon les instructions du paquet",
      "Dans un wok, faire revenir l\"ail dans l\"huile",
      "Ajouter le tofu coupé en dés et le faire dorer",
      "Pousser le tofu sur le côté et faire brouiller les oeufs",
      "Ajouter les nouilles égouttées, la sauce tamari, la sauce de poisson, le sucre et le vinaigre",
      "Faire sauter le tout jusqu\"à ce que les nouilles soient bien enrobées",
      "Ajouter les germes de soja et les oignons verts",
      "Servir garni de cacahuètes concassées et de quartiers de citron vert"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 15,
    servings: 4
  },
  {
    id: "91",
    name: "Curry vert au poulet",
    ingredients: [
      "400g de blanc de poulet",
      "400ml de lait de coco",
      "3 cuillères à soupe de pâte de curry vert",
      "2 aubergines thaï (ou 1 aubergine normale)",
      "100g de pousses de bambou",
      "2 feuilles de combava",
      "2 cuillères à soupe de sauce de poisson sans gluten",
      "1 cuillère à soupe de sucre de palme (ou cassonade)",
      "Basilic thaï",
      "Huile végétale pour la cuisson"
    ],
    instructions: [
      "Couper le poulet en morceaux et les aubergines en quartiers",
      "Dans un wok, faire chauffer un peu d\"huile et y faire revenir la pâte de curry",
      "Ajouter le lait de coco et porter à ébullition",
      "Ajouter le poulet, les aubergines, les pousses de bambou et les feuilles de combava",
      "Laisser mijoter 15 minutes",
      "Assaisonner avec la sauce de poisson et le sucre",
      "Ajouter le basilic thaï juste avant de servir",
      "Accompagner de riz jasmin"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: "92",
    name: "Som Tam (Salade de papaye verte)",
    ingredients: [
      "1 papaye verte",
      "1 carotte",
      "10 tomates cerises",
      "50g de haricots verts",
      "2 gousses d\"ail",
      "2 piments oiseau (facultatif)",
      "2 cuillères à soupe de sauce de poisson sans gluten",
      "2 cuillères à soupe de jus de citron vert",
      "1 cuillère à soupe de sucre de palme (ou cassonade)",
      "30g de cacahuètes grillées"
    ],
    instructions: [
      "Râper la papaye verte et la carotte",
      "Couper les tomates cerises en deux et les haricots verts en tronçons",
      "Dans un mortier, piler l\"ail et les piments",
      "Ajouter les haricots verts et les tomates, et écraser légèrement",
      "Ajouter la papaye et la carotte râpées, la sauce de poisson, le jus de citron et le sucre",
      "Mélanger délicatement en pilant légèrement",
      "Saupoudrer de cacahuètes concassées avant de servir"
    ],
    category: "entrée",
    prepTime: 25,
    cookTime: 0,
    servings: 4
  },
  {
    id: "93",
    name: "Tom Kha Gai (Soupe de poulet au lait de coco)",
    ingredients: [
      "400g de blanc de poulet",
      "400ml de lait de coco",
      "500ml de bouillon de poulet sans gluten",
      "3 tiges de citronnelle",
      "5 tranches de galanga (ou gingembre)",
      "3 feuilles de combava",
      "200g de champignons",
      "2 cuillères à soupe de sauce de poisson sans gluten",
      "2 cuillères à soupe de jus de citron vert",
      "2 piments oiseau (facultatif)",
      "Coriandre fraîche"
    ],
    instructions: [
      "Couper le poulet en morceaux",
      "Dans une casserole, mélanger le lait de coco et le bouillon",
      "Ajouter la citronnelle écrasée, le galanga et les feuilles de combava",
      "Porter à ébullition puis baisser le feu et laisser infuser 5 minutes",
      "Ajouter le poulet et les champignons, laisser mijoter 10 minutes",
      "Assaisonner avec la sauce de poisson et le jus de citron vert",
      "Ajouter les piments émincés si désiré",
      "Servir garni de coriandre fraîche"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: "94",
    name: "Laab Gai (Salade de poulet hachée)",
    ingredients: [
      "500g de poulet haché",
      "1 échalote",
      "2 oignons verts",
      "1/4 tasse de menthe fraîche",
      "1/4 tasse de coriandre fraîche",
      "2 cuillères à soupe de riz grillé moulu",
      "2 cuillères à soupe de jus de citron vert",
      "2 cuillères à soupe de sauce de poisson sans gluten",
      "1 cuillère à café de piment en poudre",
      "Feuilles de laitue pour servir"
    ],
    instructions: [
      "Faire cuire le poulet haché dans une poêle sans matière grasse",
      "Pendant ce temps, émincer finement l\"échalote et les oignons verts",
      "Hacher grossièrement la menthe et la coriandre",
      "Dans un bol, mélanger le jus de citron vert, la sauce de poisson et le piment",
      "Une fois le poulet cuit, le laisser tiédir puis mélanger avec tous les ingrédients",
      "Ajouter le riz grillé moulu et bien mélanger",
      "Servir avec des feuilles de laitue"
    ],
    category: "entrée",
    prepTime: 20,
    cookTime: 10,
    servings: 4
  },
  {
    id: "95",
    name: "Massaman Curry",
    ingredients: [
      "500g de boeuf à braiser coupé en cubes",
      "400ml de lait de coco",
      "3 cuillères à soupe de pâte de curry massaman",
      "2 pommes de terre moyennes",
      "1 oignon",
      "1/2 tasse de cacahuètes grillées",
      "2 cuillères à soupe de sauce de poisson sans gluten",
      "1 cuillère à soupe de sucre de palme (ou cassonade)",
      "1 cuillère à soupe de tamarin",
      "2 feuilles de laurier",
      "1 bâton de cannelle"
    ],
    instructions: [
      "Faire revenir la pâte de curry dans une casserole avec un peu d\"huile",
      "Ajouter le lait de coco et porter à ébullition",
      "Ajouter le boeuf, les pommes de terre coupées en morceaux et l\"oignon émincé",
      "Ajouter les feuilles de laurier et le bâton de cannelle",
      "Laisser mijoter à feu doux pendant 1h30 à 2h, jusqu\"à ce que la viande soit tendre",
      "Ajouter les cacahuètes, la sauce de poisson, le sucre et le tamarin",
      "Laisser mijoter encore 15 minutes",
      "Servir avec du riz jasmin"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 120,
    servings: 4
  },
  {
    id: "96",
    name: "Pad See Ew",
    ingredients: [
      "300g de nouilles de riz larges",
      "300g de poulet émincé",
      "2 oeufs",
      "200g de brocoli chinois (ou chou frisé)",
      "3 gousses d\"ail",
      "3 cuillères à soupe de sauce d\"huître sans gluten",
      "2 cuillères à soupe de sauce de soja noire sucrée sans gluten (ou tamari + sucre)",
      "1 cuillère à soupe de vinaigre de riz",
      "Huile végétale pour la cuisson"
    ],
    instructions: [
      "Faire tremper les nouilles dans l\"eau chaude selon les instructions du paquet",
      "Dans un wok, faire revenir l\"ail dans l\"huile",
      "Ajouter le poulet et le faire cuire",
      "Pousser le poulet sur le côté et faire brouiller les oeufs",
      "Ajouter les nouilles égouttées, la sauce d\"huître, la sauce de soja noire et le vinaigre",
      "Faire sauter le tout jusqu\"à ce que les nouilles soient bien enrobées",
      "Ajouter le brocoli chinois et cuire jusqu\"à ce qu\"il soit tendre-croquant",
      "Servir immédiatement"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 15,
    servings: 4
  },
  {
    id: "97",
    name: "Mango Sticky Rice",
    ingredients: [
      "250g de riz gluant",
      "200ml de lait de coco",
      "3 cuillères à soupe de sucre",
      "1/4 cuillère à café de sel",
      "2 mangues mûres",
      "1 cuillère à soupe de graines de sésame grillées"
    ],
    instructions: [
      "Faire tremper le riz gluant dans l\"eau pendant au moins 4 heures",
      "Égoutter le riz et le cuire à la vapeur pendant 20-25 minutes",
      "Pendant ce temps, chauffer le lait de coco avec le sucre et le sel jusqu\"à dissolution",
      "Une fois le riz cuit, le mélanger avec la moitié du lait de coco sucré",
      "Laisser reposer 20 minutes pour que le riz absorbe le lait de coco",
      "Peler et couper les mangues en tranches",
      "Servir le riz avec les tranches de mangue",
      "Arroser du reste de lait de coco et saupoudrer de graines de sésame"
    ],
    category: "dessert",
    prepTime: 240,
    cookTime: 25,
    servings: 4
  },
  {
    id: "98",
    name: "Tom Yum Goong",
    ingredients: [
      "500g de crevettes",
      "1L de bouillon de poulet sans gluten",
      "3 tiges de citronnelle",
      "5 feuilles de combava",
      "3 tranches de galanga (ou gingembre)",
      "200g de champignons",
      "2 tomates",
      "2 cuillères à soupe de pâte de piment (nam prik pao)",
      "3 cuillères à soupe de jus de citron vert",
      "2 cuillères à soupe de sauce de poisson sans gluten",
      "Coriandre fraîche"
    ],
    instructions: [
      "Porter le bouillon à ébullition avec la citronnelle, le galanga et les feuilles de combava",
      "Laisser infuser à feu doux pendant 10 minutes",
      "Ajouter les champignons coupés en quartiers et les tomates coupées en morceaux",
      "Cuire 5 minutes puis ajouter les crevettes",
      "Cuire 2-3 minutes jusqu\"à ce que les crevettes soient roses",
      "Ajouter la pâte de piment, le jus de citron vert et la sauce de poisson",
      "Goûter et ajuster l\"assaisonnement si nécessaire",
      "Servir garni de coriandre fraîche"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  // Recettes Asiatique
  {
    id: "99",
    name: "Pho (Vietnam)",
    ingredients: [
      "200g de nouilles de riz plates",
      "500g de boeuf (filet ou entrecôte)",
      "2L de bouillon de boeuf sans gluten",
      "1 oignon",
      "1 morceau de gingembre de 5cm",
      "2 bâtons de cannelle",
      "2 étoiles de badiane",
      "4 gousses de cardamome",
      "4 clous de girofle",
      "2 cuillères à soupe de sauce de poisson sans gluten",
      "200g de germes de soja",
      "1 bouquet de basilic thaï",
      "1 bouquet de coriandre",
      "2 citrons verts",
      "2 piments oiseau (facultatif)"
    ],
    instructions: [
      "Faire griller l\"oignon et le gingembre au four pendant 15 minutes",
      "Dans une grande casserole, faire torréfier à sec les épices (cannelle, badiane, cardamome, girofle)",
      "Ajouter le bouillon, l\"oignon et le gingembre grillés, et laisser mijoter 30 minutes",
      "Filtrer le bouillon et ajouter la sauce de poisson",
      "Faire cuire les nouilles selon les instructions du paquet",
      "Couper le boeuf en tranches très fines",
      "Répartir les nouilles dans les bols, ajouter le boeuf cru",
      "Verser le bouillon bouillant sur le boeuf pour le cuire légèrement",
      "Garnir avec les germes de soja, les herbes, les quartiers de citron vert et les piments si désiré"
    ],
    category: "plat principal",
    prepTime: 30,
    cookTime: 45,
    servings: 4
  },
  {
    id: "100",
    name: "Nasi Goreng (Indonésie)",
    ingredients: [
      "400g de riz cuit et refroidi",
      "200g de poulet cuit et émincé",
      "2 oeufs",
      "1 carotte",
      "100g de petits pois",
      "2 oignons",
      "2 gousses d\"ail",
      "2 cuillères à soupe de sauce soja sans gluten",
      "2 cuillères à soupe de kecap manis (sauce soja sucrée, version sans gluten)",
      "1 cuillère à café de sambal oelek (ou pâte de piment)",
      "2 cuillères à soupe d\"huile végétale",
      "2 oignons verts",
      "1 concombre"
    ],
    instructions: [
      "Émincer les oignons et l\"ail, couper la carotte en petits dés",
      "Dans un wok, faire chauffer l\"huile et y faire revenir les oignons et l\"ail",
      "Ajouter la carotte et les petits pois, cuire 2-3 minutes",
      "Ajouter le poulet émincé et faire sauter",
      "Pousser les ingrédients sur le côté et faire brouiller les oeufs",
      "Ajouter le riz et mélanger tous les ingrédients",
      "Ajouter les sauces et le sambal oelek, bien mélanger",
      "Faire sauter à feu vif pendant 5 minutes en remuant constamment",
      "Servir garni d\"oignons verts ciselés et de tranches de concombre"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 15,
    servings: 4
  },
  {
    id: "101",
    name: "Aloo Gobi (Inde)",
    ingredients: [
      "1 chou-fleur",
      "3 pommes de terre",
      "1 oignon",
      "2 tomates",
      "3 gousses d\"ail",
      "1 morceau de gingembre de 2cm",
      "2 cuillères à soupe d\"huile végétale",
      "1 cuillère à café de graines de cumin",
      "1 cuillère à café de curcuma",
      "1 cuillère à café de coriandre moulue",
      "1/2 cuillère à café de piment en poudre",
      "Sel",
      "Coriandre fraîche"
    ],
    instructions: [
      "Couper le chou-fleur en fleurettes et les pommes de terre en cubes",
      "Émincer l\"oignon, l\"ail et le gingembre",
      "Dans une grande poêle, faire chauffer l\"huile et y faire revenir les graines de cumin",
      "Ajouter l\"oignon, l\"ail et le gingembre, faire revenir jusqu\"à ce que l\"oignon soit doré",
      "Ajouter les épices en poudre et remuer",
      "Ajouter les tomates coupées en dés et cuire jusqu\"à ce qu\"elles soient tendres",
      "Ajouter le chou-fleur et les pommes de terre, mélanger pour bien enrober d\"épices",
      "Couvrir et laisser mijoter à feu doux pendant 20-25 minutes, en remuant de temps en temps",
      "Servir garni de coriandre fraîche"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 30,
    servings: 4
  },
  {
    id: "102",
    name: "Laksa (Malaisie/Singapour)",
    ingredients: [
      "200g de nouilles de riz",
      "400ml de lait de coco",
      "500ml de bouillon de poulet sans gluten",
      "200g de crevettes décortiquées",
      "200g de tofu ferme",
      "100g de pousses de soja",
      "2 oeufs durs",
      "Pour la pâte de laksa :",
      "2 échalotes",
      "3 gousses d\"ail",
      "2cm de gingembre",
      "2 tiges de citronnelle",
      "2 piments rouges (facultatif)",
      "1 cuillère à café de curcuma",
      "2 cuillères à soupe d\"huile végétale"
    ],
    instructions: [
      "Préparer la pâte de laksa en mixant tous les ingrédients",
      "Dans une casserole, faire revenir la pâte de laksa dans l\"huile pendant 5 minutes",
      "Ajouter le bouillon et le lait de coco, porter à ébullition puis laisser mijoter 10 minutes",
      "Pendant ce temps, cuire les nouilles selon les instructions du paquet",
      "Couper le tofu en cubes et les faire dorer dans une poêle",
      "Ajouter les crevettes dans le bouillon et cuire 3-4 minutes",
      "Dans des bols, disposer les nouilles, ajouter le bouillon avec les crevettes",
      "Garnir avec le tofu, les pousses de soja et les oeufs durs coupés en deux"
    ],
    category: "plat principal",
    prepTime: 25,
    cookTime: 20,
    servings: 4
  },
  {
    id: "103",
    name: "Bibimbap végétarien (Corée)",
    ingredients: [
      "300g de riz",
      "1 carotte",
      "1 courgette",
      "100g de pousses d\"épinards",
      "100g de champignons shiitake",
      "100g de pousses de soja",
      "4 oeufs",
      "2 cuillères à soupe de sauce gochujang sans gluten",
      "2 cuillères à soupe de sauce soja sans gluten",
      "2 cuillères à soupe d\"huile de sésame",
      "2 gousses d\"ail",
      "Graines de sésame"
    ],
    instructions: [
      "Cuire le riz selon les instructions",
      "Couper la carotte et la courgette en julienne",
      "Faire sauter séparément la carotte, la courgette, les champignons et les pousses de soja avec de l\"ail",
      "Blanchir les épinards et les assaisonner avec de l\"huile de sésame",
      "Faire frire les oeufs au plat",
      "Dans des bols, disposer le riz et arranger les légumes par-dessus",
      "Ajouter l\"oeuf au plat et la sauce gochujang",
      "Saupoudrer de graines de sésame et servir"
    ],
    category: "plat principal",
    prepTime: 30,
    cookTime: 20,
    servings: 4
  },
  {
    id: "104",
    name: "Salade de papaye verte (Thaïlande)",
    ingredients: [
      "1 papaye verte",
      "1 carotte",
      "10 tomates cerises",
      "50g de haricots verts",
      "2 gousses d\"ail",
      "2 piments oiseau (facultatif)",
      "2 cuillères à soupe de sauce de poisson sans gluten",
      "2 cuillères à soupe de jus de citron vert",
      "1 cuillère à soupe de sucre de palme (ou cassonade)",
      "30g de cacahuètes grillées"
    ],
    instructions: [
      "Râper la papaye verte et la carotte",
      "Couper les tomates cerises en deux et les haricots verts en tronçons",
      "Dans un mortier, piler l\"ail et les piments",
      "Ajouter les haricots verts et les tomates, et écraser légèrement",
      "Ajouter la papaye et la carotte râpées, la sauce de poisson, le jus de citron et le sucre",
      "Mélanger délicatement en pilant légèrement",
      "Saupoudrer de cacahuètes concassées avant de servir"
    ],
    category: "entrée",
    prepTime: 25,
    cookTime: 0,
    servings: 4
  },
  // Recettes Espagnole
  {
    id: "105",
    name: "Paella valenciana",
    ingredients: [
      "300g de riz bomba",
      "300g de poulet coupé en morceaux",
      "100g de haricots verts",
      "100g de haricots blancs",
      "100g de petits pois",
      "1 tomate râpée",
      "1 oignon",
      "2 gousses d\"ail",
      "1 cuillère à café de paprika fumé",
      "1 pincée de safran",
      "750ml de bouillon de poulet sans gluten",
      "Huile d\"olive",
      "Sel",
      "Citron pour servir"
    ],
    instructions: [
      "Dans une paella ou une grande poêle, faire revenir le poulet dans l\"huile d\"olive",
      "Ajouter l\"oignon et l\"ail émincés, faire revenir",
      "Ajouter la tomate râpée, le paprika et le safran, cuire 2 minutes",
      "Ajouter le riz et remuer pour bien l\"enrober",
      "Verser le bouillon chaud, ajouter les haricots verts, les haricots blancs et les petits pois",
      "Porter à ébullition puis baisser le feu et laisser mijoter sans remuer pendant 18-20 minutes",
      "Laisser reposer 5 minutes avant de servir",
      "Accompagner de quartiers de citron"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: "106",
    name: "Tortilla española",
    ingredients: [
      "6 oeufs",
      "500g de pommes de terre",
      "1 oignon",
      "200ml d\"huile d\"olive",
      "Sel"
    ],
    instructions: [
      "Peler et couper les pommes de terre en fines rondelles",
      "Émincer finement l\"oignon",
      "Faire chauffer l\"huile dans une poêle et y faire frire doucement les pommes de terre et l\"oignon pendant 10-15 minutes",
      "Égoutter les pommes de terre et l\"oignon, réserver l\"huile",
      "Battre les oeufs dans un grand bol, saler",
      "Ajouter les pommes de terre et l\"oignon aux oeufs, bien mélanger",
      "Faire chauffer un peu d\"huile réservée dans la poêle",
      "Verser le mélange et cuire à feu moyen pendant 5-6 minutes",
      "Retourner la tortilla à l\"aide d\"une assiette et cuire l\"autre côté 3-4 minutes",
      "Laisser tiédir avant de servir"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 25,
    servings: 4
  },
  {
    id: "107",
    name: "Gazpacho",
    ingredients: [
      "1kg de tomates mûres",
      "1 concombre",
      "1 poivron vert",
      "1 oignon",
      "1 gousse d\"ail",
      "100ml d\"huile d\"olive",
      "2 cuillères à soupe de vinaigre de xérès",
      "Sel",
      "Pour la garniture :",
      "Concombre, poivron et oignon finement coupés"
    ],
    instructions: [
      "Laver et couper grossièrement les légumes",
      "Les mixer tous ensemble avec l\"ail, l\"huile d\"olive et le vinaigre",
      "Saler à votre goût",
      "Passer la préparation au chinois pour obtenir une texture lisse",
      "Réfrigérer pendant au moins 2 heures",
      "Servir froid garni des légumes finement coupés"
    ],
    category: "entrée",
    prepTime: 20,
    cookTime: 0,
    servings: 6
  },
  {
    id: "108",
    name: "Tarta de Santiago",
    ingredients: [
      "250g d\"amandes moulues",
      "250g de sucre",
      "4 oeufs",
      "Le zeste d\"un citron",
      "1 cuillère à café de cannelle en poudre",
      "1 cuillère à soupe de rhum (facultatif)",
      "Sucre glace pour la décoration"
    ],
    instructions: [
      "Préchauffer le four à 180°C",
      "Dans un grand bol, battre les oeufs avec le sucre jusqu\"à ce que le mélange blanchisse",
      "Ajouter les amandes moulues, le zeste de citron, la cannelle et le rhum (si utilisé)",
      "Mélanger jusqu\"à obtention d\"une pâte homogène",
      "Beurrer et fariner (avec de la farine d\"amande) un moule à tarte de 22-24 cm",
      "Verser la préparation dans le moule et lisser la surface",
      "Cuire au four pendant 30-35 minutes, jusqu\"à ce que le gâteau soit doré",
      "Laisser refroidir complètement",
      "Saupoudrer généreusement de sucre glace",
      "Facultatif : Utiliser un pochoir de la croix de Saint-Jacques pour la décoration traditionnelle"
    ],
    category: "dessert",
    prepTime: 15,
    cookTime: 35,
    servings: 8
  },
  {
    id: "109",
    name: "Albóndigas en salsa",
    ingredients: [
      "500g de boeuf haché",
      "1 oeuf",
      "2 gousses d\"ail",
      "2 cuillères à soupe de persil haché",
      "50g de chapelure",
      "1 oignon",
      "400g de tomates concassées",
      "250ml de bouillon de boeuf",
      "1 feuille de laurier",
      "Huile d\"olive",
      "Sel et poivre"
    ],
    instructions: [
      "Mélanger la viande, l\"oeuf, une gousse d\"ail écrasée, le persil, la chapelure, du sel et du poivre",
      "Former des boulettes avec ce mélange",
      "Faire dorer les boulettes dans une poêle avec de l\"huile d\"olive",
      "Retirer les boulettes et réserver",
      "Dans la même poêle, faire revenir l\"oignon et l\"ail restant émincés",
      "Ajouter les tomates concassées, le bouillon et la feuille de laurier",
      "Laisser mijoter 10 minutes",
      "Remettre les boulettes dans la sauce et cuire à feu doux 15-20 minutes",
      "Servir chaud"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 40,
    servings: 4
  },
  {
    id: "110",
    name: "Crema catalana",
    ingredients: [
      "500ml de lait",
      "4 jaunes d\"oeufs",
      "100g de sucre",
      "20g de fécule de maïs",
      "1 bâton de cannelle",
      "Zeste d\"un citron",
      "Zeste d\"une orange",
      "4 cuillères à soupe de sucre pour caraméliser"
    ],
    instructions: [
      "Faire bouillir le lait avec la cannelle et les zestes",
      "Retirer du feu et laisser infuser 15 minutes",
      "Filtrer le lait",
      "Dans un saladier, mélanger les jaunes d\"oeufs, le sucre et la fécule",
      "Verser le lait chaud sur ce mélange en fouettant",
      "Remettre le tout dans la casserole et cuire à feu doux en remuant jusqu\"à épaississement",
      "Verser la crème dans des ramequins et laisser refroidir",
      "Au moment de servir, saupoudrer de sucre et caraméliser au chalumeau ou sous le gril du four"
    ],
    category: "dessert",
    prepTime: 20,
    cookTime: 15,
    servings: 4
  },
  {
    id: "111",
    name: "Pimientos del Piquillo rellenos",
    ingredients: [
      "12 piments del Piquillo en conserve",
      "200g de morue dessalée",
      "1 oignon",
      "2 gousses d\"ail",
      "2 cuillères à soupe de persil haché",
      "100ml de crème fraîche",
      "Huile d\"olive",
      "Sel et poivre"
    ],
    instructions: [
      "Émietter la morue",
      "Faire revenir l\"oignon et l\"ail émincés dans l\"huile d\"olive",
      "Ajouter la morue et faire cuire 5 minutes",
      "Ajouter la crème et le persil, assaisonner",
      "Laisser mijoter jusqu\"à ce que le mélange épaississe",
      "Farcir les piments avec ce mélange",
      "Disposer les piments farcis dans un plat allant au four",
      "Arroser d\"un filet d\"huile d\"olive",
      "Réchauffer au four à 180°C pendant 10 minutes avant de servir"
    ],
    category: "entrée",
    prepTime: 20,
    cookTime: 20,
    servings: 4
  },
  // Recettes Italienne
  {
    id: "113",
    name: "Risotto alla Milanese",
    ingredients: [
      "300g de riz arborio",
      "1 oignon",
      "50g de beurre",
      "50g de parmesan râpé",
      "1 pincée de safran",
      "1L de bouillon de poulet",
      "100ml de vin blanc sec",
      "2 cuillères à soupe d\"huile d\"olive",
      "Sel et poivre"
    ],
    instructions: [
      "Faire chauffer le bouillon dans une casserole",
      "Dans une autre casserole, faire revenir l\"oignon émincé dans l\"huile et la moitié du beurre",
      "Ajouter le riz et le faire nacrer pendant 2 minutes",
      "Verser le vin blanc et laisser évaporer",
      "Ajouter le safran au bouillon chaud",
      "Ajouter le bouillon louche par louche en remuant constamment",
      "Cuire ainsi pendant 18-20 minutes jusqu\"à ce que le riz soit crémeux et al dente",
      "Retirer du feu, ajouter le reste du beurre et le parmesan",
      "Mélanger vigoureusement et laisser reposer 2 minutes avant de servir"
    ],
    category: "plat principal",
    prepTime: 10,
    cookTime: 25,
    servings: 4
  },
  {
    id: "114",
    name: "Osso Buco alla Milanese",
    ingredients: [
      "4 tranches de jarret de veau",
      "1 oignon",
      "1 carotte",
      "1 branche de céleri",
      "400g de tomates pelées",
      "250ml de vin blanc sec",
      "250ml de bouillon de boeuf",
      "2 cuillères à soupe de farine de riz",
      "1 zeste de citron",
      "1 gousse d\"ail",
      "2 cuillères à soupe de persil haché",
      "Huile d\"olive",
      "Sel et poivre"
    ],
    instructions: [
      "Enrober les tranches de jarret de farine de riz",
      "Les faire dorer dans une cocotte avec de l\"huile d\"olive",
      "Retirer la viande et faire revenir l\"oignon, la carotte et le céleri émincés",
      "Remettre la viande, ajouter le vin et laisser réduire de moitié",
      "Ajouter les tomates et le bouillon, couvrir et laisser mijoter 2h à feu doux",
      "Préparer le gremolata en mélangeant le zeste de citron, l\"ail et le persil",
      "Servir le osso buco saupoudré de gremolata"
    ],
    category: "plat principal",
    prepTime: 20,
    cookTime: 140,
    servings: 4
  },
  {
    id: "115",
    name: "Parmigiana di Melanzane",
    ingredients: [
      "3 grosses aubergines",
      "500g de sauce tomate",
      "250g de mozzarella",
      "100g de parmesan râpé",
      "2 oeufs battus",
      "Farine de riz pour enrober",
      "Basilic frais",
      "Huile d\"olive",
      "Sel et poivre"
    ],
    instructions: [
      "Couper les aubergines en tranches, les saler et laisser dégorger 30 minutes",
      "Rincer et sécher les tranches d\"aubergine",
      "Les enrober de farine de riz et les faire frire dans l\"huile d\"olive",
      "Dans un plat à gratin, alterner des couches d\"aubergines, de sauce tomate, de mozzarella, de parmesan et de basilic",
      "Terminer par une couche de sauce et de fromages",
      "Verser les oeufs battus sur le dessus",
      "Cuire au four à 180°C pendant 30-35 minutes",
      "Laisser reposer 10 minutes avant de servir"
    ],
    category: "plat principal",
    prepTime: 45,
    cookTime: 35,
    servings: 6
  },
  {
    id: "116",
    name: "Polenta Concia",
    ingredients: [
      "300g de polenta",
      "1.2L d\"eau",
      "200g de fontina ou taleggio",
      "100g de parmesan râpé",
      "100g de beurre",
      "Sel"
    ],
    instructions: [
      "Porter l\"eau salée à ébullition",
      "Verser la polenta en pluie en remuant constamment",
      "Cuire à feu doux en remuant régulièrement pendant 40-45 minutes",
      "Hors du feu, ajouter le beurre et les fromages coupés en dés",
      "Mélanger jusqu\"à ce que les fromages soient fondus",
      "Servir immédiatement ou verser dans un plat et gratiner au four quelques minutes"
    ],
    category: "plat principal",
    prepTime: 5,
    cookTime: 45,
    servings: 4
  },
  {
    id: "117",
    name: "Saltimbocca alla Romana",
    ingredients: [
      "8 fines escalopes de veau",
      "8 tranches de jambon de Parme",
      "8 feuilles de sauge",
      "Farine de riz pour enrober",
      "50g de beurre",
      "100ml de vin blanc sec",
      "Huile d\"olive",
      "Sel et poivre"
    ],
    instructions: [
      "Poser une tranche de jambon et une feuille de sauge sur chaque escalope",
      "Les fixer avec un cure-dent",
      "Enrober légèrement de farine de riz",
      "Faire fondre le beurre avec l\"huile dans une poêle",
      "Cuire les escalopes 2-3 minutes de chaque côté",
      "Retirer les escalopes et les garder au chaud",
      "Déglacer la poêle avec le vin blanc",
      "Laisser réduire la sauce et la verser sur les escalopes",
      "Servir immédiatement"
    ],
    category: "plat principal",
    prepTime: 15,
    cookTime: 10,
    servings: 4
  },
  {
    id: "118",
    name: "Tiramisù",
    ingredients: [
      "500g de mascarpone",
      "4 oeufs",
      "100g de sucre",
      "200ml de café fort refroidi",
      "30ml d\"amaretto (facultatif)",
      "200g de biscuits sans gluten type génoise",
      "Cacao en poudre"
    ],
    instructions: [
      "Séparer les blancs des jaunes d\"oeufs",
      "Battre les jaunes avec le sucre jusqu\"à ce que le mélange blanchisse",
      "Ajouter le mascarpone et mélanger délicatement",
      "Monter les blancs en neige et les incorporer à la préparation",
      "Mélanger le café et l\"amaretto dans une assiette creuse",
      "Tremper rapidement les biscuits dans le café",
      "Dans un plat, alterner des couches de biscuits et de crème",
      "Terminer par une couche de crème",
      "Réfrigérer au moins 4 heures",
      "Saupoudrer de cacao avant de servir"
    ],
    category: "dessert",
    prepTime: 30,
    cookTime: 0,
    servings: 6
  },
  {
    id: "119",
    name: "Gnocchi alla Sorrentina",
    ingredients: [
      "500g de gnocchi de pommes de terre",
      "400g de sauce tomate",
      "200g de mozzarella",
      "50g de parmesan râpé",
      "1 gousse d\"ail",
      "Basilic frais",
      "Huile d\"olive",
      "Sel et poivre"
    ],
    instructions: [
      "Préchauffer le four à 200°C",
      "Faire cuire les gnocchi dans de l\"eau bouillante salée jusqu\"à ce qu\"ils remontent à la surface",
      "Pendant ce temps, faire chauffer la sauce tomate avec l\"ail écrasé",
      "Égoutter les gnocchi et les mélanger avec la sauce tomate",
      "Verser le tout dans un plat à gratin",
      "Répartir la mozzarella coupée en dés et le parmesan",
      "Enfourner pour 15-20 minutes jusqu\"à ce que le fromage soit fondu et doré",
      "Garnir de feuilles de basilic avant de servir"
    ],
    category: "plat principal",
    prepTime: 10,
    cookTime: 25,
    servings: 4
  },
  {
    id: "120",
    name: "Vitello Tonnato",
    ingredients: [
      "800g de rôti de veau",
      "200g de thon en conserve égoutté",
      "4 filets d\"anchois",
      "2 jaunes d\"œufs",
      "Le jus d\"un citron",
      "2 cuillères à soupe de câpres",
      "200ml d\"huile d\"olive",
      "1 carotte",
      "1 oignon",
      "1 branche de céleri",
      "1 feuille de laurier",
      "Sel et poivre"
    ],
    instructions: [
      "Faire bouillir le veau avec les légumes et le laurier pendant 1h",
      "Laisser refroidir dans son bouillon",
      "Pour la sauce, mixer le thon, les anchois, les jaunes d\"œufs et le jus de citron",
      "Ajouter l\"huile en filet pour émulsionner, comme pour une mayonnaise",
      "Couper le veau en fines tranches",
      "Napper de sauce et garnir de câpres",
      "Réfrigérer au moins 2h avant de servir"
    ],
    category: "entrée",
    prepTime: 30,
    cookTime: 60,
    servings: 6
  },
  {
    id: "121",
    name: "Arancini",
    ingredients: [
      "300g de riz pour risotto",
      "50g de parmesan râpé",
      "2 œufs",
      "100g de mozzarella",
      "100g de viande hachée cuite",
      "1 petit oignon",
      "50g de petits pois cuits",
      "Farine de riz",
      "Chapelure de pain sans gluten",
      "Huile pour friture",
      "Sel et poivre"
    ],
    instructions: [
      "Préparer un risotto basique avec le riz et le parmesan, laisser refroidir",
      "Mélanger le risotto froid avec un œuf battu",
      "Former des boules de riz, y insérer un mélange de viande, mozzarella et petits pois",
      "Passer les boules dans la farine de riz, l\"œuf battu, puis la chapelure",
      "Faire frire dans l\"huile chaude jusqu\"à ce qu\"elles soient dorées",
      "Égoutter sur du papier absorbant avant de servir"
    ],
    category: "entrée",
    prepTime: 40,
    cookTime: 20,
    servings: 4
  },
  {
    id: "122",
    name: "Brasato al Barolo",
    ingredients: [
      "1.5kg de bœuf pour braiser",
      "750ml de vin Barolo (ou autre vin rouge corsé)",
      "2 carottes",
      "2 oignons",
      "2 branches de céleri",
      "2 gousses d\"ail",
      "2 feuilles de laurier",
      "2 clous de girofle",
      "1 brin de romarin",
      "2 cuillères à soupe de concentré de tomates",
      "Huile d\"olive",
      "Sel et poivre"
    ],
    instructions: [
      "Mariner la viande dans le vin avec les légumes et les aromates pendant une nuit",
      "Le lendemain, égoutter la viande et les légumes, réserver le vin",
      "Faire dorer la viande dans l\"huile d\"olive",
      "Ajouter les légumes et faire revenir",
      "Ajouter le concentré de tomates et le vin de la marinade",
      "Cuire à feu doux pendant 3-4 heures jusqu\"à ce que la viande soit tendre",
      "Retirer la viande et mixer la sauce",
      "Servir la viande nappée de sauce"
    ],
    category: "plat principal",
    prepTime: 30,
    cookTime: 240,
    servings: 6
  },
  {
    id: "123",
    name: "Panna Cotta",
    ingredients: [
      "500ml de crème liquide",
      "50g de sucre",
      "1 gousse de vanille",
      "2 feuilles de gélatine",
      "Coulis de fruits rouges pour servir"
    ],
    instructions: [
      "Faire tremper la gélatine dans de l\"eau froide",
      "Chauffer la crème avec le sucre et les graines de la gousse de vanille",
      "Retirer du feu juste avant ébullition",
      "Essorer la gélatine et la dissoudre dans la crème chaude",
      "Verser dans des moules et réfrigérer au moins 4 heures",
      "Démouler et servir avec le coulis de fruits rouges"
    ],
    category: "dessert",
    prepTime: 15,
    cookTime: 10,
    servings: 4
  },
  {
    id: "124",
    name: "Caponata",
    ingredients: [
      "2 aubergines",
      "2 branches de céleri",
      "1 oignon",
      "400g de tomates pelées",
      "100g d\"olives vertes dénoyautées",
      "2 cuillères à soupe de câpres",
      "2 cuillères à soupe de vinaigre de vin",
      "1 cuillère à soupe de sucre",
      "Huile d\"olive",
      "Sel et poivre"
    ],
    instructions: [
      "Couper les aubergines en dés et les faire dégorger avec du sel pendant 30 minutes",
      "Rincer et sécher les aubergines, puis les faire frire dans l\"huile d\"olive",
      "Dans la même poêle, faire revenir l\"oignon et le céleri émincés",
      "Ajouter les tomates, les olives et les câpres",
      "Ajouter le vinaigre et le sucre, laisser mijoter 15 minutes",
      "Incorporer les aubergines et cuire encore 5 minutes",
      "Laisser refroidir et servir à température ambiante"
    ],
    category: "entrée",
    prepTime: 45,
    cookTime: 30,
    servings: 6
  },
  {
    id: "125",
    name: "Frittata aux légumes",
    ingredients: [
      "6 œufs",
      "1 courgette",
      "1 poivron rouge",
      "1 oignon",
      "50g de parmesan râpé",
      "2 cuillères à soupe d\"huile d\"olive",
      "Quelques feuilles de basilic",
      "Sel et poivre"
    ],
    instructions: [
      "Couper la courgette et le poivron en petits dés, émincer l\"oignon",
      "Faire revenir les légumes dans l\"huile d\"olive pendant 10 minutes",
      "Battre les œufs avec le parmesan, le sel et le poivre",
      "Verser les œufs sur les légumes dans la poêle",
      "Cuire à feu doux en couvrant pendant 10-15 minutes",
      "Retourner la frittata ou finir la cuisson sous le gril du four",
      "Garnir de feuilles de basilic avant de servir"
    ],
    category: "petit déjeuner",
    prepTime: 15,
    cookTime: 25,
    servings: 4
  },
  {
    id: "126",
    name: "Crostini di Polenta",
    ingredients: [
      "500ml d\"eau",
      "125g de polenta",
      "50g de parmesan râpé",
      "1 cuillère à soupe d\"huile d\"olive",
      "200g de tomates cerises",
      "100g de mozzarella",
      "Quelques feuilles de basilic",
      "Sel et poivre"
    ],
    instructions: [
      "Préparer la polenta selon les instructions du paquet, ajouter le parmesan",
      "Étaler la polenta sur une plaque sur 1cm d\"épaisseur, laisser refroidir",
      "Découper des cercles de polenta et les faire dorer à la poêle ou au four",
      "Couper les tomates cerises en deux et la mozzarella en petits dés",
      "Disposer les tomates et la mozzarella sur les crostini de polenta",
      "Assaisonner et garnir de basilic avant de servir"
    ],
    category: "apéro",
    prepTime: 20,
    cookTime: 15,
    servings: 6
  },
  {
    id: "127",
    name: "Granola Italien",
    ingredients: [
      "300g de flocons d\"avoine sans gluten",
      "100g d\"amandes effilées",
      "50g de noisettes concassées",
      "50g de graines de courge",
      "2 cuillères à soupe d\"huile d\"olive",
      "3 cuillères à soupe de miel",
      "1 cuillère à café d\"extrait de vanille",
      "1 pincée de sel",
      "Zeste d\"un citron",
      "Pour servir : yaourt et fruits frais"
    ],
    instructions: [
      "Préchauffer le four à 150°C",
      "Mélanger tous les ingrédients secs dans un grand bol",
      "Dans un petit bol, mélanger l\"huile d\"olive, le miel et l\"extrait de vanille",
      "Verser le mélange liquide sur les ingrédients secs et bien mélanger",
      "Étaler sur une plaque de cuisson et enfourner pour 30 minutes en remuant à mi-cuisson",
      "Laisser refroidir complètement avant de servir avec du yaourt et des fruits frais"
    ],
    category: "petit déjeuner",
    prepTime: 10,
    cookTime: 30,
    servings: 8
  },
  {
    id: "128",
    name: "Bruschetta al Pomodoro",
    ingredients: [
      "1 baguette de pain sans gluten",
      "500g de tomates mûres",
      "2 gousses d\"ail",
      "Quelques feuilles de basilic frais",
      "4 cuillères à soupe d\"huile d\"olive extra vierge",
      "Sel et poivre"
    ],
    instructions: [
      "Couper la baguette en tranches",
      "Faire griller les tranches de pain",
      "Frotter chaque tranche avec une gousse d\"ail coupée en deux",
      "Couper les tomates en petits dés",
      "Mélanger les tomates avec l\"huile d\"olive, le basilic ciselé, le sel et le poivre",
      "Répartir le mélange de tomates sur les tranches de pain grillé",
      "Servir immédiatement"
    ],
    category: "apéro",
    prepTime: 15,
    cookTime: 5,
    servings: 6
  },
  {
    id: "129",
    name: "Affogato al Caffè",
    ingredients: [
      "4 boules de glace à la vanille",
      "4 tasses de café espresso chaud",
      "4 cuillères à soupe d\"amaretto (facultatif)",
      "Copeaux de chocolat noir"
    ],
    instructions: [
      "Préparer le café espresso",
      "Dans chaque coupe, déposer une boule de glace à la vanille",
      "Verser une tasse de café chaud sur chaque boule de glace",
      "Ajouter une cuillère d\"amaretto si désiré",
      "Saupoudrer de copeaux de chocolat",
      "Servir immédiatement"
    ],
    category: "dessert",
    prepTime: 5,
    cookTime: 0,
    servings: 4
  },
  {
    id: "130",
    name: "Focaccia aux herbes",
    ingredients: [
      "300g de farine sans gluten pour pain",
      "7g de levure sèche",
      "1 cuillère à café de sucre",
      "1 cuillère à café de sel",
      "200ml d\"eau tiède",
      "4 cuillères à soupe d\"huile d\"olive",
      "1 cuillère à soupe de romarin frais",
      "1 cuillère à soupe de thym frais",
      "Gros sel pour saupoudrer"
    ],
    instructions: [
      "Mélanger la farine, la levure, le sucre et le sel dans un grand bol",
      "Ajouter l\"eau tiède et 2 cuillères à soupe d\"huile d\"olive, pétrir pour former une pâte",
      "Laisser lever la pâte dans un endroit chaud pendant 1 heure",
      "Étaler la pâte sur une plaque huilée",
      "Faire des petits trous avec les doigts sur toute la surface",
      "Badigeonner d\"huile d\"olive et saupoudrer d\"herbes et de gros sel",
      "Laisser reposer 30 minutes",
      "Cuire au four préchauffé à 200°C pendant 20-25 minutes",
      "Servir tiède ou à température ambiante"
    ],
    category: "apéro",
    prepTime: 100,
    cookTime: 25,
    servings: 8
  },
  // Recettes Françaises
  {
    id: '1',
    name: 'Omelette au fromage',
    ingredients: [
      '3 œufs frais',
      '30g de comté râpé',
      'Sel fin',
      'Poivre noir fraîchement moulu',
      '1 cuillère à café de beurre'
    ],
    instructions: [
      'Casser les œufs dans un bol et les battre vigoureusement à la fourchette',
      'Ajouter le comté râpé, une pincée de sel et du poivre fraîchement moulu',
      'Faire fondre le beurre dans une poêle antiadhésive à feu moyen',
      'Verser les œufs battus dans la poêle chaude',
      'Remuer délicatement avec une spatule en bois pendant la cuisson',
      'Lorsque l\'omelette est presque prise mais encore crémeuse, la plier en deux',
      'Servir immédiatement'
    ],
    category: 'plat principal',
    prepTime: 5,
    cookTime: 5,
    servings: 1
  },
  {
    id: '2',
    name: 'Salade César revisitée sans gluten',
    ingredients: [
      '1 laitue romaine',
      '100g de croûtons maison sans gluten',
      '50g de parmesan en copeaux',
      '2 filets de poulet grillés',
      'Pour la sauce : 1 jaune d\'œuf, 1 cuillère à café de moutarde, 1 gousse d\'ail, 5cl d\'huile d\'olive, Jus de citron, Sel, Poivre'
    ],
    instructions: [
      'Pour les croûtons : Couper du pain sans gluten en dés, les enrober d\'huile d\'olive et d\'herbes, puis les faire dorer au four',
      'Laver et couper la laitue en morceaux',
      'Griller les filets de poulet et les couper en tranches',
      'Préparer la sauce : mélanger le jaune d\'œuf, la moutarde et l\'ail écrasé. Ajouter l\'huile en filet en fouettant, puis le jus de citron, le sel et le poivre',
      'Dans un saladier, mélanger la laitue, les croûtons, le poulet et les copeaux de parmesan',
      'Ajouter la sauce au moment de servir et mélanger délicatement'
    ],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 15,
    servings: 2
  },
  {
    id: '3',
    name: 'Pâtes à la carbonara sans gluten',
    ingredients: [
      '200g de pâtes sans gluten (à base de riz ou de maïs)',
      '2 œufs entiers + 1 jaune',
      '100g de poitrine fumée (en remplacement des lardons)',
      '50g de pecorino romano râpé',
      '50g de parmesan râpé',
      'Poivre noir fraîchement moulu'
    ],
    instructions: [
      'Faire cuire les pâtes dans une grande casserole d\'eau salée selon les instructions du paquet',
      'Pendant ce temps, couper la poitrine fumée en petits lardons',
      'Faire revenir les lardons à sec dans une poêle jusqu\'à ce qu\'ils soient dorés et croustillants',
      'Dans un bol, mélanger les œufs, le jaune, les fromages râpés et une généreuse dose de poivre noir',
      'Égoutter les pâtes en réservant une tasse d\'eau de cuisson',
      'Remettre les pâtes dans la casserole, ajouter les lardons et leur graisse',
      'Verser le mélange d\'œufs et de fromage sur les pâtes chaudes, en remuant rapidement',
      'Ajouter un peu d\'eau de cuisson si nécessaire pour obtenir une sauce crémeuse',
      'Servir immédiatement avec du parmesan râpé supplémentaire'
    ],
    category: 'plat principal',
    prepTime: 10,
    cookTime: 15,
    servings: 2
  },
  {
    id: '4',
    name: 'Pancakes sans gluten',
    ingredients: [
      '100g de farine de riz',
      '50g de farine de sarrasin',
      '1 œuf',
      '1 sachet de levure chimique sans gluten',
      '200ml de lait végétal',
      '2 cuillères à soupe de sucre',
      '1 pincée de sel',
      'Huile pour la cuisson'
    ],
    instructions: [
      'Dans un grand bol, mélanger les farines, le sucre, la levure et le sel',
      'Dans un autre bol, battre l\'œuf avec le lait',
      'Verser les ingrédients liquides sur les ingrédients secs et mélanger jusqu\'à obtention d\'une pâte lisse',
      'Laisser reposer la pâte 10 minutes',
      'Chauffer une poêle antiadhésive à feu moyen et la huiler légèrement',
      'Verser une petite louche de pâte pour chaque pancake',
      'Cuire jusqu\'à l\'apparition de bulles à la surface, puis retourner et cuire l\'autre côté',
      'Servir chaud avec du sirop d\'érable ou de la confiture'
    ],
    category: 'petit déjeuner',
    prepTime: 15,
    cookTime: 15,
    servings: 4
  },
  {
    id: '5',
    name: 'Tarte aux pommes sans gluten',
    ingredients: [
      'Pour la pâte : 200g de farine de riz, 100g de farine de sarrasin, 150g de beurre froid, 1 œuf, 50g de sucre, 1 pincée de sel',
      '4 pommes Golden',
      '50g de sucre roux',
      '50g de beurre',
      '1 cuillère à café de cannelle'
    ],
    instructions: [
      'Pour la pâte : Mélanger les farines, le sucre et le sel. Ajouter le beurre en morceaux et sabler du bout des doigts',
      'Ajouter l\'œuf et pétrir jusqu\'à obtenir une boule de pâte. Réfrigérer 30 minutes',
      'Préchauffer le four à 180°C',
      'Étaler la pâte et la disposer dans un moule à tarte',
      'Éplucher et couper les pommes en fines tranches',
      'Disposer les pommes en rosace sur la pâte',
      'Saupoudrer de sucre roux et de cannelle, répartir des petits morceaux de beurre',
      'Cuire au four pendant 35-40 minutes jusqu\'à ce que la tarte soit dorée',
      'Laisser tiédir avant de servir'
    ],
    category: 'dessert',
    prepTime: 30,
    cookTime: 40,
    servings: 6
  },
  {
    id: '9',
    name: 'Velouté de légumes à la française',
    ingredients: [
      '2 carottes',
      '1 poireau',
      '1 pomme de terre',
      '1 oignon',
      '1 branche de céleri',
      '1 litre de bouillon de volaille sans gluten',
      '2 cuillères à soupe de crème fraîche',
      'Persil frais',
      'Sel et poivre'
    ],
    instructions: [
      'Éplucher et couper tous les légumes en petits morceaux',
      'Faire revenir l\'oignon dans une casserole avec un peu d\'huile d\'olive',
      'Ajouter les autres légumes et faire suer pendant 5 minutes',
      'Verser le bouillon et porter à ébullition',
      'Baisser le feu et laisser mijoter pendant 20-25 minutes jusqu\'à ce que les légumes soient tendres',
      'Mixer le tout jusqu\'à obtenir une texture lisse',
      'Ajouter la crème fraîche et mélanger',
      'Assaisonner avec du sel et du poivre',
      'Servir chaud, garni de persil frais haché'
    ],
    category: 'entrée',
    prepTime: 15,
    cookTime: 30,
    servings: 4
  },
  {
    id: '10',
    name: 'Salade de chèvre chaud au miel',
    ingredients: [
      '1 mélange de salades (frisée, mâche, roquette)',
      '200g de bûche de chèvre',
      '4 tranches de pain sans gluten',
      '2 cuillères à soupe de miel',
      '50g de noix concassées',
      '2 cuillères à soupe de vinaigre balsamique',
      '4 cuillères à soupe d\'huile d\'olive',
      'Sel et poivre du moulin'
    ],
    instructions: [
      'Préchauffer le four à 180°C',
      'Laver et essorer les salades, les répartir dans les assiettes',
      'Couper 4 tranches épaisses de chèvre',
      'Toaster légèrement les tranches de pain sans gluten',
      'Disposer une tranche de chèvre sur chaque toast',
      'Napper chaque tranche de chèvre d\'un peu de miel',
      'Enfourner les toasts pour 5-7 minutes, jusqu\'à ce que le fromage soit fondant et légèrement doré',
      'Pendant ce temps, préparer la vinaigrette en mélangeant le vinaigre balsamique, l\'huile d\'olive, le sel et le poivre',
      'Disposer les toasts chauds sur les salades',
      'Parsemer de noix concassées',
      'Arroser de vinaigrette juste avant de servir'
    ],
    category: 'entrée',
    prepTime: 15,
    cookTime: 7,
    servings: 4
  },
  {
    id: '11',
    name: 'Risotto aux champignons à la française',
    ingredients: [
      '300g de riz à risotto (arborio ou carnaroli)',
      '300g de champignons de Paris',
      '1 oignon',
      '2 gousses d\'ail',
      '50g de beurre',
      '50g de parmesan râpé',
      '750ml de bouillon de volaille sans gluten',
      '100ml de vin blanc sec',
      '2 cuillères à soupe d\'huile d\'olive',
      '1 bouquet de persil plat',
      'Sel et poivre du moulin'
    ],
    instructions: [
      'Nettoyer et émincer les champignons. Hacher finement l\'oignon et l\'ail',
      'Dans une casserole, faire chauffer le bouillon et le maintenir à frémissement',
      'Dans une grande poêle, faire revenir l\'oignon dans l\'huile d\'olive jusqu\'à ce qu\'il soit translucide',
      'Ajouter le riz et le faire nacrer pendant 2 minutes',
      'Verser le vin blanc et laisser absorber complètement',
      'Ajouter le bouillon chaud louche par louche, en remuant constamment et en attendant que chaque louche soit absorbée avant d\'en ajouter une nouvelle',
      'À mi-cuisson, faire revenir les champignons dans une poêle séparée avec un peu de beurre',
      'Après environ 18 minutes, quand le riz est presque cuit mais encore al dente, ajouter les champignons',
      'Retirer du feu, ajouter le reste du beurre et le parmesan râpé',
      'Mélanger vigoureusement pour rendre le risotto crémeux',
      'Ajuster l\'assaisonnement avec du sel et du poivre',
      'Servir immédiatement, parsemé de persil haché'
    ],
    category: 'plat principal',
    prepTime: 15,
    cookTime: 25,
    servings: 4
  },
  {
    id: '12',
    name: 'Poulet rôti aux herbes de Provence',
    ingredients: [
      '1 poulet fermier d\'environ 1,5 kg',
      '50g de beurre ramolli',
      '2 cuillères à soupe d\'herbes de Provence',
      '2 gousses d\'ail',
      '1 citron',
      '2 cuillères à soupe d\'huile d\'olive',
      'Sel et poivre du moulin',
      '500g de pommes de terre',
      '2 oignons'
    ],
    instructions: [
      'Préchauffer le four à 200°C',
      'Mélanger le beurre ramolli avec les herbes de Provence, l\'ail écrasé, le zeste du citron, du sel et du poivre',
      'Sécher le poulet avec du papier absorbant',
      'Glisser délicatement des morceaux de beurre aux herbes sous la peau du poulet',
      'Badigeonner l\'extérieur du poulet avec l\'huile d\'olive et assaisonner généreusement',
      'Couper le citron en deux et le placer dans la cavité du poulet',
      'Peler et couper les pommes de terre et les oignons en quartiers',
      'Disposer les légumes autour du poulet dans un plat allant au four',
      'Enfourner pour 1h15 à 1h30, en arrosant régulièrement le poulet avec son jus de cuisson',
      'Vérifier la cuisson en piquant la cuisse : le jus doit être clair',
      'Laisser reposer le poulet 10 minutes avant de le découper',
      'Servir avec les légumes rôtis et le jus de cuisson'
    ],
    category: 'plat principal',
    prepTime: 20,
    cookTime: 90,
    servings: 4
  },
  {
    id: '13',
    name: 'Tartines à l’avocat',
    ingredients: ['2 avocats', '4 tranches pain', '1 citron', 'Sel', 'Poivre'],
    instructions: ['Écraser l’avocat', 'Ajouter le jus de citron, sel et poivre', 'Tartiner le pain'],
    category: 'petit déjeuner',
    prepTime: 10,
    cookTime: 0,
    servings: 2
  },
  {
    id: '14',
    name: 'Pancakes aux myrtilles',
    ingredients: ['150g farine', '1 oeuf', '1 sachet levure', '150ml lait', '100g myrtilles'],
    instructions: ['Mélanger la farine et la levure', 'Ajouter l’œuf et le lait', 'Ajouter les myrtilles', 'Cuire dans une poêle'],
    category: 'petit déjeuner',
    prepTime: 10,
    cookTime: 10,
    servings: 4
  },
  {
    id: '15',
    name: 'Muesli aux fruits',
    ingredients: ['100g muesli', '200ml yaourt', '1 banane', '1 pomme'],
    instructions: ['Couper les fruits', 'Mélanger avec le muesli et le yaourt'],
    category: 'petit déjeuner',
    prepTime: 5,
    cookTime: 0,
    servings: 2
  },
  {
    id: '16',
    name: 'Oeufs brouillés',
    ingredients: ['3 oeufs', '50ml lait', 'Sel', 'Poivre'],
    instructions: ['Battre les oeufs', 'Ajouter le lait, sel et poivre', 'Cuire dans une poêle'],
    category: 'petit déjeuner',
    prepTime: 5,
    cookTime: 5,
    servings: 1
  },
  {
    id: '17',
    name: 'Chocolate chaud',
    ingredients: ['200ml lait', '50g chocolat', '1 cuillère sucre'],
    instructions: ['Faire chauffer le lait', 'Ajouter le chocolat et le sucre'],
    category: 'petit déjeuner',
    prepTime: 5,
    cookTime: 5,
    servings: 1
  },
  {
    id: '18',
    name: 'Petit déjeuner anglais',
    ingredients: ['2 oeufs', '2 tranches bacon', '1 tomate', '1 champignon', '1 toast'],
    instructions: ['Cuire les oeufs et le bacon', 'Faire griller le toast', 'Faire revenir les champignons'],
    category: 'petit déjeuner',
    prepTime: 10,
    cookTime: 10,
    servings: 1
  }
]