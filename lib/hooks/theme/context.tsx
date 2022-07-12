import React, { createContext, useContext, useEffect, useState } from 'react';

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export type ThemeContextType = {
  themeMode: Theme;
  setTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setTheme] = useState<Theme>(Theme.light);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      if (savedTheme === 'dark') setTheme(Theme.dark);
      else setTheme(Theme.light);
    } else setTheme(Theme.light);
  }, []);

  useEffect(() => {
    if (themeMode === Theme.dark) localStorage.setItem('theme', 'dark');
    else localStorage.setItem('theme', 'light');
  }, [themeMode]);

  return <ThemeContext.Provider value={{ themeMode, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('You forgot to use ThemeProvider');
  }

  return context;
};
