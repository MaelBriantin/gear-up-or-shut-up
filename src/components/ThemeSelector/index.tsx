import React from 'react';
import useThemeStore from '@/stores/themeStore';
import { capitalize } from '@/utils';
import './index.css';

export const ThemeSelector = () => {
  const { theme, themeOptions, setTheme } = useThemeStore();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`theme-selector ${theme !== 'light' ? 'light-theme' : 'dark-theme'}`}>
      {themeOptions.map((option) => (
        <div onClick={() => setTheme(option)} key={option} className={`${theme === option ? '' : 'theme-selector-option'}`}>
          {theme === option ? 
            `[${capitalize(option)}]` :
            capitalize(option)
          }
        </div>
      ))}
    </div>
  );
};