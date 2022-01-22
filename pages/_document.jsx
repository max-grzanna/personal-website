import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

// eslint-disable-next-line no-unused-vars
export default function Document(props) {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className="bg-white dark:bg-ebony text-black dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
