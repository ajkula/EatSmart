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
    console.log("Raw AsyncStorage data for recipes:", result);
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
      console.log('Settings updated:', updatedSettings);
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
      console.log("Starting to load initial data");
      await initializeDatabase();
      console.log("Database initialized");
      
      let storedRecipes;
      try {
        storedRecipes = await getRecipes();
      } catch (recipeError) {
        console.error("Error loading recipes:", recipeError);
        storedRecipes = DEFAULT_DATABASE.recipes;
      }
      console.log("Recipes loaded:", storedRecipes.length);
      setRecipes(storedRecipes);
    
      const storedMealPlans = await getMealPlans();
      console.log("Meal plans loaded:", storedMealPlans?.length || 0);
      setMealPlans(storedMealPlans || []);
  
      const storedShoppingList = await getShoppingList();
      console.log("Shopping list loaded:", storedShoppingList?.length || 0);
      setShoppingList(storedShoppingList || []);
  
      const storedSettings = await getSettings();
      console.log("Settings loaded:", storedSettings);
      setSettings(storedSettings);
  
      setIsInitialized(true);
      console.log("Initial data loaded successfully");

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