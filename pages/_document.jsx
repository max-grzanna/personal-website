import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

// eslint-disable-next-line no-unused-vars
export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <script
          defer
          data-domain="max-grzanna.tech"
          src="https://www.max-grzanna-analytics.xyz/js/plausible.js"
        />
      </Head>
      <body className="bg-white dark:bg-ebony text-gray-600 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
