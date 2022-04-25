/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import Image from "next/image";

function HotDropItem({ name, featuredImage, slug }) {
  return (
    <Link href={`/drop/${slug}`}>
      <a className="relative flex py-2 md:w-full lg:w-11/12 space-x-4 justify-self-end">
        <div className="grid aspect-square">
          <Image
            src={featuredImage.url}
            width={100}
            height={100}
            alt={`Wygląd buta o nazwie ${name}`}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-xl lg:text-2xl text-right line-clamp-3 overflow-hidden">
          {name}
        </h2>
      </a>
    </Link>
  );
}

export default HotDropItem;
