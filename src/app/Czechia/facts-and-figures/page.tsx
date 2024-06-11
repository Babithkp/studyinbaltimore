import React from "react";import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">
            Facts and Figures
          </h1>
          <p className="mb-10">
            We are a small country with a great mind. Since the middle ages, the
            area we now know as the Czech Republic was a centre of commerce,
            innovation and political events shaping history. But before we dive
            into it, let&apos;s read some basic facts:
          </p>
        </article>
      </section>
    </main>
  );
}
