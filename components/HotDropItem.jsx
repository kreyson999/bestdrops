import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

function HotDropItem({ name, featuredImage, isCurrent, onClick, onComplete }) {
  const bgRef = useRef(null);

  useEffect(() => {
    if (!isCurrent) return {};
    const animation = gsap.from(bgRef.current, {
      width: "0%",
      duration: 15,
      onComplete,
      ease: "none",
    });
    return () => {
      if (isCurrent) {
        animation.kill();
      }
    };
  }, [isCurrent, name, onComplete]);

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
        ref={bgRef}
        className={`bg-[#0C4A6D] absolute w-full h-full z-10 left-0 top-0 absolute animateBg ${
          isCurrent ? "visible" : "invisible"
        }`}
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
