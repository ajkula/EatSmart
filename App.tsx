import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useTheme } from './src/hooks/useTheme';
import AppNavigator from './src/navigation/AppNavigator';
import { AppContextProvider } from './src/context/AppContext';

export default function App() {
  return (
    <AppContextProvider>
      <ThemedApp />
    </AppContextProvider>
  );
}

const ThemedApp = () => {
  const { theme } = useTheme();

  const updatedTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      card: theme.colors.card || theme.colors.background,
      border: theme.colors.border || theme.colors.primary,
      notification: theme.colors.notification || theme.colors.accent,
    },
  };

  return (
    <PaperProvider theme={updatedTheme}>
      <NavigationContainer theme={updatedTheme}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};