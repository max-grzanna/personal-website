import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Container from '@/components/Container';
import Blogpost from '@/components/Blogpost';
import { sortByDate } from '@/utils/sortByDate';

const classes = {
  posts: 'flex flex-col',
};

export default function Blog({ posts }) {
  return (
    <Container>
      <div className={classes.posts}>
        <h1>Blog</h1>
        {posts.map(((post) => (
          <Blogpost key={post.slug} post={post} />
        )))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('data/blog'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(path.join('data/blog', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
