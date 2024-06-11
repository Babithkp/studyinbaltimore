import React from "react";import { GoDotFill } from "react-icons/go";
export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">
            Masaryk University
          </h1>
          <li className="flex items-center">
            <GoDotFill className="text-red-500" /> provides the best facilities
            and state-of-the-art equipment while maintaining a pleasant
            atmosphere for studying and work and a personal attitude towards
            students
          </li>
          <li className="flex items-center">
            <GoDotFill className="text-red-500" /> offers wide range of
            English-taught programmes including medicine, social sciences,
            informatics, economics and administration, arts, education,
            pharmacy, natural sciences, law, and sports
          </li>
          <li className="flex items-center">
            <GoDotFill className="text-red-500" /> has the best resources
            available, including a polar station in Antarctica, an experimental
            humanities laboratory or a cybersecurity research polygon
          </li>
        </article>
      </section>
    </main>
  );
}
