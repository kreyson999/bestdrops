import { Footer, Navbar } from '../components'
import Head from 'next/head'
import '../styles/globals.css'
import Script from 'next/script'


// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-7ZRHEN542D"></script>
// <script>
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());

  // gtag('config', 'G-7ZRHEN542D');
// </script>

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Script 
      strategy='lazyOnLoad'
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script
      strategy='lazyOnLoad'
      id='google-analytics'
      >
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Navbar/>
      <div className='grow pt-14'>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  )
}

export default MyApp
