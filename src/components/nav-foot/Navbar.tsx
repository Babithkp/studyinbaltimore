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
            className="absolute top-[3rem] left-[5rem] bg-white text-sm drop-shadow-lg font-semibold"
            ref={menuRef}
          >
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/brno/basic-information"}>Basic Information</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/brno/why-study-in-brno"}>Why study in Brno</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/brno/life-in-brno"}>Life in Brno</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/brno/cost-of-living"}>Cost of living</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/brno/accommodation"}>Accommodation</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/brno/transportation"}>Transportation</Link>
            </li>
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
            className="absolute top-[3rem] left-[12rem] bg-white text-sm drop-shadow-lg font-semibold"
            ref={menuRef}
          >
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/universities/brno-university-of-technology"}>Brno University of Technology</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/universities/mendel-university-in-brano"}>Mendel University in Brno</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/universities/masaryk-university"}>Masaryk University</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/universities/janáček-academy-of-performing-arts"}>Janáček Academy of Performing Arts</Link>
            </li>
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
            className="absolute top-[3rem] left-[22rem] bg-white text-sm drop-shadow-lg font-semibold"
            ref={menuRef}
          >
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Student status ansd work</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>International experience during studies</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>How to apply</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Visa</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Scholarship</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Health and insurance</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Recognition of foreign education</Link>
            </li>
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
            className="absolute top-[3rem] left-[28.5rem] bg-white text-sm drop-shadow-lg font-semibold"
            ref={menuRef}
          >
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>All Programmers (145)</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>bachelor&apos;s programmers (17)</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Master&apos;s programmers (52)</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Doctoral programmers (76)</Link>
            </li>
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
            className="absolute top-[3rem] left-[39.5rem] bg-white text-sm drop-shadow-lg font-semibold"
            ref={menuRef}
          >
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Basic information</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>culture and traditions</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Czech mark in the world</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Nature, climate and weather</Link>
            </li>
            <li className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500">
              <Link href={"/"}>Language</Link>
            </li>
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
