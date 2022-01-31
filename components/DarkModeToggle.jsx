import React from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

const classes = {
  toggle: 'p-3 h-10 w-10 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-300 flex items-center justify-center',
  toggleIconMoon: 'stroke-black',
  toggleIconSun: 'stroke-white',
};

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={classes.toggle}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FiSun size={18} className={classes.toggleIconSun} />
        : <FiMoon size={20} className={classes.toggleIconMoon} />}
    </button>
  );
}
