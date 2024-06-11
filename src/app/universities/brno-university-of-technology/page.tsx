import React from "react";import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">
            BRNO UNIVERSITY OF TECHNOLOGY
          </h1>
          <ul>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" /> Over hundred-year
              tradition, established in 1899
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" /> Over hundred-year 8
              Faculties, 3 university Institutes, 7 Research and Development
              Centres
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" />
              55 Bachelor’s, Master’s and Ph.D. programmes in English
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" /> International Student Club,
              member of Erasmus Student Network - buddy programme and Welcome
              Week for international students
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" /> Excellent sport facilities
              (stadium of Olympic standard) with wide range of sport activities
              on offer
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" /> The largest student halls
              of residence in Brno
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" /> Research and development
              cooperation (IBM, FEI, Honeywell, Bosch, Siemens, Škoda Auto,
              etc.)
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" /> Centres of excellence
              (Central European Institute of Technology, IT4Innovations)
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" /> Favourable placement in the
              QS World University Rankings and THE World University Rankings
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
