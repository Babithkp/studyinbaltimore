import React from "react";
export default function page() {
  return (
    <main className="flex items-center justify-center ">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
            About us
          </h1>
          <p className="text-md my-5">
            Welcome to Study in Baltimore, your gateway to pursuing higher
            education in one of America&apos;s most vibrant and historic cities.
            We specialize in facilitating international students&apos;s
            admissions to prestigious universities located in Baltimore,
            Maryland, USA.
          </p>
          <p className="text-md my-5">
            Our mission is to guide and support you through every step of the
            university application process, ensuring a smooth transition to
            academic life in Baltimore.
          </p>
          <p className="text-md my-5">
            At Study in Baltimore, we understand the unique challenges faced by
            international students when navigating the complexities of
            university admissions abroad. Our dedicated team of education
            consultants is committed to providing personalized assistance
            tailored to your academic goals and aspirations. Whether you are
            seeking undergraduate, graduate, or doctoral programs, we are here
            to help you find the right educational institution that aligns with
            your interests and career objectives.
          </p>
        </article>
      </section>
    </main>
  );
}
