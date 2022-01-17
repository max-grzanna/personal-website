import React from 'react';
import Link from 'next/link';
import { fetcher } from 'lib/fetcher';
import useSWR from 'swr';
import { AiOutlineEye } from 'react-icons/ai';

const c = {
  cardWrapper:
        'p-4 bg-gray-900 text-white dark:bg-gray-700 dark:text-white rounded basis-2/6',
  viewCounter: 'flex items-center gap-2',
};

export default function Card({ title, slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = Number(data?.total);

  return (
    <div className={c.cardWrapper}>
      <Link href={`/blog/${slug}`} passHref>
        <a>
          <h4>{title}</h4>
          <div className={c.viewCounter}>
            <AiOutlineEye />
            <p>
              {views ? Number(views).toLocaleString() : '–'}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
