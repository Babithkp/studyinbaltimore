import React from "react";
import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10">
        <article className="flex flex-col ">
          <h1 className="text-red-500 text-5xl font-bold my-10">
            Student status
          </h1>
          <h2 className=" text-4xl font-bold my-10">Work during and after studies</h2>
          <ul>
            <li className="flex items-center mb-10">
              Students duly enrolled in accredited study programmes in full-time
              mode, being holders of Czech long-term residence permit or visa,
              have free access to the Czech labour market and as such they can
              be gainfully active in the Czech Republic. Many students work and
              study at the same time. Having a part-time job or summer work is
              very common in the Czech Republic. There are working options for
              international students as well, just be prepared that the job
              offer may be limited since most jobs require fluency in the Czech
              language. However, many international companies are operating in
              big cities, and your ability to speak or understand various
              languages can be a plus.
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
