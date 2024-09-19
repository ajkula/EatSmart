import { Recipe } from '../types';

export function parseRecipe(recipeText: string): Recipe | null {
  const lines = recipeText.split('\n').map(line => line.trim());
  const recipe: Partial<Recipe> = {
    id: Date.now().toString(),
    ingredients: [],
    instructions: []
  };

  let currentSection: 'ingredients' | 'instructions' | null = null;

  for (const line of lines) {
    if (line.startsWith('Name:')) {
      recipe.name = line.substring(5).trim();
    } else if (line.startsWith('Category:')) {
      recipe.category = line.substring(9).trim();
    } else if (line.startsWith('Prep Time:')) {
      recipe.prepTime = parseInt(line.substring(10).trim());
    } else if (line.startsWith('Cook Time:')) {
      recipe.cookTime = parseInt(line.substring(10).trim());
    } else if (line.startsWith('Servings:')) {
      recipe.servings = parseInt(line.substring(9).trim());
    } else if (line === 'Ingredients:') {
      currentSection = 'ingredients';
    } else if (line === 'Instructions:') {
      currentSection = 'instructions';
    } else if (line && currentSection) {
      recipe[currentSection]?.push(line);
    }
  }

  if (
    recipe.name &&
    recipe.category &&
    recipe.prepTime !== undefined &&
    recipe.cookTime !== undefined &&
    recipe.servings !== undefined &&
    recipe.ingredients?.length &&
    recipe.instructions?.length
  ) {
    return recipe as Recipe;
  }

  return null;
}

export function formatRecipeForExport(recipe: Recipe): string {
  return `Name: ${recipe.name}
Category: ${recipe.category}
Prep Time: ${recipe.prepTime}
Cook Time: ${recipe.cookTime}
Servings: ${recipe.servings}

Ingredients:
${recipe.ingredients.join('\n')}

Instructions:
${recipe.instructions.join('\n')}`;
}