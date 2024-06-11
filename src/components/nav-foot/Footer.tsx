import Image from "next/image";
import React from "react";
import img1 from "../../../public/vut-white.png";
import img2 from "../../../public/muni-white.png";
import img3 from "../../../public/mendelu-white.png";
import footerbg1 from "../../../public/blob-9.svg";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-around bg-red-600 py-10 text-white max-lg:gap-5 max-lg:p-10 max-lg:text-xs max-md:mb-[20rem] max-md:flex-col">
      <figure className="max-lg:hidden">IMG</figure>
      <div className="flex flex-col gap-10 max-lg:gap-5">
        <span className="text-3xl font-semibold max-lg:text-2xl">
          Partner universities:
        </span>
        <ul className="flex gap-5 max-lg:gap-10 max-md:flex-col">
          <li>
            <Image src={img1} alt="brno university" />
          </li>
          <li>
            <Image src={img2} alt="masaryk university" />
          </li>
          <li>
            <Image src={img3} alt="brno university" />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-3xl max-lg:hidden max-lg:text-2xl">Contact:</span>
        <div className="flex flex-col gap-5">
          <Link href={"/"} className="text-base underline">
            info@study-in-brno.cz
          </Link>
          <Link href={"/"} className="text-lg underline">
            All contacts
          </Link>
        </div>
      </div>
      <div>
        <figure className="flex flex-wrap gap-3">
          <Link href={"/"} className="border-2 border-white p-3">
            <FaFacebookF size={"1.3rem"} />
          </Link>
          <Link href={"/"} className="border-2 border-white p-3">
            <FaInstagram size={"1.3rem"} />
          </Link>
        </figure>
      </div>
    </footer>
  );
}
