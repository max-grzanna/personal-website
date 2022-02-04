import Head from 'next/head';
import React from 'react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const classes = {
  links: 'lg:inline-flex mb-5 dlg:w-auto w-full px-3 py-2 rounded text-black dark:text-gray-200 font-bold items-center justify-center dark:hover:bg-gray-500 dark:text-black hover:bg-black hover:text-white ',
  DarkModeToggle: 'ml-auto',
  Content: 'lg:w-[800px] m-auto lg:mt-5 lg:mt-12 p-8 flex items-start min-h-screen flex-col',
  sourceLink: 'inline-flex flex-row-reverse',
  githubIcon: 'relative left-1 inline-flex justify-start items-center bottom-px',
  footer: 'lg:w-[800px] m-auto mt-5 lg:mt-20 p-8 flex items-start',
};

export default function Container(props) {
  const { children, ...customMeta } = props;
  const meta = {
    description: 'Blog about stuff that I thought were interesting.',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="vXTAhO8Fruu1g_zPChN_L4yjJuCe5yjWZgCy0HpBghg" />
      </Head>
      <Navigation />
      <div className={classes.Content}>
        {children}
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>

  );
}
