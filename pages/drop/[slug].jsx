import React from "react";
import Image from "next/image";

import {
  getAllDrops,
  getDropDetails,
  REVALIDATE_PAGE_CONTENT,
} from "../../lib/graphCMS";
import getFormattedDate from "../../helpers/getFormattedDate";

import { SeoHead, Price, Button, Footer } from "../../components";
import Navbar from "../../components/Navbar";

function DropItemPage({
  date,
  // description,
  featuredImage,
  linkToDrop,
  linkToGoat,
  linkToStockX,
  name,
  resell,
  retail,
  slug,
}) {
  const seoObject = {
    title: name,
    url: `https://bestdrops.pl/drop/${slug}`,
    image: featuredImage.url,
    description: `Opis do zrobienia na pozniej buta`,
  };

  return (
    <>
      <SeoHead {...seoObject} />
      <Navbar title="Drop" />
      <section className="mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl p-4 md:py-8 lg:py-12 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
        <div className="max-w-[500px] mx-auto border border-light-blue p-1.5 grid">
          <Image
            priority
            className="object-cover"
            src={featuredImage.url}
            width={500}
            height={500}
            alt={`Przedmiot: ${name}`}
          />
        </div>
        <div className="mt-2 mb-6 md:mt-0 md:mb-0 md:flex md:flex-col md:justify-between text-right">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-extrabold text-light-blue uppercase">
              {name}
            </h1>
            <p className="text-xl md:text-2xl lg:text-[1.7rem] xl:text-3xl font-extralight">
              {getFormattedDate(date)}
            </p>
          </div>
          <div className="mt-3 md:mt-0 flex flex-col items-end space-y-0.5 lg:space-y-1.5 md:space-y-1">
            <Price
              title="Retail"
              price={retail}
              toolTip="Retail to kwota, którą musimy zapłacić, aby kupić ten przedmiot u oryginalnego producenta."
            />
            <Price
              title="Resell"
              price={resell}
              toolTip="Resell to szacowana kwota, jaką ktoś jest w stanie zapłacić za ten przedmiot."
            />
          </div>
        </div>
        {linkToDrop && (
          <div className="md:grid md:place-content-center">
            <Button dontPrerender text="Przejdź do dropu" href={linkToDrop} />
          </div>
        )}
        <div className="md:grid md:place-content-center">
          <div className="grid grid-cols-2 gap-x-2 md:gap-x-4 mt-2 md:mt-0">
            {linkToStockX && (
              <Button dontPrerender text="StockX" href={linkToStockX} />
            )}
            {linkToGoat && (
              <Button dontPrerender text="Goat" href={linkToGoat} />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DropItemPage;

export async function getStaticProps({ params }) {
  const drop = await getDropDetails(params.slug);
  return {
    props: {
      ...drop,
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  };
}

export async function getStaticPaths() {
  const date = new Date();
  const allDrops = await getAllDrops(100, date);

  return {
    paths: allDrops.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
