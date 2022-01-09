import React from 'react';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import Container from '@/components/Container';
import GoBackButton from '@/components/GoBackButton';

const c = {
  blogPost: 'flex flex-col',
  title: 'font-bold text-3xl mt-8',
  date: ' text-gray-400',
  content: 'mt-10',
};

export default function PostPage({ frontmatter: { title, publishedAt, summary }, content }) {
  return (
    <Container>
      <article>
        <div className={c.blogPost}>
          <GoBackButton />
          <header>
            <h1 className={c.title}>{title}</h1>
            <span className={c.date}>{new Date(publishedAt).toLocaleDateString('en-GB')}</span>
            <p>{summary}</p>
          </header>

          <div className={c.content}>
            <div className="content" dangerouslySetInnerHTML={{ __html: marked(content) }} />
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

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
