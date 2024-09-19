import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Searchbar, ActivityIndicator, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RecipeCard from '../components/RecipeCard';
import { useAppContext } from '../context/AppContext';
import { Recipe } from '../types';

type RootStackParamList = {
  RecipeDetail: { recipe: Recipe };
  AddRecipe: undefined;
};

type RecipesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetail'>;

const RecipesScreen = () => {
  const { recipes, isLoading, isInitialized, error } = useAppContext();
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation = useNavigation<RecipesScreenNavigationProp>();

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };
  
  const handleAddRecipe = () => {
    navigation.navigate('AddRecipe');
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
  
  if (isInitialized && recipes.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text>No recipes found. Add your first recipe!</Text>
        <Button mode="contained" onPress={handleAddRecipe} style={styles.button}>
          Add Recipe
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search recipes"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        data={filteredRecipes}
        renderItem={({ item }) => <RecipeCard recipe={item} onPress={handleRecipePress} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <Button
        mode="contained"
        onPress={handleAddRecipe}
        style={styles.button}>
          Ajouter recette
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar: {
    margin: 16,
  },
  list: {
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 16,
  },
});

export default RecipesScreen;
