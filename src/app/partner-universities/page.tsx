import React from "react";
import { MdArrowOutward } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import img1 from "../../../public/universitiesLogo/bccc.png";
import img2 from "../../../public/universitiesLogo/marylandpng.png";
import img3 from "../../../public/universitiesLogo/universityOfBaltimorejpg.jpg";
import img4 from "../../../public/universitiesLogo/coppin.svg";
import img5 from "../../../public/universitiesLogo/morgan.png";
import img6 from "../../../public/universitiesLogo/frostburg.png";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-[90%] p-10 max-md:w-full max-md:p-4">
        <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
          Partner universities
        </h1>
        <div className="my-10 flex w-full gap-5 text-center max-lg:flex-wrap max-sm:grid max-sm:grid-cols-2">
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <Image
              src={img3}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="mr-10 text-center">The University of Maryland</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <Image
              src={img1}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-80 object-contain"
            />
            <p className="mr-10 text-center">Maryland City Community College</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <Image
              src={img2}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="mr-10 text-center">
            university of Maryland (school of dentistry)
            </p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <Image
              src={img4}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="mr-10 text-center">Coppin State University</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <Image
              src={img5}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="mr-10 text-center">Morgan State University</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <Image
              src={img6}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-cover"
            />
            <p className="mr-10 text-center">Frostburg State University</p>
          </figure>
        </div>
      </section>
      <section className="grid w-[90%] grid-cols-3 gap-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Degree programs</span>
            </AccordionTrigger>
            <AccordionContent className=" text-lg">
            <p className="p-3 bg-slate-300 w-full">The following masters and phd programs are eligible for scholarships to study at one of our partner universities.</p>
              <ul>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Accounting</li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Artificial Intelligence for Business.</li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Applied Molecular Biology and Biochemistry</li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Architecture </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Business Administration</li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Business-Finance</li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Construction management </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Cybersecurity </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Civil engineering </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Chemical Engineering </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Computer engineering </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Data analytics and visualization </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Electrical engineering </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Environmental science </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Global journalism and communications </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Global Affairs and Human Security</li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Health Administration</li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Hospitality management </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Information systems/Technology </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> International business </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Management </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Marketing </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Mechanical Engineering</li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Nursing </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Project management </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Public health </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Social work </li>
                <li className="bg-slate-400 border-b-[1px] border-black py-1 text-center"> Urban transportation</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Admission requirements</span>
            </AccordionTrigger>
            <AccordionContent className="bg-slate-200 p-10 text-lg">
              content
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Admission deadline</span>
            </AccordionTrigger>
            <AccordionContent className="bg-slate-200 p-10 text-lg">
              content
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
