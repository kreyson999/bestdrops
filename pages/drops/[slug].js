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
      <div className="max-w-screen-lg mx-auto px-4 py-16 grid grid-cols-2 gap-10">
        <div className="relative aspect-square border-4 bg-white border-blue-600 rounded-2xl overflow-hidden">
          <Image
            src={featuredImage.url}
            alt={name}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="font-oswald font-bold text-5xl uppercase">{name}</h1>
            <p className="uppercase text-3xl font-bold text-gray-800">{getFormattedDate(date)}</p>
            <div className="grid grid-cols-2">
              <p className="text-2xl text-left">Resell: <span className="text-blue-600 font-bold">{resell}</span> PLN</p>
              <p className="text-2xl text-right">Retail: <span className="text-blue-600 font-bold">{retail}</span> PLN</p>
            </div>
          </div>
          <div className="flex space-x-4">
            {linkToStockX && (
              <a href={linkToStockX} className="bg-white relative w-full rounded-xl grid place-content-center">
                <div className="relative">
                  <Image
                    src={'/images/stockxlogo.png'}
                    alt="Goat"
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
            )}
            {linkToGoat && (
              <a href={linkToGoat} className="bg-white relative w-full rounded-xl grid place-content-center">
                <div className="relative">
                  <Image
                    src={'/images/goatlogo.png'}
                    alt="Goat"
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      {linkToDrop && (
        <div className="max-w-screen-sm mx-auto px-4">
          <a href={linkToDrop} className="block text-center bg-blue-600 text-white px-6 py-2 text-2xl rounded-xl">
            Przejdź do dropu!
          </a>
        </div>
      )}
      <hr className="my-12 border-custom-black border-1"/>
      <div className="max-w-screen-lg mx-auto px-4">
        <p className="text-xl">{description}</p>
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
  const allDrops = await getAllDrops(100);

  return {
    paths: allDrops.map(({slug}) => ({params: { slug}})),
    fallback: 'blocking'
  }
}
