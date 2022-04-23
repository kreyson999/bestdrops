import React from "react";
import { DropItem, SeoHead } from "../components";
import Navbar from "../components/Navbar";
import {
  getDropsWithPagination,
  REVALIDATE_PAGE_CONTENT,
} from "../lib/graphCMS";

function PoprzednieDropy({ drops }) {
  const seoObject = {
    title: "Poprzednie Dropy",
    url: `https://bestdrops.pl/poprzedniedropy`,
    description: "Lista przedmiotów, które niedawno miały swoją premierę.",
  };

  return (
    <>
      <SeoHead {...seoObject} />
      <Navbar title="Dropy" />
      <section className="max-w-screen-xl mx-auto px-4 mt-8 flex flex-col mb-8">
        <h1 className="text-xl lg:text-2xl text-light-blue font-extralight uppercase mb-4">
          Nadchodzące dropy:
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {drops.map((drop) => (
            <DropItem key={drop.name} {...drop} />
          ))}
        </div>
      </section>
    </>
  );
}

export default PoprzednieDropy;

export async function getStaticProps() {
  const date = new Date();
  const drops = await getDropsWithPagination(24, date);
  return {
    props: { drops },
    revalidate: REVALIDATE_PAGE_CONTENT,
  };
}
