import React from 'react';
import Image from 'next/image';
import { VscGear } from 'react-icons/vsc';
import Container from '@/components/Container';
import Card from '@/components/Card';
import NextLogo from '../public/logos/nextjs-logo.svg';
import TailwindLogo from '../public/logos/tailwind-logo.svg';
import PscaleLogo from '../public/logos/planetscale-logo.svg';
import VercelLogo from '../public/logos/vercel-logo.svg';

const c = {
  headerImage: 'max-w-full rounded-full bg-gray-400 block relative',
  heading: 'text-4xl font-bold border-none mt-8 mb-4',
  postsHeading: 'mt-12',
  postCardsContainer: 'flex flex-col lg:flex-row gap-4',
  stackContainer: 'w-full flex flex-col gap-4',
  stackItem: 'border-b-2 last:border-none',
  stackGearIcon: 'relative top-3 left-2 animate-spin',
  stackDescription: 'text-gray-500',
  iconHeading: 'flex gap-2',
  iconHeadingText: 'font-medium',
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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <h2 className={c.postsHeading}>New Posts</h2>
      <div className={c.postCardsContainer}>
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

      <div className="flex items-center">
        <h2 className={c.postsHeading}>The Stack</h2>
        <VscGear className={c.stackGearIcon} size={25} />
      </div>
      <div className={c.stackContainer}>
        <div className={c.stackItem}>
          <h4>JS Framework</h4>
          <div className={c.iconHeading}>
            <p className={c.iconHeadingText}>Next.js</p>
            <NextLogo className="w-4" />
          </div>
          <p className={c.stackDescription}>
            SEO friendly React framework for building static and server rendered
            sites. Ships with clientside routing, API routes and tons more neat
            stuff. Integrates well with Vercel.
          </p>
        </div>
        <div className={c.stackItem}>
          <h4>CSS Framework</h4>

          <div className={c.iconHeading}>
            <p className={c.iconHeadingText}>Tailwind CSS</p>
            <TailwindLogo className="w-4 h-auto" />
          </div>
          <p className={c.stackDescription}>
            Highly customizable utility framework. Doesn’t come with prebuild
            components and operated on a low level.
          </p>
        </div>
        <div className={c.stackItem}>
          <h4>Database</h4>
          <div className={c.iconHeading}>
            <p className={c.iconHeadingText}>Planetscale</p>
            <PscaleLogo className="w-4 h-auto" />
          </div>
          <p className={c.stackDescription}>
            Scalable and serverless MySQL platform with branching
            functionalities similar to git. Works really well with prisma.
          </p>
        </div>
        <div className={c.stackItem}>
          <h4>Deployment and hosting</h4>
          <div className={c.iconHeading}>
            <p className={c.iconHeadingText}>Vercel</p>
            <VercelLogo className="w-4 h-auto" />
          </div>
          <p className={c.stackDescription}>
            Cloud platform for generating and hosting sites, use serverless
            functions and build automatically from github.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Index;
