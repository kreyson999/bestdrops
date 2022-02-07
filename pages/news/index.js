import Head from "next/head";
import { getAllArticles, getAllDrops, REVALIDATE_PAGE_CONTENT } from "../../lib/graphCMS";

import { CategoryItem, DropItem } from "../../components";
import ArticleItem from "../../components/ArticleItem";

export default function Home({upcomingDrops, articles}) {
  return (
    <>
      <Head>
        <title>BESTDROPS.PL - Newsy!</title>
        <meta name="title" content="BESTDROPS.PL - Newsy!"/>
        <meta name="description" content="Na naszej stronie możesz sprawdzić najbliżesze dropy, na których możesz zarobić oraz przeczytać o streetwearze w Polsce!"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bestdrops.pl/"/>
        <meta property="og:title" content="BESTDROPS.PL - Newsy!"/>
        <meta property="og:description" content="Na naszej stronie możesz sprawdzić najbliżesze dropy, na których możesz zarobić oraz przeczytać o streetwearze w Polsce!"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bestdrops.pl/"/>
        <meta property="twitter:title" content="BESTDROPS.PL - Newsy!"/>
        <meta property="twitter:description" content="Na naszej stronie możesz sprawdzić najbliżesze dropy, na których możesz zarobić oraz przeczytać o streetwearze w Polsce!"/>
      </Head>
      <header className="w-full headerBg-image">
        <div className="container mx-auto relative py-12 sm:py-32 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white max-w-lg lg:max-w-2xl font-light">Wszystko co chcesz wiedzieć o modzie i rapie w jednym miejscu.</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-4 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-y-2 sm:gap-y-6 lg:gap-8 xl:gap-16">
        <div className="py-2 col-span-8">
          {/* <div className="space-y-2">
            <h2 className="font-bold text-xl sm:text-2xl">Kategorie:</h2>
            <div className="space-x-3 flex overflow-x-scroll sm:overflow-x-hidden">
              <CategoryItem text={"Rapstrefa"}/>
              <CategoryItem text={"Kolaboracje"}/>
            </div>
          </div> */}
          <div className="space-y-3 pt-4">
            {articles.map((article, index) => (
              <ArticleItem article={article} key={index}/>
            ))}
          </div>
        </div>
        <aside className="py-2 col-span-4 h-full">
          <div className="sticky top-0">
            <h2 className="font-bold text-xl sm:text-2xl pb-4">Nadchodzące dropy:</h2>
            <div className="space-y-3">
              {upcomingDrops.map((drop, index) => (<DropItem key={index} drop={drop} isRow={true}/>))}
            </div>
          </div>
        </aside>
      </div>
      <style jsx>
        {`
          .headerBg-image {
            background-image: url('/images/headers/newsheaderbg.webp');
            background-position: center;
          }
        `}
      </style>
    </>
  );
}

export async function getStaticProps() {
  const date = new Date()
  const drops = await (getAllDrops(3, date) || [])
  const articles = await getAllArticles(30) || []

  return {
    props: {
      upcomingDrops: drops,
      articles: articles ?? [],
    },
    revalidate: REVALIDATE_PAGE_CONTENT
  }
}