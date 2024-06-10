"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Navbar() {
  const [menuState, setMenustate] = useState(false);
  const [brnoDropdownState, setBrnoDropdownState] = useState(false);
  const [brnoDropdownMobileState, setBrnoDropdownMobileState] = useState(false);
  const [universitiesDropdownState, setuniversitiesDropdownState] =
    useState(false);
  const [universitiesMDropdownState, setuniversitiesMDropdownState] =
    useState(false);
  const [studyDropdownState, setStudyDropdownState] = useState(false);
  const [studyMobileDropdownState, setStudyMobileDropdownState] = useState(false);
  const [programmersDropdownState, setprogrammersDropdownState] =
    useState(false);
  const [programmersMDropdownState, setProgrammersMDropdownState] =
    useState(false);
  const [CzechilaDropdownState, setCzechilaDropdownState] = useState(false);
  const [CzechilaMDropdownState, setCzechilaMDropdownState] = useState(false);
  const menuRef = useRef<any>(null);
  const pathname = usePathname();

  const closeAllDropdowns = () => {
    setBrnoDropdownState(false);
    setuniversitiesDropdownState(false);
    setStudyDropdownState(false);
    setprogrammersDropdownState(false);
    setCzechilaDropdownState(false);
  };
  const closeAllMobileDropdowns = () => {
    setBrnoDropdownMobileState(false);
    setuniversitiesMDropdownState(false);
    setProgrammersMDropdownState(false);
    setStudyMobileDropdownState(false);
    setCzechilaMDropdownState(false);
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
    <nav className="flex justify-between border-b-[1px] p-4 text-lg font-medium">
      <figure className="h-14">
        <Link href={"/"}>IMG</Link>
      </figure>
      <ul className="relative flex flex-wrap gap-10 max-lg:w-[80%] max-lg:gap-5 max-md:hidden">
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
            className="absolute left-[5rem] top-[3rem] flex flex-col bg-white text-sm font-semibold drop-shadow-lg"
            ref={menuRef}
          >
            <Link
              href={"/brno/basic-information"}
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
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
            className="absolute left-[12rem] top-[3rem] flex flex-col bg-white text-sm font-semibold drop-shadow-lg"
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
            className="absolute left-[22rem] top-[3rem] flex flex-col bg-white text-sm font-semibold drop-shadow-lg"
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
            className="absolute left-[28.5rem] top-[3rem] flex flex-col bg-white text-sm font-semibold drop-shadow-lg"
            ref={menuRef}
          >
            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/programmers/study-programmes"}
            >
              All Programmers (145)
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/programmers/bachelors-study-programmes"}
            >
              bachelor&apos;s programmers (17)
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/programmers/masters-study-programmes"}
            >
              Master&apos;s programmers (52)
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/programmers/doctoral-study-programmes"}
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
            className="absolute left-[39.5rem] top-[3rem] flex flex-col bg-white text-sm font-semibold drop-shadow-lg"
            ref={menuRef}
          >
            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/Czechia/facts-and-figures"}
            >
              Basic information
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/Czechia/culture-and-traditions"}
            >
              culture and traditions
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/Czechia/czech-mark-in-the-world"}
            >
              Czech mark in the world
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/Czechia/nature"}
            >
              Nature, climate and weather
            </Link>

            <Link
              className="border-b-[1px] p-2 px-4 hover:bg-slate-100 hover:text-red-500"
              href={"/Czechia/Language"}
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

      <AlertDialog>
        <AlertDialogTrigger>
          <div
            className="flex items-center justify-center gap-2 text-red-500 md:hidden"
            onClick={() => setMenustate(!menuState)}
          >
            <span className="text-sm font-normal">menu</span>
            <GiHamburgerMenu size={"1.7rem"} />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[15rem] h-[50rem] ">
          
            <ul className="relative h-full flex-wrap gap-10 text-black">
              <Link
                href={"/"}
                className="block w-full bg-red-500 p-5 text-base font-medium text-white border-b-[1px] "
              >
                <p>Home</p>
              </Link>
              <li
                onClick={() => {closeAllMobileDropdowns() ; setBrnoDropdownMobileState(!brnoDropdownMobileState)}}
                className="cursor-pointer"
              >
                <div
                  className={`"  flex w-full items-center border-b-[1px] p-5 text-base font-medium ${
                    brnoDropdownMobileState && " text-red-500"
                  }`}
                >
                  <span>Brno</span> <IoMdArrowDropdown />
                </div>
              </li>
              {brnoDropdownMobileState && (
                <ul
                  className="flex flex-col bg-white text-sm font-semibold "
                  ref={menuRef}
                  
                >
                  <Link
                    href={"/brno/basic-information"}
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                  >
                    Basic Information
                  </Link>

                  <Link
                    href={"/brno/why-study-in-brno"}
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                  >
                    Why study in Brno
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/brno/life-in-brno"}
                  >
                    Life in Brno
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/brno/cost-of-living"}
                  >
                    Cost of living
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/brno/accommodation"}
                  >
                    Accommodation
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/brno/transportation"}
                  >
                    Transportation
                  </Link>
                </ul>
              )}
              <li
                onClick={() =>
                  {closeAllMobileDropdowns() ;
                  setuniversitiesMDropdownState(!universitiesMDropdownState)}
                }
                className="cursor-pointer"
              >
                <div
                  className={`flex w-full items-center border-b-[1px] p-5 text-base font-medium ${
                    universitiesMDropdownState && "text-red-500"
                  }`}
                >
                  <span>Universities</span> <IoMdArrowDropdown />
                </div>
              </li>
              {universitiesMDropdownState && (
                <ul
                  className="flex flex-col bg-white text-sm font-semibold "
                  ref={menuRef}
                >
                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/universities/brno-university-of-technology"}
                  >
                    Brno University of Technology
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/universities/mendel-university-in-brano"}
                  >
                    Mendel University in Brno
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/universities/masaryk-university"}
                  >
                    Masaryk University
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/universities/academy-of-performing-arts"}
                  >
                    Janáček Academy of Performing Arts
                  </Link>
                </ul>
              )}
              <li
                onClick={() => {closeAllMobileDropdowns() ; setStudyMobileDropdownState(!studyMobileDropdownState)}}
                className="cursor-pointer"
              >
                <div
                  className={` flex w-full items-center border-b-[1px] p-5 text-base font-medium ${
                    studyMobileDropdownState && "text-red-500"
                  }`}
                >
                  <span>Study</span> <IoMdArrowDropdown />
                </div>
              </li>
              {studyMobileDropdownState && (
                <ul
                  className=" left-[22rem] top-[3rem] flex flex-col bg-white text-sm font-semibold "
                  ref={menuRef}
                >
                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/study/student-status"}
                  >
                    Student status and work
                  </Link>
                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/study/students-with-special-needs"}
                  >
                    Students with special needs
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/study/international-experience-during-studies"}
                  >
                    International experience during studies
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/study/how-to-apply"}
                  >
                    How to apply
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/study/visa"}
                  >
                    Visa
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/study/scholarships"}
                  >
                    Scholarship
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/study/health"}
                  >
                    Health and insurance
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/study/recognition-of-previous-foreign-education"}
                  >
                    Recognition of foreign education
                  </Link>
                </ul>
              )}
              <li
                onClick={() =>
                 {closeAllMobileDropdowns() ;  setProgrammersMDropdownState(!programmersMDropdownState)}
                }
                className="cursor-pointer"
              >
                <div
                  className={`flex w-full items-center border-b-[1px] p-5 text-base font-medium ${
                    programmersMDropdownState && "text-red-500"
                  }`}
                >
                  <span>Programmers</span> <IoMdArrowDropdown />
                </div>
              </li>
              {programmersMDropdownState && (
                <ul
                  className=" left-[28.5rem] top-[3rem] flex flex-col bg-white text-sm font-semibold "
                  ref={menuRef}
                >
                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/programmers/study-programmes"}
                  >
                    All Programmers (145)
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/programmers/bachelors-study-programmes"}
                  >
                    bachelor&apos;s programmers (17)
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/programmers/masters-study-programmes"}
                  >
                    Master&apos;s programmers (52)
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/programmers/doctoral-study-programmes"}
                  >
                    Doctoral programmers (76)
                  </Link>
                </ul>
              )}
              <li
                onClick={() => {closeAllMobileDropdowns() ; setCzechilaMDropdownState(!CzechilaMDropdownState)}}
                className="cursor-pointer"
              >
                <div
                  className={`  flex w-full items-center border-b-[1px] p-5 text-base font-medium ${
                    CzechilaMDropdownState && "text-red-500"
                  }`}
                >
                  <span>Czechila</span> <IoMdArrowDropdown />
                </div>
              </li>
              {CzechilaMDropdownState && (
                <ul
                  className=" left-[39.5rem] top-[3rem] flex flex-col bg-white text-sm font-semibold "
                  ref={menuRef}
                >
                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/Czechia/facts-and-figures"}
                  >
                    Basic information
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/Czechia/culture-and-traditions"}
                  >
                    culture and traditions
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/Czechia/czech-mark-in-the-world"}
                  >
                    Czech mark in the world
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/Czechia/nature"}
                  >
                    Nature, climate and weather
                  </Link>

                  <Link
                    className="text-black  flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal"
                    href={"/Czechia/Language"}
                  >
                    Language
                  </Link>
                </ul>
              )}
              <li className="text-black  flex w-full items-center border-b-[1px] p-5 text-base font-medium hover:bg-red-500 hover:text-white">
                <Link href={"/faq"}>FAQ</Link>
              </li>
              <li className="text-black  flex w-full items-center border-b-[1px] p-5 text-base font-medium hover:bg-red-500 hover:text-white">
                <Link href={"/ambassadors"}>Ambassadors</Link>
              </li>
              <li className="text-black  flex w-full items-center border-b-[1px] p-5 text-base font-medium hover:bg-red-500 hover:text-white">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          
          <AlertDialogCancel className="absolute -left-20 top-2 border-none bg-transparent hover:bg-transparent z-[100]">
            <RiCloseCircleFill size={"2.5rem"} color="white" className="z-[100]"/>
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
