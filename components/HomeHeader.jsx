import React from "react";

import useWindowSize from "../hooks/useWindowSize";
import HomeHeaderMobile from "./HomeHeaderMobile";
import HomeHeaderDesktop from "./HomeHeaderDesktop";

function HomeHeader({ hotDrops }) {
  const [windowWidth] = useWindowSize();
  return windowWidth < 768 ? (
    <HomeHeaderMobile hotDrops={hotDrops} />
  ) : (
    <HomeHeaderDesktop hotDrops={hotDrops} />
  );
}

export default HomeHeader;
