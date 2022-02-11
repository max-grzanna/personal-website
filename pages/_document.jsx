/* eslint-disable */
import React from 'react';
import {
    Html, Head, Main, NextScript,
} from 'next/document';


// eslint-disable-next-line no-unused-vars
export default function Document(props) {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>
            <body className="bg-white dark:bg-ebony text-gray-800 dark:text-gray-100">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
