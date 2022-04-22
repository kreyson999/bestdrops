/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Price from "./Price";

function DropItem({ name, slug, featuredImage, resell, retail }) {
  return (
    <Link href={`/drop/${slug}`}>
      <a className="border-2 border-light-blue p-1.5 flex space-x-2">
        <div className="flex-none grid col-span-5 h-[128px] w-[128px] md:w-[165px] md:h-[165px]">
          <Image
            src={featuredImage.url}
            width={165}
            height={165}
            alt={`Wygląd buta o nazwie ${name}`}
            className="object-cover"
          />
        </div>
        <div className="grow flex flex-col text-right items-end justify-between">
          <span className="font-bold uppercase text-light-blue md:text-lg lg:text-xl line-clamp-3">
            {name}
          </span>
          <div className="flex flex-col items-end md:text-lg xl:text-xl">
            <Price title="Retail" price={retail} />
            <Price title="Resell" price={resell} />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default DropItem;
