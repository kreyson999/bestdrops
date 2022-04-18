import React from "react";
import Image from "next/image";

function Price({ title, price }) {
  return (
    <div className="flex items-center text-xl md:text-2xl lg:text-[1.7rem] xl:text-3xl">
      <span>
        {title}: <span className="font-semibold text-blue">{price}</span> zł
      </span>
      <div className="grid ml-2 xl:ml-3 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        <Image
          src="/icons/questionmark.svg"
          width={64}
          height={64}
          alt="Ikona znaku zapytania"
        />
      </div>
    </div>
  );
}

export default Price;
