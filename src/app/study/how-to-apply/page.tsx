import React from "react";
import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10">
        <article className="flex flex-col ">
          <h1 className="text-red-500 text-5xl font-bold my-10">
            How to apply
          </h1>
          <p className="mb-10">
            The qualifications and skill needed for admission vary from
            programme to programme. For full details of entry requirements,
            visit the STUDY PROGRAMME DETAILS.
          </p>
          <h2 className="text-4xl font-bold my-10">Deadline</h2>
          <p className="mb-10">
            The deadlines to apply for the autumn semester at most universities
            are in March/ April, however, international students are strongly
            advised to apply as early as possible. Document recognition and
            subject equivalence identification procedures may take up to one
            month or longer.
          </p>
          <h2 className="text-4xl font-bold my-10">Admission requirements</h2>
          <p className="mb-10">
            Each university is a separate institution, therefore each one has a
            different set of requirements and admits students through a separate
            application process. The requirements and admission fees vary from
            university to university largely depending on the chosen study
            programme.
          </p>
        </article>
      </section>
    </main>
  );
}
