/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Image from "next/image";

function Price({ title, price, toolTip }) {
  return (
    <div className="flex items-center">
      <span id={title}>
        {title}: <span className="font-semibold text-blue">{price}</span> zł
      </span>
      {toolTip && (
        <label
          className="grid ml-2 xl:ml-3 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          title={toolTip}
        >
          <Image
            src="/icons/questionmark.svg"
            width={64}
            height={64}
            alt="Ikona znaku zapytania"
          />
        </label>
      )}
    </div>
  );
}

export default Price;
