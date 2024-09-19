import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Recipe, MealPlan, ShoppingListItem, RecipeCategory } from '../types';
import { useDatabase } from '../hooks/useDatabase';
import { DEFAULT_DATABASE } from '../constants/Database';

interface AppSettings {
  isDarkMode: boolean;
  notificationsEnabled: boolean;
  servingsCount: number;
}

interface AppContextType {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
  mealPlans: MealPlan[];
  setMealPlans: React.Dispatch<React.SetStateAction<MealPlan[]>>;
  shoppingList: ShoppingListItem[];
  setShoppingList: (shoppingList: ShoppingListItem[]) => void;
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;
  servingsCount: number;
  setServingsCount: (count: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);
  const [settings, setSettings] = useState<AppSettings>({
     isDarkMode: false,
     notificationsEnabled: false,
     servingsCount: 4 
    });
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [servingsCount, setServingsCount] = useState<number>(4);
  const {
    initializeDatabase,
    getRecipes,
    getMealPlans,
    getShoppingList,
    getIsDarkMode,
    storeRecipes,
    storeMealPlans,
    storeShoppingList,
    getSettings,
    updateSettings: updateDatabaseSettings,
  } = useDatabase();

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await initializeDatabase();
        const storedRecipes = await getRecipes();
        if (storedRecipes && storedRecipes.length > 0) {
          setRecipes(storedRecipes);
        } else {
          setRecipes(DEFAULT_DATABASE.recipes);
          await storeRecipes(DEFAULT_DATABASE.recipes);
        }
        console.log("Loaded recipes:", storedRecipes);

        const storedMealPlans = await getMealPlans();
        if (storedMealPlans) setMealPlans(storedMealPlans);

        const storedShoppingList = await getShoppingList();
        if (storedShoppingList) setShoppingList(storedShoppingList);

        const storedIsDarkMode = await getIsDarkMode();
        if (storedIsDarkMode !== null) setSettings(prevSettings => ({ ...prevSettings, isDarkMode: storedIsDarkMode }));

        setIsInitialized(true);
      } catch (error) {
        setError("Failed to load initial data");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadInitialData();
  }, []);

  useEffect(() => {
    storeRecipes(recipes);
  }, [recipes]);

  useEffect(() => {
    storeMealPlans(mealPlans);
  }, [mealPlans]);

  useEffect(() => {
    storeShoppingList(shoppingList);
  }, [shoppingList]);

  useEffect(() => {
    updateSettings(settings);
  }, [settings.isDarkMode, settings.notificationsEnabled, settings.servingsCount]);

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prevSettings => {
      const updatedSettings = { ...prevSettings, ...newSettings };
      if (newSettings.servingsCount) {
        setServingsCount(newSettings.servingsCount);
      }
      return updatedSettings;
    });
  };

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
        updateSettings,
        isLoading,
        isInitialized,
        error,
        servingsCount,
        setServingsCount,
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