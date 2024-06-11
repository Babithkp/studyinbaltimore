import React from "react";
import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">
            Students with special needs
          </h1>
          <h2 className=" text-4xl font-bold my-10">Mendel University</h2>

          <p className="flex items-center">
            Student with specific need is a person who has for example physical
            or sensory handicap, specific learning disability, autism spectrum
            disorder, mental or other chronic-somatic disorder. Services and
            counselling for students with specific needs are provided for free
            by Counselling and Career Centre. Our main goal is to eliminate
            obstacles in your study, to support your personal growth and to make
            you successful on the labour market.
          </p>
          <p className="mb-10">
            Our crucial service is modification of study conditions – called as
            modification of study. Typically, this means an increase in exam
            time, access to study materials, securing barrier free premises,
            lending tools and technologies, assistance services, interpreting or
            speech-to-text-service, individual additional tutorial, drawing up
            individual study plan and others. Modification of study comes from
            students’ needs and current possibilities of university.
          </p>
          <p className="mb-10">
            Counselling and Career Centre offers also for free psychological
            counselling (also in English) as well as legal counselling.
          </p>
          <p className="mb-10">
            Mendel University is trying to satisfy students with different types
            of specific needs and is ready to help them to overcome their
            problems and difficult situations during their studies, which may
            arise in connection to their specific needs. Each faculty offers
            students with specific needs individual approach not only during
            their study time but also during whole exam period.
          </p>
          <h2 className=" text-4xl font-bold my-10">
            Brno University of Technology
          </h2>
          <ul>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              Brno University of Technology has a special support and
              counselling centre &quot;Alfons&quot; for students with any kind
              of disabilities.
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              In case you need help concerning special needs, do not hesitate to
              contact the centre - they are English speaking and ready to help
              you and make your stay in Brno as comfortable as possible.
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              More information can be found HERE
            </li>
            <p>Service is available for students with:</p>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              specific learning difficulties
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              hearing impairmen
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              visual impairment
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              physical impairment
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              mental health issues
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              autistic spectrum disorders
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              chronic somatic diseases
            </li>
          </ul>
          <h2 className=" text-4xl font-bold my-10">
            Brno University of Technology
          </h2>
          <p className="mb-10">
            The Support Centre for Students with Special Needs
            (&quot;Teiresiás&quot;) is Masaryk University&apos;s key facility
            helping students struggling with:
          </p>
          <ul>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              chronic somatic diseases
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              impaired mobility
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              learning disabilities
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              psychological disabilities
            </li>
            <li className="flex items-center">
              <GoDotFill className="text-red-500" size={"1rem"} />
              chronic illness
            </li>
          </ul>
          <p className="mb-10">
            The SCSSN offers a range of services from counselling for special
            needs applicants and entrance examinations administration to
            educational and psychological counselling and the implementation of
            associated organizational, didactic and technological measures
            throughout the study period or during testing and examinations to
            the development of complex individual study plans and the
            implementation of technically modified final examinations.
          </p>
          <p>Additional information may be found on the SCSSN website.</p>
        </article>
      </section>
    </main>
  );
}
