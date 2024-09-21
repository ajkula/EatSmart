import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe, MealPlan, ShoppingListItem } from '../types';
import { STORAGE_KEYS, LocalDatabase, DEFAULT_DATABASE, AppSettings } from '../constants/Database';

export const useDatabase = () => {
  const storeData = async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      console.log(`Data stored successfully for key: ${key}`);
    } catch (e) {
      console.error('Error storing data:', e);
      throw e;
    }
  };

  const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      console.log(`Raw data retrieved for key ${key}:`, jsonValue);
      if (jsonValue === null) {
        console.log(`No data found for key ${key}`);
        return null;
      }
      const parsedValue = JSON.parse(jsonValue);
      console.log(`Parsed data for key ${key}:`, parsedValue);
      return parsedValue;
    } catch (e) {
      console.error(`Error retrieving or parsing data for key ${key}:`, e);
      throw e;
    }
  };

  const storeRecipes = (recipes: Recipe[]) => storeData(STORAGE_KEYS.RECIPES, recipes);
  const getRecipes = async (): Promise<Recipe[]> => {
    const recipes = await getData(STORAGE_KEYS.RECIPES);
    if (!Array.isArray(recipes) || recipes.length === 0) {
      console.log("No recipes found, returning default recipes");
      return DEFAULT_DATABASE.recipes;
    }
    console.log("Retrieved recipes:", recipes[0].name);
    return recipes;
  };

  const storeMealPlans = (mealPlans: MealPlan[]) => storeData(STORAGE_KEYS.MEAL_PLANS, mealPlans);
  const getMealPlans = () => getData(STORAGE_KEYS.MEAL_PLANS) as Promise<MealPlan[] | null>;

  const storeShoppingList = async (shoppingList: ShoppingListItem[]) => await storeData(STORAGE_KEYS.SHOPPING_LIST, shoppingList);
  const getShoppingList = async () => await getData(STORAGE_KEYS.SHOPPING_LIST) as Promise<ShoppingListItem[] | null>;

  const getIsDarkMode = () => getData('isDarkMode') as Promise<boolean | null>;

  const initializeDatabase = async (): Promise<void> => {
    const storedRecipes = await getData(STORAGE_KEYS.RECIPES);
    console.log("Stored recipes during initialization:", storedRecipes?.length || 0);
    if (!storedRecipes || storedRecipes.length === 0) {
      console.log("Initializing database with default recipes:", DEFAULT_DATABASE.recipes.map(r => r.name).join(', '));
      await storeData(STORAGE_KEYS.RECIPES, DEFAULT_DATABASE.recipes);
      await storeData(STORAGE_KEYS.MEAL_PLANS, DEFAULT_DATABASE.mealPlans);
      await storeData(STORAGE_KEYS.SHOPPING_LIST, DEFAULT_DATABASE.shoppingList);
      await storeData(STORAGE_KEYS.SETTINGS, DEFAULT_DATABASE.settings);
      console.log("Database initialized with default data");
    }
  };

  const getDatabase = async (): Promise<LocalDatabase> => {
    const recipes = await getRecipes() || [];
    const mealPlans = await getMealPlans() || [];
    const shoppingList = await getShoppingList() || [];
    const settings = await getData(STORAGE_KEYS.SETTINGS) || DEFAULT_DATABASE.settings;

    return { recipes, mealPlans, shoppingList, settings };
  };

  const updateDatabase = async (newData: Partial<LocalDatabase>): Promise<void> => {
    if (newData.recipes) await storeRecipes(newData.recipes);
    if (newData.mealPlans) await storeMealPlans(newData.mealPlans);
    if (newData.shoppingList) await storeShoppingList(newData.shoppingList);
    if (newData.settings) await storeData(STORAGE_KEYS.SETTINGS, newData.settings);
  };

  const getSettings = async (): Promise<AppSettings> => {
    return await getData(STORAGE_KEYS.SETTINGS) || DEFAULT_DATABASE.settings;
  };

  const updateSettings = async (newSettings: Partial<AppSettings>): Promise<void> => {
    try {
      const currentSettings = await getSettings();
      const updatedSettings = { ...currentSettings, ...newSettings };
      await storeData(STORAGE_KEYS.SETTINGS, updatedSettings);
    } catch (error) {
      console.error('Failed to update settings:', error);
    }
  };

  return {
    storeRecipes,
    getRecipes,
    storeMealPlans,
    getMealPlans,
    storeShoppingList,
    getShoppingList,
    getIsDarkMode,
    initializeDatabase,
    getDatabase,
    updateDatabase,
    getSettings,
    updateSettings,
  };
};