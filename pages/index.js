import { DropItem } from '../components'
import { getAllDrops, getHotDrops, getTopDrop, REVALIDATE_PAGE_CONTENT } from "../lib/graphCMS"

export default function Home({topDrop, hotDrops, allDrops}) {

  return (
    <>
      <div className="relative headerBg pt-24 pb-48 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black-w-opacity after:z-1">
        <header className="w-full h-full max-w-screen-lg mx-auto px-4 grid grid-cols-2 gap-10">
          <div className="flex flex-col h-full w-full">
            <h1 className="text-4xl font-oswald uppercase text-white font-bold pb-3 z-10">Top drop</h1>
            <DropItem 
            drop={topDrop}
            isBig={true}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl font-oswald uppercase text-white font-bold pb-3 z-10">Hot drop</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full rounded-2xl">
              {hotDrops.map((drop, index) => {
                return (
                  <DropItem 
                    key={index}
                    drop={drop}
                  />
                )
              })}
            </div>
          </div>
        </header>
      </div>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-oswald uppercase text-custom-black font-bold pb-3 z-10">DROPY</h2>
        <div className="grid grid-cols-3 gap-6">
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
      </section>
      {/* <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-oswald uppercase text-custom-black font-bold pb-3 z-10">Artykuły</h2>
        <div className="grid grid-cols-3 gap-6">
          Coming soon
        </div>
      </section> */}
      <style jsx>{`
        .headerBg {
          background-image: url('/images/bgbestdrops.png');
          background-position: center;
          background-size: contain;
          background-attachment: fixed;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const topDrop = await getTopDrop()
  const hotDrops = await getHotDrops(4)
  const allDrops = await getAllDrops(6)
  return {
    props: {
      topDrop: topDrop,
      hotDrops: hotDrops,
      allDrops: allDrops
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  }
}
