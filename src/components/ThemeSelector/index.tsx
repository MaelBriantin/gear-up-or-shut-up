import React from 'react';
import useThemeStore from '@/stores/themeStore';
import { capitalize } from '@/utils';

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
    <div
      className={`
        bg-backgroundReverse text-textReverse
        flex justify-between items-center absolute top-4 right-4 px-4 py-2 rounded-[4px] text-sm gap-6
      `}
    >
      {themeOptions.map((option) => (
        <div 
          onClick={() => setTheme(option)} key={option} 
          className={`${theme !== option ? 'cursor-pointer hover:opacity-75' : 'cursor-default'}`}
        >
          <span className={option === theme ? 'opacity-1' : 'opacity-0'}>[</span>{capitalize(option)}<span className={option === theme ? 'opacity-1' : 'opacity-0'}>]</span>
        </div>
      ))}
    </div>
  );
};