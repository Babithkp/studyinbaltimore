import React from "react";import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10">
        <article className="flex flex-col ">
          <h1 className="text-red-500 text-5xl font-bold my-10">
            Janáček Academy of Performing Arts
          </h1>
          <ul>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"}/> JAMU is a public higher
              education institution (HEI) founded 12th September 1947. Its
              beginnings had been preceded by efforts connected to the name of
              Leoš Janáček, one of the most distinquished figures in modern
              European Music, including foundation of the Organ school in 1881
              and of the Brno Conservatory in 1919. JAMU is one of the two art
              academies in the Czech Republic focused on music as well as
              performing arts.
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"}/> The JAMU´s main role is to
              provide tertiary education in the field of arts (music, theatre,
              dance, and multimedia) in its accredited bachelor, master and
              doctoral study programmes. At the same time it actively pursues
              academic research and publication while striving to develop
              international partnerships. Students and teachers also participate
              in various programmes and take many opportunities to enhance their
              skills at partner foreign institutions within Erasmus+ programme,
              JAMU has inter-institututional agreements with more than 60
              institutions from 23 countries. JAMU is a member of international
              artistic networks as AEC, ELIA, ENCATC, E:UTSA and SAR.
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
