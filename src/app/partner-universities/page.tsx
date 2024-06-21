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
import img2 from "../../../public/universitiesLogo/maryland.jpg";
import img3 from "../../../public/universitiesLogo/universityOfBaltimorejpg.jpg";
import img4 from "../../../public/universitiesLogo/coppin.svg";
import img5 from "../../../public/universitiesLogo/morgan.png";
import img6 from "../../../public/universitiesLogo/frostburg.png";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex items-center justify-center ">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl ">
            Partner universities
          </h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <figure className="flex w-full items-center justify-between">
                  <Image src={img3} alt="college" className="w-40" />
                  <p className="mr-10">The University of Baltimore</p>
                </figure>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-200 p-10 text-lg">
                <Link
                  href={"https://www.ubalt.edu"}
                  className="flex items-center gap-2 underline"
                  target="_blank"
                >
                  <p>The University of Baltimore</p> <MdArrowOutward />
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <figure className="flex w-full items-center justify-between">
                  <Image src={img1} alt="college" />
                  <p className="mr-10">Baltimore City Community College</p>
                </figure>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-200 p-10 text-lg">
                <Link
                  href={"https://www.bccc.edu"}
                  className="flex items-center gap-2 underline"
                  target="_blank"
                >
                  <p>Baltimore City Community College</p> <MdArrowOutward />
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <figure className="flex w-full items-center justify-between">
                  <Image src={img2} alt="college" className="w-40" />
                  <p className="mr-10">
                    University of Maryland, Baltimore County
                  </p>
                </figure>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-200 p-10 text-lg">
                <Link
                  href={"https://www.umaryland.edu"}
                  className="flex items-center gap-2 underline"
                  target="_blank"
                >
                  <p>University of Maryland, Baltimore County</p>{" "}
                  <MdArrowOutward />
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <figure className="flex w-full items-center justify-between">
                  <Image src={img4} alt="college" className="w-40" />
                  <p className="mr-10">Coppin State University</p>
                </figure>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-200 p-10 text-lg">
                <Link
                  href={"https://www.coppin.edu"}
                  className="flex items-center gap-2 underline"
                  target="_blank"
                >
                  <p>Coppin State University</p> <MdArrowOutward />
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <figure className="flex w-full items-center justify-between">
                  <Image src={img5} alt="college" className="w-40" />
                  <p className="mr-10">Morgan State University</p>
                </figure>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-200 p-10 text-lg">
                <Link
                  href={"https://www.morgan.edu"}
                  className="flex items-center gap-2 underline"
                  target="_blank"
                >
                  <p>Morgan State University</p> <MdArrowOutward />
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                <figure className="flex w-full items-center justify-between">
                  <Image src={img6} alt="college" className="w-40" />
                  <p className="mr-10">Frostburg State University</p>
                </figure>
              </AccordionTrigger>
              <AccordionContent className="bg-slate-200 p-10 text-lg">
                <Link
                  href={"https://www.frostburg.edu"}
                  className="flex items-center gap-2 underline"
                  target="_blank"
                >
                  <p>Frostburg State University</p> <MdArrowOutward />
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      </section>
    </main>
  );
}
