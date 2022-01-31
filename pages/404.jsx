import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/router';
import Container from '@/components/Container';

export default function Custom404() {
  const router = useRouter();
  return (
    <Container>
      <h1 className="border-0">404 - Page not found!</h1>
      <p>The page you were looking for does not exist. What are you looking for?</p>

      <div className=" block relative">
        <span className="mt-8 text-black block relative font-medium">¯\_(ツ)_/¯</span>
      </div>
      <button
        type="button"
        onClick={() => router.push('/')}
        className="mt-8 bg-gray-900 dark:bg-gray-600 text-gray-100 rounded flex flex-row items-center justify-center w-44 h-10"
      >
        <MdKeyboardArrowLeft size={20} className="inline-block" />
        {' '}
        Return home
      </button>
    </Container>
  );
}
