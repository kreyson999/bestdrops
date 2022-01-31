import { getAllDrops, REVALIDATE_PAGE_CONTENT } from "../../lib/graphCMS"
import { DropItem } from "../../components"
import Head from "next/head";

export default function Drops({allDrops}) {
  return (
    <>
      <Head>
        <title>BESTDROPS.PL - Hot dropy!</title>
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
      <div className="relative headerBg py-16 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black-w-opacity">
        <header className="w-full h-full max-w-screen-lg mx-auto px-4">
          <h1 className="relative text-7xl text-center font-oswald uppercase text-white font-bold pb-3 z-20">Dropy</h1>
        </header>
      </div>
      <div className="container mx-auto px-4 py-16 grid grid-cols-3 gap-6">
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
      <style jsx>{`
        .headerBg {
          background-image: url('/images/headers/dropsbg.png');
          background-position: center;
          background-size: contain;
          background-attachment: fixed;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
   const allDrops = await getAllDrops(12);

   return {
     props: {
       allDrops: allDrops
     },
     revalidate: REVALIDATE_PAGE_CONTENT,
   }
}
