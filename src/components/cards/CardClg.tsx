
import { IoMdArrowDropdown } from "react-icons/io";import { FaInfoCircle } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";
import clgImg1 from "../../../public/muni-white.png";
import clgImg2 from "../../../public/level.svg";
import clgImg3 from "../../../public/duration.svg";
import clgImg4 from "../../../public/mode.svg";
import clgImg5 from "../../../public/start.svg";
import clgImg6 from "../../../public/deadline.svg";
import clgImg7 from "../../../public/money.svg";
export default function CardClg() {
  return (
    <div className="max-w-[22rem] border-[1px] drop-shadow-lg p-5 flex flex-col gap-5 max-lg:max-w-[50rem] bg-white">
          <div className="">
            <h2 className="font-bold text-xl mb-5">
              International Relations and European Politics
            </h2>
            <p className="text-slate-500 font-light text-sm">
              See the challenges of modern global society from a wider
              perspective, including economics, politics, sociology, and
              culture.
            </p>
          </div>
          <figure className="flex justify-between">
            <div>
              <Image
                src={clgImg1}
                alt="collage image"
                className=" bg-blue-500"
              />
            </div>
            <p className="w-[50%] font-medium">Faculty of Science</p>
          </figure>
          <ul className="flex flex-col gap-5 border-y-[1px] py-5">
            <li className="flex justify-between gap-2">
              <figure className="w-fit">
                <Image alt="study" src={clgImg2} />
              </figure>
              <p className="w-[10rem]">Level of study</p>
              <p className="w-1/2 font-bold">Master&apos;s</p>
            </li>
            <li className="flex justify-between gap-2">
              <figure className="w-fit">
                <Image alt="study" src={clgImg3} />
              </figure>
              <p className="w-[10rem]">Duration</p>
              <p className="w-1/2 font-bold">2 years</p>
            </li>
            <li className="flex justify-between gap-2">
              <figure className="w-fit">
                <Image alt="study" src={clgImg4} />
              </figure>
              <p className="w-[10rem] flex justify-start items-center gap-3">Mode <FaInfoCircle color="red" /></p>
              
              <p className="w-1/2 font-bold">Full time study</p>
            </li>
            <li className="flex justify-between gap-2">
              <figure className="w-fit">
                <Image alt="study" src={clgImg5} />
              </figure>
              <p className="w-[10rem]">Start date</p>
              <p className="w-1/2 font-bold">September</p>
            </li>
            <li className="flex justify-between gap-2">
              <figure className="w-fit">
                <Image alt="study" src={clgImg6} />
              </figure>
              <p className="w-[10rem]">Application deadline</p>
              <p className="w-1/2 font-bold">2024/11/30</p>
            </li>
            <li className="flex justify-between gap-2">
              <figure className="w-fit">
                <Image alt="study" src={clgImg7} />
              </figure>
              <p className="w-[10rem]">Tuition fees (academic year)</p>
              <p className="w-1/2 font-bold">3,000 €</p>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-3">
            <p className="underline text-red-500 font-bold">MORE INFORMATION</p>
            <RiArrowRightLine className="text-red-500 " size={"2rem"} />
          </div>
        </div>
  )
}
