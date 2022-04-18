import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar({ title }) {
  return (
    <nav className="flex items-center justify-between">
      <div className="bg-blue py-2 md:pl-8 lg:pl-16 flex items-center w-min pr-12 md:pr-32">
        <Link href="/">
          <a href="/" className="w-14 lg:w-16 grid">
            <Image
              priority
              src="/images/logo.svg"
              width={112}
              height={112}
              alt="Logo naszej strony"
            />
          </a>
        </Link>
        <span className="ml-1 text-white text-2xl md:text-3xl uppercase font-bold">
          {title}
        </span>
      </div>
      <div className="relative flex items-center md:before:absolute md:before:left-0 md:before:-bottom-1 md:before:w-full md:before:border-b mr-4 md:mr-8 lg:mr-16">
        <input
          placeholder="Szukaj"
          className="hidden md:block bg-transparent text-lg text-light-blue focus:outline-none"
        />
        <div className="grid">
          <Image
            src="/icons/search.svg"
            width={32}
            height={32}
            alt="Ikona Szukaj"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
