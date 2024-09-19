import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B',
    accent: '#4ECDC4',
    background: '#F7F7F7',
    text: '#333333',
    card: '#FFFFFF',
    border: '#E0E0E0', 
    notification: '#FF6B6B', 
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
    card: '#424242',
    border: '#616161',
    notification: '#FF6B6B',
  },
};