import React from 'react';
import useThemeStore from '@/stores/themeStore';

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div onClick={toggleTheme} className={`theme-toggle ${theme === 'dark' ? 'light-theme' : 'dark-theme'}`}>
      <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
    </div>
  );
};