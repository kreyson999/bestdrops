/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Button from "./Button";
import SocialIcon from "./SocialIcon";

function Footer() {
  return (
    <footer className="flex flex-col items-center pt-6 bg-dark-blue">
      <div className="w-full flex space-x-4 items-center mb-1">
        <hr className="grow border-t border-white" />
        <div className="flex space-x-2">
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
        <hr className="grow border-t border-white" />
      </div>
      <div className="p-4 flex flex-col md:w-full md:justify-between md:flex-row max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="self-center md:order-last">
          <Button text="Poprzednie dropy" href="/poprzedniedropy" />
        </div>
        <div className="mt-4">
          <p className="md:w-96">
            Zdjęcia użyte na stronie nie są naszego autorstwa i należa do ich
            prawnych właścicieli.
          </p>
          <a
            href="mailto:contact@bestdrops.pl"
            className="text-blue font-semibold"
          >
            contact@bestdrops.pl
          </a>
        </div>
      </div>
      <div className="w-full flex space-x-4 items-center mb-1">
        <hr className="grow border-t border-white" />
        <span className="text-white">
          Realizacja:{" "}
          <a
            href="https://mlynek.xyz/"
            target="_blank"
            rel="noreferrer"
            className="text-light-blue"
          >
            www.mlynek.xyz
          </a>{" "}
        </span>
        <hr className="grow border-t border-white" />
      </div>
    </footer>
  );
}

export default Footer;
