import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';

const c = {
  headline: 'w-full font-bold mb-12',
};

export default function About() {
  return (
    <Container
      title="Max Grzanna - About"
      description="Some information about myself."
    >
      <h1 className={c.headline}>About me</h1>
      <div className="mb-8 relative block">
        <Image
          src="https://res.cloudinary.com/pybghtl/image/upload/v1643664122/under-construction-crane.png"
          width={350}
          height={414}
          alt="construction site"
          priority="true"
        />
      </div>
      <p>This site is under construction. Please come back later.</p>
    </Container>
  );
}
