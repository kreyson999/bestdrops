import React from "react";
import Image from "next/image";

import {
  getAllDrops,
  getDropDetails,
  REVALIDATE_PAGE_CONTENT,
} from "../../lib/graphCMS";
import getFormattedDate from "../../helpers/getFormattedDate";

import { SeoHead, Price, Button, Navbar, FAQItem } from "../../components";
import { resellTooltip, retailTooltip } from "../../helpers/constants";

function DropItemPage({
  date,
  description,
  featuredImage,
  linkToDrop,
  linkToGoat,
  linkToStockX,
  name,
  resell,
  retail,
  slug,
  dropPlace,
}) {
  const seoObject = {
    title: `${name} - BESTDROPS.PL`,
    url: `https://bestdrops.pl/drop/${slug}`,
    image: featuredImage.url,
    description: `${name} będzie dropił już ${getFormattedDate(
      date
    )}. Cena wyniesie ${retail} zł, a kwota odsprzedaży ${resell} zł.`,
  };

  const isWorth = () => {
    if (Number.isNaN(Number(resell))) {
      return "Jeśli myślisz o odsprzedaży tego przedmiotu i zarobieniu na tym pieniędzy to jest to nieopłacalne. Natomiast świetnie nada się do użytku osobistego.";
    }
    const profit = Number(resell) - Number(retail);
    if (profit <= 50) {
      return "Jeśli uda Ci się sprzedać komuś ten przedmiot to jesteś w stanie zarobić od 0 zł do 50 zł.";
    }
    if (profit <= 100) {
      return "Opłaca się kupić ten przedmiot, ponieważ jeśli uda ci się go sprzedać, możesz zarobić od 50 zł do 100 zł.";
    }
    if (profit <= 200) {
      return "Opłaca się kupić ten przedmiot, ponieważ jeśli uda ci się go sprzedać, możesz zarobić od 100 zł do 200 zł.";
    }
    return `Ten przedmiot jest bardzo opłacalny. Możesz na nim zarobić około ${
      Math.round(profit / 100) * 100
    } zł.`;
  };

  const questions = [
    {
      title: "Opis przedmiotu",
      text: description,
    },
    {
      title: `Kiedy ${
        dropPlace.length > 2 ? "i gdzie" : ""
      } można zdobyć ten przedmiot?`,
      text: `Ten przedmiot możesz zdobyć ${new Date(
        date
      ).toLocaleDateString()} o godzinie ${new Date(date).toLocaleTimeString(
        "pl",
        { hour: "2-digit", minute: "2-digit" }
      )}${
        dropPlace.length > 2
          ? ` na: ${dropPlace === "-" ? "brak informacji" : dropPlace}`
          : ""
      }.`,
    },
    {
      title: "Czy opłaca się kupować ten przedmiot?",
      text: isWorth(),
    },
    {
      title: "Gdzie mogę sprzedać ten przedmiot jeśli go trafię?",
      text: `Najlepszym miejscem do sprzedaży tej pary butów są streetwearowe grupy na facebooku lub skorzystanie z serwisu Vinted.pl. 
      Innymi miejscami do sprzedaży takich rzeczy są zagraniczne strony StockX oraz GOAT.`,
    },
    {
      title: "Gdzie mogę kupić ten przedmiot jeśli nie udało mi się go trafić?",
      text: `Ten przedmiot możesz kupić na róznych grupach streetwearowych, serwisie Vinted.pl lub zagranicznych stronach StockX lub GOAT.`,
    },
  ];

  return (
    <>
      <SeoHead {...seoObject} />
      <Navbar title="Drop" />
      <article className="mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl p-4 md:py-8 lg:py-12 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
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
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-extrabold text-light-blue uppercase">
              {name}
            </h1>
            <p className="text-xl md:text-2xl lg:text-[1.7rem] xl:text-3xl font-extralight">
              {getFormattedDate(date)}
            </p>
            {/* <span className="text-gray-300 text-xl block mt-2 mb-3">
              Miejsce dropu: {dropPlace}
            </span> */}
          </div>
          <div className="mt-3 md:mt-0 flex flex-col items-end space-y-0.5 lg:space-y-1.5 md:space-y-1 text-xl md:text-2xl lg:text-[1.7rem] xl:text-3xl">
            <Price title="Retail" price={retail} toolTip={retailTooltip} />
            <Price title="Resell" price={resell} toolTip={resellTooltip} />
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
      </article>
      <div className="flex items-center mt-6 space-x-32 md:space-x-48 lg:space-x-96 mb-8">
        <hr className="grow border-t" />
        <hr className="grow border-t" />
      </div>
      <section className="max-w-screen-xl mx-auto flex flex-col px-4 pt-4 pb-16">
        <h2 className="text-xl lg:text-2xl text-light-blue font-extralight uppercase mb-4">
          Więcej informacji:
        </h2>
        <div className="flex flex-col space-y-2">
          {questions.map((question) => (
            <FAQItem key={question.title} {...question} />
          ))}
        </div>
      </section>
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
