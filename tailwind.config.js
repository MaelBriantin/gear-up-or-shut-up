import { reverse } from 'dns';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Geist', 'sans-serif'],
      mono: ['Geist Mono', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'purple-gradient': 'linear-gradient(to bottom right, #3b82f6, #6366f1, #8b5cf6)',
      },
    }
  },
  plugins: [],
}

