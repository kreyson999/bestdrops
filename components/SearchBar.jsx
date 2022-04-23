/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import throttle from "lodash/throttle";

import SearchBarItem from "./SearchBarItem";
import { getMatchingDrops } from "../lib/graphCMS";

function SearchBar() {
  const inputRef = useRef(null);
  const [isSearching, setIsSearching] = useState(false);
  const [matchingDrops, setMatchingDrops] = useState([]);

  const getMatchingResults = async ({ target }) => {
    if (target.value.length > 2) {
      const result = await getMatchingDrops(target.value);
      setMatchingDrops(result);
    } else {
      setMatchingDrops([]);
    }
  };

  const handleOpenSearch = () => {
    setIsSearching(true);
  };

  const handleCloseSearch = () => {
    setIsSearching(false);
    setMatchingDrops([]);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnChange = useCallback(throttle(getMatchingResults, 1000), []);

  function handleClearState() {
    setMatchingDrops([]);
    inputRef.current.value = "";
  }

  useEffect(() => {
    return () => {
      handleOnChange.cancel();
    };
  });

  useEffect(() => {
    if (isSearching) {
      // eslint-disable-next-line no-undef
      document.body.style.overflowY = "hidden";
      // eslint-disable-next-line no-undef
    } else {
      // eslint-disable-next-line no-undef
      document.body.style.overflowY = "auto";
    }
  }, [isSearching]);

  return (
    <div
      className={`flex md:relative ${
        isSearching
          ? "fixed z-50 bottom-0 left-0 w-full h-full bg-dark-blue flex-col"
          : "items-center"
      } ${
        matchingDrops.length > 0
          ? ""
          : "md:before:absolute md:before:left-0 md:before:-bottom-0.5 md:before:w-full md:before:border-b"
      }`}
    >
      <div
        className={`${
          isSearching ? "flex bg-blue px-4 py-4" : ""
        } md:flex md:px-0 md:py-0`}
      >
        <input
          ref={inputRef}
          onChange={handleOnChange}
          placeholder="Szukaj"
          className={`${
            isSearching
              ? "block w-full text-white"
              : "hidden w-72 text-light-blue"
          } md:block bg-transparent placeholder:text-white  text-lg focus:outline-none`}
        />
        <button
          type="button"
          onClick={isSearching ? handleCloseSearch : handleOpenSearch}
          className="grid w-8 h-8 md:w-7 md:h-7"
        >
          <Image
            src={isSearching ? "/icons/close.svg" : "/icons/search.svg"}
            width={64}
            height={64}
            alt={isSearching ? "Ikona Szukaj" : "Ikona zamknij"}
          />
        </button>
      </div>
      <div
        className={`${
          matchingDrops.length > 0 ? "flex" : "hidden"
        } w-full h-full md:h-auto md:max-h-96 overflow-y-scroll flex-col divide-y divide-dashed md:bg-[#000000BF] md:border md:absolute md:top-8`}
      >
        {matchingDrops.map((drop, index) => (
          <SearchBarItem
            index={index}
            key={drop.name}
            onClick={handleClearState}
            {...drop}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
