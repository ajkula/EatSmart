import { MealPlan, ShoppingListItem, Recipe } from '../types';


type InputType = MealPlan[] | Recipe[];

export function generateShoppingList(input: InputType, servings: number): ShoppingListItem[] {
  const ingredientMap = new Map<string, { quantity: number, rest: string }>();

  input.forEach((item) => {
    if ('meals' in item) {
      processMealPlan(item, servings, ingredientMap);
    } else {
      processRecipe(item, servings, ingredientMap);
    }
  });

  return Array.from(ingredientMap).map(([rest, { quantity }], index) => ({
    id: `shoppingitem_${Date.now()}_${index}`,
    name: formatIngredient(quantity, rest),
    checked: false
  }));
}

function processMealPlan(mealPlan: MealPlan, servings: number, ingredientMap: Map<string, { quantity: number, rest: string }>) {
  Object.entries(mealPlan.meals).forEach(([mealType, meal]) => {
    if (meal.recipe) {
      processRecipe(meal.recipe, servings, ingredientMap);
    }
  });
}

function processRecipe(recipe: Recipe, servings: number, ingredientMap: Map<string, { quantity: number, rest: string }>) {
  recipe.ingredients.forEach(ingredient => {
    const { quantity, rest } = parseIngredient(ingredient);
    const current = ingredientMap.get(rest) || { quantity: 0, rest };
    const adjustedQuantity = quantity * (servings / (recipe.servings ?? 1));
    const newQuantity = current.quantity + adjustedQuantity;
    ingredientMap.set(rest, { quantity: newQuantity, rest });
  });
}

function parseIngredient(ingredient: string): { quantity: number, rest: string } {
  let numericPart = '';
  let restPart = '';
  let parsingNumeric = true;

  for (const char of ingredient) {
    if (parsingNumeric && (char >= '0' && char <= '9' || char === '.')) {
      numericPart += char;
    } else {
      parsingNumeric = false;
      restPart += char;
    }
  }

  const quantity = parseFloat(numericPart);
  return {
    quantity: isNaN(quantity) ? 1 : quantity,
    rest: restPart.trim()
  };
}

function formatIngredient(quantity: number, rest: string): string {
  const roundedQuantity = Math.round((quantity + Number.EPSILON) * 100) / 100;
  if (roundedQuantity === 1) {
    return rest;
  }
  return `${roundedQuantity} ${rest}`.trim();
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