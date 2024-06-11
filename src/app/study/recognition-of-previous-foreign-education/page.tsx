import React from "react";
import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">
            Recognition of previous foreign education
          </h1>
          <p className="mb-10">
            Recognition of previous study (so called NOSTRIFICATION) is an
            obligatory condition required by the Ministry of Education of the
            Czech Republic for students who apply for degree programmes. The
            recognition is provided by the official authorities.
          </p>
          <h2 className=" text-4xl font-bold my-10">
            Applicants for bachelor level
          </h2>
          <p className="mb-10">
            You can do this by yourself (at the Czech Ministry of Education),
            hire a company (search the Internet) to do it for you or we can
            provide an assistence with the process.
          </p>
          <p className="mb-10">
            The cost of the nostrification (if we provide the assistence) is
            4000 CZK this includes: translation of your documents, notary
            confirmation, nostrification fee, administrative fee.
          </p>
          <p className="mb-10">
            NOTE: You must be at least 18 at the year of your graduation to pass
            the nostrification. If you were 17, you will be ordered to do
            nostrification exams for which you have to be present in the Czech
            Republic (from some countries, you will not be able to get visa for
            it). Also students who come from countries that have 11 years of
            school before entering university will also have to pass
            nostrification exams.
          </p>
          <h1 className="text-red-500 text-5xl font-bold my-10">Insurance</h1>
          <p className="mb-10">
            In accordance with the Insurance Act No. 277/2009 Coll. and Act No.
            326/1999 Coll. (The Act on the Residence of Foreign Nationals in the
            Czech Republic), it is necessary to have a valid health insurance
            policy in order to obtain a visa for foreigners coming to the Czech
            Republic.
          </p>
        </article>
      </section>
    </main>
  );
}
