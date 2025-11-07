import React, { createContext, useState, useEffect } from 'react';

export const ThemeProvider = createContext();
export function ThemeContext({ children }) {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  return (
    <ThemeProvider.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}