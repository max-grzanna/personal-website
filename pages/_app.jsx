import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Script from 'next/script';
import CookieConsent from 'react-cookie-consent';
import { BsArrowRight } from 'react-icons/bs';
import { BiCookie } from 'react-icons/bi';

function MyApp({ Component, pageProps }) {
  const [cookieIsSet, setCookieIsSet] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <CookieConsent
        overlay
        onAccept={() => {
          setCookieIsSet(!cookieIsSet);
        }}
        containerClasses="cookie-container"
        contentClasses="cookie-content"
        buttonText="Continue to website"
        style={{
          background: 'white',
          color: 'black',
          width: '90vw',
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
          textDecoration: 'underline',
        }}
      >
        This website uses cookies.
        {' '}
        <br />
        <span style={{ fontSize: '12px' }}>By continuing to browse on this website, you agree to our use of cookies.</span>
        <BsArrowRight className="block relative top-12 left-32 cursor-pointer" />
        <BiCookie size={30} className="block absolute top-4  cursor-pointer" />
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
