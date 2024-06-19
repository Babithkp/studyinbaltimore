import Image from "next/image";
import image from "../../public/heroPageImage.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import CardClg from "@/components/cards/CardClg";
import Link from "next/link";
import icon1 from "../../public/city.svg";
import icon2 from "../../public/rocket-graph.svg";
import icon3 from "../../public/carnival.svg";
import icon4 from "../../public/flag-point.svg";
import partnerClg1 from "../../public/logo-vut-big.png";
import partnerClg2 from "../../public/logo-muni-big-new.png";
import partnerClg3 from "../../public/logo-mendelu-big.png";
import cardBg from "../../public/homepage-love-brno.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
      <Image
        src={image}
        alt="hero image"
        className="relative h-screen w-full"
      />
      <section className="absolute -bottom-2 flex w-[50%] flex-col items-center justify-center max-md:w-[90%]">
        <article className="my-10 text-white">
          <h1 className="bg-red-500 px-14 py-10 text-5xl font-semibold max-md:p-4 max-md:text-4xl">
            Study in baltimore - a student city in the heart of Europe
          </h1>
          <p className="bg-blue-400 p-8 text-lg font-medium max-md:p-4">
            baltimore was voted 6th most popular student city in the world
            thanks to its world-class education, affordable cost of living,
            position in the centre of Europe (Czech Republic) and overall
            safety.
          </p>
        </article>
        <div className="flex gap-5 max-sm:flex-col">
          <button className="rounded-md bg-white px-9 py-3 font-semibold text-red-500">
            DISCOVER baltimore
          </button>
          <button className="rounded-md bg-gradient-to-b from-blue-500 to-yellow-500 px-9 py-3 font-bold text-white">
            INFO FOR UKRAINIANS
          </button>
          <button className="px-5 py-3 text-white underline">
            DISCOVER CZECHIA
          </button>
        </div>
      </section>
      <section className="flex w-[95%] flex-col items-center">
        <div className="flex w-[90%] flex-col items-center justify-center gap-3">
          <h2 className="my-8 text-5xl font-bold text-red-500 max-md:text-3xl">
            Choose your study programme in baltimore!
          </h2>
          <p className="px-5 text-center text-lg font-extralight">
            Browse over 80 programmes taught in English and make the first step
            towards your studies at some of the finest universities in Central
            Europe. Filter the programmes according to your needs and find out
            which one suits you the best!
          </p>
          <div className="flex w-full gap-3 font-light max-md:flex-col">
            <input
              type="text"
              placeholder="search by keyword..."
              className="rounded-md border-[1px] p-2"
            />
            <button className="flex w-full items-center justify-between rounded-md border-[1px] border-slate-200 bg-white px-4 py-3">
              <p>Level of Courses</p> <IoMdArrowDropdown />{" "}
            </button>
            <button className="flex w-full items-center justify-between rounded-md border-[1px] border-slate-200 bg-white px-4 py-3">
              <p>Subject</p> <IoMdArrowDropdown />{" "}
            </button>
            <button className="flex w-full items-center justify-between rounded-md border-[1px] border-slate-200 bg-white px-4 py-3">
              <p>University</p> <IoMdArrowDropdown />{" "}
            </button>
            <button className="flex w-full items-center justify-between gap-1 rounded-md border-[1px] border-slate-200 bg-white px-4 py-3">
              <input type="checkbox" />{" "}
              <p className="w-[15rem]">Only currently open programs </p>{" "}
              <FaInfoCircle color="red" />{" "}
            </button>
          </div>
          <button className="mt-2 flex h-fit w-fit items-center justify-center gap-3 rounded-md bg-red-600 p-5 py-2 text-lg uppercase text-white">
            <p>Find programmers</p>
          </button>
        </div>
        <div className="my-20 flex w-full flex-wrap items-center justify-center gap-3">
          <CardClg />
          <CardClg />
          <CardClg />
        </div>
        <Link href="/" className="mb-10 text-lg font-medium underline">
          SHOW ALL STUDY PROGRAMMES (197)
        </Link>
      </section>
      <section className="mt-5 flex justify-center bg-white">
        <div className="grid w-[85%] gap-5 max-md:w-[95%] md:grid-cols-3 md:grid-rows-2">
          <div className="col-start-1 row-span-2 flex items-center">
            <p className="my-8 text-5xl font-bold text-red-500 max-md:text-2xl">
              What will you love about baltimore?
            </p>
          </div>
          <div className="grid grid-cols-[2rem,1fr] items-center gap-3">
            <Image
              src={icon1}
              alt="city"
              className="col-span-1 justify-self-center"
            />
            <h3 className="my-5 text-3xl font-bold text-red-500 max-md:text-2xl">
              City of students
            </h3>
            <p className="col-start-2">
              62,000 students come here every semester, so the city is always
              alive, teeming with opportunities, events and everything a student
              needs. That is why it was voted as a 6th most popular student city
              worldwide!
            </p>
            <Link
              href={"/"}
              className="col-start-2 text-lg font-medium text-red-500 underline"
            >
              MORE INFO
            </Link>
          </div>
          <div className="grid grid-cols-[2rem,1fr] items-center gap-3">
            <Image
              src={icon2}
              alt="city"
              className="col-span-1 justify-self-center"
            />
            <h3 className="my-5 text-3xl font-bold text-red-500 max-md:text-2xl">
              Best Price–Quality ratio
            </h3>
            <p className="col-start-2">
              There is no need to compromise. baltimore offers very reasonable
              prices of accommodation, food and public transport while
              maintaining the world-class quality of education, state-of-the-art
              facilities and innovative approach.
            </p>
            <Link
              href={"/"}
              className="col-start-2 text-lg font-medium text-red-500 underline"
            >
              MORE INFO
            </Link>
          </div>
          <div className="grid grid-cols-[2rem,1fr] items-center gap-3">
            <Image
              src={icon3}
              alt="city"
              className="col-span-1 justify-self-center"
            />
            <h3 className="my-5 text-3xl font-bold text-red-500 max-md:text-2xl">
              Culture from a different world
            </h3>
            <p className="col-start-2">
              In baltimore, you can explore beautiful historical monuments,
              theatres, galleries, and world-famous functionalist architecture,
              and then dive in to a local quirky alternative scene where true
              baltimore spirit thrives – just do not take yourself too seriously
              and have fun!
            </p>
            <Link
              href={"/"}
              className="col-start-2 text-lg font-medium text-red-500 underline"
            >
              MORE INFO
            </Link>
          </div>
          <div className="grid grid-cols-[2rem,1fr] items-center gap-3">
            <Image
              src={icon4}
              alt="city"
              className="col-span-1 justify-self-center"
            />
            <h3 className="my-5 text-3xl font-bold text-red-500 max-md:text-2xl">
              Find the ever-important contacts
            </h3>
            <p className="col-start-2">
              The universities are a backbone of the city and are connected to
              many companies, research centres, NGOs, media, festivals and more.
              Thanks to this, numerous work or internship opportunities will
              emerge even during your studies.
            </p>
            <Link
              href={"/"}
              className="col-start-2 text-lg font-medium text-red-500 underline"
            >
              MORE INFO
            </Link>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-10 bg-white">
        <h3 className="my-8 px-5 text-5xl font-bold text-red-500 max-md:text-3xl">
          Find out more about the universities
        </h3>
        <div className="my-10 grid w-[85%] max-md:w-[95%] md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Image
              src={partnerClg1}
              alt="partner collage 1"
              className="h-[2.5rem] w-[7rem] object-cover"
            />
            <Link
              href={"/"}
              className="my-5 text-lg font-semibold text-red-500 underline underline-offset-2 max-md:text-base"
            >
              baltimore University of Technology
            </Link>
            <p className="line-clamp-2 p-3 py-5 text-center font-light">
              One of the best technical universities in Central Europe and the
              biggest one in the Czech Republic
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={partnerClg2}
              alt="partner collage 1"
              className="h-[2.5rem] w-[10rem] object-cover"
            />
            <Link
              href={"/"}
              className="my-5 text-lg font-semibold text-blue-500 underline underline-offset-2 max-md:text-base"
            >
              Masaryk University
            </Link>
            <p className="line-clamp-2 p-3 py-5 text-center font-light">
              Multidisciplinary university with 22 % of international students
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={partnerClg3}
              alt="partner collage 1"
              className="h-[2.5rem] w-[9rem] object-cover"
            />
            <Link
              href={"/"}
              className="my-5 text-lg font-semibold text-green-500 underline underline-offset-2 max-md:text-base"
            >
              Mendel University in baltimore
            </Link>
            <p className="line-clamp-2 p-3 py-5 text-center font-light">
              Oldest university of its focus in the country
            </p>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-10 bg-white py-10">
        <div className="flex flex-wrap gap-5 max-md:w-[95%]">
          <div className="relative flex h-[28rem] w-[19rem] items-center justify-center max-md:h-[20rem] max-md:w-[100%]">
            <Image
              src={cardBg}
              alt="college background"
              className="absolute h-full w-full object-cover"
            />
            <h3 className="text-center text-4xl font-bold text-red-500 max-md:text-2xl">
              There is always someone you can ask
            </h3>
          </div>
          <div className="relative flex h-[28rem] w-[19rem] items-center justify-center bg-red-500 max-md:h-[20rem] max-md:w-[100%]">
            <Link
              href={"/"}
              className="text-center text-2xl font-bold text-white underline max-md:text-xl"
            >
              FAQ
            </Link>
          </div>
          <div className="relative flex h-[28rem] w-[19rem] items-center justify-center bg-blue-500 max-md:h-[20rem] max-md:w-[100%]">
            <Link
              href={"/"}
              className="text-center text-2xl font-bold text-white underline max-md:text-xl"
            >
              Ambassadors
            </Link>
          </div>
          <div className="relative flex h-[28rem] w-[19rem] items-center justify-center bg-green-500 max-md:h-[20rem] max-md:w-[100%]">
            <Link
              href={"/"}
              className="text-center text-2xl font-bold text-white underline max-md:text-xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
      <section className="h-[70vh]">
        <h3 className="pt-10 text-center text-5xl font-bold text-red-500 max-md:text-3xl">
          See for yourself!
        </h3>
        <p className="mt-10 text-center">Instagram: #StudyInbaltimore</p>
      </section>
    </main>
  );
}
