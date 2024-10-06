import React from 'react';
import { useThemeStore } from '@/stores/themeStore';
import './index.css';

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : theme === 'light' ? 'darkest' : 'dark';
    setTheme(newTheme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div onClick={toggleTheme} className={`theme-toggle ${theme !== 'light' ? 'light-theme' : 'dark-theme'}`}>
      <span>{theme === 'dark' ? 'Light' : theme === 'light' ? 'Darkest' : 'Dark'} Mode</span>
    </div>
  );
};