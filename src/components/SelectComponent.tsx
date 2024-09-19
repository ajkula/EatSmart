import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Text } from 'react-native-paper';
import { RecipeCategory } from '../types';

interface SelectComponentProps {
  label: string;
  options: RecipeCategory[];
  selectedValue: RecipeCategory;
  onValueChange: (itemValue: RecipeCategory) => void;
  style?: ViewStyle;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ 
  label, 
  options, 
  selectedValue, 
  onValueChange, 
  style 
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => onValueChange(itemValue as RecipeCategory)}
          style={styles.picker}
        >
          {options.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default SelectComponent;