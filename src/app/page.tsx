import Image from "next/image";
import image from "../../public/heroPageImage.png";
import Link from "next/link";
import icon1 from "../../public/city.svg";
import icon2 from "../../public/rocket-graph.svg";
import icon3 from "../../public/carnival.svg";
import icon4 from "../../public/flag-point.svg";
import partnerClg1 from "../../public/logo-vut-big.png";
import partnerClg2 from "../../public/logo-muni-big-new.png";
import partnerClg3 from "../../public/logo-mendelu-big.png";
import cardBg from "../../public/homepage-love-brno.webp";
import img1 from "../../public/universitiesLogo/bccc.png";
import img2 from "../../public/universitiesLogo/maryland.jpg";
import img3 from "../../public/universitiesLogo/universityOfBaltimorejpg.jpg";
import img4 from "../../public/universitiesLogo/coppin.svg";
import img5 from "../../public/universitiesLogo/morgan.png";
import img6 from "../../public/universitiesLogo/frostburg.png";
import counsellingIcon from "../../public/icon-counselling.png";
import coachingIcon from "../../public/coaching-vector.png";
import visaIcon from "../../public/icon-visa.png";
import financialIcon from "../../public/icon-financial.png";
import CardApply from "@/components/cards/CardApply";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <Image
        src={image}
        alt="hero image"
        className="relative h-[130vh] w-full max-sm:h-[100vh] object-cover"
      />
      <section className="absolute top-[25%] flex w-[50%]  flex-col items-center justify-center max-md:w-[80%]">
        <article className="my-10 text-white">
          <h1 className="bg-red-500 px-14 py-10 text-5xl font-semibold max-md:p-4 max-md:text-2xl">
            Study in Baltimore - home to diverse and a vibrant student community
            in Baltimore MD, United States.
          </h1>
          <p className="bg-blue-600 p-8 text-lg font-medium max-md:p-4 max-sm:text-base">
            We make it possible for international students to get scholarships
            to study in the city of baltimore, which provides them access world
            class education and career opportunities.
          </p>
        </article>
        <div className="flex gap-5 max-sm:flex-col">
          <button className="rounded-md bg-white px-9 py-3 font-semibold text-red-500">
            DISCOVER baltimore
          </button>
          <button className="px-5 py-3 text-white underline">
            DISCOVER CZECHIA
          </button>
        </div>
      </section>
      <section className="flex w-[95%] flex-col items-center">
        <div className="flex w-[90%] flex-col items-center justify-center gap-3">
          <h2 className="my-8 text-5xl font-bold text-red-500 max-md:text-3xl">
            Study at one of our partner institutions
          </h2>
          <p className="px-5 text-center text-lg font-extralight">
            Each year we provide the opportunity for over 8000 international
            student to study a postgraduate or doctoral program in the city of
            Baltimore on fully funded scholarships at one of our
            partner universities.
          </p>
          <div className="my-10 flex w-full gap-5 text-center max-lg:flex-wrap max-sm:grid max-sm:grid-cols-2">
            <figure className="flex flex-col items-center justify-center max-sm:w-full">
              <Image
                src={img3}
                alt="college"
                className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
              />
              <p className="mr-10 text-center">The University of Baltimore</p>
            </figure>
            <figure className="flex flex-col items-center justify-center max-sm:w-full">
              <Image
                src={img1}
                alt="college"
                className="max-md:w-26 max-md:h-26 h-40 w-80 object-contain"
              />
              <p className="mr-10 text-center">
                Baltimore City Community College
              </p>
            </figure>
            <figure className="flex flex-col items-center justify-center max-sm:w-full">
              <Image
                src={img2}
                alt="college"
                className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
              />
              <p className="mr-10 text-center">
                University of Maryland, Baltimore County
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
        </div>
        <div className="my-20 flex w-full flex-col flex-wrap items-center justify-center gap-3">
          <div className="flex flex-col items-center" >
            <span className="text-lg font-medium uppercase text-red-600">
              what we do
            </span>
            <h3 className="my-8 w-[80%] text-center text-5xl font-bold text-red-500 max-md:text-3xl">
              Don&apos;t just fill forms without knowing where to apply
            </h3>
            <p className="text-center">
              At Education Street, our mission is to match you with the perfect
              college for the best fit.
            </p>
          </div>
          <div className="flex gap-5 flex-wrap justify-center items-center">
          <CardApply image={coachingIcon} title="Scholarship Assistance" content="We are with you even before the admission process begins. Prepare for entrance exams with our help to score better." />
          <CardApply image={counsellingIcon} title="Admission Guidance" content="We will suggest the right universities and courses, making a personal plan to help you build your career." />
          <CardApply image={visaIcon} title="Visa Counselling" content="With our personalized visa counselling services, you can forget the stress of filling forms and participating in interviews." />
          <CardApply image={financialIcon} title="Free Counseling" content="Don’t worry about finances. We’ll demystify the process of creating your budget and get you all the needed assistance." />
          </div>
        </div>
        <Link href="/" className="mb-10 text-lg font-medium underline">
          SHOW ALL STUDY PROGRAMMES (197)
        </Link>
      </section>
      <section className="mt-5 flex justify-center">
        <div className="grid w-[85%] gap-5 max-md:w-[95%] md:grid-cols-3 md:grid-rows-2">
          <div className="col-start-1 row-span-2 flex items-center">
            <p className="my-8 text-5xl font-bold text-red-500 max-md:text-2xl">
              Why choose us for your study abroad dreams?
            </p>
          </div>
          <div className="grid grid-cols-[2rem,1fr] items-center gap-3">
            <Image
              src={icon1}
              alt="city"
              className="col-span-1 justify-self-center"
            />
            <h3 className="my-5 text-3xl font-bold text-red-500 max-md:text-2xl">
              World-class Education
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
            Access to free education! Seamless Application Procedure
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
                Career & Professional networking Opportunities.
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
      <section className="flex w-full flex-col items-center justify-center gap-10">
        <h3 className="my-8 px-5 text-5xl font-bold text-red-500 max-md:text-3xl">
          Find out more about the universities
        </h3>
        <div className="my-10 flex w-[80%] justify-between flex-wrap max-md:justify-center gap-10">
          <div className="flex flex-col items-center relative text-center ">
            <h6 className="text-yellow-300 text-7xl font-semibold">14</h6>
            <p className="absolute top-[30%] font-bold text-slate-600 text-lg max-md:top-[35%] w-[300%]">YEARS OF EXPERIENCE</p>
          </div>
          <div className="flex flex-col items-center relative">
            <h6 className="text-yellow-300 text-7xl font-semibold">18000+</h6>
            <p className="absolute top-[30%] font-bold text-slate-600 text-lg max-md:top-[35%]">Scholarships Awarded</p>
          </div>
          <div className="flex flex-col items-center relative">
            <h6 className="text-yellow-300 text-7xl font-semibold">99%</h6>
            <p className="absolute top-[30%] font-bold text-slate-600 text-lg  max-md:top-[35%] w-[180%]">University Acceptance Rate</p>
          </div>
          <div className="flex flex-col items-center relative">
            <h6 className="text-yellow-300 text-7xl font-semibold">99%</h6>
            <p className="absolute top-[30%] font-bold text-slate-600 text-lg max-md:top-[35%] w-[120%]">Visa Success Rate</p>
          </div>
          
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-10 py-10">
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
