import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RecipeCategory = 'entrée' | 'plat principal' | 'dessert' | 'petit déjeuner' | 'apéro';

export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  category: RecipeCategory;
  prepTime: number;
  cookTime: number;
  servings: number;
}

export interface MealPlanItem {
  recipe: Recipe | null;
}

export interface MealPlan {
  date: string;
  meals: {
    breakfast: MealPlanItem;
    lunch: MealPlanItem;
    dinner: MealPlanItem;
  };
}

export interface ShoppingListItem {
  id: string;
  name: string;
  checked: boolean;
}

export type RootStackParamList = {
  RecipesList: undefined;
  RecipeDetail: { recipe: Recipe };
  CalendarMain: undefined;
  MealPlanEdit: { date: string };
  AddRecipe: { recipe?: Recipe };
  ShoppingListDetail: { itemId: string };
  Settings: undefined;
  MealPlanner: { dates: string[] };
  ShoppingList: { dates: string[], servings: number };
};

export type RecipeDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetail'>;

export interface RecipeDetailScreenProps {
  route: RouteProp<RootStackParamList, 'RecipeDetail'>;
  navigation: RecipeDetailScreenNavigationProp;
}

export type MealPlannerScreenRouteProp = RouteProp<RootStackParamList, 'MealPlanner'>;
export type MealPlannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MealPlanner'>;

export interface MealPlannerScreenProps {
  route: MealPlannerScreenRouteProp;
  navigation: MealPlannerScreenNavigationProp;
}