import { MealPlan, Recipe, MealPlanItem, RecipeCategory } from '../types';

type MainMealCategory = Exclude<RecipeCategory, 'petit déjeuner'>;

export const generateMealPlan = (dates: string[], recipes: Recipe[], existingMealPlans: MealPlan[] = []): MealPlan[] => {
  let mainMealCount: Record<MainMealCategory, number> = { 
    'entrée': 0, 
    'plat principal': 0, 
    'dessert': 0, 
    'apéro': 0 
  };

  const recentlyUsedRecipes = getRecentlyUsedRecipes(existingMealPlans, 7);
  const availableRecipes = recipes.filter(recipe => !recentlyUsedRecipes.has(recipe.id));

  return dates.map(date => {
    const existingPlan = existingMealPlans.find(plan => plan.date === date);
    if (existingPlan) {
      return {
        ...existingPlan,
        meals: {
          breakfast: existingPlan.meals.breakfast.recipe 
            ? existingPlan.meals.breakfast 
            : getRandomMeal(availableRecipes, ['petit déjeuner', 'dessert'], recipes),
          lunch: existingPlan.meals.lunch.recipe 
            ? existingPlan.meals.lunch 
            : getBalancedMeal(availableRecipes, ['entrée', 'plat principal', 'dessert'], mainMealCount, recipes),
          dinner: existingPlan.meals.dinner.recipe 
            ? existingPlan.meals.dinner 
            : getBalancedMeal(availableRecipes, ['entrée', 'plat principal', 'dessert', 'apéro'], mainMealCount, recipes)
        }
      };
    } else {
      return {
        date,
        meals: {
          breakfast: getRandomMeal(availableRecipes, ['petit déjeuner', 'dessert'], recipes),
          lunch: getBalancedMeal(availableRecipes, ['entrée', 'plat principal', 'dessert'], mainMealCount, recipes),
          dinner: getBalancedMeal(availableRecipes, ['entrée', 'plat principal', 'dessert', 'apéro'], mainMealCount, recipes)
        }
      };
    }
  });
};

const getRecentlyUsedRecipes = (mealPlans: MealPlan[], days: number): Set<string> => {
  const recentRecipes = new Set<string>();
  const sortedPlans = mealPlans.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const recentPlans = sortedPlans.slice(0, days);

  recentPlans.forEach(plan => {
    Object.values(plan.meals).forEach(meal => {
      if (meal.recipe) {
        recentRecipes.add(meal.recipe.id);
      }
    });
  });

  return recentRecipes;
};

const getRandomMeal = (availableRecipes: Recipe[], categories: RecipeCategory[], allRecipes: Recipe[]): MealPlanItem => {
  let filteredRecipes = availableRecipes.filter(recipe => categories.includes(recipe.category));
  
  if (filteredRecipes.length === 0) {
    // If no available recipes, fall back to all recipes
    filteredRecipes = allRecipes.filter(recipe => categories.includes(recipe.category));
  }

  if (filteredRecipes.length === 0) {
    return { recipe: null };
  }

  const randomRecipe = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  return { recipe: randomRecipe };
};

const getBalancedMeal = (availableRecipes: Recipe[], categories: MainMealCategory[], mealCount: Record<MainMealCategory, number>, allRecipes: Recipe[]): MealPlanItem => {
  const leastUsedCategory = categories.reduce((a, b) => mealCount[a] < mealCount[b] ? a : b);
  let filteredRecipes = availableRecipes.filter(recipe => recipe.category === leastUsedCategory);
  
  if (filteredRecipes.length === 0) {
    // If no available recipes in the least used category, try all categories
    filteredRecipes = availableRecipes.filter(recipe => categories.includes(recipe.category as MainMealCategory));
  }

  if (filteredRecipes.length === 0) {
    // If still no available recipes, fall back to all recipes
    return getRandomMeal(allRecipes, categories, allRecipes);
  }

  const randomRecipe = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
  mealCount[randomRecipe.category as MainMealCategory]++;
  return { recipe: randomRecipe };
};