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
    <footer className="bg-red-600 flex justify-around py-10 text-white ">
      <figure>
        IMG
      </figure>
      <div className="flex flex-col gap-10">
        <span className="text-3xl">Partner universities:</span>
        <ul className="flex gap-5">
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
      <div className="flex gap-5 flex-col"> 
        <span className="text-3xl">Contact:</span>
        <div className="flex gap-5 flex-col">
          <Link href={"/"}>info@study-in-brno.cz</Link>
          <Link href={"/"}>All contacts</Link>
        </div>
      </div>
      <div>
        <figure className="flex gap-3">
          <Link href={"/"} className="p-3 border-2 border-white ">
            <FaFacebookF size={"1.3rem"}/>
          </Link>
          <Link href={"/"} className="p-3 border-2 border-white">
            <FaInstagram size={"1.3rem"}/>
          </Link>
        </figure>
      </div>
    </footer>
  );
}
