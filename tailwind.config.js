/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors:{
      white: '#f00',
      black: '#0f0',
      'midnight': '#121063',
    }
  },
  plugins: [],
}

