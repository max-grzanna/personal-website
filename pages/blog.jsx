import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BiSearch } from 'react-icons/bi';
import Container from '@/components/Container';
import Blogpost from '@/components/Blogpost';
import sortByDate from '@/utils/sortByDate';

const classes = {
  posts: 'flex flex-col w-full',
  headline: 'mb-8',
  inputWrapper: 'relative w-full',
  input: 'border-gray-500 border-solid border-2 mb-10 rounded w-full h-10 p-2',
  inputIcon: 'absolute right-2.5 top-2.5 fill-gray-500 dark:fill-gray-100',
};

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = posts
    .filter(({ frontmatter }) => frontmatter.title.toLowerCase()
      .includes(searchValue.toLowerCase()));

  return (
    <Container title="Max Grzanna - Blog">
      <div className={classes.posts}>
        <h1 className={classes.headline}>Blog</h1>
        <div className={classes.inputWrapper}>
          <i><BiSearch className={classes.inputIcon} size={20} /></i>
          <input
            placeholder="Search for Posts"
            className={classes.input}
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {!filteredPosts.length && 'No Posts found :('}
        {filteredPosts.map(((post) => (
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
