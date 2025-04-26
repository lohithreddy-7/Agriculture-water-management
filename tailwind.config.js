/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dbf0dd',
          200: '#b8e0bc',
          300: '#86c98c',
          400: '#4faa57',
          500: '#3c8943',
          600: '#2d6b33',
          700: '#27562b',
          800: '#224525',
          900: '#1d3a21',
        },
        earth: {
          100: '#f7e9d7',
          200: '#e6cba7',
          300: '#d5ad77',
          400: '#c38f47',
          500: '#a06c2c',
          600: '#815624',
          700: '#61411b',
          800: '#422c12',
          900: '#231709',
        },
        water: {
          100: '#e6f3ff',
          200: '#bde3ff',
          300: '#94d3ff',
          400: '#6bc3ff',
          500: '#42b3ff',
          600: '#358fcc',
          700: '#286b99',
          800: '#1a4766',
          900: '#0d2433',
        }
      }
    },
  },
  plugins: [],
};