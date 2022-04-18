import Image from "next/image";

import { getAllDrops, getDropDetails, REVALIDATE_PAGE_CONTENT } from '../../lib/graphCMS'
import getFormattedDate from "../../helpers/getFormattedDate";

import { SeoHead, Price, Button, Footer } from "../../components";
import Navbar from "../../components/Navbar";


function DropItemPage({drop}) {
  const { date, description, featuredImage, linkToDrop, linkToGoat, linkToStockX, name, resell, retail, slug } = drop

  const seoObject = {
    title: name,
    url: `https://bestdrops.pl/drop/${slug}`,
    image: featuredImage.url,
    description: `Opis do zrobienia na pozniej buta`
  }

  return (
    <>
      <SeoHead {...seoObject}/>
      <Navbar title="Drop"/>
      <section className="p-4">
        <div className="border border-light-blue p-1.5 grid">
          <Image
          src={featuredImage.url}
          width={500}
          height={500}
          alt={`Przedmiot: ${name}`}
          />
        </div>
        <div className="mt-2 mb-6 text-right">
          <h1 className="text-3xl font-extrabold text-light-blue">{name}</h1>
          <p className="text-xl font-extralight">{getFormattedDate(date)}</p>
          <div className="mt-3 flex flex-col items-end space-y-0.5">
            <Price title="Retail" price={1029}/>
            <Price title="Resell" price={1500}/>
          </div>
        </div>
        <Button text="Przejdź do dropu" href={linkToDrop}/>
        <div className="grid grid-cols-2 gap-x-2 mt-2">
          <Button text="StockX" href={linkToStockX}/>
          <Button text="Goat" href={linkToGoat}/>
        </div>
      </section>
      <Footer/>
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
