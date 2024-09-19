import { MealPlan, Recipe, MealPlanItem } from '../types';

export const generateMealPlan = (dates: string[], recipes: Recipe[]): MealPlan[] => {
  return dates.map(date => ({
    date,
    meals: {
      breakfast: getRandomMeal(recipes, 'petit déjeuner'),
      lunch: getRandomMeal(recipes, 'plat principal'),
      dinner: getRandomMeal(recipes, 'plat principal')
    }
  }));
};

const getRandomMeal = (recipes: Recipe[], category: string): MealPlanItem => {
  const filteredRecipes = recipes.filter(recipe => recipe.category === category);
  if (filteredRecipes.length === 0) {
    return { recipe: null };
  }
  const randomRecipe = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  return { recipe: randomRecipe  };
};
