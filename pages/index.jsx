import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Card from '@/components/Card';

const c = {
  headerImage: 'max-w-full rounded-full bg-gray-400 block relative',
  heading: 'text-4xl font-bold border-none mt-8 mb-4',
  postsHeading: 'mt-12',
};

function Index() {
  return (
    <Container>
      <Image
        className={c.headerImage}
        src="/memoji.png"
        width={110}
        height={110}
      />
      <h1 className={c.heading}>Hi I&apos;am Max</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <h2 className={c.postsHeading}>New Posts</h2>
      <div>
        <Card
          title="Coding a contact form with Next.js (without 3rd party libraries)"
          slug="contact-form"
        />
        <Card
          title="Using serverless databases with Planetscale and Prisma"
          slug="serverless-database-planetscale-prisma"
        />
        <Card
          title="Coding a contact form with Next.js (without 3rd party libraries)"
          slug="contact-form"
        />
      </div>
    </Container>
  );
}

export default Index;
