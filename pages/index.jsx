/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  getHotDrops,
  getAllDrops,
  REVALIDATE_PAGE_CONTENT,
} from "../lib/graphCMS";
import getFormattedDate from "../helpers/getFormattedDate";

import {
  DropItem,
  HotDropItem,
  Price,
  SearchBar,
  SeoHead,
  SocialIcon,
} from "../components";
import { resellTooltip, retailTooltip } from "../helpers/constants";

export default function Home({ hotDrops, drops }) {
  const [currentHotDrop] = useState(0);

  const seoObject = {
    title: "BESTDROPS.PL",
    url: `https://bestdrops.pl/`,
    description: `Na naszej stronie możesz sprawdzić najbliższe premiery modowe, na których możesz zarobić pieniądze!`,
  };

  return (
    <>
      <SeoHead {...seoObject} />
      <header className="relative before:absolute before:w-full before:h-1/3 before:bg-blue before:left-0 before:top-0 md:before:w-1/4 xl:before:w-3/12 2xl:before:w-2/6 md:before:h-full">
        <nav className="max-w-screen-xl 2xl:pt-6 mx-auto relative z-10 flex items-center justify-between px-4 pt-4">
          <div className="flex items-center">
            <div className="2xl:absolute 2xl:-left-14 2xl:top-2 2xl:flex 2xl:flex-col 2xl:items-center ">
              <div className="grid w-12">
                <Image
                  src="/images/logo.svg"
                  width={100.05}
                  height={128}
                  alt="Logo naszego serwisu"
                  priority
                />
              </div>
              <hr className="hidden 2xl:block border-l border-white h-32 mt-4" />
              <div className="hidden 2xl:block my-4 space-y-2">
                <SocialIcon
                  url="https://www.instagram.com/bestdrops.pl/"
                  icon="/icons/instagram.svg"
                  alt="Ikona instagram.com"
                />
                <SocialIcon
                  url="https://www.tiktok.com/@bestdrops.pl?lang=pl-PL"
                  icon="/icons/tiktok.svg"
                  alt="Ikona tiktok.com"
                />
              </div>
              <hr className="hidden 2xl:block border-l border-white h-24" />
            </div>
            <span className="ml-2 2xl:ml-0 font-bold uppercase text-2xl">
              Hot dropy
            </span>
          </div>
          <SearchBar />
        </nav>
        <div className="max-w-screen-xl mx-auto flex flex-col md:grid md:grid-cols-3 md:my-4 md:gap-x-4 lg:gap-x-6">
          <Link href={`/drop/${hotDrops[currentHotDrop].slug}`}>
            <a className="relative max-w-[500px] self-center mx-4 z-5 grid my-4 lg:my-6 px-1.5 py-1.5 border-2 border-light-blue md:my-0 md:mx-0 md:ml-4">
              <Image
                src={hotDrops[currentHotDrop].featuredImage.url}
                width={500}
                height={500}
                className="object-cover"
                alt={`Wygląd buta o nazwie ${hotDrops[currentHotDrop].name}`}
                priority
              />
            </a>
          </Link>
          <div className="flex flex-col justify-between md:my-6">
            <div className="text-right mx-4 md:mx-0">
              <Link href={`/drop/${hotDrops[currentHotDrop].slug}`}>
                <a className="uppercase font-extrabold text-[2.1rem] leading-[2.25rem] lg:text-5xl text-light-blue hover:text-white line-clamp-4">
                  {hotDrops[currentHotDrop].name}
                </a>
              </Link>
              <span className="text-xl lg:text-2xl font-extralight">
                {getFormattedDate(hotDrops[currentHotDrop].date)}
              </span>
            </div>
            <div className="mx-4 flex flex-col items-end mt-4 text-2xl lg:text-[1.7rem] md:mx-0 md:space-y-1">
              <Price
                title="Retail"
                price={hotDrops[currentHotDrop].retail}
                toolTip={retailTooltip}
              />
              <Price
                title="Resell"
                price={hotDrops[currentHotDrop].resell}
                toolTip={resellTooltip}
              />
            </div>
          </div>
          <div className="hidden md:grid grid-rows-3 py-6 mr-4">
            {hotDrops.map((drop) => (
              <HotDropItem key={drop.name} {...drop} />
            ))}
          </div>
        </div>
        {/* Mobile Circles */}
        <div className="md:relative md:z-20 flex items-center mt-6 md:space-x-96">
          <hr className="grow border-t" />
          <div className="md:hidden flex mx-4 space-x-1.5">
            {hotDrops.map((drop, index) => (
              <div
                key={drop.name}
                className={`w-3 h-3 rounded-full ${
                  index === currentHotDrop ? "bg-blue" : "bg-blue-opacity"
                }`}
              />
            ))}
          </div>
          <hr className="grow border-t" />
        </div>
      </header>
      <section className="px-4 pt-6 pb-8 lg:pt-12 lg:pb-12 max-w-screen-xl mx-auto">
        <h3 className="text-xl lg:text-2xl text-light-blue font-extralight uppercase mb-4">
          Nadchodzące dropy:
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {drops.map((drop) => (
            <DropItem key={drop.name} {...drop} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const date = new Date();
  const hotDrops = await getHotDrops(3, date);
  const drops = await getAllDrops(6, date);
  return {
    props: {
      hotDrops,
      drops,
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  };
}
