import React from "react";
import Image from "next/image";

function Custom404() {
  return (
    <div className="py-12 grid place-content-center space-y-1 sm:space-y-2 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold uppercase">
        Wystąpił błąd
      </h1>
      <p className="text-lg sm:text-xl">
        Niestety, ta strona nie została odnaleziona!
      </p>
      <div className="pt-12">
        <Image
          src="/images/404page.svg"
          alt="404 Image"
          width={640}
          height={360}
          priority
        />
      </div>
    </div>
  );
}

export default Custom404;
