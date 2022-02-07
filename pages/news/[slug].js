import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import { getAllDrops, getAllArticles, getArticleDetails, REVALIDATE_PAGE_CONTENT } from "../../lib/graphCMS";
import getFormattedDate from "../../helpers/getFormattedDate";

import { CategoryItem, PostContent, DropItem } from "../../components";

export default function Post({upcomingDrops, article}) {
  const { title, content, featuredImage, publishedAt, slug, category } = article
  return (
    <>
      <Script
      src="https://www.instagram.com/static/bundles/es6/EmbedAsyncLogger.js/aefd565f431f.js"
      strategy="lazyOnLoad"
      />
      <Head>
        <title>BESTDROPS.PL - {title}!</title>
        <meta name="title" content={`BESTDROPS.PL - ${title}!`}/>
        <meta name="description" content={`Ten artykuł został zaaktualizowany ostatni raz: ${getFormattedDate(publishedAt)}`}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://bestdrops.pl/news/${slug}`}/>
        <meta property="og:title" content={`BESTDROPS.PL - ${title}!`}/>
        <meta property="og:description" content={`Ten artykuł został zaaktualizowany ostatni raz: ${getFormattedDate(publishedAt)}`}/>
        <meta property="og:image" content={featuredImage.url}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={`https://bestdrops.pl/news/${slug}`}/>
        <meta property="twitter:title" content={`BESTDROPS.PL - ${title}!`}/>
        <meta property="twitter:description" content={`Ten artykuł został zaaktualizowany ostatni raz: ${getFormattedDate(publishedAt)}`}/>
        <meta property="twitter:image" content={featuredImage.url}/>
      </Head>
      <div className="container mx-auto  md:px-0 mt-12 flex flex-col">
        <div className="px-4">
          <p className="font-bold text-xl sm:text-2xl pb-1">Kategoria:</p>
          <CategoryItem text={category.title}/>
        </div>
        <div className="mt-4 grid grid-cols-1 pb-12 lg:grid-cols-12 gap-y-2 sm:gap-y-6 lg:gap-8 xl:gap-16 rounded-b-xl">
          <div className="col-span-8">
            <div className="relative w-full grid place-content-center">
              <div 
              style={{
                filter: "blur(4px)",
              }}
              className="absolute top-0 left-0 right-0 bottom-0 ">
                <Image
                  src={featuredImage.url}
                  alt={title}
                  layout="fill"
                />
              </div>
              <div className="relative grid place-content-center">
                <Image
                  src={featuredImage.url}
                  alt={title}
                  width={640}
                  height={360}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="bg-white w-full px-4 py-12 flex flex-col items-center space-y-6 max-w-screen overflow-hidden">
              <PostContent content={content}/>
            </div>
          </div>
          <aside className="py-2 pl-4 lg:pl-0 pr-4 col-span-4 h-full">
            <div className="sticky top-0">
              <h2 className="font-bold text-xl sm:text-2xl  pb-4">Nadchodzące dropy:</h2>
              <div className="space-y-3">
                {upcomingDrops.map((drop, index) => (<DropItem key={index} drop={drop} isRow={true}/>))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({params}) {
  const date = new Date()
  const drops = await (getAllDrops(3, date) || [])
  const article = await getArticleDetails(params.slug)

  return {
    props: {
      upcomingDrops: drops,
      article: article
    },
    revalidate: REVALIDATE_PAGE_CONTENT
  }
}

export async function getStaticPaths() {
  const paths = await getAllArticles()

  return {
    paths: paths.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  }
}