import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';

const c = {
  headerImage: 'max-w-full rounded-full bg-gray-400 block relative',
  heading: 'text-4xl font-bold border-none mt-8',
};

function Index() {
  return (
    <Container>
      <Image
        className={c.headerImage}
        src="/../public/memoji.png"
        width={110}
        height={110}
      />
      <h1 className={c.heading}>Hi I&apos;am Max</h1>
    </Container>
  );
}

export default Index;
