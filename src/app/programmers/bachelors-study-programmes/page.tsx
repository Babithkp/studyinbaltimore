    import { IoMdArrowDropdown } from "react-icons/io";import { FaInfoCircle } from "react-icons/fa";

    import CardClg from "@/components/cards/CardClg";

    export default function page() {
    return (
        <main className=" flex justify-center items-center flex-col ">
        <section className=" p-10 bg-slate-100 flex justify-center items-center">
        <div className="w-[80%] max-md:w-full">
          <article className="flex flex-col ">
            <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-2xl">
                Bachelor&apos;s study programmes 
                </h1>
                <p className="text-md my-5">
                Choose a programme you want to study in Brno! You can filter the
                programmes according to their field, the university or the level
                of study. Find out what has the Heart of Europe prepared for you!
                </p>
            </article>
            <div className="flex gap-3 max-md:flex-col">
                <input
                type="text"
                placeholder="search by keyword..."
                className="p-2 border-[1px] rounded-md"
                />
                <button className="flex justify-between border-2 w-full h-fit p-2 rounded-md bg-white items-center py-4">
                <p>Level of Courses</p> <IoMdArrowDropdown />{" "}
                </button>
                <button className="flex justify-between border-2 w-full h-fit p-2 rounded-md bg-white items-center py-4">
                <p>Subject</p> <IoMdArrowDropdown />{" "}
                </button>
                <button className="flex justify-between border-2 w-full h-fit p-2 rounded-md bg-white items-center py-4">
                <p>University</p> <IoMdArrowDropdown />{" "}
                </button>
                <button className="flex justify-between border-2 w-full h-fit p-2 rounded-md bg-white items-center py-4">
                <input type="checkbox" />{" "}
                <p className="w-[15rem]">Only currently open programs </p>{" "}
                <FaInfoCircle color="red" />{" "}
                </button>
            </div>
            <button className="uppercase py-2 h-fit rounded-md bg-red-500 text-white text-lg w-fit flex items-center justify-center p-5 gap-3 mt-5">
                <p>Find programmers</p>
            </button>
            </div>
        </section>
        <section className="flex justify-center items-center gap-3 w-[83%] my-20 flex-wrap">
            <CardClg/>
            <CardClg/>
            <CardClg/>
            <CardClg/>
            <CardClg/>
            <CardClg/>
        </section>
        </main>
    );
    }
