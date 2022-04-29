import React, { useEffect, useState, useRef, useCallback } from "react";

import FeaturedHotDrop from "./FeaturedHotDrop";
import useWindowSize from "../hooks/useWindowSize";

function HomeHeaderMobile({ hotDrops }) {
  const [windowWidth] = useWindowSize();
  const [dropIndex, setDropIndex] = useState(0);
  // mobile slider
  const isDragging = useRef(false);
  const prevTranslate = useRef(0);
  const sliderContainer = useRef(null);
  const startPos = useRef(0);
  const translatedBy = useRef(0);

  const getPositionX = (e) => {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
  };

  const transformCarousel = (x) => {
    const slider = sliderContainer.current;
    slider.style.transform = `translateX(${-x}px)`;
  };

  const touchStart = useCallback((e) => {
    isDragging.current = true;
    startPos.current = getPositionX(e);
  }, []);

  const touchLeave = () => {
    isDragging.current = false;
  };

  const touchEnd = useCallback(() => {
    if (!isDragging) return;
    isDragging.current = false;

    const slider = sliderContainer.current;
    const { width } = slider.getBoundingClientRect();

    if (translatedBy.current < -70 && dropIndex > 0) {
      // move to the left
      const moveBy = (dropIndex - 1) * width;
      transformCarousel(moveBy);
      prevTranslate.current = moveBy;
      setDropIndex((state) => state - 1);
    } else if (
      translatedBy.current > 70 &&
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
    if (!isDragging.current) return;
    const translate = startPos.current - getPositionX(e);
    transformCarousel(translate + prevTranslate.current);
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
      // mouse events
      slide.addEventListener("mousedown", touchStart);
      slide.addEventListener("mouseup", touchEnd);
      slide.addEventListener("mouseleave", touchLeave);
      slide.addEventListener("mousemove", touchMove);
    });
    // eslint-disable-next-line no-undef
    window.addEventListener("resize", resizeSlides);
    const hideContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    // eslint-disable-next-line no-undef
    window.addEventListener("contextmenu", hideContextMenu);
    return () => {
      slides.forEach((slide) => {
        slide.removeEventListener("touchstart", touchStart);
        slide.removeEventListener("touchend", touchEnd);
        slide.removeEventListener("touchmove", touchMove);
        // mouse events
        slide.removeEventListener("mousedown", touchStart);
        slide.removeEventListener("mouseup", touchEnd);
        slide.removeEventListener("mouseleave", touchLeave);
        slide.removeEventListener("mousemove", touchMove);
      });
      // eslint-disable-next-line no-undef
      window.removeEventListener("resize", resizeSlides);
      // eslint-disable-next-line no-undef
      window.removeEventListener("contextmenu", hideContextMenu);
    };
  }, [windowWidth, touchStart, touchEnd, touchMove, resizeSlides]);

  return (
    <>
      <div className="max-w-[100vw] md:max-w-screen-xl mx-auto overflow-hidden flex flex-col md:grid md:grid-cols-3 md:my-4 lg:my-8 md:gap-x-4 lg:gap-x-6">
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
