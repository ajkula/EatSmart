import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../hooks/useTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecipesScreen from '../screens/RecipesScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import MealPlanEditScreen from '../screens/MealPlanEditScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MealPlannerScreen from '../screens/MealPlannerScreen';
import { RootStackParamList } from '../types';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const RecipesStack = createStackNavigator<RootStackParamList>();
const CalendarStack = createStackNavigator<RootStackParamList>();
const ShoppingStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const RecipesStackScreen = () => (
  <RecipesStack.Navigator>
    <RecipesStack.Screen name="RecipesList" component={RecipesScreen}
      options={{ title: 'Mes Recettes' }} />
    <RecipesStack.Screen name="RecipeDetail" component={RecipeDetailScreen}
      options={{ title: 'Détails de la Recette' }} />
    <RecipesStack.Screen name="AddRecipe" component={AddRecipeScreen} 
      options={({ route }) => ({ title: route.params?.recipe ? 'Édition Recette' : 'Ajout Recette' })}
    />
    <RecipesStack.Screen name="ShoppingList" component={ShoppingListScreen}
      options={{ title: 'Liste de Courses' }} />
  </RecipesStack.Navigator>
);

const CalendarStackScreen = () => (
  <CalendarStack.Navigator>
    <CalendarStack.Screen name="CalendarMain" component={CalendarScreen}
      options={{ title: 'Planification' }} />
    <CalendarStack.Screen name="MealPlanEdit" component={MealPlanEditScreen}
      options={{ title: 'Édition du Plan' }} />
    <CalendarStack.Screen name="MealPlanner" component={MealPlannerScreen}
      options={{ title: 'Planificateur' }} />
    <CalendarStack.Screen name="ShoppingList" component={ShoppingListScreen}
      options={{ title: 'Liste de Courses' }} />
  </CalendarStack.Navigator>
);

const ShoppingStackScreen = () => (
  <ShoppingStack.Navigator>
    <ShoppingStack.Screen name="ShoppingList" component={ShoppingListScreen}
      options={{ title: 'Liste de Courses' }} />
  </ShoppingStack.Navigator>
);

const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Calendrier') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Recettes') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Courses') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Paramètres') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen 
        name="Calendrier" 
        component={CalendarStackScreen}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            const routeName = getFocusedRouteNameFromRoute(route);
            if (routeName && routeName !== 'CalendarMain') {
              e.preventDefault();
              navigation.navigate('Calendrier', { screen: 'CalendarMain' });
            }
          },
        })}
      />
      <Tab.Screen 
        name="Recettes" 
        component={RecipesStackScreen}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            const routeName = getFocusedRouteNameFromRoute(route);
            if (routeName && routeName !== 'RecipesList') {
              e.preventDefault();
              navigation.navigate('Recettes', { screen: 'RecipesList' });
            }
          },
        })}
      />
      <Tab.Screen 
        name="Courses" 
        component={ShoppingStackScreen}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            const routeName = getFocusedRouteNameFromRoute(route);
            if (routeName && routeName !== 'ShoppingList') {
              e.preventDefault();
              navigation.navigate('Courses', { screen: 'ShoppingList' });
            }
          },
        })}
      />
      <Tab.Screen name="Paramètres" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;