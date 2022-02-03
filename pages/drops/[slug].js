import Head from "next/head";
import Image from "next/image";
import getFormattedDate from "../../helpers/getFormattedDate";
import { getAllDrops, getDropDetails, REVALIDATE_PAGE_CONTENT } from '../../lib/graphCMS'


function DropItemPage({drop}) {
  const { date, description, featuredImage, linkToDrop, linkToGoat, linkToStockX, name, resell, retail } = drop
  return (
    <>
      <Head>
        <title>BESTDROPS.PL - {name}!</title>
        <meta name="title" content={`BESTDROPS.PL - ${name}!`}/>
        <meta name="description" content={`${name} będą dropić już ${getFormattedDate(date)}. Resell będzie wynosił ${resell} PLN, a retail ${retail} PLN.`}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bestdrops.pl/"/>
        <meta property="og:title" content={`BESTDROPS.PL - ${name}!`}/>
        <meta property="og:description" content={`${name} będą dropić już ${getFormattedDate(date)}. Resell będzie wynosił ${resell} PLN, a retail ${retail} PLN.`}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bestdrops.pl/"/>
        <meta property="twitter:title" content={`BESTDROPS.PL - ${name}!`}/>
        <meta property="twitter:description" content={`${name} będą dropić już ${getFormattedDate(date)}. Resell będzie wynosił ${resell} PLN, a retail ${retail} PLN.`}/>
      </Head>
      <div className="max-w-screen-lg mx-auto px-4 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        <div className="relative aspect-square border-2 sm:border-4 bg-white border-blue-600 rounded-2xl overflow-hidden">
          <Image
            src={featuredImage.url}
            alt={name}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-2 sm:space-y-4">
            <h1 className="font-oswald font-bold text-2xl md:text-5xl uppercase">{name}</h1>
            <p className="uppercase text-2xl md:text-3xl font-bold text-gray-800">{getFormattedDate(date)}</p>
            <div className="flex flex-col pb-2 space-y-1">
              <p className="text-2xl">Retail: <span className="text-blue-600 font-bold">{retail}</span> PLN</p>
              <p className="text-2xl">Resell: <span className="text-blue-600 font-bold">{resell}</span> PLN</p>
            </div>
          </div>
          <div className="flex flex-col pt-4 md:pt-0">
            <p className="text-lg pb-1">Dowiedz się więcej tutaj:</p>
             <div className="flex space-x-2 md:space-x-4">
              {linkToStockX && (
                <a href={linkToStockX} className="bg-white relative w-full rounded-xl grid place-content-center">
                  <div className="relative grid place-content-center">
                    <Image
                      src={'/images/stockxlogo.webp'}
                      alt="Goat"
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </a>
              )}
              {linkToGoat && (
                <a href={linkToGoat} className="bg-white relative w-full rounded-xl grid place-content-center">
                  <div className="relative grid place-content-center">
                    <Image
                      src={'/images/goatlogo.webp'}
                      alt="Goat"
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {linkToDrop && (
        <div className="max-w-fit mx-auto px-4">
          <a href={linkToDrop} className="block text-center bg-blue-600 text-white px-8 py-2 sm:py-3 text-2xl rounded-lg transition duration-500 transform hover:-translate-y-1">
            Przejdź do dropu!
          </a>
        </div>
      )}
      <hr className="my-6 md:my-12 border-custom-black border-1"/>
      <div className="max-w-screen-lg mx-auto px-4">
        <p className="text-lg sm:text-xl">{description}</p>
      </div>
    </>
  );
}

export default DropItemPage;

export async function getStaticProps({params}) {
  const drop = await getDropDetails(params.slug)
  return {
    props: {
      drop: drop
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  }
}

export async function getStaticPaths() {
  const date = new Date()
  const allDrops = await getAllDrops(100, date);

  return {
    paths: allDrops.map(({slug}) => ({params: { slug}})),
    fallback: 'blocking'
  }
}
