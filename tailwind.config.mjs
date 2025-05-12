/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ead0bf',
        'text-primary': '#000000',
        'text-secondary': '#ffffff',
        'slide-tag': '#f3f3f3',
        'button-border': '#d4d4d4',
        'mercury': {
          light: '#F5F5F5', // Lighter mercury color
          DEFAULT: '#E6E6E6', // Standard mercury color
          shiny: '#D9D9D9', // Slightly darker, more reflective-looking
          dark: '#C2C2C2', // Darker mercury color
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'vw-1': '1vw',
        'vw-1.5': '1.5vw',
        'vw-1.7': '1.7vw',
        'vw-2': '2vw',
        'vw-2.5': '2.5vw',
        'vw-4': '4vw',
        'vw-4.5': '4.5vw',
      },
      padding: {
        'vw-1': '1vw',
        'vw-2.5': '2.5vw',
        'vw-3': '3vw',
        'vw-5': '5vw',
        'vw-8': '8vw',
        'vw-15': '15vw',
      },
      margin: {
        'vw-1.5': '1.5vw',
        'vw-2': '2vw',
        'vw-5': '5vw',
      },
      spacing: {
        'vw-1': '1vw',
        'vw-1.3': '1.3vw',
        'vw-1.5': '1.5vw',
        'vw-2': '2vw',
        'vw-2.5': '2.5vw',
        'vw-3': '3vw',
        'vw-5': '5vw',
        'vw-8': '8vw',
        'vw-15': '15vw',
      },
    },
  },
  plugins: [],
}