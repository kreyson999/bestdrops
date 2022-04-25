/* eslint-disable no-undef */
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const changeSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    changeSize();
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return [width, height];
};

export default useWindowSize;
