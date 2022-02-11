import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { HiMenuAlt4 } from 'react-icons/hi';
import Link from 'next/link';
import { AiOutlineGithub } from 'react-icons/ai';
import DarkModeToggle from '@/components/DarkModeToggle';

const classes = {
  NavLinks: 'lg:inline-flex mb-5 dlg:w-auto w-full px-3 py-2 rounded text-black dark:text-gray-200 font-bold items-center justify-center dark:hover:bg-gray-500 dark:text-black hover:bg-black hover:text-white ',
  DarkModeToggle: 'ml-auto',
  sourceLink: 'inline-flex flex-row-reverse',
  githubIcon: 'relative left-1 inline-flex justify-start items-center bottom-px',
};

export default function Navigation() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav
      className="flex items-center justify-between flex-wrap p-5 lg:w-[800px] lg:m-auto lg:flex-row-reverse mt-2 "
    >
      <button
        type="button"
        className="inline-flex p-3 rounded lg:hidden hover:text-white outline-none"
        onClick={handleClick}
      >
        {active === true
          ? (<MdClose className="fill-black dark:fill-white" size={25} />)
          : (<HiMenuAlt4 className="fill-black dark:fill-white" size={25} />
          )}
      </button>
      <DarkModeToggle classname={classes.DarkModeToggle} />
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:w-auto animate-opacity`}
      >

        <div
          className="mt-8 lg:mt-4 h-screen lg:h-auto lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
        >
          <Link href="/" passHref>
            <a className={classes.NavLinks}>
              Home
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a className={classes.NavLinks}>
              Contact
            </a>
          </Link>
          <Link href="/about" passHref>
            <a className={classes.NavLinks}>
              About
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a className={classes.NavLinks}>
              Blog
            </a>
          </Link>
          <Link href="https://github.com/max-grzanna/personal-website" passHref>
            <a className={classes.NavLinks}>
              Source
              {' '}
              <AiOutlineGithub className={classes.githubIcon} size={20} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
