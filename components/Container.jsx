import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
// eslint-disable-next-line import/extensions,import/no-unresolved
import DarkModeToggle from '@/components/DarkModeToggle';
import Footer from '@/components/Footer';

const classes = {
  links: 'lg:inline-flex mb-5   dlg:w-auto w-full px-3 py-2 rounded text-black dark:text-gray-200 font-bold items-center justify-center hover:bg-gray-600 hover:text-white ',
  DarkModeToggle: 'ml-auto',
  Content: 'lg:w-[800px] m-auto mt-5 lg:mt-20 p-4 flex items-start min-h-screen flex-col',
  sourceLink: 'inline-flex flex-row-reverse',
  githubIcon: 'relative left-1 inline-flex justify-start items-center bottom-px',
  footer: 'lg:w-[800px] m-auto mt-5 lg:mt-20 p-4 flex items-start',
};

export default function Navbar({ children }) {
  const [active, setActive] = useState(false);

  const meta = {
    title: 'Max Grzanna',
    description: 'Blog about stuff that I thought were interesting.',
    type: 'website',
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="LYNPop6zGTPjqVWXNlel5zicwWKh2EjzVnZ-l4gCzzA" />
      </Head>
      <nav className="flex items-center justify-between flex-wrap p-3 lg:w-[900px] lg:m-auto lg:flex-row-reverse">
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
          }   w-full lg:inline-flex lg:w-auto`}
        >

          <div
            className="mt-8 lg:mt-4 h-screen lg:h-auto lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
          >
            <Link href="/" passHref>
              <a className={classes.links}>
                Home
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className={classes.links}>
                Contact
              </a>
            </Link>
            <Link href="/blog" passHref>
              <a className={classes.links}>
                Blog
              </a>
            </Link>
            <Link href="https://github.com/max-grzanna/personal-website" passHref>
              <a className={classes.links}>
                Source
                {' '}
                <AiOutlineGithub className={classes.githubIcon} size={20} />
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div className={classes.Content}>
        {children}
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>

  );
}
