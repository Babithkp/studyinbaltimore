import React from "react";
import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <main className="bg-slate-100 flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">Health</h1>
          <p className="mb-10">
            Medical care in the Czech Republic is on a very good professional
            and technological level. Results of Czech doctors in some fields can
            be considered as top-ranking worldwide. Health care is provided by
            state-run and private medical facilities. In the event of sudden
            illness or injury out of surgery hours it is ensured in the
            emergency departments in hospitals. In cases of sudden serious
            illness you can any time call an ambulance on 112 all over the
            country.
          </p>
          <p className="mb-10">
            Medicines to relieve flu or a cold and other similar preparations
            can be purchased without a prescription in pharmacies. A
            prescription from a doctor is required to purchase other medicines.
          </p>
          <p className="mb-10">
            In Brno we have good health services done by public as well as
            private hospitals. In case of emergency, you can visit or contact
            hospitals/clinics below.
          </p>
          <p className="mb-10">
            With your health insurance you can visit any general practitioner
            (GP) or dentist. If you have a specific problem (e.g. with an eye),
            first visit a GP (try to make an appointment, if you can) who will
            examine you and may then arrange a visit to a specialist. Do not
            forget to bring the insurance card (or another insurance document)
            with you. If the doctor does not accept your card and you have to
            pay, keep your receipts, your home insurance company will refund
            what you paid.
          </p>
          <h1 className="text-red-500 text-5xl font-bold my-10">Insurance</h1>
          <p className="mb-10">
            In accordance with the Insurance Act No. 277/2009 Coll. and Act No.
            326/1999 Coll. (The Act on the Residence of Foreign Nationals in the
            Czech Republic), it is necessary to have a valid health insurance
            policy in order to obtain a visa for foreigners coming to the Czech
            Republic.
          </p>
          <p className="mb-10">
            Valid health insurance is a necessary condition for all foreigners
            coming to the Czech Republic for tourism, work, or studies, either
            short-term or long-term. The law requires all foreigners to have a
            so-called commercial health insurance policy for foreigners. Apart
            from meeting one of the conditions for being granted a visa, health
            insurance for foreigners provides necessary financial coverage of
            medical care provided (including regular medical check-ups in some
            cases) in the event of an injury.
          </p>
        </article>
      </section>
    </main>
  );
}
