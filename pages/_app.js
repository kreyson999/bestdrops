import { Footer, Navbar } from '../components'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import * as ga from '../lib/google_analytics'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} strategy='afterInteractive' />
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Navbar/>
      <div className='grow pt-14'>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  )
}

export default MyApp
