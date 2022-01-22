import React, { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export default function viewCounter({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);

  const views = Number(data?.total);

  useEffect(() => {
    const registerView = () => fetch(`/api/views/${slug}`, {
      method: 'POST',
    });

    registerView();
  }, [slug]);

  // show views, if null output: ---, keeps logging error property of null
  return <span>{`${views > 0 ? views.toString() : '–––'} views`}</span>;
}
