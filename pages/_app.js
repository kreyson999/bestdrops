import { Footer, Navbar } from '../components'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
