import React from 'react';
import { useTheme } from 'next-themes';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';

const classes = {
  toggle: 'p-3 h-10 w-10 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-300',
  svgMoon: 'fill-black',
  svgSun: 'fill-white',
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
      {theme === 'dark' ? <BsSun className={classes.svgSun} /> : <BsFillMoonFill className={classes.svgMoon} />}
    </button>
  );
}
