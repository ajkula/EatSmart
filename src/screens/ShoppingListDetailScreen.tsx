import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TextInput, Button, List, Checkbox } from 'react-native-paper';
import { useAppContext } from '../context/AppContext';
import { ShoppingListItem } from '../types';
import { DATABASE_UTILS } from '../constants/Database';

const ShoppingListScreen = () => {
  const { shoppingList, setShoppingList, mealPlans, recipes } = useAppContext();
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const generatedList = DATABASE_UTILS.generateShoppingList(mealPlans, recipes);
    setShoppingList(generatedList);
  }, [mealPlans, recipes]);

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

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Add new item"
        />
        <Button mode="contained" onPress={addItem}>
          Add
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
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
});

export default ShoppingListScreen;