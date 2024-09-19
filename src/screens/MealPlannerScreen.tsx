import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useAppContext } from '../context/AppContext';
import { generateMealPlan } from '../utils/mealPlanGenerator';
import { MealPlannerScreenProps, MealPlan } from '../types';

const MealPlannerScreen: React.FC<MealPlannerScreenProps> = ({ route, navigation }) => {
  const { dates } = route.params;
  const { recipes, setMealPlans } = useAppContext();
  const [suggestedPlan, setSuggestedPlan] = useState<MealPlan[]>([]);

  useEffect(() => {
    const plan = generateMealPlan(dates, recipes);
    setSuggestedPlan(plan);
  }, [dates, recipes]);

  const confirmPlan = () => {
    setMealPlans((prevMealPlans: MealPlan[]) => {
      const newMealPlans = [...prevMealPlans];
      suggestedPlan.forEach(plan => {
        const existingIndex = newMealPlans.findIndex(p => p.date === plan.date);
        if (existingIndex !== -1) {
          newMealPlans[existingIndex] = plan;
        } else {
          newMealPlans.push(plan);
        }
      });
      console.log('Updated meal plans:', newMealPlans);
      return newMealPlans;
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={suggestedPlan}
        renderItem={({ item }) => (
          <View style={styles.mealPlanItem}>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text>Petit-déjeuner: {item.meals.breakfast.recipe?.name || 'Non planifié'}</Text>
            <Text>Déjeuner: {item.meals.lunch.recipe?.name || 'Non planifié'}</Text>
            <Text>Dîner: {item.meals.dinner.recipe?.name || 'Non planifié'}</Text>
          </View>
        )}
        keyExtractor={item => item.date}
      />
      <Button mode='contained' onPress={confirmPlan} style={styles.confirmButton}>Confirmer le plan</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  mealPlanItem: {
    marginBottom: 16,
    padding: 8,
    backgroundColor: 'grey',
    color: 'FFFFFF',
    borderRadius: 8,
  },
  dateText: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  confirmButton: {
    marginTop: 16,
  },
});

export default MealPlannerScreen;

// #F7C8BC
// #FAD5CC