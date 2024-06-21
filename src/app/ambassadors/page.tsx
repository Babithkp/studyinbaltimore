import { IoMdArrowDropdown } from "react-icons/io";export default function page() {
  return (
    <main className=" flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">Ambassadors</h1>
          <p className="text-md my-5">
            We have a lot of students who will happily answer your questions and
            help you with deciding what would you like to study here. Find out
            to whom to write, according to the nationality, study programme or
            faculty!
          </p>
        </article>
        <div className="flex gap-3 max-md:flex-col">
          <button className="flex justify-between border-2 w-full h-fit p-2 rounded-md bg-white items-center">
            <p>Level of Courses</p> <IoMdArrowDropdown />{" "}
          </button>
          <button className="flex justify-between border-2 w-full h-fit p-2 rounded-md bg-white items-center">
            <p>University</p> <IoMdArrowDropdown />{" "}
          </button>
          <button className="uppercase py-2  w-full h-fit rounded-md bg-red-500 text-white text-lg">Find Ambassadors</button>
        </div>
      </section>
    </main>
  );
}
