import React from "react";
import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">
            Scholarships
          </h1>
          <p className="mb-10">
            There are a variety of ways of funding studies: student loans, state
            grants, scholarships, internal assignments, paid internships,
            contract work etc, each of which must be considered by students on
            an individual basis. On the other hand, every university has
            internal requirements that enable it to provide grant opportunities
            for certain students.
          </p>
          <p className="font-bold">Current offers:</p>
          <p className="mb-10">
            educations.com - &quot;Study a Master&apos;s in Europe and get a
            scholarship worth €5000. The scholarship is open to students from
            any country who are planning to study a Master&quot;s degree in
            Europe in the autumn 2021. The degree program must be studied either
            within Europe or online via distance learning from a European
            institute.
          </p>
          <p className="mb-10">
            South Moravian Centre for International Mobility Grants - grants at
            an amount of 7,000 CZK cover additional living expenses, such as
            accommodation at university dormitory, food in the university
            buffet, local transport and health insurance. New scholarships
            offered can be found here.
          </p>
          <p className="mb-10">
            International Visegrad Fund - Scholarships for Citizens of the
            fol­low­ing coun­tries: Albania, Armenia, Azerbaijan, Belarus,
            Bosnia and Herzegovina, Croatia, Georgia, Macedonia, Moldova,
            Montenegro, the Russian Federation, Serbia and Ukraine (please note
            that the same rules are applic­a­ble to Kosovar schol­ars).
            Successful appli­cants within this scheme will receive
            schol­ar­ships of €2,300/semester and the cor­re­spond­ing host
            universities/institutes receive €1,500/semester/scholar. Scholars
            who will have to travel to the host insti­tu­tion more than 1,500 km
            are also eli­gi­ble for one-time Travel Grant.
          </p>
        </article>
      </section>
    </main>
  );
}
