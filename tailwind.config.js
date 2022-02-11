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
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        ebony: '#121212',
        ebonyLight: '#1f1f1f',
      },
      animation: {
        opacity: 'fadeIn .35s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%, 1%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
