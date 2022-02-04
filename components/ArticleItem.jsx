import Image from "next/image";
import Link from "next/link";

import getFormattedDate from "../helpers/getFormattedDate";

const ArticleItem = ({article}) => {
  const { category, title, featuredImage, publishedAt, slug } = article
  
  return (
    <div className="flex rounded-xl overflow-hidden shadow-lg">
      <div className="relative aspect-square xl:aspect-video w-full">
        <Image
        src={featuredImage.url}
        alt={title}
        layout="fill"
        className="object-cover"
        />
      </div>
      <div className="w-full bg-custom-black px-2 py-2 sm:px-4 sm:py-4 flex flex-col justify-between">
        <h3 className="text-white text-lg sm:text-2xl xl:text-4xl font-bold line-clamp-4 sm:line-clamp-5 mb-2 overflow-hidden">{title}</h3>
        <div>
          <div className="flex justify-between items-center pb-2">
            <p className="hidden sm:block sm:text-xl text-gray-300">{category.title}</p>
            <p className="block sm:text-xl text-gray-300">{getFormattedDate(publishedAt)}</p>
          </div>
          <Link href={`/news/${slug}`}>
            <a className="hidden sm:block rounded-lg py-2 px-6 text-center text-xl xl:text-2xl font-bold text-white bg-blue-600 uppercase">
              Czytaj
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default ArticleItem;