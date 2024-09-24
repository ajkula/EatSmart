import React, { useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Searchbar, ActivityIndicator, Modal, Text, Button, Icon, Checkbox, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RecipeCard from '../components/RecipeCard';
import { useAppContext } from '../context/AppContext';
import { Recipe, RecipeCategory, RootStackParamList } from '../types';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../hooks/useTheme';

type Filters = {
  category: RecipeCategory | false;
  prepTime: number | false;
  ingredients: string[];
}
type RecipesScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const RecipesScreen = () => {
  const { settings } = useAppContext();
  const recipeCategories: RecipeCategory[] = ['entrée', 'plat principal', 'dessert', 'petit déjeuner', 'apéro'];
  const defaultFilters: Filters = { category: false, prepTime: false, ingredients: [] };
  const { recipes, isLoading, isInitialized, error } = useAppContext();
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSelecting, setIsSelecting] = React.useState(false);
  const [selectedRecipes, setSelectedRecipes] = React.useState<Recipe[]>([]);
  const [filters, setFilters] = React.useState<Filters>(defaultFilters);
  const [filterModalVisible, setFilterModalVisible] = React.useState(false);
  const [tempPrepTime, setTempPrepTime] = React.useState(15);
  const navigation = useNavigation<RecipesScreenNavigationProp>();

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !filters.category || recipe.category === filters.category;
    const matchesPrepTime = !filters.prepTime || recipe.prepTime <= filters.prepTime;
    return matchesSearch && matchesCategory && matchesPrepTime;
  });

  const toggleSelectMode = useCallback(() => {
    if (isSelecting && selectedRecipes.length > 0) {
      navigation.navigate('ShoppingList', {
        dates: [],
        servings: settings.servingsCounts ?? 2,
        recipes: selectedRecipes,
      });
      setSelectedRecipes([]);
    }
    setIsSelecting(!isSelecting);
  }, [isSelecting, selectedRecipes, navigation]);

  const handleSelect = useCallback((recipe: Recipe) => {
    setSelectedRecipes(prev =>
      prev.includes(recipe)
        ? prev.filter(r => r.id !== recipe.id)
        : [...prev, recipe]
    );
  }, []);

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  const handleAddRecipe = () => {
    navigation.navigate('AddRecipe', { recipe: undefined });
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
        <Text>Erreur: {error}</Text>
      </View>
    );
  }

  if (isInitialized && recipes.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text>Aucune recette trouvée. Ajoutez votre première recette!</Text>
        <Button mode="contained" onPress={handleAddRecipe} style={styles.button}>
          Add Recipe
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Chercher"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
        />
        <Button
          mode="contained"
          onPress={() => setFilterModalVisible(true)}
          style={styles.filterButton}
          contentStyle={styles.buttonContent}
        >
          <Icon source="filter-variant" color="white" size={24} />
        </Button>
        <Button
          mode="contained"
          onPress={toggleSelectMode}
          style={styles.selectButton}
          contentStyle={styles.buttonContent}
        >
          {isSelecting ? (selectedRecipes.length !== 0 ?
            <Icon source="check" color="white" size={24} /> :
            <Icon source="close" color="white" size={24} />) :
            <Icon source="select-all" color="white" size={24} />}
        </Button>
      </View>
      <FlatList
        data={filteredRecipes}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={handleRecipePress}
            isSelecting={isSelecting}
            isSelected={selectedRecipes.includes(item)}
            onSelect={handleSelect}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <Button
        mode="contained"
        onPress={handleAddRecipe}
        style={styles.button}>
        Ajouter recette
      </Button>
      <Modal
        visible={filterModalVisible}
        onDismiss={() => setFilterModalVisible(false)}
        contentContainerStyle={[styles.modalContent, { backgroundColor: theme.colors.surface }]}
      >
        <Text style={[styles.modalTitle, { color: theme.colors.onSurface }]}>Filtres</Text>
        <View style={styles.filterOptions}>
          <Text style={styles.filterLabel}>Catégorie :</Text>
          <Picker
            selectedValue={filters.category || 'none'}
            style={[styles.picker, { color: theme.colors.onSurface }] as any}
            onValueChange={(itemValue) =>
              setFilters({ ...filters, category: itemValue === 'none' ? false : itemValue as RecipeCategory })
            }
          >
            <Picker.Item label="Aucune" value="none" />
            {Object.values(recipeCategories).map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>

          <Text style={[styles.filterLabel, { color: theme.colors.onSurface }]}>Temps de préparation maximum (minutes) :</Text>
          <View style={styles.prepTimeContainer}>
            <TextInput
              style={styles.prepTimeInput}
              keyboardType="numeric"
              value={tempPrepTime.toString()}
              onChangeText={(text) => setTempPrepTime(parseInt(text) || 0)}
            />
            <Checkbox
              status={filters.prepTime ? 'checked' : 'unchecked'}
              onPress={() => setFilters({ ...filters, prepTime: filters.prepTime ? false : tempPrepTime })}
            />
          </View>
        </View>
        <View style={styles.modalButtons}>
          <Button
            mode="outlined"
            onPress={() => {
              setFilters(defaultFilters);
              setTempPrepTime(15);
              setFilterModalVisible(false);
            }}
            icon="refresh"
          >
            Réinitialiser
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setFilters({ ...filters, prepTime: filters.prepTime ? tempPrepTime : false });
              setFilterModalVisible(false);
            }}
          >
            Appliquer
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchbar: {
    flex: 0.8,
    marginRight: 5,
    maxWidth: 150,
  },
  filterButton: {
    flex: 0.13,
    flexWrap: 'wrap',
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    minWidth: 45,
    maxWidth: 75,
  },
  selectButton: {
    flex: 0.2,
    flexGrow: 1,
    flexWrap: 'wrap',
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 30,
    maxWidth: 75,
  },
  buttonContent: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterOptions: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
  picker: {
    borderWidth: 1,
    backgroundColor: '#555',
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  prepTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  prepTimeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,
    marginRight: 10,
    marginTop: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
