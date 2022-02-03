import Head from "next/head";
import { DropItem } from '../../components/'
import { getDropsWithPagination, REVALIDATE_PAGE_CONTENT } from '../../lib/graphCMS'

export default function Drops({allDrops}) {
  return (
    <>
      <Head>
        <title>BESTDROPS.PL - Dropy!</title>
        <meta name="title" content="BESTDROPS.PL - Wszystkie dropy!"/>
        <meta name="description" content="Wszystkie najbliższe dropy w jednym miejscu!"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bestdrops.pl/"/>
        <meta property="og:title" content="BESTDROPS.PL - Wszystkie dropy!"/>
        <meta property="og:description" content="Wszystkie najbliższe dropy w jednym miejscu!"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bestdrops.pl/"/>
        <meta property="twitter:title" content="BESTDROPS.PL - Wszystkie dropy!"/>
        <meta property="twitter:description" content="Wszystkie najbliższe dropy w jednym miejscu!"/>
      </Head>
      <div className="relative headerBg py-8 md:py-16 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black-w-opacity">
        <header className="w-full h-full max-w-screen-lg mx-auto px-4">
          <h1 className="relative text-4xl md:text-7xl text-center font-oswald uppercase text-white font-bold pb-3 z-20">Dropy</h1>
        </header>
      </div>
      <div className='container mx-auto px-4 pt-6 pb-8 md:pt-10 md:pb-16'>
        <div className="w-full flex justify-between pb-5 items-center">
          <h2 className='text-lg sm:text-xl py-4'>Znajdziesz tutaj wszystkie dropy dostępne na naszej stronie!</h2>
          {/* <div>
            <input type="checkbox" id="showOld" />
            <label htmlFor="showOld" className="ml-1 mr-4">Pokazuj stare</label>
            <select className="border-2 border-blue-600 rounded-xl px-2 py-2">
              <option value="date_ASC">Od najnowszych</option>
              <option value="date_DESC">Od najstarszych</option>
            </select>
          </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {allDrops.map((drop, index) => {
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
      {/* <div className="container mx-auto px-4 py-8 md:py-16 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {allDrops.map((drop, index) => {
          return (
            <DropItem 
              key={index}
              drop={drop}
              isRow={true}
            />
          )
        })}
      </div> */}
      <style jsx>{`
        .headerBg {
          background-image: url('/images/headers/dropsbg.webp');
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
  const allDrops = await getDropsWithPagination(24, date)
  return {
    props: {
      allDrops: allDrops
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  }
}
