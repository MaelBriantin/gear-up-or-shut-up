import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark' | 'darkest';
  themeOptions: ['light', 'dark', 'darkest'];
  setTheme: (theme: 'light' | 'dark' | 'darkest') => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: localStorage.getItem('theme') as 'dark' | 'light' | 'darkest' || 'dark',
  themeOptions: ['light', 'dark', 'darkest'],
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
  },
}));

export default useThemeStore;