/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";

import {
  getHotDrops,
  getAllDrops,
  REVALIDATE_PAGE_CONTENT,
} from "../lib/graphCMS";

import { DropItem, SearchBar, SeoHead, SocialIcon } from "../components";
import HomeHeader from "../components/HomeHeader";

export default function Home({ hotDrops, drops }) {
  const seoObject = {
    title: "BESTDROPS.PL",
    url: `https://bestdrops.pl/`,
    description: `Na naszej stronie możesz sprawdzić najbliższe premiery modowe, na których możesz zarobić pieniądze!`,
  };

  return (
    <>
      <SeoHead {...seoObject} />
      <header className="relative before:absolute before:w-full before:h-1/3 before:bg-blue before:left-0 before:top-0 md:before:w-1/4 xl:before:w-3/12 2xl:before:w-2/6 md:before:h-full">
        <nav className="max-w-screen-xl 2xl:pt-6 mx-auto relative z-30 flex items-center justify-between px-4 pt-4">
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
        <HomeHeader hotDrops={hotDrops} />
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
