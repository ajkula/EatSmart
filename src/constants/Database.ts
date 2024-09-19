import { Recipe, MealPlan, ShoppingListItem } from '../types';

export const STORAGE_KEYS = {
  RECIPES: 'eatsmart_recipes',
  MEAL_PLANS: 'eatsmart_meal_plans',
  SHOPPING_LIST: 'eatsmart_shopping_list',
  SETTINGS: 'eatsmart_settings',
};

export interface LocalDatabase {
  recipes: Recipe[];
  mealPlans: MealPlan[];
  shoppingList: ShoppingListItem[];
  settings: AppSettings;
}

export interface AppSettings {
  darkMode: boolean;
  notificationsEnabled: boolean;
  servingsCountts: number;
}

export const DEFAULT_DATABASE: LocalDatabase = {
  recipes: [
    {
      id: '1',
      name: 'Omelette au fromage',
      ingredients: ['3 oeufs', '30g fromage râpé', 'Sel', 'Poivre'],
      instructions: ['Battre les oeufs', 'Ajouter le fromage, sel et poivre', 'Cuire dans une poêle'],
      category: 'plat principal',
      prepTime: 5,
      cookTime: 10,
      servings: 1
    },
    {
      id: '2',
      name: 'Salade César',
      ingredients: ['1 laitue', '100g croûtons', '50g parmesan', 'Sauce César'],
      instructions: ['Couper la laitue', 'Ajouter les croûtons et le parmesan', 'Ajouter la sauce César'],
      category: 'plat principal',
      prepTime: 15,
      cookTime: 0,
      servings: 2
    },
    {
      id: '3',
      name: 'Pâtes à la carbonara',
      ingredients: ['200g pâtes', '2 oeufs', '100g lardons', '50g parmesan'],
      instructions: ['Cuire les pâtes', 'Faire revenir les lardons', 'Mélanger les oeufs et le parmesan', 'Mélanger le tout'],
      category: 'plat principal',
      prepTime: 5,
      cookTime: 15,
      servings: 2
    },
    {
      id: '4',
      name: 'Pancakes',
      ingredients: ['150g farine', '1 oeuf', '1 sachet levure', '150ml lait'],
      instructions: ['Mélanger la farine et la levure', 'Ajouter l’œuf et le lait', 'Cuire dans une poêle'],
      category: 'dessert',
      prepTime: 10,
      cookTime: 10,
      servings: 4
    },
    {
      id: '5',
      name: 'Tarte aux pommes',
      ingredients: ['1 pâte brisée', '3 pommes', '50g sucre', '50g beurre'],
      instructions: ['Étaler la pâte', 'Couper les pommes et les disposer', 'Ajouter le sucre et le beurre', 'Cuire au four'],
      category: 'dessert',
      prepTime: 20,
      cookTime: 30,
      servings: 6
    },
    {
      id: '6',
      name: 'Smoothie banane',
      ingredients: ['2 bananes', '200ml lait', '1 cuillère miel'],
      instructions: ['Mixer les bananes, le lait et le miel'],
      category: 'dessert',
      prepTime: 5,
      cookTime: 0,
      servings: 2
    },
    {
      id: '7',
      name: 'Salade de fruits',
      ingredients: ['1 banane', '1 pomme', '1 orange', '1 kiwi'],
      instructions: ['Couper les fruits', 'Mélanger'],
      category: 'dessert',
      prepTime: 10,
      cookTime: 0,
      servings: 2
    },
    {
      id: '8',
      name: 'Salade de pâtes',
      ingredients: ['200g pâtes', '1 poivron', '100g feta', 'Sauce vinaigrette'],
      instructions: ['Cuire les pâtes', 'Couper le poivron et la feta', 'Mélanger le tout'],
      category: 'entrée',
      prepTime: 10,
      cookTime: 10,
      servings: 2
    },
    {
      id: '9',
      name: 'Soupe de légumes',
      ingredients: ['2 carottes', '1 poireau', '1 pomme de terre', '1 oignon'],
      instructions: ['Couper les légumes', 'Cuire dans l’eau', 'Mixer'],
      category: 'entrée',
      prepTime: 15,
      cookTime: 20,
      servings: 4
    },
    {
      id: '10',
      name: 'Salade de chèvre chaud',
      ingredients: ['1 salade', '100g chèvre', '100g lardons', 'Vinaigrette'],
      instructions: ['Faire revenir les lardons', 'Faire griller le chèvre', 'Mélanger le tout'],
      category: 'entrée',
      prepTime: 15,
      cookTime: 10,
      servings: 2
    },
    {
      id: '11',
      name: 'Riz cantonais',
      ingredients: ['200g riz', '2 oeufs', '100g jambon', '50g petits pois'],
      instructions: ['Cuire le riz', 'Faire revenir les oeufs et le jambon', 'Ajouter les petits pois'],
      category: 'plat principal',
      prepTime: 10,
      cookTime: 15,
      servings: 2
    },
    {
      id: '12',
      name: 'Poulet rôti',
      ingredients: ['1 poulet', '50g beurre', 'Herbes de Provence'],
      instructions: ['Badigeonner le poulet de beurre et d’herbes', 'Cuire au four'],
      category: 'plat principal',
      prepTime: 10,
      cookTime: 60,
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
  ],
  mealPlans: [],
  shoppingList: [],
  settings: {
    darkMode: false,
    notificationsEnabled: true,
    servingsCountts: 4,
  },
};

//  manipulation de la DB
export const DATABASE_UTILS = {
  getNewRecipeId: (recipes: Recipe[]): string => {
    return `recipe_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  },
  getNewMealPlanId: (mealPlans: MealPlan[]): string => {
    return `mealplan_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  },
  getNewShoppingListItemId: (shoppingList: ShoppingListItem[]): string => {
    return `shoppingitem_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  },

  generateShoppingList: (mealPlans: MealPlan[], recipes: Recipe[]): ShoppingListItem[] => {
    const ingredientMap = new Map<string, number>();

    mealPlans.forEach(mealPlan => {
      Object.values(mealPlan.meals).forEach(meal => {
        if (meal.recipe) {
          const recipe = recipes.find(r => r.id === meal.recipe?.id);
          if (recipe) {
            recipe.ingredients.forEach(ingredient => {
              const [quantity, ...nameParts] = ingredient.split(' ');
              const name = nameParts.join(' ');
              const currentQuantity = ingredientMap.get(name) || 0;
              ingredientMap.set(name, currentQuantity + (parseInt(quantity) || 1));
            });
          }
        }
      });
    });

    return Array.from(ingredientMap).map(([name, quantity], index) => ({
      id: `shoppingitem_${Date.now()}_${index}`,
      name: `${quantity} ${name}`,
      checked: false
    }));
  }
};