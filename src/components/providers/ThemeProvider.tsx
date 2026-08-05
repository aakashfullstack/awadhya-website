'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'noir' | 'bloom';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('noir');

  useEffect(() => {
    // Read from localStorage on mount
    const savedTheme = localStorage.getItem('awadhya-theme') as Theme | null;
    if (savedTheme && (savedTheme === 'noir' || savedTheme === 'bloom')) {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('awadhya-theme', newTheme);
    document.cookie = `awadhya-theme=${newTheme}; path=/; max-age=31536000`;
  };

  const toggleTheme = () => {
    setTheme(theme === 'noir' ? 'bloom' : 'noir');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
