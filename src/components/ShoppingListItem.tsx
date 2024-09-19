import React from 'react';
import { StyleSheet } from 'react-native';
import { List, Checkbox, Button } from 'react-native-paper';
import { ShoppingListItem as ShoppingListItemType } from '../types';

interface ShoppingListItemProps {
  item: ShoppingListItemType;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ item, onToggle, onRemove }) => {
  return (
    <List.Item
      title={item.name}
      left={() => (
        <Checkbox
          status={item.checked ? 'checked' : 'unchecked'}
          onPress={() => onToggle(item.id)}
        />
      )}
      right={() => (
        <Button onPress={() => onRemove(item.id)}>Remove</Button>
      )}
      style={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default ShoppingListItem;