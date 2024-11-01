import { ThemeOption } from './ThemeOption';
import { InterfaceOptionContainer } from '@components';
import React, { useEffect } from 'react';

export const ThemeSelector = () => {
  const [theme, setTheme] = React.useState<'system' | 'dark' | 'light'>(() => {
    const localTheme = localStorage.getItem('theme') as 'dark' | 'light' | 'system';
    return localTheme || 'system';
  });
  const themeOptions: Array<'system' | 'dark' | 'light'> = ['system', 'dark', 'light'];

  useEffect(() => {
    const applyTheme = (theme: 'system' | 'dark' | 'light') => {
      if (theme === 'system') {
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      if (theme === 'dark') {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      }
      if (theme === 'light') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme(theme);

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = (e.newValue as 'dark' | 'light' | 'system') || 'system';
        setTheme(newTheme);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [theme]);

  return (
    <InterfaceOptionContainer>
      {themeOptions.map((option) => (
        <ThemeOption key={option} option={option} theme={theme} setTheme={setTheme} />
      ))}
    </InterfaceOptionContainer>
  );
};