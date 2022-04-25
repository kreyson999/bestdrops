/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Image from "next/image";

function Price({ title, price, toolTip }) {
  return (
    <>
      <div className="relative flex items-center">
        <span id={title}>
          {title}: <span className="font-semibold text-blue">{price}</span> zł
        </span>
        {toolTip && (
          <>
            <div className="tooltip grid ml-2 xl:ml-3 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
              <Image
                src="/icons/questionmark.svg"
                width={64}
                height={64}
                alt="Ikona znaku zapytania"
              />
            </div>
            <span className="tooltipText">{toolTip}</span>
          </>
        )}
      </div>
      <style jsx>
        {`
          .tooltip ~ .tooltipText {
            text-align: left;
            font-size: 1rem;
            position: absolute;
            visibility: hidden;
            opacity: 0;
            min-width: 200px;
            right: 0;
            line-height: 1.1rem;
            bottom: 125%;
            background-color: #0f7ab6;
            padding: 0.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
          }
          .tooltip:hover ~ .tooltipText {
            visibility: visible;
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}

export default Price;
