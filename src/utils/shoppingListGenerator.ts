import { MealPlan, ShoppingListItem } from '../types';

export function generateShoppingList(mealPlans: MealPlan[], servings: number): ShoppingListItem[] {
  console.log(`Generating shopping list for ${mealPlans.length} meal plans with ${servings} servings`);
  const ingredientMap = new Map<string, { quantity: number, rest: string }>();

  mealPlans.forEach((mealPlan, index) => {
    console.log(`Processing meal plan ${index + 1}:`);
    Object.entries(mealPlan.meals).forEach(([mealType, meal]) => {
      if (meal.recipe) {
        console.log(`  Processing ${mealType}: ${meal.recipe.name}`);
        meal.recipe.ingredients.forEach(ingredient => {
          console.log(`    Ingredient: "${ingredient}"`);
          const { quantity, rest } = parseIngredient(ingredient);
          console.log(`      Parsed: quantity = ${quantity}, rest = "${rest}"`);
          const current = ingredientMap.get(rest) || { quantity: 0, rest };
          const adjustedQuantity = quantity * (servings / (meal?.recipe?.servings ?? 1));
          console.log(`      Adjusted quantity: ${adjustedQuantity} (${quantity} * ${servings} / ${meal?.recipe?.servings ?? 1})`);
          const newQuantity = current.quantity + adjustedQuantity;
          console.log(`      New total quantity: ${newQuantity} (${current.quantity} + ${adjustedQuantity})`);
          ingredientMap.set(rest, { quantity: newQuantity, rest });
        });
      }
    });
  });

  return Array.from(ingredientMap).map(([rest, { quantity }], index) => ({
    id: `shoppingitem_${Date.now()}_${index}`,
    name: formatIngredient(quantity, rest),
    checked: false
  }));
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