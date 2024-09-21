import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { MealPlanItem as MealPlanItemType } from '../types';

interface MealPlanItemProps {
  mealType: 'breakfast' | 'lunch' | 'dinner';
  item: MealPlanItemType;
  onPress?: () => void;
}

const MealPlanItem: React.FC<MealPlanItemProps> = ({ mealType, item, onPress }) => {
  return (
    <TouchableRipple onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.mealType}>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</Text>
        <Text style={styles.mealName}>
          {item.recipe?.name ?? 'Not planned'}
        </Text>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  mealType: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  mealName: {
    fontSize: 16,
  },
});

export default memo(MealPlanItem);