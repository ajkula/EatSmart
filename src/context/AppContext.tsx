import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { Recipe, MealPlan, ShoppingListItem, RecipeCategory } from '../types';
import { useDatabase } from '../hooks/useDatabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_DATABASE, STORAGE_KEYS } from '../constants/Database';

interface AppSettings {
  isDarkMode: boolean;
  notificationsEnabled: boolean;
  servingsCounts: number;
}

interface AppContextType {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  updateRecipe: (updatedRecipe: Recipe) => void;
  mealPlans: MealPlan[];
  setMealPlans: React.Dispatch<React.SetStateAction<MealPlan[]>>;
  shoppingList: ShoppingListItem[];
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingListItem[]>>;
  settings: AppSettings;
  setSettings: React.Dispatch<React.SetStateAction<AppSettings>>;
  updateSettings: (newSettings: Partial<AppSettings>) => Promise<void>;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;
  debugAsyncStorage: () => Promise<void>;
  resetAsyncStorage: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);
  const [settings, setSettings] = useState<AppSettings>({
    isDarkMode: false,
    notificationsEnabled: false,
    servingsCounts: 4,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    initializeDatabase,
    getRecipes,
    getMealPlans,
    getShoppingList,
    storeRecipes,
    storeMealPlans,
    storeShoppingList,
    getSettings,
    updateSettings,
  } = useDatabase();

  const debugAsyncStorage = async () => {
    const rawData = await AsyncStorage.getItem(STORAGE_KEYS.RECIPES);
    const result = JSON.parse(rawData ?? '[]').map((r: Recipe) => r.name).join(', ');
    return result;
  };

  const resetAsyncStorage = async () => {
    await AsyncStorage.clear();
    await initializeDatabase();
    loadInitialData();
  };

  const updateSettingsContext = async (newSettings: Partial<AppSettings>) => {
    try {
      const updatedSettings = { ...settings, ...newSettings };
      setSettings(updatedSettings);
      await updateSettings(updatedSettings);
    } catch (error) {
      console.error('Failed to update settings:', error);
    }
  };

  const updateRecipe = useCallback((updatedRecipe: Recipe) => {
    setRecipes(prevRecipes => {
      const newRecipes = prevRecipes.map(recipe => 
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return newRecipes;
    });

    setMealPlans(prevMealPlans => {
      return prevMealPlans.map(mealPlan => ({
        ...mealPlan,
        meals: {
          breakfast: mealPlan.meals.breakfast.recipe?.id === updatedRecipe.id 
            ? { recipe: updatedRecipe } 
            : mealPlan.meals.breakfast,
          lunch: mealPlan.meals.lunch.recipe?.id === updatedRecipe.id 
            ? { recipe: updatedRecipe } 
            : mealPlan.meals.lunch,
          dinner: mealPlan.meals.dinner.recipe?.id === updatedRecipe.id 
            ? { recipe: updatedRecipe } 
            : mealPlan.meals.dinner,
        }
      }));
    });
  }, []);

  const loadInitialData = async () => {
    setIsLoading(true);
    try {
      await initializeDatabase();
      
      let storedRecipes;
      try {
        storedRecipes = await getRecipes();
      } catch (recipeError) {
        console.error("Error loading recipes:", recipeError);
        storedRecipes = DEFAULT_DATABASE.recipes;
      }
      setRecipes(storedRecipes);
    
      const storedMealPlans = await getMealPlans();
      setMealPlans(storedMealPlans || []);
  
      const storedShoppingList = await getShoppingList();
      setShoppingList(storedShoppingList || []);
  
      const storedSettings = await getSettings();
      setSettings(storedSettings);
  
      setIsInitialized(true);
    } catch (error) {
      console.error("Failed to load initial data:", error);
      if (error instanceof Error) {
        setError(`Failed to load initial data: ${error.message}`);
      } else {
        setError("An unknown error occurred while loading initial data");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      storeRecipes(recipes);
    }
  }, [recipes, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      storeMealPlans(mealPlans);
    }
  }, [mealPlans, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      storeShoppingList(shoppingList);
    }
  }, [shoppingList, isInitialized]);

  return (
    <AppContext.Provider
      value={{
        recipes,
        setRecipes,
        updateRecipe,
        mealPlans,
        setMealPlans,
        shoppingList,
        setShoppingList,
        settings,
        setSettings,
        updateSettings: updateSettingsContext,
        isLoading,
        isInitialized,
        error,
        debugAsyncStorage,
        resetAsyncStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};