/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

function Button({ text, href = "", dontPrerender = false }) {
  return (
    <button
      type="button"
      className={`relative overflow-hidden w-full border-2 border-light-blue p-2.5 text-light-blue hover:text-dark-blue transition-colors before:absolute before:-left-full before:top-0 before:w-full before:h-1/2 before:bg-light-blue before:transition-transform hover:before:translate-x-full after:absolute after:-right-full after:bottom-0 after:w-full after:h-1/2 after:bg-light-blue after:transition-transform hover:after:-translate-x-full
    `}
    >
      {dontPrerender ? (
        <a
          href={href}
          className="block relative w-full h-full z-50 font-semibold uppercase text-lg"
        >
          {text}
        </a>
      ) : (
        <Link href={href}>
          <a className="block relative w-full h-full z-50 font-semibold uppercase text-lg">
            {text}
          </a>
        </Link>
      )}
    </button>
  );
}

export default Button;
