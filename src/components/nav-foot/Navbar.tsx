"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [brnoDropdownState, setBrnoDropdownState] = useState(false);
  const [universitiesDropdownState, setuniversitiesDropdownState] =
    useState(false);
  const [studyDropdownState, setStudyDropdownState] = useState(false);
  const [programmersDropdownState, setprogrammersDropdownState] =
    useState(false);
  const [CzechilaDropdownState, setCzechilaDropdownState] = useState(false);
  const menuRef = useRef<any>(null);
  const pathname = usePathname();

  const closeAllDropdowns = () => {
    setBrnoDropdownState(false);
    setuniversitiesDropdownState(false);
    setStudyDropdownState(false);
    setprogrammersDropdownState(false);
    setCzechilaDropdownState(false);
  };

  useEffect(() => {
    closeAllDropdowns();
  }, [pathname]);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <nav className="flex justify-between border-b-[1px] p-4 text-lg font-medium ">
      <figure className="h-14">
        <Link href={"/"}>IMG</Link>
      </figure>
      <ul className="flex gap-10 relative">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li
          onClick={() => setBrnoDropdownState(!brnoDropdownState)}
          className="cursor-pointer"
        >
          <div
            className={`flex items-center ${
              brnoDropdownState && "text-red-500"
            }`}
          >
            <span>Brno</span> <IoMdArrowDropdown />
          </div>
        </li>
        {brnoDropdownState && (
          <ul
            className="absolute top-[3rem] left-[5rem] bg-white text-sm drop-shadow-lg font-semibold flex flex-col"
            ref={menuRef}
          >
            <Link
              href={"/brno/basic-information"}
              className="border-b-[1px]  hover:bg-slate-100 hover:text-red-500 p-2 px-4"
            >
              Basic Information
            </Link>

            <Link
              href={"/brno/why-study-in-brno"}
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
            >
              Why study in Brno
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/brno/life-in-brno"}
            >
              Life in Brno
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/brno/cost-of-living"}
            >
              Cost of living
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/brno/accommodation"}
            >
              Accommodation
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/brno/transportation"}
            >
              Transportation
            </Link>
          </ul>
        )}
        <li
          onClick={() =>
            setuniversitiesDropdownState(!universitiesDropdownState)
          }
          className="cursor-pointer"
        >
          <div
            className={`flex items-center ${
              universitiesDropdownState && "text-red-500"
            }`}
          >
            <span>Universities</span> <IoMdArrowDropdown />
          </div>
        </li>
        {universitiesDropdownState && (
          <ul
            className="absolute top-[3rem] left-[12rem] bg-white text-sm drop-shadow-lg font-semibold flex flex-col"
            ref={menuRef}
          >
            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/universities/brno-university-of-technology"}
            >
              Brno University of Technology
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/universities/mendel-university-in-brano"}
            >
              Mendel University in Brno
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/universities/masaryk-university"}
            >
              Masaryk University
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/universities/academy-of-performing-arts"}
            >
              Janáček Academy of Performing Arts
            </Link>
          </ul>
        )}
        <li
          onClick={() => setStudyDropdownState(!studyDropdownState)}
          className="cursor-pointer"
        >
          <div
            className={`flex items-center ${
              studyDropdownState && "text-red-500"
            }`}
          >
            <span>Study</span> <IoMdArrowDropdown />
          </div>
        </li>
        {studyDropdownState && (
          <ul
            className="absolute top-[3rem] left-[22rem] bg-white text-sm drop-shadow-lg font-semibold flex flex-col"
            ref={menuRef}
          >
            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/study/student-status"}
            >
              Student status and work
            </Link>
            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/study/students-with-special-needs"}
            >
              Students with special needs
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/study/international-experience-during-studies"}
            >
              International experience during studies
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/study/how-to-apply"}
            >
              How to apply
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/study/visa"}
            >
              Visa
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/study/scholarships"}
            >
              Scholarship
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/study/health"}
            >
              Health and insurance
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/study/recognition-of-previous-foreign-education"}
            >
              Recognition of foreign education
            </Link>
          </ul>
        )}
        <li
          onClick={() => setprogrammersDropdownState(!programmersDropdownState)}
          className="cursor-pointer"
        >
          <div
            className={`flex items-center ${
              programmersDropdownState && "text-red-500"
            }`}
          >
            <span>Programmers</span> <IoMdArrowDropdown />
          </div>
        </li>
        {programmersDropdownState && (
          <ul
            className="absolute top-[3rem] left-[28.5rem] bg-white text-sm drop-shadow-lg font-semibold flex flex-col"
            ref={menuRef}
          >
            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/"}
            >
              All Programmers (145)
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/"}
            >
              bachelor&apos;s programmers (17)
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/"}
            >
              Master&apos;s programmers (52)
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/"}
            >
              Doctoral programmers (76)
            </Link>
          </ul>
        )}
        <li
          onClick={() => setCzechilaDropdownState(!CzechilaDropdownState)}
          className="cursor-pointer"
        >
          <div
            className={`flex items-center ${
              CzechilaDropdownState && "text-red-500"
            }`}
          >
            <span>Czechila</span> <IoMdArrowDropdown />
          </div>
        </li>
        {CzechilaDropdownState && (
          <ul
            className="absolute top-[3rem] left-[39.5rem] bg-white text-sm drop-shadow-lg font-semibold flex flex-col"
            ref={menuRef}
          >
            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/"}
            >
              Basic information
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/"}
            >
              culture and traditions
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/"}
            >
              Czech mark in the world
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/"}
            >
              Nature, climate and weather
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/"}
            >
              Language
            </Link>
          </ul>
        )}
        <li>
          <Link href={"/faq"}>FAQ</Link>
        </li>
        <li>
          <Link href={"/ambassadors"}>Ambassadors</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
