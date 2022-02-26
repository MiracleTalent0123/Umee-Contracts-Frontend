import { createContext, useContext } from 'react';

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export type ThemeContextType = {
  themeMode: Theme;
  setTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: Theme.light,
  setTheme: (theme) => console.warn('no theme provider'),
});

export const useTheme = () => useContext(ThemeContext);
