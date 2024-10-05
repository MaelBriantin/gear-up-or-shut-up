import { reverse } from 'dns';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {},
    colors: {
      background: 'var(--background-color)',
      backgroundReverse: 'var(--background-color-reverse)',
      text: 'var(--text-color)',
      textReverse: 'var(--text-color-reverse)',
    },
    fontFamily: {
      sans: ['Geist', 'sans-serif'],
      mono: ['Geist Mono', 'monospace'],
    },
    extend: {}
  },
  plugins: [],
}

