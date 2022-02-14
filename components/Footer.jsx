import React from 'react';
import Link from 'next/link';
import { AiOutlineGithub } from 'react-icons/ai';
import Collapsible from '@/components/Collapsible';

const c = {
  footerWrapper: 'border-0 border-black w-full pt-5 flex flex-col gap-y-4 text-gray-600 dark:text-gray-300',
  githubIcon: 'relative left-1 inline-flex justify-start items-center bottom-px',
  copyright: 'relative bottom-0 mt-5 text-gray-400 text-center',
  footerLinks: 'border-b pb-2 dark:border-gray-500',
  collapsibleLinks: 'flex flex-col gap-2 pl-6 text-gray-500',
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={c.footerWrapper}>
      <div className="pb-2 border-b dark:border-gray-500">
        <Collapsible
          text="Boring stuff"
          collapsed
          icon
        >
          <div className={c.collapsibleLinks}>
            <Link href="/imprint" passHref className={c.footerLinks}>
              <a>
                Imprint
              </a>
            </Link>
            <Link href="/privacy" passHref>
              <a>
                Privacy Policy
              </a>
            </Link>
          </div>
        </Collapsible>
      </div>
      <Link href="https://github.com/max-grzanna/personal-website" passHref>
        <a className={c.footerLinks}>
          Source
          {' '}
          <AiOutlineGithub size={20} className={c.githubIcon} />
        </a>
      </Link>
      <Link href="/about" passHref>
        <a className={c.footerLinks}>
          About
        </a>
      </Link>
      <Link href="/contact" passHref>
        <a className={c.footerLinks}>
          Contact
        </a>
      </Link>
      <Link href="/blog" passHref>
        <a className={c.footerLinks}>
          Blog
        </a>
      </Link>
      <span className={c.copyright}>
        &copy;
        {year}
        {' '}
        max-grzanna
      </span>
    </div>
  );
}
