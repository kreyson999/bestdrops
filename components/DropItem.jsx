/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import getFormattedDate from "../helpers/getFormattedDate";

import Price from "./Price";

function DropItem({ name, slug, featuredImage, date, retail }) {
  return (
    <Link href={`/drop/${slug}`}>
      <a className="border-2 border-light-blue p-1.5 lg:p-2 flex space-x-2">
        <div className="flex-none grid col-span-5 h-[128px] w-[128px] md:w-[165px] md:h-[165px]">
          <Image
            src={featuredImage.url}
            width={256}
            height={256}
            alt={`Wygląd buta o nazwie ${name}`}
            className="object-cover rounded"
          />
        </div>
        <div className="grow flex flex-col text-right items-end justify-between">
          <h3 className="font-bold uppercase text-light-blue md:text-lg lg:text-xl line-clamp-3">
            {name}
          </h3>
          <div className="flex flex-col items-end md:text-lg xl:text-xl">
            <Price title="Retail" price={retail} />
            <span className="text-gray-300">{getFormattedDate(date)}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default DropItem;
