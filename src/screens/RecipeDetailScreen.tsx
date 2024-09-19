import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Title, Paragraph, Button, useTheme } from 'react-native-paper';
import { Recipe, RecipeDetailScreenProps } from '../types';
import { useAppContext } from '../context/AppContext';

const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({ route, navigation }) => {
  const { recipe } = route.params;
  const { colors } = useTheme();
  const { recipes, setRecipes } = useAppContext();

  const handleEditRecipe = () => {
    navigation.navigate('AddRecipe', { recipe });
  };

  const handleDeleteRecipe = () => {
    setRecipes(recipes.filter((r: Recipe) => r.id !== recipe.id));
    navigation.goBack();
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Title style={[styles.title, { color: colors.primary }]}>{recipe.name}</Title>
      <Paragraph style={styles.category}>{recipe.category}</Paragraph>
      <View style={styles.timeInfo}>
        <Paragraph>Prep time: {recipe.prepTime} mins</Paragraph>
        <Paragraph>Cook time: {recipe.cookTime} mins</Paragraph>
      </View>
      <Paragraph>Servings: {recipe.servings}</Paragraph>
      
      <Title style={styles.sectionTitle}>Ingredients</Title>
      {recipe.ingredients.map((ingredient, index) => (
        <Paragraph key={index} style={styles.listItem}>• {ingredient}</Paragraph>
      ))}
      
      <Title style={styles.sectionTitle}>Instructions</Title>
      {recipe.instructions.map((instruction, index) => (
        <Paragraph key={index} style={styles.listItem}>{index + 1}. {instruction}</Paragraph>
      ))}

      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleEditRecipe}>Editer Recette</Button>
        <Button mode="outlined" onPress={handleDeleteRecipe}>Effacer Recette</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  category: {
    fontStyle: 'italic',
    marginBottom: 8,
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  listItem: {
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default RecipeDetailScreen;