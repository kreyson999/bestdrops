/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";

function SearchBarItem({ onClick, name, featuredImage, slug, index }) {
  const onKeyDown = (e) => {
    if (e.keyCode !== 13) return;
    onClick();
  };

  return (
    <Link href={`/drop/${slug}`}>
      <a
        onClick={onClick}
        role="button"
        onKeyDown={onKeyDown}
        tabIndex={index}
        className="p-2 flex space-x-2"
      >
        <div className="flex-none grid w-16 h-16">
          <Image
            src={featuredImage.url}
            width={64}
            height={64}
            className="rounded object-cover"
            alt={`Wygląd buta o nazwie ${name}`}
          />
        </div>
        <span className="w-full font-extralight line-clamp-2 text-right">
          {name}
        </span>
      </a>
    </Link>
  );
}

export default SearchBarItem;
