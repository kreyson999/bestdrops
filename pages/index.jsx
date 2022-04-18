import React from "react";
import Image from "next/image";

import {
  getHotDrops,
  getAllDrops,
  REVALIDATE_PAGE_CONTENT,
} from "../lib/graphCMS";
import getFormattedDate from "../helpers/getFormattedDate";

import { DropItem, Footer, SeoHead } from "../components";

export default function Home({ hotDrops, drops }) {
  const seoObject = {
    title: "Wszystkie dropy w jednym miejscu!",
    url: `https://bestdrops.pl/`,
    description: `Na naszej stronie możesz sprawdzić najbliżesze dropy, na których możesz zarobić oraz przeczytać o streetwearze w Polsce!`,
  };

  return (
    <>
      <SeoHead {...seoObject} />
      <header className="bg-dark-gray relative flex flex-col md:grid md:grid-cols-2 justify-between min-h-[100vh] max-w-[1920px] mx-auto">
        <div className="flex flex-col md:justify-center md:items-end">
          <div className="md:hidden flex items-center pt-1.5 px-2">
            <Image
              src="/images/logo.svg"
              width={40}
              height={51}
              className="object-cover"
              alt="Logo bestdrops.pl"
            />
            <hr className="mx-4 grow border-t border-white" />
            <Image
              src="/icons/search.svg"
              width={36}
              height={36}
              className="object-cover"
              alt="Ikona Szukaj"
            />
            <div className="absolute top-16 flex flex-col items-center">
              <hr className="my-4 h-32 border-l border-white" />
              <a href="tiktok" className="grid">
                <Image
                  src="/icons/instagram.svg"
                  width={36}
                  height={36}
                  className="object-cover"
                  alt="Ikona instagram.com"
                />
              </a>
              <a href="tiktok" className="grid mt-2">
                <Image
                  src="/icons/tiktok.svg"
                  width={36}
                  height={36}
                  className="object-cover"
                  alt="Ikona tiktok.com"
                />
              </a>
            </div>
          </div>
          <label
            className="hidden absolute max-w-[300px] top-12 right-16 xl:right-24 2xl:right-32 md:flex items-center before:absolute before:-bottom-1 before:border-b before:w-full"
            htmlFor="searchbar"
          >
            <input
              className="focus:outline-none text-xl bg-transparent text-light-blue placeholder:text-white w-full"
              id="searchbar"
              type="text"
              placeholder="Szukaj"
            />
            <div className="grid">
              <Image
                src="/icons/search.svg"
                width={32}
                height={32}
                className="object-cover"
                alt="Ikona Szukaj"
              />
            </div>
          </label>
          <div className="hidden max-w-[400px] lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px] md:grid absolute left-16 lg:left-24 xl:left-32 z-30">
            <Image
              priority
              src={hotDrops[0].featuredImage.url}
              width={600}
              height={600}
              alt="But"
            />
          </div>
          <div className="flex flex-col md:min-h-[400px] lg:min-h-[500px] xl:min-h-[550px] 2xl:min-h-[600px] md:justify-between items-end pl-12 pr-4 md:pr-16 xl:pr-24 2xl:pr-32 xl:pl-12 2xl:pl-0 my-4 md:my-0">
            <div>
              <h1 className="text-light-blue font-extrabold text-4xl text-right sm:text-5xl md:text-4xl md:pl-6 lg:text-5xl xl:text-6xl xl:pl-0 2xl:text-7xl">
                {hotDrops[0].name}
              </h1>
              <p className="text-white text-right text-2xl md:text-xl mt-1 font-extralight lg:text-2xl 2xl:text-3xl">
                {getFormattedDate(hotDrops[0].date)}
              </p>
            </div>
            <div className="hidden px-4 md:flex flex-col w-full mt-4 text-[1.67rem] lg:text-3xl xl:text-4xl 2xl:text-5xl md:px-0 text-white items-end">
              <span>Retail: 1029 zł</span>
              <span>Resell: 1500 zł</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:justify-center items-center md:items-start w-full z-20 md:order-first">
          <div className="md:hidden px-4 flex flex-col w-full mt-12 text-[1.65rem] text-white items-end">
            <span className="uppercase">Retail: {hotDrops[0].retail} zł</span>
            <span className="uppercase">Resell: {hotDrops[0].resell} zł</span>
          </div>
          <div className="hidden md:flex pt-4 pl-4 lg:pt-8 lg:pl-8 xl:pt-6 xl:pl-12 grow flex-col z-20 before:absolute before:left-0 before:top-0 before:h-[100vh] before:w-96 2xl:before:w-[33rem] before:bg-blue">
            <div className="flex items-center">
              <div className="w-12 relative -left-1.5 lg:w-16 lg:-left-3.5">
                <Image
                  src="/images/logo.svg"
                  width={109}
                  height={140}
                  className="object-cover"
                  alt="Logo bestdrops.pl"
                />
              </div>
              <span className="ml-3 uppercase font-semibold text-white text-3xl lg:text-4xl 2xl:text-5xl z-10 whitespace-nowrap">
                Top Drop
              </span>
            </div>
            <hr className="mx-4 my-4 w-0 grow z-10 border-r border-white" />
            <a href="tiktok" className="grid w-8 h-8">
              <Image
                src="/icons/instagram.svg"
                width={36}
                height={36}
                className="object-cover"
                alt="Ikona instagram.com"
              />
            </a>
            <a href="tiktok" className="grid mt-2 w-8 h-8">
              <Image
                src="/icons/tiktok.svg"
                width={36}
                height={36}
                className="object-cover"
                alt="Ikona tiktok.com"
              />
            </a>
            <hr className="mx-4 mt-4 z-10 w-0 grow border-r border-white" />
          </div>
          <div className="md:hidden max-w-[600px] grid pl-4 pr-4 mt-4 before:absolute before:left-0 before:bottom-0 before:w-[100vw] before:h-64 before:bg-blue">
            <Image
              priority
              src={hotDrops[0].featuredImage.url}
              width={600}
              height={600}
              alt={`Wygląd buta o nazwie ${hotDrops[0].name}`}
            />
          </div>
          <div className="md:hidden flex justify-center py-3 space-x-2">
            <button type="button" className="grid">
              <Image
                src="/icons/arrow_left.svg"
                width={70}
                height={35}
                alt="Strzałka w lewo"
              />
            </button>
            <button type="button" className="grid">
              <Image
                src="/icons/arrow_right.svg"
                width={70}
                height={35}
                alt="Strzałka w prawo"
              />
            </button>
          </div>
        </div>
        <div className="hidden absolute bottom-12 right-16 lg:right-16 xl:right-24 2xl:right-32 md:flex md:flex-col">
          <div className="hidden md:flex justify-end space-x-2">
            <button type="button" className="grid">
              <Image
                src="/icons/arrow_left.svg"
                width={70}
                height={35}
                alt="Strzałka w lewo"
              />
            </button>
            <button type="button" className="grid">
              <Image
                src="/icons/arrow_right.svg"
                width={70}
                height={35}
                alt="Strzałka w prawo"
              />
            </button>
          </div>
          <hr className="my-2 w-72 lg:w-[30rem] xl:w-[40rem] 2xl:w-[50rem] border-t border-white" />
        </div>
      </header>
      <section className="py-6 space-y-6 py-8 md:space-y-8 xl:space-y-10 xl:py-10 flex flex-col">
        {drops.map((drop, index) => (
          <DropItem
            {...drop}
            key={drop.slug}
            isLast={index === drops.length - 1}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const date = new Date();
  const hotDrops = (await getHotDrops(1, date)) ?? [];
  const drops = (await getAllDrops(6, date)) ?? [];
  return {
    props: {
      hotDrops,
      drops,
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  };
}
