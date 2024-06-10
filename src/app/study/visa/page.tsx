import React from "react";
import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10">
        <article className="flex flex-col ">
          <h1 className="text-red-500 text-5xl font-bold my-10">Visa</h1>
          <p>
            Students from EU countries (plus Norway, Iceland, Liechtenstein and
            Switzerland) are not required to have any kind of visa or residence
            permit to travel to the Czech Republic (or other Member States of
            the European Union) to study.
          </p>
          <p className="font-bold mb-10">
            Students from non-EU countries are required to have a long-term VISA
            for the purpose of studies or a long-term RESIDENCE PERMIT for the
            purpose of studies to travel to the Czech Republic (or other Member
            States of the European Union) to study.
          </p>
          <p className="mb-10">
            (Please note that citizens of the following countries are exempt
            from the visa requirement for coming to the Czech Republic as
            tourists for a period shorter than 90 days)
          </p>
          <p className="mb-10">
            However, students usually come for at least one semester, which
            invariably lasts longer than three months, and therefore they need a
            long-term VISA for the purpose of studies or a long-term RESIDENCE
            PERMIT for the purpose of studies.
          </p>
          <h2 className=" text-4xl font-bold my-10">
            Where to apply for a long-term VISA or a long-term RESIDENCE PERMIT?
          </h2>
        </article>
      </section>
    </main>
  );
}
