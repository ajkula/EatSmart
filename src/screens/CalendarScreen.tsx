import React, { useState, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { Card, Title, Paragraph, ActivityIndicator, Text, Button, useTheme } from 'react-native-paper';
import { useAppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MealPlan } from '../types';

type CalendarScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CalendarMain'>;

const CalendarScreen = () => {
  const { mealPlans, isLoading, error } = useAppContext();
  const [selectedDates, setSelectedDates] = useState({});
  const navigation = useNavigation<CalendarScreenNavigationProp>();
  const theme = useTheme();

  const markedDates = useMemo(() => {
    const marked = mealPlans.reduce((acc, mealPlan: MealPlan) => {
      acc[mealPlan.date] = { marked: true, dotColor: theme.colors.primary };
      return acc;
    }, {} as { [key: string]: { marked: boolean; dotColor: string; selected?: boolean; selectedColor?: string } });

    // Ajouter les dates sélectionnées
    Object.keys(selectedDates).forEach(date => {
      marked[date] = { ...marked[date], selected: true, selectedColor: theme.colors.primary };
    });

    return marked;
  }, [mealPlans, selectedDates, theme.colors.primary]);

  const selectedMealPlan: MealPlan | undefined = useMemo(() => 
    mealPlans.find((mp: MealPlan) => mp.date === Object.keys(selectedDates)[Object.keys(selectedDates).length-1]),
    [mealPlans, selectedDates]
  );

  const handleDayPress = (day: DateData) => {
    setSelectedDates(prevDates => {
      const newDates: { [key: string]: { selected: boolean } } = { ...prevDates };
      if (newDates[day.dateString]) {
        delete newDates[day.dateString];
      } else {
        newDates[day.dateString] = { selected: true };
      }
      return newDates;
    });
  };

  const renderMealInfo = (meal: keyof MealPlan['meals']) => {
    const mealName = selectedMealPlan?.meals[meal]?.recipe?.name || 'Not planned';
    return <Paragraph>{meal.charAt(0).toUpperCase() + meal.slice(1)}: {mealName}</Paragraph>;
  };

  const planMeals = () => {
    navigation.navigate('MealPlanner', { dates: Object.keys(selectedDates) });
  };
  
  const generateShoppingList = () => {
    navigation.navigate('ShoppingList', { dates: Object.keys(selectedDates) });
  };

  if (isLoading) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: theme.colors.background }]}>
        <Text style={{ color: theme.colors.error }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        theme={{
          calendarBackground: theme.colors.background,
          todayTextColor: theme.colors.secondary,
          selectedDayBackgroundColor: theme.colors.primary,
          selectedDayTextColor: theme.colors.onPrimary,
          dayTextColor: theme.colors.primary,
          textDisabledColor: theme.colors.surfaceDisabled,
          dotColor: theme.colors.secondary,
          selectedDotColor: theme.colors.onPrimary,
          arrowColor: theme.colors.primary,
          monthTextColor: theme.colors.outlineVariant,
          textDayFontFamily: theme.fonts.bodyMedium.fontFamily,
          textMonthFontFamily: theme.fonts.bodyLarge.fontFamily,
          textDayHeaderFontFamily: theme.fonts.bodySmall.fontFamily,
        }}
      />
      {Object.keys(selectedDates).length > 0 && (
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={planMeals} style={styles.button}>
            Planifier repas
          </Button>
          <Button mode="contained" onPress={generateShoppingList} style={styles.button}>
            liste courses
          </Button>
        </View>
      )}
      {selectedMealPlan && (
        <Card style={styles.mealCard}>
          <Card.Content>
            <Title>Repas pour {Object.keys(selectedDates)[Object.keys(selectedDates).length-1]}</Title>
            {renderMealInfo('breakfast')}
            {renderMealInfo('lunch')}
            {renderMealInfo('dinner')}
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mealCard: {
    margin: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default CalendarScreen;