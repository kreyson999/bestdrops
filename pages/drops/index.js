import Head from "next/head";
import { useEffect, useState } from "react";
import { DropItem } from '../../components/'
import { getDropsWithPagination } from '../../lib/graphCMS'

export default function Drops() {
  const [data, setData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [showVerified, setShowVerified] = useState(false)
  const [showOld, setShowOld] = useState(false)
  const [sortType, setSortType] = useState('ASC')
  
  useEffect(() => {
    const fetchData = async () => {
      const date = new Date()
      const data = await getDropsWithPagination(30, showVerified, showOld, date);
      setData(data)
    }
    fetchData()
  }, [showVerified, showOld])

  useEffect(() => {
    if (sortType === 'DESC') {
      const copiedData = [...data]
      copiedData.sort((a,b) => {
        return new Date(a.date).getTime() + new Date(b.date).getTime()
      })
      setSortedData(copiedData)
    } else {
      const copiedData = [...data]
      copiedData.sort((a,b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
      setSortedData(copiedData)
    }
  }, [sortType, data])

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
        <div className="w-full flex flex-col lg:flex-row justify-between pb-5 items-left">
          <h2 className='text-lg sm:text-xl py-4'>Znajdziesz tutaj wszystkie dropy dostępne na naszej stronie!</h2>
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:items-center">
            <div>
              <input 
              checked={showOld} 
              onChange={(e) => setShowOld(e.target.checked)} 
              type="checkbox" 
              id="showOld" />
              <label htmlFor="showOld" className="ml-1 mr-4">Pokazuj zakończone</label>
            </div>
            <div>
              <input 
              checked={showVerified} 
              onChange={(e) => setShowVerified(e.target.checked)} 
              type="checkbox" 
              id="showVerified" />
              <label htmlFor="showVerified" className="ml-1 mr-4">Pokazuj zweryfikowane</label>
            </div>
            <select 
            value={sortType} 
            onChange={(e) => setSortType(e.target.value)} 
            className="border-2 border-blue-600 rounded-xl px-2 py-2 w-fit">
              <option value="DESC">Od najstarszych</option>
              <option value="ASC">Od najbliższych</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {sortedData && sortedData.map((drop, index) => {
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
          background-image: url('/images/headers/dropsbg.webp');
          background-position: center;
          background-size: contain;
          background-attachment: fixed;
        }
      `}</style>
    </>
  )
} 

// export async function getStaticProps() {
//   const date = new Date()
//   const allDrops = await getDropsWithPagination(24, date)
//   return {
//     props: {
//       allDrops: allDrops
//     },
//     revalidate: REVALIDATE_PAGE_CONTENT,
//   }
// }
