/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import throttle from "lodash/throttle";

import SearchBarItem from "./SearchBarItem";
import { getMatchingDrops } from "../lib/graphCMS";
import useWindowSize from "../hooks/useWindowSize";

function SearchBar() {
  const [windowWidth] = useWindowSize();
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

  const onBlur = () => {
    if (windowWidth < 768) return;
    setIsSearching(false);
  };
  const onFocus = () => {
    if (windowWidth < 768) return;
    setIsSearching(true);
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
  }, [handleOnChange]);

  useEffect(() => {
    if (isSearching) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isSearching]);

  return (
    <div className="relative flex flex-col">
      <div className="relative flex md:before:absolute md:before:border-b md:before:-bottom-0.5 md:before:w-full">
        <input
          onChange={handleOnChange}
          placeholder="Szukaj"
          onBlur={onBlur}
          onFocus={onFocus}
          className="hidden md:block w-full w-80 text-xl bg-transparent text-white placeholder:text-white focus:outline-none"
        />
        <button
          type="button"
          onClick={handleOpenSearch}
          className="grid w-9 h-9"
        >
          <Image
            src="/icons/search.svg"
            width={64}
            height={64}
            alt="Ikona lupy"
          />
        </button>
      </div>
      {/* Mobile Search Page */}
      {isSearching && windowWidth < 768 && (
        <div className="fixed flex flex-col z-50 top-0 left-0 w-full h-full bg-dark-blue">
          <div className="bg-blue flex items-center justify-between px-4 py-5 space-x-4">
            <input
              onChange={handleOnChange}
              placeholder="Szukaj"
              className="w-full text-xl bg-transparent text-white placeholder:text-white focus:outline-none"
            />
            <button
              type="button"
              onClick={handleCloseSearch}
              className="grid w-7 h-7 flex-none"
            >
              <Image
                src="/icons/close.svg"
                width={64}
                height={64}
                alt="Ikona zamknij"
              />
            </button>
          </div>
          <div className="flex flex-col overflow-y-scroll divide-y">
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
      )}
      {isSearching && windowWidth >= 768 && (
        <div className="absolute top-[38px] w-full border-l border-r border-b bg-[#000000BF] h-96 flex flex-col overflow-y-auto divide-y">
          {matchingDrops.map((drop, index) => (
            <SearchBarItem
              index={index}
              key={drop.name}
              onClick={handleClearState}
              {...drop}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
