/* eslint-disable no-undef */
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { DropItem, SeoHead } from "../components";
import Navbar from "../components/Navbar";

import { getHotDrops, REVALIDATE_PAGE_CONTENT } from "../lib/graphCMS";

function Kontakt({ drops }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const isSending = useRef(false);

  const seoObject = {
    title: "Kontakt",
    url: `https://bestdrops.pl/kontakt`,
    description: "Formularz kontaktowy do skontaktowania się z nami.",
  };

  const onSubmit = async (data) => {
    if (isSending.current) return;
    try {
      isSending.current = true;
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        isSending.current = false;
      });
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const inputClassName =
    "text-lg border-2 w-full bg-transparent px-2 py-2 placeholder:text-light-blue placeholder:uppercase focus:outline-none focus:border-blue";

  return (
    <>
      <SeoHead {...seoObject} />
      <Navbar title="Kontakt" />
      <section className="flex flex-col max-w-screen-xl mx-auto px-4 mt-8 flex flex-col mb-8 grid grid-cols-1 gap-y-12 md:gap-y-0 md:gap-x-6 md:grid-cols-2">
        <div className="flex flex-col">
          <span className="text-xl lg:text-2xl text-light-blue font-extralight uppercase">
            Formularz kontaktowy
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-3 flex flex-col space-y-4"
          >
            <div className="flex flex-col">
              <input
                {...register("name", {
                  required: true,
                  maxLength: 16,
                  minLength: 3,
                })}
                className={inputClassName}
                type="text"
                placeholder="Imię"
              />
              <span className="text-sm text-red-700">
                {errors.name &&
                  "Imię musi mieć co najmniej 3 litery i maksymalnie 16."}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                {...register("email", {
                  required: true,
                  minLength: 4,
                  maxLength: 120,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className={inputClassName}
                type="email"
                placeholder="E-mail"
              />
              <span className="text-sm text-red-700">
                {errors.name &&
                  "Imię musi mieć co najmniej 3 litery i maksymalnie 16."}
              </span>
            </div>
            <div className="flex flex-col">
              <textarea
                {...register("message", {
                  required: true,
                  minLength: 12,
                  maxLength: 500,
                })}
                className={inputClassName}
                type="email"
                placeholder="Wiadomość"
                cols="30"
                rows="4"
              />
              <span className="text-sm text-red-700">
                {errors.name &&
                  "Imię musi mieć co najmniej 3 litery i maksymalnie 16."}
              </span>
            </div>
            <button
              type="submit"
              disabled={isSending.current}
              className="relative overflow-hidden w-full border-2 border-light-blue py-2.5 px-5 text-light-blue hover:text-dark-blue transition-colors 
              before:absolute before:-left-full before:top-0 before:w-full before:h-1/2 before:bg-light-blue before:transition-transform hover:before:translate-x-full 
              after:absolute after:-right-full after:bottom-0 after:w-full after:h-1/2 after:bg-light-blue after:transition-transform hover:after:-translate-x-full"
            >
              <span className="block relative w-full h-full z-20 font-semibold uppercase text-lg">
                Wyślij
              </span>
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          <span className="lg:self-end lg:w-[400px] text-xl lg:text-2xl text-light-blue font-extralight uppercase mb-3">
            Nadchodzące dropy:
          </span>
          <div className="lg:self-end lg:w-[400px]  grid sm:grid-cols-2 md:grid-cols-1 gap-3">
            {drops.map((drop) => (
              <DropItem key={drop.name} {...drop} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Kontakt;

export async function getStaticProps() {
  const date = new Date();
  const drops = await getHotDrops(3, date);
  return {
    props: { drops },
    revalidate: REVALIDATE_PAGE_CONTENT,
  };
}
