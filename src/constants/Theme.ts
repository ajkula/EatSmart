import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B',
    accent: '#4ECDC4',
    background: '#F7F7F7',
    text: '#333333',
    card: '#FFFFFF', // Ajout de la propriété card
    border: '#E0E0E0', // Ajout de la propriété border
    notification: '#FF6B6B', // Ajout de la propriété notification
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  dark: true,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#FF6B6B',
    accent: '#4ECDC4',
    background: '#333333',
    text: '#F7F7F7',
    card: '#424242', // Ajout de la propriété card
    border: '#616161', // Ajout de la propriété border
    notification: '#FF6B6B', // Ajout de la propriété notification
  },
};