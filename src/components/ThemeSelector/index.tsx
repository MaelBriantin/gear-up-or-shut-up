import React from 'react';
import { useThemeStore } from '@/stores';
import { ThemeOption } from './ThemeOption';
import { InterfaceOptionContainer } from '@components';

export const ThemeSelector = () => {
  const { theme, themeOptions, setTheme } = useThemeStore();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--background-color', '#121212');
      root.style.setProperty('--background-color-reverse', '#f5f5f5');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-color-reverse', '#000000');
      root.style.setProperty('--dot-animation-rgba', 'rgba(18, 18, 18, 0.5)');
    } else if (theme === 'darkest') {
      root.style.setProperty('--background-color', '#000000');
      root.style.setProperty('--background-color-reverse', '#f5f5f5');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-color-reverse', '#000000');
      root.style.setProperty('--dot-animation-rgba', 'rgba(18, 18, 18, 0.5)');
    } else {
      root.style.setProperty('--background-color', '#f5f5f5');  
      root.style.setProperty('--background-color-reverse', '#121212');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--text-color-reverse', '#ffffff');
      root.style.setProperty('--dot-animation-rgba', 'rgba(245, 245, 245, 0.5)');
    }
  }, [theme]);

  return (
    <InterfaceOptionContainer>
      {themeOptions.map((option) => (
          <ThemeOption key={option} option={option} theme={theme} setTheme={setTheme} />
      ))}
    </InterfaceOptionContainer>
  );
};