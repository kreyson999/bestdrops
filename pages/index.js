import Head from 'next/head'
import Image from 'next/image'
import { DropItem } from '../components'

export default function Home() {

  return (
    <>
      <Head>
        <title>BESTDROPS.PL - Wszystkie dropy w jednym miejscu!</title>
        <meta name="title" content="BESTDROPS.PL - Wszystkie dropy w jednym miejscu!"/>
        <meta name="description" content="Na naszej stronie możesz sprawdzić najbliżesze dropy, na których możesz zarobić oraz przeczytać o streetwearze w Polsce!"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bestdrops.pl/"/>
        <meta property="og:title" content="BESTDROPS.PL - Wszystkie dropy w jednym miejscu!"/>
        <meta property="og:description" content="Na naszej stronie możesz sprawdzić najbliżesze dropy, na których możesz zarobić oraz przeczytać o streetwearze w Polsce!"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bestdrops.pl/"/>
        <meta property="twitter:title" content="BESTDROPS.PL - Wszystkie dropy w jednym miejscu!"/>
        <meta property="twitter:description" content="Na naszej stronie możesz sprawdzić najbliżesze dropy, na których możesz zarobić oraz przeczytać o streetwearze w Polsce!"/>
      </Head>
      <header className='relative flex flex-col justify-between min-h-[100vh]'>
        <div className='flex flex-col'>
          <div className='flex items-center pt-1.5 px-2'>
            <Image
            src="/images/logo.png"
            width={40}
            height={51}
            className="object-cover"
            alt='Logo bestdrops.pl'
            />
            <hr className='mx-4 grow border-t border-white'/>
            <Image
            src="/icons/search.svg"
            width={36}
            height={36}
            className="object-cover"
            alt='Ikona Szukaj'
            />
            <div className='absolute top-16 flex flex-col items-center'>
              <hr className='my-4 h-32 border-l border-white'/>
              <a className='grid'>
                <Image
                src="/icons/instagram.svg"
                width={36}
                height={36}
                className="object-cover"
                alt='Ikona instagram.com'
                />
              </a>
              <a className='grid mt-2'>
                <Image
                src="/icons/tiktok.svg"
                width={36}
                height={36}
                className="object-cover"
                alt='Ikona tiktok.com'
                />
              </a>
            </div>
          </div>
          <div className='flex flex-col items-end pl-12 pr-4 my-4'>
            <h1 className='text-light-blue font-extrabold text-4xl text-right'>AIR JORDAN 2 X UNION GREY FOG</h1>
            <p className='text-white text-2xl mt-1 font-extralight'>26 Marzec 09:00</p>
          </div>
        </div>
        <div className='w-full z-20'>
          <div className='px-4 flex flex-col w-full mt-12 text-[1.65rem] text-white items-end'>
            <span className='uppercase'>Retail: 1029 zł</span>
            <span className='uppercase'>Resell: 1500 zł</span>
          </div>
          <div className='grid px-4 mt-4 before:absolute before:left-0 before:bottom-0 before:w-[100vw] before:h-64 before:bg-blue'>
            <Image
            src="/images/but.png"
            width={600}
            height={600}
            alt='But'
            />
          </div>
          <div className='flex justify-center py-3 space-x-2'>
            <button className='grid'>
              <Image
              src="/icons/arrow_left.svg"
              width={70}
              height={35}
              alt='Strzałka w lewo'
            />
            </button>
            <button className='grid'>
              <Image
              src="/icons/arrow_right.svg"
              width={70}
              height={35}
              alt='Strzałka w prawo'
              />
            </button>
          </div>
        </div>
      </header>
      <section className='py-6 space-y-6'>
        <DropItem/>
        <div className='flex space-x-16'>
          <hr className='border-t border-white w-full'/>
          <hr className='border-t border-white w-full'/>
        </div>
        <DropItem/>
        <div className='flex space-x-16'>
          <hr className='border-t border-white w-full'/>
          <hr className='border-t border-white w-full'/>
        </div>
        <DropItem/>
        <div className='flex space-x-16'>
          <hr className='border-t border-white w-full'/>
          <hr className='border-t border-white w-full'/>
        </div>
      </section>
      <footer className='flex flex-col items-center'>
        <button className='uppercase text-xl font-semibold border-2 border-light-blue text-light-blue w-fit p-2'>
          Poprzednie dropy
        </button>
        <p className='pl-4 pt-6 pr-16 leading-[1.15rem] text-white'>Zdjęcia użyte na stronie nie są naszego autorstwa i należa do ich prawnych właścicieli.</p>
        <button className='mt-1 text-blue self-start ml-4 uppercase font-semibold'>Kontakt z nami</button>
        <div className='w-full flex space-x-4 items-center mt-6 mb-1'>
          <hr className='grow border-t border-white'/>
          <span className='text-light-blue'>© 2022 BESTDROPS</span>
          <hr className='grow border-t border-white'/>
        </div>
      </footer>
    </>
  )
}

// export async function getStaticProps() {
//   const date = new Date()
//   const topDrop = await getTopDrop()
//   const hotDrops = await getHotDrops(4, date)
//   const allDrops = await getAllDrops(6, date)
//   return {
//     props: {
//       topDrop: topDrop,
//       hotDrops: hotDrops,
//       allDrops: allDrops,
//     },
//     revalidate: REVALIDATE_PAGE_CONTENT,
//   }
// }
