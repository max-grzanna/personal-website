import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document(props) {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white dark:bg-ebony text-black dark:text-gray">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
