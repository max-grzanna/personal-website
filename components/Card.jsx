import React from 'react';
import Link from 'next/link';
import { AiOutlineEye } from 'react-icons/ai';

const c = {
  cardWrapper:
        'p-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded basis-2/6',
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
