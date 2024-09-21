import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph, useTheme } from 'react-native-paper';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onPress: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    card: {
      marginBottom: 10,
      backgroundColor: theme.colors.background,
    },
  });
  
  return (
    <Card style={styles.card} onPress={() => onPress(recipe)}>
      <Card.Content>
        <Title>{recipe.name}</Title>
        <Paragraph>{recipe.category}</Paragraph>
        <Paragraph>Prep time: {recipe.prepTime} mins</Paragraph>
      </Card.Content>
    </Card>
  );
};



export default memo(RecipeCard);