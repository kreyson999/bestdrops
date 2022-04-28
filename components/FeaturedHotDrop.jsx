/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

import Price from "./Price";

import getFormattedDate from "../helpers/getFormattedDate";
import { retailTooltip, resellTooltip } from "../helpers/constants";
import useWindowSize from "../hooks/useWindowSize";

function FeaturedHotDrop({
  slug,
  featuredImage,
  name,
  date,
  retail,
  resell,
  isCurrent,
}) {
  const itemRef = useRef(null);
  const [windowWidth] = useWindowSize();

  useEffect(() => {
    if (windowWidth < 768) return {};
    let animation;
    if (isCurrent) {
      animation = gsap.to(itemRef.current, {
        opacity: 1,
        visibility: "visible",
        zIndex: 20,
        duration: 1,
      });
    } else {
      animation = gsap.to(itemRef.current, {
        opacity: 0,
        zIndex: 0,
        duration: 0.5,
      });
    }
    return () => {
      if (windowWidth >= 768) {
        animation.kill();
      }
    };
  }, [isCurrent, windowWidth]);

  return (
    <div
      ref={itemRef}
      // className="flex flex-col md:grid md:grid-cols-2 md:gap-x-4"
      className={`${
        isCurrent ? "relative" : "md:absolute md:top-0 md:invisible"
      } w-[100vw] md:w-full flex-none flex flex-col md:grid md:grid-cols-2 md:gap-x-4`}
    >
      <Link href={`/drop/${slug}`}>
        <a className="relative max-w-[500px] self-center mx-4 z-5 grid my-4 px-1.5 py-1.5 border-2 border-light-blue md:my-0 md:mx-0 md:ml-4">
          <Image
            src={featuredImage.url}
            width={500}
            height={500}
            className="object-cover"
            alt={`Wygląd buta o nazwie ${name}`}
            priority
          />
        </a>
      </Link>
      <div className="flex flex-col justify-between ">
        <div className="text-right mx-4 md:mx-0">
          <Link href={`/drop/${slug}`}>
            <a className="uppercase font-extrabold text-[2.1rem] leading-[2.25rem] lg:text-5xl text-light-blue hover:text-white line-clamp-4">
              {name}
            </a>
          </Link>
          <span className="text-xl lg:text-2xl font-extralight">
            {getFormattedDate(date)}
          </span>
        </div>
        <div className="mx-4 flex flex-col items-end mt-4 text-2xl lg:text-[1.7rem] md:mx-0 md:space-y-1">
          <Price title="Retail" price={retail} toolTip={retailTooltip} />
          <Price title="Resell" price={resell} toolTip={resellTooltip} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedHotDrop;
