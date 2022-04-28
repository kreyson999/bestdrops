import React from "react";
import Image from "next/image";

function HotDropItem({ name, featuredImage, isCurrent, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="overflow-hidden rounded-xl relative md:w-full lg:w-11/12 justify-self-end"
    >
      <div className="relative z-20 w-full h-full px-2 py-2 justify-between flex space-x-4">
        <div className="grid flex-none">
          <Image
            src={featuredImage.url}
            width={100}
            height={100}
            alt={`Wygląd buta o nazwie ${name}`}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="w-full text-xl font-extralight lg:text-2xl text-right line-clamp-3 overflow-hidden text-white">
          {name}
        </h2>
      </div>
      <div
        className={
          isCurrent
            ? "bg-[#0C4A6D] absolute w-full h-full z-10 left-0 top-0 absolute animateBg"
            : ""
        }
      />
      <div
        className={`z-0 left-0 top-0 w-full h-full absolute ${
          isCurrent ? "bg-hotdrop-opacity" : ""
        }`}
      />
    </button>
  );
}

export default HotDropItem;
