import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

// eslint-disable-next-line no-unused-vars
export default function Document(props) {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-ebony text-gray-600 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
