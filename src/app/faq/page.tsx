import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <section className="w-[50%] pt-10 max-md:w-[90%]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Is it safe in Brno, Czech Republic?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Czech Republic is 10th safest country in the world, according
              to the global peace index.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What is the Study in Brno initiative?
            </AccordionTrigger>
            <AccordionContent>
              Study in Brno is a project connecting the three Brno&apos;s
              biggest universities – Brno University of Technology, Masaryk
              University and Mendel University in Brno. It is an initiative of
              the universities themselves. The aim is to support each other in
              promotion and other activities, attend study fairs together and
              bring more international students to Brno.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How do I apply to your university?
            </AccordionTrigger>
            <AccordionContent>
              For more information on the application process, visit this page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
