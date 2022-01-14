import React from 'react';
import Link from 'next/link';

const classes = {
  posts: 'flex flex-col',
  post: 'mb-10 border-b dark:border-gray-500',
  titleColumn: 'flex flex-row justify-between',
  datePublished: 'text-gray-500',
  blogTitle: 'font-bold text-xl',
  summary: 'text-gray-500',
};

export default function Blogpost({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <div className={classes.post}>
          <div className={classes.titleColumn}>
            <h3 className={classes.blogTitle}>{post.frontmatter.title}</h3>
            <p className={classes.datePublished}>{new Date(post.frontmatter.publishedAt).toLocaleDateString('en-GB')}</p>
          </div>
          <p className={classes.summary}>{post.frontmatter.summary}</p>
        </div>
      </a>
    </Link>
  );
}
