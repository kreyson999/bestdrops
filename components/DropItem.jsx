/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Price from "./Price";

function DropItem({ name, slug, featuredImage, resell, retail }) {
  return (
    <Link href={`/drop/${slug}`}>
      <a className="border-2 border-light-blue p-1.5 flex">
        <div className="grid max-w-[128px] w-full">
          <Image
            src={featuredImage.url}
            width={200}
            height={200}
            alt={`Wygląd buta o nazwie ${name}`}
            className="object-cover"
          />
        </div>
        <div className="grow flex flex-col text-right items-end justify-between">
          <span className="font-bold uppercase text-light-blue text-lg">
            {name}
          </span>
          <div className="flex flex-col items-end">
            <Price title="Retail" price={retail} />
            <Price title="Resell" price={resell} />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default DropItem;
