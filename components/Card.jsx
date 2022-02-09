import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { AiOutlineEye } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { fetcher } from '@/lib/fetcher';

const c = {
  cardWrapper: 'p-4 rounded basis-2/6 border-2 border-gray-400 hover:border-gray-700 hover:border-4',
  cardArrowIcon: 'relative right-0 stroke-black top-4 w-12 ml-4',
  viewCounter: 'flex items-center gap-2',
  linkSection: 'flex flex-row items-center',
};

export default function Card({ title, slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <div className={c.cardWrapper}>
      <Link href={`/blog/${slug}`} passHref>
        <a>
          <div className={c.linkSection}>
            <h5 className="font-medium">{title}</h5>
            <BsArrowRight size={25} className={c.cardArrowIcon} />
          </div>
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
