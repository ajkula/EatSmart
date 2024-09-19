import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TextInput, Button, List, Checkbox, ActivityIndicator, Text, Icon } from 'react-native-paper';
import { useAppContext } from '../context/AppContext';
import { RootStackParamList, ShoppingListItem, MealPlan } from '../types';
import { DATABASE_UTILS } from '../constants/Database';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { generateShoppingList } from '../utils/shoppingListGenerator';

type ShoppingListScreenRouteProp = RouteProp<RootStackParamList, 'ShoppingList'>;
type ShoppingListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ShoppingList'>;

type ShoppingListScreenProps = {
  route: ShoppingListScreenRouteProp;
  navigation: ShoppingListScreenNavigationProp;
};

const ShoppingListScreen: React.FC<ShoppingListScreenProps> = ({ route }) => {
  const { shoppingList, setShoppingList, mealPlans, recipes, isLoading, error, settings } = useAppContext();
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    if (!isLoading && !error) {
      const dates = route.params?.dates;
      if (dates && dates.length > 0) {
      const selectedMealPlans = mealPlans.filter((plan: MealPlan) => dates.includes(plan.date));
      const generatedList = generateShoppingList(selectedMealPlans, settings.servingsCount);
      setShoppingList(generatedList);
    } else {
      setShoppingList([]);
    }
    }
  }, [route.params?.dates, mealPlans, recipes, isLoading, error, settings.servingsCount]);

  const addItem = () => {
    if (newItem.trim() !== '') {
      const newShoppingItem: ShoppingListItem = {
        id: DATABASE_UTILS.getNewShoppingListItemId(shoppingList),
        name: newItem.trim(),
        checked: false,
      };
      setShoppingList([...shoppingList, newShoppingItem]);
      setNewItem('');
    }
  };

  const removeAllItems = () => {
    setShoppingList([]);
  };

  const toggleItem = (id: string) => {
    setShoppingList(
      shoppingList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setShoppingList(shoppingList.filter((item) => item.id !== id));
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

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Ajouter item"
        />
        <Button style={styles.button} mode="contained" onPress={addItem}>
          Ajouter
        </Button>
      <Button onPress={removeAllItems} mode="contained" style={styles.deleteButton}>
        <Icon 
        source={"trash-can"}
        color={"white"}
        size={24}
        />
        </Button>
      </View>
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            left={() => (
              <Checkbox
                status={item.checked ? 'checked' : 'unchecked'}
                onPress={() => toggleItem(item.id)}
              />
            )}
            right={() => (
              <Button onPress={() => removeItem(item.id)}>Remove</Button>
            )}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 50,
    justifyContent: 'space-between',
  },
  input: {
    flex: 4,
    marginRight: 8,
    borderCurve: 'circular',
  },
  button: {
    backgroundColor: '#25B5A2',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
  deleteButton: {
    backgroundColor: '#f80B5C',
    marginLeft: 8,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShoppingListScreen;