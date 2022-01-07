import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import DarkModeToggle from '@/components/DarkModeToggle';

const classes = {
  links: 'lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black dark:text-gray-200 font-bold items-center justify-center hover:bg-gray-600 hover:text-white ',
  DarkModeToggle: 'ml-auto',
};

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-3 lg:w-[900px] lg:m-auto lg:flex-row-reverse">
      <button
        type="button"
        className="inline-flex p-3 rounded lg:hidden hover:text-white outline-none"
        onClick={handleClick}
      >
        <HiMenuAlt4 className="fill-black dark:fill-white" size={25} />
      </button>
      <DarkModeToggle classname={classes.DarkModeToggle} />
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:w-auto`}
      >
        <div
          className="mt-8 lg:mt-4 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
        >
          <Link href="/">
            <a className={classes.links}>
              Home
            </a>
          </Link>
          <Link href="/">
            <a className={classes.links}>
              Contact
            </a>
          </Link>
          <Link href="/">
            <a className={classes.links}>
              Blog
            </a>
          </Link>
          <Link href="/">
            <a className={classes.links}>
              {' '}
              Source
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
