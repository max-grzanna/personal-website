/* eslint-disable */
import React from 'react';
import {
    Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script'


// eslint-disable-next-line no-unused-vars
export default function Document(props) {
    return (
        <Html lang="en">
            <Head>
                <Script>
                    {`(function(f, a, t, h, o, m){
\ta[h]=a[h]||function(){
\t\t(a[h].q=a[h].q||[]).push(arguments)
\t};
\to=f.createElement('script'),
\tm=f.getElementsByTagName('script')[0];
\to.async=1; o.src=t; o.id='fathom-script';
\tm.parentNode.insertBefore(o,m)
})(document, window, '//max-grzanna-analytics.xyz/tracker.js', 'fathom');
fathom('set', 'siteId', 'WEHXY');
fathom('trackPageview');`}
                </Script>


            </Head>
            <body className="bg-white dark:bg-ebony text-gray-600 dark:text-gray-100">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
