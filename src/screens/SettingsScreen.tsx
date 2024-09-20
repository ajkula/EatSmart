import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Switch, IconButton } from 'react-native-paper';
import { useTheme } from '../hooks/useTheme';
import { useAppContext } from '../context/AppContext';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { settings, updateSettings } = useAppContext();
  const MaxServings = 20;

  const updateServings = useCallback((newServings: number) => {
    updateSettings({ servingsCounts: newServings });
  }, [updateSettings]);

  const incrementServings = useCallback(() => {
    updateServings(Math.min(settings.servingsCounts + 1, MaxServings));
  }, [settings.servingsCounts, updateServings, MaxServings]);

  const decrementServings = useCallback(() => {
    updateServings(Math.max(settings.servingsCounts - 1, 1));
  }, [settings.servingsCounts, updateServings]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres de l'application</Text>
      <View style={styles.setting}>
        <Text>Thème Sombre</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
      <View style={styles.setting}>
        <Text>Nombre de personnes</Text>
        <View style={styles.stepper}>
          <IconButton
            icon="minus"
            size={20}
            onPress={decrementServings}
            disabled={settings.servingsCounts <= 1}
          />
          <View style={styles.servingsCount}>
            <Text style={styles.servingsText}>{settings.servingsCounts}</Text>
          </View>
          <IconButton
            icon="plus"
            size={20}
            onPress={incrementServings}
            disabled={settings.servingsCounts >= MaxServings}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  servingsCount: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  servingsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
