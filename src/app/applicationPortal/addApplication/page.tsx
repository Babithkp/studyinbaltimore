import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdHome } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

export default function pages() {
  return (
    <main className="flex items-center justify-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 border">
        <article>
          <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
            Overseas Education Placement Form
          </h1>
          <p className="text-md my-5">
            Your first steps to actualising your educational and career
            progression goals through Jestone Education starts here!
          </p>
          <p className="text-md my-5">
            Jestone Education ensures a seamless transition from one level of
            education to the other without hitches. We achieve this in
            partnership with reputable colleges and universities across all
            continents of the world. Start your application today and gain
            admission into any of our partner institutions by completing the
            application form below:
          </p>
          <h2 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
            Pre-Application Form
          </h2>
          <p className="my-10 text-center text-2xl font-bold max-md:text-xl">
            All fields with a <span className="text-red-500">*</span> are
            required
          </p>
        </article>
        <form>
          <h4 className="my-5 border-b-[1px] border-blue-500 text-lg">
            Programme Details
          </h4>
          <div>
            <label className="font-semibold text-sm">
              Study Destination <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select className="w-full px-2 text-sm focus:outline-blue-400">
                <option value="">--Please select option--</option>
                <option value="">--Please select other option--</option>
              </select>
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
              Programme Type <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select className="w-full px-2 text-sm focus:outline-blue-400">
                <option value="">--Please select option--</option>
                <option value="">--Please select other option--</option>
              </select>
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
              Course of Study <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Course of Study"
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
              Programme Start Month <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select className="w-full px-2 text-sm focus:outline-blue-400">
                <option value="">--Please select option--</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
              Programme Start Year <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Programme Start Year"
              />
            </div>
          </div>
          <h4 className="my-5 border-b-[1px] border-blue-500 text-lg">
            Student Details
          </h4>
          <div className="my-5">
            <label className="font-semibold text-sm">
              Title <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Title "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Full Name <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <GoPersonFill className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Your Name "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Gender  <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select className="w-full px-2 text-sm focus:outline-blue-400">
                <option value="">--Please select option--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Address <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="First Line "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Town/City <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Town/City "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            State / Province / Region <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="State / Province / Region "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Country <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Country "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Date of Birth <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <FaCalendarAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="date"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Country "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Nationality <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <GoPersonFill className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Nationality "
              />
            </div>
          </div>
          <div className="my-5 md:w-[50%]">
            <label className="font-semibold text-sm">
            Email <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <IoIosMail className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Email "
              />
            </div>
          </div>
          <div className="my-5 md:w-[50%]">
            <label className="font-semibold text-sm">
            Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <MdLocalPhone className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Phone "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Country of Permanent Residence <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <GoPersonFill className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Country of Permanent Residence "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Passport Number <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <GoPersonFill className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Passport Number "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Passport Expiry Date <span className="text-red-500">*</span>
            </label>
            <div className="flex md:w-[50%] rounded-sm border-[1.9px] border-slate-300">
              <GoPersonFill className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="date"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Passport Expiry Date "
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Upload Passport Scanned Copy <span className="text-red-500">*</span>
            </label>
            <div className="flex  rounded-sm border-[1.9px] border-slate-300">
              <button type="button" className="px-2 py-1 bg-blue-500 text-white">Browse</button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
              />
            </div>
          </div>
          <div className="my-5">
            <label className="font-semibold text-sm">
            Upload scanned copies of Educational Certificates and Transcripts <span className="text-red-500">*</span>
            </label>
            <div className="flex  rounded-sm border-[1.9px] border-slate-300">
              <button type="button" className="px-2 py-1 bg-blue-500 text-white">Browse</button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
              />
            </div>
          </div>
          <p className="text-md my-5">
          By clicking submit you are agreeing to our terms and conditions and privacy policy
          </p>
          <button className="px-2 py-1 bg-blue-500 text-white rounded-sm">Submit</button>
        </form>
      </section>
    </main>
  );
}
