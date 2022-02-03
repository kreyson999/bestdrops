import Head from 'next/head';
import { DropItem } from '../components'
import { getHotDrops, REVALIDATE_PAGE_CONTENT } from '../lib/graphCMS'

export default function Hotdrops({hotDrops}) {
  return (
    <>
      <Head>
        <title>BESTDROPS.PL - Hot dropy!</title>
        <meta name="title" content="BESTDROPS.PL - Hot dropy!"/>
        <meta name="description" content="Gorące dropy, na których można zarobić w jednym miejscu!"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bestdrops.pl/"/>
        <meta property="og:title" content="BESTDROPS.PL - Hot dropy!"/>
        <meta property="og:description" content="Gorące dropy, na których można zarobić w jednym miejscu!"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bestdrops.pl/"/>
        <meta property="twitter:title" content="BESTDROPS.PL - Hot dropy!"/>
        <meta property="twitter:description" content="Gorące dropy, na których można zarobić w jednym miejscu!"/>
      </Head>
      <div className="relative headerBg py-8 md:py-16 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black-w-opacity">
        <header className="w-full h-full max-w-screen-lg mx-auto px-4">
          <h1 className="relative text-4xl md:text-7xl text-center font-oswald uppercase text-white font-bold pb-3 z-20">Hot dropy</h1>
        </header>
      </div>
      <div className='container mx-auto px-4 pt-6 pb-8 md:pt-10 md:pb-16'>
        <h2 className='text-lg sm:text-xl py-4'>Znajdziesz tutaj gorące dropy, na których możesz zarobić spore pieniądze!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {hotDrops.map((drop, index) => {
            return (
              <DropItem 
                key={index}
                drop={drop}
                isRow={true}
              />
            )
          })}
        </div>
      </div>
      <style jsx>{`
        .headerBg {
          background-image: url('/images/headers/hotdropsbg.webp');
          background-position: center;
          background-size: contain;
          background-attachment: fixed;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const date = new Date()
  const hotDrops = await getHotDrops(12, date);

  return {
    props: {
      hotDrops: hotDrops,
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  }
}