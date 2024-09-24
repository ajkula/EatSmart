import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text, ActivityIndicator } from 'react-native-paper';
import { useTheme } from './src/hooks/useTheme';
import AppNavigator from './src/navigation/AppNavigator';
import { AppContextProvider, useAppContext } from './src/context/AppContext';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function App() {
  return (
    <AppContextProvider>
      <ThemedApp />
    </AppContextProvider>
  );
}

const ThemedApp = () => {
  const { theme } = useTheme();
  const { isLoading, error, isInitialized, recipes } = useAppContext();

  const updatedTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      card: theme.colors.card || theme.colors.background,
      border: theme.colors.border || theme.colors.primary,
      notification: theme.colors.notification || theme.colors.accent,
    },
  };

  // useEffect(() => {
  //   console.log('AppContent rendered. isLoading:', isLoading, 'error:', error, 'isInitialized:', isInitialized);
  //   console.log('Recipes count:', recipes.length);
  // }, [isLoading, error, isInitialized, recipes]);

  const renderContent = () => {
    if (isLoading || !isInitialized) {
      return (
        <Animated.View 
          entering={FadeIn} 
          exiting={FadeOut}
          style={[styles.centered, { backgroundColor: updatedTheme.colors.background }]}
        >
          <ActivityIndicator size="large" color={updatedTheme.colors.primary} />
          <Text style={[styles.loadingText, { color: updatedTheme.colors.text }]}>
            {isLoading ? "Chargement..." : "Initialisation..."}
          </Text>
        </Animated.View>
      );
    }

    if (error) {
      return (
        <Animated.View 
          entering={FadeIn} 
          style={[styles.centered, { backgroundColor: updatedTheme.colors.background }]}
        >
          <Text style={[styles.errorText, { color: updatedTheme.colors.error }]}>Erreur :</Text>
          <Text style={[styles.errorMessage, { color: updatedTheme.colors.text }]}>{error}</Text>
        </Animated.View>
      );
    }

    return (
      <NavigationContainer theme={updatedTheme}>
        <AppNavigator />
      </NavigationContainer>
    );
  };

  return (
    <PaperProvider theme={updatedTheme}>
      {renderContent()}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    textAlign: 'center',
  },
});