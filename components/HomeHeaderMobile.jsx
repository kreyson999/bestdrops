import React, { useEffect, useState, useRef, useCallback } from "react";

import FeaturedHotDrop from "./FeaturedHotDrop";
import useWindowSize from "../hooks/useWindowSize";

function HomeHeaderMobile({ hotDrops }) {
  const [windowWidth] = useWindowSize();
  const [dropIndex, setDropIndex] = useState(0);
  // mobile slider
  const prevTranslate = useRef(0);
  const sliderContainer = useRef(null);
  const startPos = useRef(0);
  const endPos = useRef(0);
  const translatedBy = useRef(0);

  const transformCarousel = (x) => {
    const slider = sliderContainer.current;
    slider.style.transform = `translateX(${-x}px)`;
  };

  const touchStart = useCallback((e) => {
    startPos.current = e.touches[0].pageX;
  }, []);

  const touchEnd = useCallback(() => {
    const slider = sliderContainer.current;
    const { width } = slider.getBoundingClientRect();

    if (translatedBy.current < -100 && dropIndex > 0) {
      // move to the left
      const moveBy = (dropIndex - 1) * width;
      transformCarousel(moveBy);
      prevTranslate.current = moveBy;
      setDropIndex((state) => state - 1);
    } else if (
      translatedBy.current > 100 &&
      dropIndex < slider.children.length - 1
    ) {
      // move to the right
      const moveBy = (dropIndex + 1) * width;
      transformCarousel(moveBy);
      prevTranslate.current = moveBy;
      setDropIndex((state) => state + 1);
    } else {
      transformCarousel(prevTranslate.current);
    }
  }, [dropIndex]);

  const touchMove = useCallback((e) => {
    const translate = startPos.current - e.touches[0].pageX;
    transformCarousel(translate + prevTranslate.current);
    endPos.current = e.touches[0].pageX;
    translatedBy.current = translate;
  }, []);

  const resizeSlides = useCallback(() => {
    const slider = sliderContainer.current;
    const { width } = slider.getBoundingClientRect();
    const moveBy = dropIndex * width;
    transformCarousel(moveBy);
    prevTranslate.current = moveBy;
  }, [dropIndex]);

  useEffect(() => {
    const slides = [...sliderContainer.current.children];
    slides.forEach((slide) => {
      slide.addEventListener("touchstart", touchStart);
      slide.addEventListener("touchend", touchEnd);
      slide.addEventListener("touchmove", touchMove);
    });
    // eslint-disable-next-line no-undef
    window.addEventListener("resize", resizeSlides);
    return () => {
      slides.forEach((slide) => {
        slide.removeEventListener("touchstart", touchStart);
        slide.removeEventListener("touchend", touchEnd);
        slide.removeEventListener("touchmove", touchMove);
      });
      // eslint-disable-next-line no-undef
      window.removeEventListener("resize", resizeSlides);
    };
  }, [windowWidth, touchStart, touchEnd, touchMove, resizeSlides]);

  return (
    <>
      <div className="max-w-[100vw] overflow-hidden mx-auto flex flex-col">
        <div
          ref={sliderContainer}
          className="transition-transform inline-flex relative col-span-2 h-full"
        >
          {hotDrops.map((drop, index) => (
            <FeaturedHotDrop
              {...drop}
              key={drop.name}
              isCurrent={index === dropIndex}
            />
          ))}
        </div>
      </div>
      {/* Mobile Circles */}
      <div className="flex items-center mt-6">
        <hr className="grow border-t" />
        <div className="flex mx-4 space-x-1.5">
          {hotDrops.map((drop, index) => (
            <div
              key={drop.name}
              className={`w-3 h-3 rounded-full ${
                index === dropIndex ? "bg-blue" : "bg-blue-opacity"
              }`}
            />
          ))}
        </div>
        <hr className="grow border-t" />
      </div>
    </>
  );
}

export default HomeHeaderMobile;
