import { useAppContext } from '../context/AppContext';
import { lightTheme, darkTheme } from '../constants/Theme';

export const useTheme = () => {
  const { settings, updateSettings } = useAppContext();

  const toggleTheme = () => {
    updateSettings({...settings, isDarkMode: !settings.isDarkMode});
  };

  const theme = settings.isDarkMode ? darkTheme : lightTheme;

  return { theme, ...settings, toggleTheme };
};