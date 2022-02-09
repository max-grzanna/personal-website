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
      <p>This site is under construction. Please come back later.</p>
    </Container>
  );
}
