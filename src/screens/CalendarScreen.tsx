import React, { useState, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { Card, Title, Paragraph, ActivityIndicator, Text, Button, useTheme, Icon } from 'react-native-paper';
import { useAppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MealPlan } from '../types';

type CalendarScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CalendarMain'>;

const CalendarScreen = () => {
  const { mealPlans, setMealPlans, isLoading, error, settings } = useAppContext();
  const [selectedDates, setSelectedDates] = useState({});
  const navigation = useNavigation<CalendarScreenNavigationProp>();
  const theme = useTheme();

  const deletePlans = () => {
    const datesToDelete = Object.keys(selectedDates);
    const updatedMealPlans = mealPlans.filter(plan => !datesToDelete.includes(plan.date));
    setMealPlans(updatedMealPlans);
    setSelectedDates({});
  };

  const markedDates = useMemo(() => {
    const marked = mealPlans.reduce((acc, mealPlan: MealPlan) => {
      acc[mealPlan.date] = { marked: true, dotColor: theme.colors.primary };
      return acc;
    }, {} as { [key: string]: { marked: boolean; dotColor: string; selected?: boolean; selectedColor?: string } });

    Object.keys(selectedDates).forEach(date => {
      marked[date] = { ...marked[date], selected: true, selectedColor: theme.colors.primary };
    });

    return marked;
  }, [mealPlans, selectedDates, theme.colors.primary]);

  const selectedMealPlan: MealPlan | undefined = useMemo(() =>
    mealPlans.find((mp: MealPlan) => mp.date === Object.keys(selectedDates)[Object.keys(selectedDates).length - 1]),
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
    navigation.navigate('ShoppingList', {
      dates: Object.keys(selectedDates),
      servings: settings.servingsCounts ?? 2
    });
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
          todayTextColor: theme.colors.inverseSurface,
          selectedDayBackgroundColor: theme.colors.primary,
          selectedDayTextColor: theme.colors.onPrimary,
          dayTextColor: theme.colors.primary,
          textDisabledColor: theme.colors.surfaceDisabled,
          dotColor: theme.colors.primary,
          selectedDotColor: theme.colors.inverseSurface,
          arrowColor: theme.colors.primary,
          monthTextColor: theme.colors.inverseSurface,
          monthTextFontStyle: theme.fonts.bodyLarge.fontStyle,
          textDayFontFamily: theme.fonts.bodyMedium.fontFamily,
          textMonthFontFamily: theme.fonts.bodyLarge.fontFamily,
          textDayHeaderFontFamily: theme.fonts.bodySmall.fontFamily,
        }}
      />
      {Object.keys(selectedDates).length > 0 && (
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={planMeals} style={styles.button}>
            Repas
          </Button>
          <Button mode="contained" onPress={generateShoppingList} style={styles.button}>
            Courses
          </Button>
          <Button mode="contained" onPress={deletePlans} style={styles.deleteButton}>
            <Icon
              source={"trash-can"}
              color={"white"}
              size={24}
            />
          </Button>
        </View>
      )}
      {selectedMealPlan && (
        <Card style={styles.mealCard}>
          <Card.Content>
            <Title>Repas pour {Object.keys(selectedDates)[Object.keys(selectedDates).length - 1]}</Title>
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
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
  button: {
    flex: 4,
    marginHorizontal: 8,
    backgroundColor: "#FFA500",
  },
  deleteButton: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default CalendarScreen;