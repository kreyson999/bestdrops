import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

function FAQItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const questionRef = useRef(null);
  const q = gsap.utils.selector(questionRef);

  const handleToggleQuestion = () => {
    setIsOpen((state) => !state);
  };

  useEffect(() => {
    const animation = gsap.to(q(".animateContent"), {
      height: isOpen ? "auto" : 0,
      duration: 1,
      ease: "bounce",
    });
    return () => {
      animation.kill();
    };
  }, [isOpen, q]);

  return (
    <div ref={questionRef} className="flex flex-col">
      <button
        type="button"
        onClick={handleToggleQuestion}
        className={`text-left transition-colors flex justify-between items-center border-b mb-1 md:mb-2 hover:text-blue ${
          isOpen ? "text-blue" : "text-light-blue"
        }`}
      >
        <span className="text-lg md:text-xl py-1 md:py-2">{title}</span>
        <div className="w-6 h-6 md:w-7 md:h-7 grid">
          <Image
            src="/icons/arrow_down.svg"
            alt="Przeczytaj wiecej"
            width={64}
            height={64}
          />
        </div>
      </button>
      <div className="animateContent h-0 overflow-hidden text-base md:text-lg rounded-xl font-extralight">
        <span className="block pt-0 pb-2 ">{text}</span>
      </div>
    </div>
  );
}

export default FAQItem;
