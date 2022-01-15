import React from 'react';
import Link from 'next/link';
import { AiOutlineEye } from 'react-icons/ai';

const c = {
  cardWrapper: 'p-4 mb-6  bg-ebony text-white dark:bg-white dark:text-black rounded',
  viewCounter: 'flex items-center gap-2',
};

export default function Card({ title, slug }) {
  return (
    <div className={c.cardWrapper}>
      <Link href={`/blog/${slug}`} passHref>
        <a>
          <h4>{title}</h4>
          <div className={c.viewCounter}>
            <AiOutlineEye />
            <p>420</p>
          </div>
        </a>
      </Link>
    </div>
  );
}