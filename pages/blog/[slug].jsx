import React from 'react';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Container from '@/components/Container';
import GoBackButton from '@/components/GoBackButton';
import ViewCounter from '@/components/ViewCounter';
import readingTime from '@/utils/readingTime';
import MDXComponents from '@/components/MDXComponents';

const c = {
  blogPost: 'flex flex-col',
  title: 'font-bold text-3xl mt-8 mb-4',
  sideInfo: 'text-gray-400',
  content: 'mt-10',
  sideInfoContainer: 'flex items-center justify-between flex-row-reverse',
};

export default function PostPage({ frontmatter: { title, publishedAt }, content, mdxSource }) {
  const time = readingTime(marked(content));

  const test = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <Container>
      <article>
        <div className={c.blogPost}>
          <GoBackButton />
          <header>
            <h1 className={c.title}>{title}</h1>
            <div className={c.sideInfoContainer}>
              <p className={c.sideInfo}>
                {time}
                {' '}
                min read
              </p>
              <div className={c.sideInfo}>
                <p className={c.sideInfo}>{new Date(publishedAt).toLocaleDateString('en-GB')}</p>
                <ViewCounter />
              </div>
            </div>
          </header>

          <div className={c.content}>
            <div className="content">
              {test}
            </div>
          </div>

        </div>
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('data/blog'));
  const paths = files.map((filename) => (
    {
      params: {
        slug: filename.replace('.mdx', ''),
      },
    }
  ));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMatter = fs.readFileSync(path.join('data/blog', `${slug}.mdx`), 'utf8');
  const { data: frontmatter, content } = matter(markdownWithMatter);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
  });
  return {
    props: {
      frontmatter,
      slug,
      content,
      mdxSource,
    },
  };
}
