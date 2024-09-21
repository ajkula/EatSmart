import { Recipe, MealPlan, ShoppingListItem } from '../types';
import { RECIPES_PRESET } from './RecipesPreset';

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
  isDarkMode: boolean;
  notificationsEnabled: boolean;
  servingsCounts: number;
}

export const DEFAULT_DATABASE: LocalDatabase = {
  recipes: RECIPES_PRESET,
  mealPlans: [],
  shoppingList: [],
  settings: {
    isDarkMode: false,
    notificationsEnabled: true,
    servingsCounts: 4,
  },
};

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