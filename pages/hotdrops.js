import { DropItem } from '../components'
import { getHotDrops, REVALIDATE_PAGE_CONTENT } from '../lib/graphCMS'

export default function Hotdrops({hotDrops}) {
  return (
    <>
      <div className="relative headerBg py-16 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black-w-opacity">
        <header className="w-full h-full max-w-screen-lg mx-auto px-4">
          <h1 className="relative text-7xl text-center font-oswald uppercase text-white font-bold pb-3 z-20">Hot dropy</h1>
        </header>
      </div>
      <div className="container mx-auto px-4 py-16 grid grid-cols-3 gap-6">
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
      <style jsx>{`
        .headerBg {
          background-image: url('/images/headers/hotdropsbg.png');
          background-position: center;
          background-size: contain;
          background-attachment: fixed;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const hotDrops = await getHotDrops(12);

  return {
    props: {
      hotDrops: hotDrops,
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  }
}