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
  let availableRecipes = recipes.filter(recipe => !recentlyUsedRecipes.has(recipe.id));

  const newMealPlans: MealPlan[] = [];

  for (const date of dates) {
    const existingPlan = existingMealPlans.find(plan => plan.date === date);
    let dayRecipes: Set<string> = new Set();

    if (existingPlan) {
      const breakfast = existingPlan.meals.breakfast.recipe 
        ? existingPlan.meals.breakfast 
        : getRandomMeal(availableRecipes, ['petit déjeuner', 'dessert'], recipes, newMealPlans, date, dayRecipes);
      dayRecipes.add(breakfast.recipe?.id || '');

      const lunch = existingPlan.meals.lunch.recipe 
        ? existingPlan.meals.lunch 
        : getBalancedMeal(availableRecipes, ['entrée', 'plat principal', 'dessert'], mainMealCount, recipes, newMealPlans, date, dayRecipes);
      dayRecipes.add(lunch.recipe?.id || '');

      const dinner = existingPlan.meals.dinner.recipe 
        ? existingPlan.meals.dinner 
        : getBalancedMeal(availableRecipes, ['entrée', 'plat principal', 'dessert', 'apéro'], mainMealCount, recipes, newMealPlans, date, dayRecipes);

      newMealPlans.push({
        ...existingPlan,
        meals: { breakfast, lunch, dinner }
      });
    } else {
      const breakfast = getRandomMeal(availableRecipes, ['petit déjeuner', 'dessert'], recipes, newMealPlans, date, dayRecipes);
      dayRecipes.add(breakfast.recipe?.id || '');

      const lunch = getBalancedMeal(availableRecipes, ['entrée', 'plat principal', 'dessert'], mainMealCount, recipes, newMealPlans, date, dayRecipes);
      dayRecipes.add(lunch.recipe?.id || '');

      const dinner = getBalancedMeal(availableRecipes, ['entrée', 'plat principal', 'dessert', 'apéro'], mainMealCount, recipes, newMealPlans, date, dayRecipes);

      newMealPlans.push({
        date,
        meals: { breakfast, lunch, dinner }
      });
    }

    availableRecipes = updateAvailableRecipes(availableRecipes, newMealPlans[newMealPlans.length - 1], recipes);
  }

  return newMealPlans;
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

const getRandomMeal = (availableRecipes: Recipe[], categories: RecipeCategory[], allRecipes: Recipe[], currentMealPlans: MealPlan[], currentDate: string, dayRecipes: Set<string>): MealPlanItem => {
  let filteredRecipes = availableRecipes.filter(recipe => 
    categories.includes(recipe.category) && !dayRecipes.has(recipe.id)
  );
  
  if (filteredRecipes.length === 0) {
    filteredRecipes = allRecipes.filter(recipe => 
      categories.includes(recipe.category) && !dayRecipes.has(recipe.id)
    );
  }

  if (filteredRecipes.length === 0) {
    filteredRecipes = allRecipes.filter(recipe => categories.includes(recipe.category));
  }

  filteredRecipes.sort((a, b) => {
    const lastUsedA = getLastUsedDate(a, currentMealPlans);
    const lastUsedB = getLastUsedDate(b, currentMealPlans);
    return lastUsedA.getTime() - lastUsedB.getTime();
  });

  return { recipe: filteredRecipes[0] || null };
};

const getBalancedMeal = (availableRecipes: Recipe[], categories: MainMealCategory[], mealCount: Record<MainMealCategory, number>, allRecipes: Recipe[], currentMealPlans: MealPlan[], currentDate: string, dayRecipes: Set<string>): MealPlanItem => {
  const leastUsedCategory = categories.reduce((a, b) => mealCount[a] < mealCount[b] ? a : b);
  let filteredRecipes = availableRecipes.filter(recipe => 
    recipe.category === leastUsedCategory && !dayRecipes.has(recipe.id)
  );
  
  if (filteredRecipes.length === 0) {
    filteredRecipes = availableRecipes.filter(recipe => 
      categories.includes(recipe.category as MainMealCategory) && !dayRecipes.has(recipe.id)
    );
  }

  if (filteredRecipes.length === 0) {
    filteredRecipes = allRecipes.filter(recipe => 
      categories.includes(recipe.category as MainMealCategory) && !dayRecipes.has(recipe.id)
    );
  }

  if (filteredRecipes.length === 0) {
    filteredRecipes = allRecipes.filter(recipe => categories.includes(recipe.category as MainMealCategory));
  }

  filteredRecipes.sort((a, b) => {
    const lastUsedA = getLastUsedDate(a, currentMealPlans);
    const lastUsedB = getLastUsedDate(b, currentMealPlans);
    return lastUsedA.getTime() - lastUsedB.getTime();
  });

  const selectedRecipe = filteredRecipes[0];
  if (selectedRecipe) {
    mealCount[selectedRecipe.category as MainMealCategory]++;
  }
  return { recipe: selectedRecipe || null };
};

const getLastUsedDate = (recipe: Recipe, mealPlans: MealPlan[]): Date => {
  for (let i = mealPlans.length - 1; i >= 0; i--) {
    const plan = mealPlans[i];
    if (Object.values(plan.meals).some(meal => meal.recipe?.id === recipe.id)) {
      return new Date(plan.date);
    }
  }
  return new Date(0);
};

const updateAvailableRecipes = (availableRecipes: Recipe[], latestMealPlan: MealPlan, allRecipes: Recipe[]): Recipe[] => {
  const usedRecipeIds = new Set(Object.values(latestMealPlan.meals)
    .filter(meal => meal.recipe)
    .map(meal => meal.recipe!.id));

  let updatedRecipes = availableRecipes.filter(recipe => !usedRecipeIds.has(recipe.id));
  
  if (updatedRecipes.length === 0) {
    updatedRecipes = allRecipes;
  }

  return updatedRecipes;
};