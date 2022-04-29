import React, { useState, useRef } from "react";

import HotDropItem from "./HotDropItem";
import FeaturedHotDrop from "./FeaturedHotDrop";

function HomeHeaderDesktop({ hotDrops }) {
  const [dropIndex, setDropIndex] = useState(0);
  const hotDropContainers = useRef(null);

  const handleChangeHotDrop = (index) => {
    setDropIndex(index);
  };

  const changeAnimationIndex = () => {
    setDropIndex((state) => {
      if (state === hotDrops.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  // useEffect(() => {
  //   if (hotDrops.length <= 1) return {};
  //   const tl = gsap.timeline().to(q(".animateBg"), {
  //     width: "100%",
  //     duration: 15,
  //     ease: "none",
  //     onComplete: () => {
  //       setDropIndex((state) => {
  //         if (state === hotDrops.length - 1) {
  //           return 0;
  //         }
  //         return state + 1;
  //       });
  //     },
  //   });
  //   hotDropContainersTimeline.current = tl;
  //   return () => {
  //     tl.kill();
  //   };
  // }, [q, windowWidth, hotDrops.length]);

  return (
    <>
      <div className="max-w-screen-xl overflow-hidden mx-auto grid grid-cols-3 my-4 lg:my-8 gap-x-4 lg:gap-x-6">
        <div className="relative grid place-content-center col-span-2 h-full">
          {hotDrops.map((drop, index) => (
            <FeaturedHotDrop
              {...drop}
              key={drop.name}
              isCurrent={index === dropIndex}
            />
          ))}
        </div>
        <div ref={hotDropContainers} className="grid grid-rows-3 py-4 mr-4">
          {hotDrops.map((drop, index) => (
            <HotDropItem
              key={drop.name}
              {...drop}
              isCurrent={index === dropIndex}
              onClick={() => handleChangeHotDrop(index)}
              onComplete={changeAnimationIndex}
            />
          ))}
        </div>
      </div>
      {/* Mobile Circles */}
      <div className="relative z-20 flex items-center mt-6 space-x-96">
        <hr className="grow border-t" />
        <hr className="grow border-t" />
      </div>
    </>
  );
}

export default HomeHeaderDesktop;
