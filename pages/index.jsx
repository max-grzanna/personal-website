import React from 'react';
import Image from 'next/image';
import { VscGear } from 'react-icons/vsc';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import Container from '@/components/Container';
import Card from '@/components/Card';
import NextLogo from '../public/logos/nextjs-logo.svg';
import TailwindLogo from '../public/logos/tailwind-logo.svg';
import PscaleLogo from '../public/logos/planetscale-logo.svg';
import VercelLogo from '../public/logos/vercel-logo.svg';

const c = {
  h1: 'invisible p-0 m-0 w-0 h-0 border-none',
  headerWrapper: 'lg:flex lg:flex-row-reverse items-center',
  imageWrapper: 'md:w-3/5 lg:flex lg:justify-center',
  headerImage: 'max-w-full rounded-full bg-gray-400 block relative',
  heading: 'text-4xl block font-bold border-none mt-4',
  postsHeading: 'mt-12 font-medium',
  postCardsContainer: 'flex flex-col lg:flex-row gap-4',
  stackContainer: 'w-full flex flex-col gap-4',
  stackItem: 'border-b-2 last:border-none',
  stackGearIcon: 'relative top-3 left-2 animate-spin',
  stackDescription: 'text-gray-500 dark:text-gray-400 pb-4',
  iconHeading: 'flex gap-2 items-center mb-2',
  iconHeadingText: 'font-medium',
  stackHeader: 'text-large',
};

function Index() {
  return (

    <Container title="Max Grzanna - Home" description="This is the homepage of my personal blog.">
      <div className={c.headerWrapper}>
        <div className={c.imageWrapper}>
          <Image
            className={c.headerImage}
            src="https://res.cloudinary.com/pybghtl/image/upload/v1643194136/startpage/memoji_zeznkt.png"
            width={100}
            height={100}
            alt="Avatar"
            priority="true"
          />
        </div>
        <div>
          <h1 className={c.h1}>Max Grzanna</h1>
          <heading className={c.heading}>Hey there!</heading>
          <p>
            Here you can find some blogs and other stuff I thought were interesting. 🚀
          </p>
        </div>
      </div>
      <h2 className={c.postsHeading}>New Posts</h2>
      <div className={c.postCardsContainer}>
        <Card
          title="Ship less JS in production with replacing react by preact"
          slug="replace-react-preact"
        />
        <Card
          title="Using serverless databases with Planetscale and Prisma"
          slug="serverless-database"
        />
        <Card
          title="Coding a contact form with Next.js (without using 3rd party services)"
          slug="contact-form"
        />
      </div>
      <div className="mt-8">
        <Link passHref href="/blog">
          <a href="/blog">
            <div className="inline-flex items-center">
              Read all posts
              <BsArrowRight className="relative left-2" />
            </div>
          </a>
        </Link>

      </div>

      <div className="flex items-center">
        <h3 className={c.postsHeading}>The Stack</h3>
        <VscGear className={c.stackGearIcon} size={25} />
      </div>
      <div className="mb-8">
        <p>
          This website was build entirely using the
          {' '}
          <a target="_blank" href="https://jamstack.org/" className="underline" rel="noreferrer">Jamstack</a>
          {' '}
          architecture and aims to be serveless
          first.
        </p>
      </div>
      <div className={c.stackContainer}>
        <div className={c.stackItem}>
          <heading>JS Framework</heading>
          <div className={c.iconHeading}>
            <p className={c.iconHeadingText}>Next.js</p>
            <NextLogo className="w-4 h-9 dark:fill-white" />
          </div>
          <p className={c.stackDescription}>
            SEO friendly React framework for building static and server rendered
            sites. Ships with clientside routing, API routes and tons more neat
            stuff. Integrates well with Vercel.
          </p>
        </div>
        <div className={c.stackItem}>
          <heading>CSS Framework</heading>

          <div className={c.iconHeading}>
            <p className={c.iconHeadingText}>Tailwind CSS</p>
            <TailwindLogo className="w-4 h-9 dark:fill-white" />
          </div>
          <p className={c.stackDescription}>
            Highly customizable utility framework. Doesn’t come with prebuild
            components and operated on a low level.
          </p>
        </div>
        <div className={c.stackItem}>
          <heading>Database</heading>
          <div className={c.iconHeading}>
            <p className={c.iconHeadingText}>Planetscale</p>
            <PscaleLogo className="w-4 h-9 dark:fill-white" />
          </div>
          <p className={c.stackDescription}>
            Scalable and serverless MySQL platform with branching
            functionalities similar to git. Works really well with prisma.
          </p>
        </div>
        <div className={c.stackItem}>
          <heading className={c.stackHeader}>Deployment and hosting</heading>
          <div className={c.iconHeading}>
            <p className={c.iconHeadingText}>Vercel</p>
            <VercelLogo className="w-4 h-9 dark:fill-white" />
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
