module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ebony: '#121212',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
