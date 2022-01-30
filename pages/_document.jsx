import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

// eslint-disable-next-line no-unused-vars
export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white dark:bg-ebony text-gray-600 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
