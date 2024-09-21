import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Title, useTheme, Dialog, Portal, } from 'react-native-paper';
import { useAppContext } from '../context/AppContext';
import { Recipe, RecipeCategory } from '../types';
import { DATABASE_UTILS } from '../constants/Database';
import { parseRecipe } from '../utils/recipeParser';
import SelectComponent from '../components/SelectComponent';

const AddRecipeScreen = ({ navigation, route }: any) => {
  const { recipes, setRecipes, updateRecipe } = useAppContext();
  const { colors } = useTheme();
  const editingRecipe = route.params?.recipe;
  
  const categoryOptions: RecipeCategory[] = ['entrée', 'plat principal', 'dessert', 'petit déjeuner', 'apéro'];

  const [name, setName] = useState(editingRecipe?.name || '');
  const [category, setCategory] = useState(editingRecipe?.category || '');
  const [prepTime, setPrepTime] = useState(editingRecipe?.prepTime.toString() || '');
  const [cookTime, setCookTime] = useState(editingRecipe?.cookTime.toString() || '');
  const [servings, setServings] = useState(editingRecipe?.servings.toString() || '');
  const [ingredients, setIngredients] = useState(editingRecipe?.ingredients.join('\n') || '');
  const [instructions, setInstructions] = useState(editingRecipe?.instructions.join('\n') || '');
  const [importDialogVisible, setImportDialogVisible] = useState(false);
  const [importText, setImportText] = useState('');

  const handleAddRecipe = () => {
    const newRecipe: Recipe = {
      id: editingRecipe?.id || DATABASE_UTILS.getNewRecipeId(recipes),
      name,
      category,
      prepTime: parseInt(prepTime),
      cookTime: parseInt(cookTime),
      servings: parseInt(servings),
      ingredients: ingredients.split('\n'),
      instructions: instructions.split('\n'),
    };

    if (editingRecipe) {
      updateRecipe(newRecipe);
    } else {
      setRecipes([...recipes, newRecipe]);
    }

    navigation.goBack();
  };

  const handleImportRecipe = () => {
    const importedRecipe = parseRecipe(importText);
    if (importedRecipe) {
      setName(importedRecipe.name);
      setCategory(importedRecipe.category);
      setPrepTime(importedRecipe.prepTime.toString());
      setCookTime(importedRecipe.cookTime.toString());
      setServings(importedRecipe.servings.toString());
      setIngredients(importedRecipe.ingredients.join('\n'));
      setInstructions(importedRecipe.instructions.join('\n'));
      setImportDialogVisible(false);
    } else {
      alert("Impossible d'importer la recette. Vérifiez le format et réessayez.");
    }
  };

  return (
    <KeyboardAvoidingView 
      style={[styles.container, { backgroundColor: colors.background }]} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title style={styles.title}>{editingRecipe ? 'Edition Recette' : 'Ajout recette'}</Title>
        <Button mode="outlined" onPress={() => setImportDialogVisible(true)} style={styles.importButton}>
          Import Recipe
        </Button>
        <TextInput
          label="Nom recette"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <SelectComponent
          label="Categorie"
          options={categoryOptions}
          selectedValue={category}
          onValueChange={value => setCategory(value)}
          style={styles.input}
        />
        <TextInput
          label="Temps de prep. (minutes)"
          value={prepTime}
          onChangeText={setPrepTime}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          label="Temps de cuisson (minutes)"
          value={cookTime}
          onChangeText={setCookTime}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          label="Couverts"
          value={servings}
          onChangeText={setServings}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          label="Ingrédients (une par ligne)"
          value={ingredients}
          onChangeText={setIngredients}
          multiline
          style={styles.input}
        />
        <TextInput
          label="Instructions (une par ligne)"
          value={instructions}
          onChangeText={setInstructions}
          multiline
          style={styles.input}
        />
      </ScrollView>
      <View style={[styles.buttonContainer, { backgroundColor: colors.background }]}>
        <Button mode="contained" onPress={handleAddRecipe} style={styles.button}>
          {editingRecipe ? 'Enregistrer la Recette' : 'Ajouter Recette'}
        </Button>
      </View>

      <Portal>
        <Dialog visible={importDialogVisible} onDismiss={() => setImportDialogVisible(false)}>
          <Dialog.Title>Import Recipe</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Paste recipe text here"
              value={importText}
              onChangeText={setImportText}
              multiline
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setImportDialogVisible(false)}>Cancel</Button>
            <Button onPress={handleImportRecipe}>Import</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  buttonContainer: {
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
  importButton: {
    marginBottom: 16,
  },
});

export default AddRecipeScreen;