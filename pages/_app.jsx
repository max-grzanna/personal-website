import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Script from 'next/script';
import CookieConsent from 'react-cookie-consent';

function MyApp({ Component, pageProps }) {
  const [cookieIsSet, setCookieIsSet] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <CookieConsent
        onAccept={() => {
          setCookieIsSet(!cookieIsSet);
        }}
        buttonText="Continue to website"
        overlay
        style={{
          background: 'white',
          color: 'black',
          width: '350px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '1rem',
          padding: '1rem',
        }}
        buttonStyle={{
          border: '0px',
          background: 'none',
          borderRadius: '0px',
          boxShadow: 'none',
          color: 'black',
          cursor: 'pointer',
          flex: '0 0 auto',
          fontSize: '13px',
          margin: 'none',
          padding: '1rem',
        }}
      >
        This website uses cookies.
        {' '}
        <br />
        <span style={{ fontSize: '10px' }}>By continuing to browse on this website, you agree to our use of cookies.</span>
      </CookieConsent>
      {cookieIsSet === true
                && (
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
                )}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
