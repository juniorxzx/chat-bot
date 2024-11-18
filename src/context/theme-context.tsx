'use client'

import { createContext, useState, useEffect, ReactNode } from 'react';
import { parseCookies, setCookie } from 'nookies';

type Theme = 'dark' | 'light';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Recupera os cookies do lado do cliente
    const cookies = parseCookies();
    const storedTheme = cookies.theme as Theme;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Define o cookie com a nova preferência de tema
    setCookie(null, 'theme', newTheme, {
      maxAge: 365 * 24 * 60 * 60, // 1 ano em segundos
      path: '/',
    });

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
