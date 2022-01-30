import { Footer, Navbar } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Navbar/>
     <div className='grow pt-14'>
       <Component {...pageProps} />
     </div>
     <Footer/>
    </>
  )
}

export default MyApp
