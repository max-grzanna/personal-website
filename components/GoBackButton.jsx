import React from 'react';
import { useRouter } from 'next/router';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const c = {
  goBackButton: 'bg-gray-900 dark:bg-gray-600 text-gray-100 rounded flex flex-row items-center justify-center w-32 h-10 mt-12',
  Icon: 'inline-block',
};

export default function GoBackButton() {
  const router = useRouter();

  return (
    <div>
      <button className={c.goBackButton} type="button" onClick={() => router.back()}>
        <MdKeyboardArrowLeft size={25} className={c.Icon} />
        {' '}
        Back
      </button>
    </div>
  );
}
