import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, useTheme, Checkbox } from 'react-native-paper';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onPress: (recipe: Recipe) => void;
  isSelecting?: boolean;
  isSelected?: boolean;
  onSelect?: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress, isSelecting, isSelected, onSelect }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    card: {
      marginBottom: 10,
      backgroundColor: theme.colors.surface,
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
    },
    checkBox: {
      position: 'absolute',
      bottom: 15,
      right: 15,
    },
  });
  
  return (
    <Card style={styles.card} onPress={() => onPress(recipe)}>
      <Card.Content>
        <View style={styles.textContainer}>
        <Title>{recipe.name}</Title>
        <Paragraph>{recipe.category}</Paragraph>
        <Paragraph>Temps: {recipe.prepTime} min</Paragraph>
        </View>
        {isSelecting && (
          <View style={styles.checkBox}>
            <Checkbox
              status={isSelected ? 'checked' : 'unchecked'}
              onPress={() => onSelect && onSelect(recipe)}
              color={theme.colors.primary}
            />
          </View>
        )}
      </Card.Content>
    </Card>
  );
};



export default memo(RecipeCard);