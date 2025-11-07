import React, { useContext } from 'react';
import { ThemeProvider } from './ThemeContext';
import darkIcon from '../assets/dark-icon.png';
import lightIcon from '../assets/light-icon.png';
import './ThemeToggle.css';
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeProvider);
  return (
    <button onClick={toggleTheme} className="theme">
     <img
        src={theme === 'light' ? darkIcon : lightIcon}
        alt={theme === 'light' ? 'change to dark theme' : 'change to light theme'}
        className="theme-icon"
      />
    </button>
  );
}
export default ThemeToggle;