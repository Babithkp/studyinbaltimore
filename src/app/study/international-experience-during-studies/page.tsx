import React from "react";import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">
            International experience during studies
          </h1>
          <p className="mb-10">
            You can participate on Erasmus or other “exchange” study programme –
            you can spend up to two semesters of your studies abroad, finding a
            new perspective for your field, collaborating on projects and
            expanding your cultural horizons. The international placement always
            comes with a scholarship to fully or partialy cover the cost of
            living in the target country – it very much depends on which country
            you choose.
          </p>
          <p className="mb-10">
            The international experience will not only give you a whole new
            point of view concerning your field, but will be a valuable item on
            your CV as well. Participating on the exchange programme shows that
            you are able to step out of your comfort zone, that you are willing
            to take up a challenge and that you are not afraid to learn.
          </p>
        </article>
      </section>
    </main>
  );
}
