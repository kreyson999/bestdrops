/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

function Navbar({ title }) {
  return (
    <nav className="relative before:absolute before:w-1/2 sm:before:w-2/6 before:h-full before:bg-blue before:left-0">
      <div className="relative z-50 max-w-screen-xl mx-auto flex items-center justify-between px-4 pt-2 pb-2 2xl:pb-6 2xl:pt-6">
        <div className="flex items-center ">
          <div className="2xl:absolute 2xl:-left-14 2xl:top-2 2xl:flex 2xl:flex-col 2xl:items-center ">
            <Link href="/">
              <a className="grid w-10 2xl:w-12">
                <Image
                  src="/images/logo.svg"
                  width={100.05}
                  height={128}
                  alt="Logo naszego serwisu"
                  priority
                />
              </a>
            </Link>
            <hr className="hidden 2xl:block border-l border-white h-32 mt-6" />
            <div className="hidden 2xl:block my-4 space-y-2">
              <SocialIcon
                url="https://www.instagram.com/bestdrops.pl/"
                icon="/icons/instagram.svg"
                alt="Ikona instagram.com"
              />
              <SocialIcon
                url="https://www.tiktok.com/@bestdrops.pl?lang=pl-PL"
                icon="/icons/tiktok.svg"
                alt="Ikona tiktok.com"
              />
            </div>
            <hr className="hidden 2xl:block border-l border-white h-24" />
          </div>
          <span className="ml-2 2xl:ml-0 font-bold uppercase text-2xl">
            {title}
          </span>
        </div>
        <div className="relative flex items-center md:before:absolute md:before:left-0 md:before:-bottom-0.5 md:before:w-full md:before:border-b">
          <input
            placeholder="Szukaj"
            className="hidden md:block bg-transparent placeholder:text-white text-light-blue text-lg foucs:outline-none"
          />
          <div className="grid w-8 h-8 md:w-7 md:h-7">
            <Image
              src="/icons/search.svg"
              width={64}
              height={64}
              alt="Ikona Szukaj"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
