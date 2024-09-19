import { MealPlan, ShoppingListItem } from '../types';

export function generateShoppingList(mealPlans: MealPlan[], servings: number): ShoppingListItem[] {
  const ingredientMap = new Map<string, number>();

  mealPlans.forEach(mealPlan => {
    Object.values(mealPlan.meals).forEach(meal => {
      if (meal.recipe) {
        meal.recipe.ingredients.forEach(ingredient => {
          const [quantity, ...nameParts] = ingredient.split(' ');
          const name = nameParts.join(' ');
          const currentQuantity = ingredientMap.get(name) || 0;
          const adjustedQuantity = (parseInt(quantity) || 1) * (servings / (meal?.recipe?.servings ?? 1));
          ingredientMap.set(name, currentQuantity + adjustedQuantity);
        });
      }
    });
  });

  return Array.from(ingredientMap).map(([name, quantity], index) => ({
    id: index.toString(),
    name: `${Math.round(quantity * 10) / 10} ${name}`,
    checked: false
  }));
}

export function addCustomItemToShoppingList(
  shoppingList: ShoppingListItem[],
  itemName: string
): ShoppingListItem[] {
  const newItem: ShoppingListItem = {
    id: Date.now().toString(),
    name: itemName,
    checked: false
  };
  return [...shoppingList, newItem];
}