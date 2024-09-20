import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Recipe, MealPlan, ShoppingListItem, RecipeCategory } from '../types';
import { useDatabase } from '../hooks/useDatabase';

interface AppSettings {
  isDarkMode: boolean;
  notificationsEnabled: boolean;
  servingsCounts: number;
}

interface AppContextType {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
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

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      try {
        await initializeDatabase();
        const storedRecipes = await getRecipes();
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
        setError("Failed to load initial data");
      } finally {
        setIsLoading(false);
      }
    };

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