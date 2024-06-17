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
  const [studyMobileDropdownState, setStudyMobileDropdownState] =
    useState(false);
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
        <Link href={"/"}>
          <svg
            className="w-[90%] max-md:m-0"
            width="306"
            height="91"
            viewBox="0 0 306 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_2)">
              <rect
                width="261"
                height="46"
                transform="translate(45 45)"
                fill="#EA2933"
              />
              <path
                d="M62.296 76.168C61.176 76.168 60.168 75.976 59.272 75.592C58.376 75.192 57.672 74.632 57.16 73.912C56.648 73.192 56.392 72.352 56.392 71.392H59.32C59.384 72.112 59.664 72.704 60.16 73.168C60.672 73.632 61.384 73.864 62.296 73.864C63.24 73.864 63.976 73.64 64.504 73.192C65.032 72.728 65.296 72.136 65.296 71.416C65.296 70.856 65.128 70.4 64.792 70.048C64.472 69.696 64.064 69.424 63.568 69.232C63.088 69.04 62.416 68.832 61.552 68.608C60.464 68.32 59.576 68.032 58.888 67.744C58.216 67.44 57.64 66.976 57.16 66.352C56.68 65.728 56.44 64.896 56.44 63.856C56.44 62.896 56.68 62.056 57.16 61.336C57.64 60.616 58.312 60.064 59.176 59.68C60.04 59.296 61.04 59.104 62.176 59.104C63.792 59.104 65.112 59.512 66.136 60.328C67.176 61.128 67.752 62.232 67.864 63.64H64.84C64.792 63.032 64.504 62.512 63.976 62.08C63.448 61.648 62.752 61.432 61.888 61.432C61.104 61.432 60.464 61.632 59.968 62.032C59.472 62.432 59.224 63.008 59.224 63.76C59.224 64.272 59.376 64.696 59.68 65.032C60 65.352 60.4 65.608 60.88 65.8C61.36 65.992 62.016 66.2 62.848 66.424C63.952 66.728 64.848 67.032 65.536 67.336C66.24 67.64 66.832 68.112 67.312 68.752C67.808 69.376 68.056 70.216 68.056 71.272C68.056 72.12 67.824 72.92 67.36 73.672C66.912 74.424 66.248 75.032 65.368 75.496C64.504 75.944 63.48 76.168 62.296 76.168ZM82.0604 59.32V61.552H77.6204V76H74.8844V61.552H70.4204V59.32H82.0604ZM87.5433 59.32V69.952C87.5433 71.216 87.8713 72.168 88.5273 72.808C89.1993 73.448 90.1273 73.768 91.3113 73.768C92.5113 73.768 93.4393 73.448 94.0953 72.808C94.7673 72.168 95.1033 71.216 95.1033 69.952V59.32H97.8393V69.904C97.8393 71.264 97.5433 72.416 96.9513 73.36C96.3593 74.304 95.5673 75.008 94.5753 75.472C93.5833 75.936 92.4873 76.168 91.2873 76.168C90.0873 76.168 88.9913 75.936 87.9993 75.472C87.0233 75.008 86.2473 74.304 85.6713 73.36C85.0953 72.416 84.8073 71.264 84.8073 69.904V59.32H87.5433ZM106.85 59.32C108.626 59.32 110.178 59.664 111.506 60.352C112.85 61.024 113.882 62 114.602 63.28C115.338 64.544 115.706 66.024 115.706 67.72C115.706 69.416 115.338 70.888 114.602 72.136C113.882 73.384 112.85 74.344 111.506 75.016C110.178 75.672 108.626 76 106.85 76H101.402V59.32H106.85ZM106.85 73.768C108.802 73.768 110.298 73.24 111.338 72.184C112.378 71.128 112.898 69.64 112.898 67.72C112.898 65.784 112.378 64.272 111.338 63.184C110.298 62.096 108.802 61.552 106.85 61.552H104.138V73.768H106.85ZM130.777 59.32L125.257 69.952V76H122.521V69.952L116.977 59.32H120.025L123.889 67.504L127.753 59.32H130.777ZM140.059 61.024C139.563 61.024 139.147 60.856 138.811 60.52C138.475 60.184 138.307 59.768 138.307 59.272C138.307 58.776 138.475 58.36 138.811 58.024C139.147 57.688 139.563 57.52 140.059 57.52C140.539 57.52 140.947 57.688 141.283 58.024C141.619 58.36 141.787 58.776 141.787 59.272C141.787 59.768 141.619 60.184 141.283 60.52C140.947 60.856 140.539 61.024 140.059 61.024ZM141.403 62.776V76H138.667V62.776H141.403ZM151.667 62.56C152.707 62.56 153.635 62.776 154.451 63.208C155.283 63.64 155.931 64.28 156.395 65.128C156.859 65.976 157.091 67 157.091 68.2V76H154.379V68.608C154.379 67.424 154.083 66.52 153.491 65.896C152.899 65.256 152.091 64.936 151.067 64.936C150.043 64.936 149.227 65.256 148.619 65.896C148.027 66.52 147.731 67.424 147.731 68.608V76H144.995V62.776H147.731V64.288C148.179 63.744 148.747 63.32 149.435 63.016C150.139 62.712 150.883 62.56 151.667 62.56ZM175.908 67.432C176.804 67.592 177.564 68.064 178.188 68.848C178.812 69.632 179.124 70.52 179.124 71.512C179.124 72.36 178.9 73.128 178.452 73.816C178.02 74.488 177.388 75.024 176.556 75.424C175.724 75.808 174.756 76 173.652 76H166.98V59.32H173.34C174.476 59.32 175.452 59.512 176.268 59.896C177.084 60.28 177.7 60.8 178.116 61.456C178.532 62.096 178.74 62.816 178.74 63.616C178.74 64.576 178.484 65.376 177.972 66.016C177.46 66.656 176.772 67.128 175.908 67.432ZM169.716 66.328H173.1C173.996 66.328 174.692 66.128 175.188 65.728C175.7 65.312 175.956 64.72 175.956 63.952C175.956 63.2 175.7 62.616 175.188 62.2C174.692 61.768 173.996 61.552 173.1 61.552H169.716V66.328ZM173.412 73.768C174.34 73.768 175.068 73.544 175.596 73.096C176.124 72.648 176.388 72.024 176.388 71.224C176.388 70.408 176.108 69.76 175.548 69.28C174.988 68.8 174.244 68.56 173.316 68.56H169.716V73.768H173.412ZM192.153 72.592H185.169L183.969 76H181.113L187.089 59.296H190.257L196.233 76H193.353L192.153 72.592ZM191.385 70.36L188.673 62.608L185.937 70.36H191.385ZM201.567 73.792H207.207V76H198.831V59.32H201.567V73.792ZM220.271 59.32V61.552H215.831V76H213.095V61.552H208.631V59.32H220.271ZM225.778 59.32V76H223.042V59.32H225.778ZM246.938 59.32V76H244.202V64.576L239.114 76H237.218L232.106 64.576V76H229.37V59.32H232.322L238.178 72.4L244.01 59.32H246.938ZM258.142 76.168C256.59 76.168 255.158 75.808 253.846 75.088C252.55 74.352 251.518 73.336 250.75 72.04C249.998 70.728 249.622 69.256 249.622 67.624C249.622 65.992 249.998 64.528 250.75 63.232C251.518 61.936 252.55 60.928 253.846 60.208C255.158 59.472 256.59 59.104 258.142 59.104C259.71 59.104 261.142 59.472 262.438 60.208C263.75 60.928 264.782 61.936 265.534 63.232C266.286 64.528 266.662 65.992 266.662 67.624C266.662 69.256 266.286 70.728 265.534 72.04C264.782 73.336 263.75 74.352 262.438 75.088C261.142 75.808 259.71 76.168 258.142 76.168ZM258.142 73.792C259.246 73.792 260.23 73.544 261.094 73.048C261.958 72.536 262.63 71.816 263.11 70.888C263.606 69.944 263.854 68.856 263.854 67.624C263.854 66.392 263.606 65.312 263.11 64.384C262.63 63.456 261.958 62.744 261.094 62.248C260.23 61.752 259.246 61.504 258.142 61.504C257.038 61.504 256.054 61.752 255.19 62.248C254.326 62.744 253.646 63.456 253.15 64.384C252.67 65.312 252.43 66.392 252.43 67.624C252.43 68.856 252.67 69.944 253.15 70.888C253.646 71.816 254.326 72.536 255.19 73.048C256.054 73.544 257.038 73.792 258.142 73.792ZM278.019 76L274.179 69.328H272.091V76H269.355V59.32H275.115C276.395 59.32 277.475 59.544 278.355 59.992C279.251 60.44 279.915 61.04 280.347 61.792C280.795 62.544 281.019 63.384 281.019 64.312C281.019 65.4 280.699 66.392 280.059 67.288C279.435 68.168 278.467 68.768 277.155 69.088L281.283 76H278.019ZM272.091 67.144H275.115C276.139 67.144 276.907 66.888 277.419 66.376C277.947 65.864 278.211 65.176 278.211 64.312C278.211 63.448 277.955 62.776 277.443 62.296C276.931 61.8 276.155 61.552 275.115 61.552H272.091V67.144ZM287.255 61.528V66.424H293.015V68.656H287.255V73.768H293.735V76H284.519V59.296H293.735V61.528H287.255Z"
                fill="white"
              />
              <path
                d="M0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5V45H22.5C10.0736 45 0 34.9264 0 22.5Z"
                fill="#EA2933"
              />
              <circle cx="22.5" cy="22.5" r="11.25" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_2_2">
                <rect width="306" height="91" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </figure>
      <ul className="relative flex flex-wrap gap-10 max-lg:w-[80%] max-lg:gap-5 max-md:hidden">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/aboutus"}>About Us</Link>
        </li>
        <li>
          <Link href={"/partner-universities"}>Partner Universities</Link>
        </li>
        <li>
          <Link href={"/student-life"}>Student Life</Link>
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
        <AlertDialogContent className="h-[50rem] w-[15rem]">
          <ul className="relative h-full flex-wrap gap-10 text-black">
            <Link
              href={"/"}
              className="block w-full border-b-[1px] bg-red-500 p-5 text-base font-medium text-white"
            >
              <p>Home</p>
            </Link>
            <Link
              href={"/aboutus"}
              className="block w-full border-b-[1px]  p-5 text-base font-medium text-black"
            >
              About Us
            </Link>
            <Link
              href={"/partner-universities"}
              className="block w-full border-b-[1px] p-5 text-base font-medium text-black"
            >
              Partner Universities
            </Link>
            <Link
              href={"/student-life"}
              className="block w-full border-b-[1px]  p-5 text-base font-medium text-black"
            >
              Student Life
            </Link>
            {/* <li
              onClick={() => {
                closeAllMobileDropdowns();
                setBrnoDropdownMobileState(!brnoDropdownMobileState);
              }}
              className="cursor-pointer"
            >
              <div
                className={`" flex w-full items-center border-b-[1px] p-5 text-base font-medium ${
                  brnoDropdownMobileState && "text-red-500"
                }`}
              >
                <span>Brno</span> <IoMdArrowDropdown />
              </div>
            </li>
            {brnoDropdownMobileState && (
              <ul
                className="flex flex-col bg-white text-sm font-semibold"
                ref={menuRef}
              >
                <Link
                  href={"/brno/basic-information"}
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                >
                  Basic Information
                </Link>

                <Link
                  href={"/brno/why-study-in-brno"}
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                >
                  Why study in Brno
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/brno/life-in-brno"}
                >
                  Life in Brno
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/brno/cost-of-living"}
                >
                  Cost of living
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/brno/accommodation"}
                >
                  Accommodation
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/brno/transportation"}
                >
                  Transportation
                </Link>
              </ul>
            )}
            <li
              onClick={() => {
                closeAllMobileDropdowns();
                setuniversitiesMDropdownState(!universitiesMDropdownState);
              }}
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
                className="flex flex-col bg-white text-sm font-semibold"
                ref={menuRef}
              >
                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/universities/brno-university-of-technology"}
                >
                  Brno University of Technology
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/universities/mendel-university-in-brano"}
                >
                  Mendel University in Brno
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/universities/masaryk-university"}
                >
                  Masaryk University
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/universities/academy-of-performing-arts"}
                >
                  Janáček Academy of Performing Arts
                </Link>
              </ul>
            )}
            <li
              onClick={() => {
                closeAllMobileDropdowns();
                setStudyMobileDropdownState(!studyMobileDropdownState);
              }}
              className="cursor-pointer"
            >
              <div
                className={`flex w-full items-center border-b-[1px] p-5 text-base font-medium ${
                  studyMobileDropdownState && "text-red-500"
                }`}
              >
                <span>Study</span> <IoMdArrowDropdown />
              </div>
            </li>
            {studyMobileDropdownState && (
              <ul
                className="left-[22rem] top-[3rem] flex flex-col bg-white text-sm font-semibold"
                ref={menuRef}
              >
                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/study/student-status"}
                >
                  Student status and work
                </Link>
                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/study/students-with-special-needs"}
                >
                  Students with special needs
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/study/international-experience-during-studies"}
                >
                  International experience during studies
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/study/how-to-apply"}
                >
                  How to apply
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/study/visa"}
                >
                  Visa
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/study/scholarships"}
                >
                  Scholarship
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/study/health"}
                >
                  Health and insurance
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/study/recognition-of-previous-foreign-education"}
                >
                  Recognition of foreign education
                </Link>
              </ul>
            )}
            <li
              onClick={() => {
                closeAllMobileDropdowns();
                setProgrammersMDropdownState(!programmersMDropdownState);
              }}
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
                className="left-[28.5rem] top-[3rem] flex flex-col bg-white text-sm font-semibold"
                ref={menuRef}
              >
                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/programmers/study-programmes"}
                >
                  All Programmers (145)
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/programmers/bachelors-study-programmes"}
                >
                  bachelor&apos;s programmers (17)
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/programmers/masters-study-programmes"}
                >
                  Master&apos;s programmers (52)
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/programmers/doctoral-study-programmes"}
                >
                  Doctoral programmers (76)
                </Link>
              </ul>
            )}
            <li
              onClick={() => {
                closeAllMobileDropdowns();
                setCzechilaMDropdownState(!CzechilaMDropdownState);
              }}
              className="cursor-pointer"
            >
              <div
                className={`flex w-full items-center border-b-[1px] p-5 text-base font-medium ${
                  CzechilaMDropdownState && "text-red-500"
                }`}
              >
                <span>Czechila</span> <IoMdArrowDropdown />
              </div>
            </li>
            {CzechilaMDropdownState && (
              <ul
                className="left-[39.5rem] top-[3rem] flex flex-col bg-white text-sm font-semibold"
                ref={menuRef}
              >
                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/Czechia/facts-and-figures"}
                >
                  Basic information
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/Czechia/culture-and-traditions"}
                >
                  culture and traditions
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/Czechia/czech-mark-in-the-world"}
                >
                  Czech mark in the world
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/Czechia/nature"}
                >
                  Nature, climate and weather
                </Link>

                <Link
                  className="flex w-full items-center border-b-[1px] p-4 py-3 text-sm font-normal text-black"
                  href={"/Czechia/Language"}
                >
                  Language
                </Link>
              </ul>
            )} */}
            <li className="flex w-full items-center border-b-[1px] p-5 text-base font-medium text-black hover:bg-red-500 hover:text-white">
              <Link href={"/faq"}>FAQ</Link>
            </li>
            <li className="flex w-full items-center border-b-[1px] p-5 text-base font-medium text-black hover:bg-red-500 hover:text-white">
              <Link href={"/ambassadors"}>Ambassadors</Link>
            </li>
            <li className="flex w-full items-center border-b-[1px] p-5 text-base font-medium text-black hover:bg-red-500 hover:text-white">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>

          <AlertDialogCancel className="absolute -left-20 top-2 z-[100] border-none bg-transparent hover:bg-transparent">
            <RiCloseCircleFill
              size={"2.5rem"}
              color="white"
              className="z-[100]"
            />
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
