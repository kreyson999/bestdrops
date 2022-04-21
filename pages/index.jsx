import React from "react";
import Image from "next/image";

import {
  getHotDrops,
  getAllDrops,
  REVALIDATE_PAGE_CONTENT,
} from "../lib/graphCMS";
import getFormattedDate from "../helpers/getFormattedDate";

import { DropItem, Footer, Price, SeoHead } from "../components";
import { resellTooltip, retailTooltip } from "../helpers/constants";

export default function Home({ hotDrops, drops }) {
  const seoObject = {
    title: "Wszystkie dropy w jednym miejscu!",
    url: `https://bestdrops.pl/`,
    description: `Na naszej stronie możesz sprawdzić najbliżesze dropy, na których możesz zarobić oraz przeczytać o streetwearze w Polsce!`,
  };

  return (
    <>
      <SeoHead {...seoObject} />
      <header className="before:absolute before:w-full before:h-1/3 before:bg-blue before:left-0 before:top-0">
        <nav className="max-w-screen-xl mx-auto relative z-10 flex items-center justify-between px-4 pt-4">
          <div className="flex items-center">
            <div className="grid w-12">
              <Image
                src="/images/logo.svg"
                width={46}
                height={58}
                alt="Logo naszego serwisu"
              />
            </div>
            <h1 className="ml-2 font-bold uppercase text-2xl">Hot dropy</h1>
          </div>
          <button type="button" className="w-8 h-8">
            <Image
              src="/icons/search.svg"
              width={48}
              height={48}
              alt="Ikona wyszukaj"
            />
          </button>
        </nav>
        <div className="max-w-screen-xl mx-auto flex flex-col">
          <div className="relative max-w-[500px] self-center mx-4 z-10 grid my-4 px-1.5 py-1.5 border-2 border-light-blue">
            <Image
              src="/images/but.png"
              width={500}
              height={500}
              alt="Ikona wyszukaj"
            />
          </div>
          <div className="text-right mx-4">
            <h2 className="uppercase font-extrabold text-[2.1rem] leading-[2.25rem] text-light-blue">
              Air Jordan 2 x union grey fog
            </h2>
            <span className="text-xl font-extralight">
              {getFormattedDate(hotDrops[0].date)}
            </span>
          </div>
          <div className="mx-4 flex flex-col items-end mt-4 text-2xl">
            <Price
              title="Retail"
              price={hotDrops[0].retail}
              toolTip={retailTooltip}
            />
            <Price
              title="Resell"
              price={hotDrops[0].resell}
              toolTip={resellTooltip}
            />
          </div>
        </div>
        <div className="flex items-center mt-6">
          <hr className="grow border-t" />
          <div className="flex mx-4 space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-blue" />
            <div className="w-3 h-3 rounded-full bg-blue-opacity" />
            <div className="w-3 h-3 rounded-full bg-blue-opacity" />
          </div>
          <hr className="grow border-t" />
        </div>
      </header>
      <section className="px-4 pt-6 pb-8 max-w-screen-xl mx-auto">
        <h3 className="text-xl text-light-blue font-extralight uppercase mb-4">
          Nadchodzące dropy:
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {drops.map((drop) => (
            <DropItem key={drop.name} {...drop} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const date = new Date();
  const hotDrops = await getHotDrops(1, date);
  const drops = await getAllDrops(6, date);
  return {
    props: {
      hotDrops,
      drops,
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  };
}
