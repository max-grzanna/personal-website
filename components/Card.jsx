import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { AiOutlineEye } from 'react-icons/ai';
import { fetcher } from '@/lib/fetcher';

const c = {
  cardWrapper:
        'p-4 bg-black text-white dark:bg-gray-100 dark:text-black rounded basis-2/6',
  viewCounter: 'flex items-center gap-2',
};

export default function Card({ title, slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

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
