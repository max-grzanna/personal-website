import React from 'react';
import Link from 'next/link';
import { AiOutlineGithub } from 'react-icons/ai';

const c = {
  footerWrapper: 'border-t-2 border-gray-700 dark:border-gray-300 w-full pt-5 flex flex-col gap-y-4 text-gray-600',
  githubIcon: 'relative left-1 inline-flex justify-start items-center bottom-px',
  copyright: 'relative bottom-0 mt-5 text-gray-400 text-center',
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={c.footerWrapper}>
      <Link href="/imprint" passHref>
        <a>
          Imprint
        </a>
      </Link>
      <Link href="/privacy" passHref>
        <a>
          Privacy Policy
        </a>
      </Link>
      <Link href="https://github.com/max-grzanna/personal-website" passHref>
        <a>
          Source
          {' '}
          <AiOutlineGithub size={20} className={c.githubIcon} />
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
