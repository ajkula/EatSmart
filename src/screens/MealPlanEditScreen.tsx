import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title, ActivityIndicator, Text } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppContext } from '../context/AppContext';
import { MealPlan, MealPlanItem, Recipe } from '../types';

type RootStackParamList = {
  MealPlanEdit: { date: string };
};

type MealPlanEditScreenRouteProp = RouteProp<RootStackParamList, 'MealPlanEdit'>;
type MealPlanEditScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MealPlanEdit'>;

type Props = {
  route: MealPlanEditScreenRouteProp;
  navigation: MealPlanEditScreenNavigationProp;
};

const MealPlanEditScreen: React.FC<Props> = ({ route, navigation }) => {
  const { date } = route.params;
  const { mealPlans, setMealPlans, recipes, isLoading, error } = useAppContext();

  const [breakfast, setBreakfast] = useState<Recipe | null>(null);
  const [lunch, setLunch] = useState<Recipe | null>(null);
  const [dinner, setDinner] = useState<Recipe | null>(null);
  
  useEffect(() => {
    if (!isLoading && !error) {
      const existingMealPlan = mealPlans.find(mp => mp.date === date);
      if (existingMealPlan) {
        setBreakfast(existingMealPlan.meals.breakfast.recipe);
        setLunch(existingMealPlan.meals.lunch.recipe);
        setDinner(existingMealPlan.meals.dinner.recipe);
    }
    }
  }, [mealPlans, date, isLoading, error]);

  const createMealPlanItem = (recipe: Recipe | null): MealPlanItem => ({
    recipe: recipe,
  });

  const saveMealPlan = () => {
    const updatedMealPlan: MealPlan = {
      date,
      meals: {
        breakfast: createMealPlanItem(breakfast),
        lunch: createMealPlanItem(lunch),
        dinner: createMealPlanItem(dinner),
      },
    };

    const newMealPlans = mealPlans.some(mp => mp.date === date)
      ? mealPlans.map(mp => (mp.date === date ? updatedMealPlan : mp))
      : [...mealPlans, updatedMealPlan];

    setMealPlans(newMealPlans);
    navigation.goBack();
  };

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Edit Meal Plan for {date}</Title>
      <TextInput
        label="Breakfast"
        value={breakfast?.name || ''}
        onChangeText={(text) => setBreakfast(recipes.find(r => r.name === text) || null)}
        style={styles.input}
      />
      <TextInput
        label="Lunch"
        value={lunch?.name || ''}
        onChangeText={(text) => setLunch(recipes.find(r => r.name === text) || null)}
        style={styles.input}
      />
      <TextInput
        label="Dinner"
        value={dinner?.name || ''}
        onChangeText={(text) => setDinner(recipes.find(r => r.name === text) || null)}
        style={styles.input}
      />
      <Button mode="contained" onPress={saveMealPlan} style={styles.button}>
        Enregistrer le plan de repas
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealPlanEditScreen;