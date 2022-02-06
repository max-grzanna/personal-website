import React from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` 
(function(f, a, t, h, o, m){
\ta[h]=a[h]||function(){
\t\t(a[h].q=a[h].q||[]).push(arguments)
\t};
\to=f.createElement('script'),
\tm=f.getElementsByTagName('script')[0];
\to.async=1; o.src=t; o.id='fathom-script';
\tm.parentNode.insertBefore(o,m)
})(document, window, '//max-grzanna-analytics.xyz/tracker.js', 'fathom');
fathom('set', 'siteId', 'WEHXY');
fathom('trackPageview');
  `,
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
