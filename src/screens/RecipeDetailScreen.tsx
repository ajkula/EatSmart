import React, { useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Title, Paragraph, Button, useTheme, Modal, Portal } from 'react-native-paper';
import { Recipe, RecipeDetailScreenProps } from '../types';
import { useAppContext } from '../context/AppContext';

const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({ route, navigation }) => {
  const { recipe: initialRecipe } = route.params;
  const [recipe, setRecipe] = React.useState<Recipe>(initialRecipe);
  const { colors } = useTheme();
  const { recipes, setRecipes } = useAppContext();

  useEffect(() => {
    const updatedRecipe = recipes.find((r: Recipe) => r.id === recipe.id);
    if (updatedRecipe) {
      setRecipe(updatedRecipe);
    }
  }, [recipes, recipe.id]);

  const handleEditRecipe = () => {
    navigation.navigate('AddRecipe', { recipe });
  };

  const handleDeleteRecipe = () => {
    setRecipes(recipes.filter((r: Recipe) => r.id !== recipe.id));
    navigation.goBack();
  };

  // recipe delete confirmation modal
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const showDeleteModal = () => setDeleteModalVisible(true);
  const hideDeleteModal = () => setDeleteModalVisible(false);
  const handleConfirmDelete = () => {
    hideDeleteModal();
    handleDeleteRecipe();
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
        <Button mode="outlined" onPress={showDeleteModal}>Effacer Recette</Button>
      </View>
      <Portal>
        <Modal
          visible={deleteModalVisible}
          onDismiss={hideDeleteModal}
          contentContainerStyle={[styles.modalContent, { 
            backgroundColor: colors.background,
            marginHorizontal: 40,
            borderStyle: 'solid',
            borderWidth: 4,
            borderColor: colors.secondary,
          }]}>
          <Title style={styles.modalTitle}>Delete Recipe</Title>
          <Paragraph style={styles.modalText}>
            Êtes-vous sûr de vouloir supprimer la recette "{recipe.name}" ?
          </Paragraph>
          <View style={styles.modalButtons}>
            <Button mode="contained" onPress={handleConfirmDelete}>Delete</Button>
            <Button mode="outlined" onPress={hideDeleteModal}>Cancel</Button>
          </View>
        </Modal>
      </Portal>
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
  modalContent: {
    padding: 20,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RecipeDetailScreen;