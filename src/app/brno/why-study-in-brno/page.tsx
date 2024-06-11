import React from "react";
export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">
            Why study in Bruno
          </h1>
          <p className="mb-10">
            First and foremost, Brno is a great place to live. Not too big and
            not too small, affordable, full of exciting opportunities, lively
            events or hidden cafés to spend a lazy afternoon in, it accommodates
            every student’s need.{" "}
          </p>
        </article>
      </section>
    </main>
  );
}
