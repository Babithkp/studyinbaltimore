// components/AlertDialog.js
"use client";
import Link from "next/link";
import Portal from "../components/Portal";
import "./portal.css";

const AlertDialog = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: any) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal>
      <div
        className="fixed right-0 top-0 z-40 flex h-full w-full items-center justify-end overflow-auto bg-[#00000080]"
        onClick={handleOverlayClick}
      >
        <div className="z-50 border bg-white">
          <ul className="mt-10 h-full w-full flex-wrap gap-10 text-black">
            <Link
              onClick={() => onClose()}
              href={"/"}
              className="block w-full border-b-[1px] bg-red-500 p-5 text-base font-medium text-white"
            >
              <p>Home</p>
            </Link>
            <Link
              onClick={() => onClose()}
              href={"/aboutus"}
              className="block w-full border-b-[1px] p-5 text-base font-medium text-black"
            >
              About Us
            </Link>
            <Link
              onClick={() => onClose()}
              href={"/partner-universities"}
              className="block w-full border-b-[1px] p-5 text-base font-medium text-black"
            >
              Partner Universities
            </Link>
            <Link
              onClick={() => onClose()}
              href={"/Scholarships"}
              className="block w-full border-b-[1px] p-5 text-base font-medium text-black"
            >
              Scholarships
            </Link>
            <Link
              onClick={() => onClose()}
              href={"/student-life"}
              className="block w-full border-b-[1px] p-5 text-base font-medium text-black"
            >
              Student Life
            </Link>
            <Link
              onClick={() => onClose()}
              href={"/visa"}
              className="block w-full border-b-[1px] p-5 text-base font-medium text-black"
            >
              Visa
            </Link>
            <li className="flex w-full items-center border-b-[1px] p-5 text-base font-medium text-black hover:bg-red-500 hover:text-white">
              <Link href={"/faq"}>FAQ</Link>
            </li>
            <li
              onClick={() => onClose()}
              className="flex w-full items-center border-b-[1px] p-5 text-base font-medium text-black hover:bg-red-500 hover:text-white"
            >
              <Link href={"/applicationPortal"}>Application Portal</Link>
            </li>
            <li
              onClick={() => onClose()}
              className="flex w-full items-center border-b-[1px] p-5 text-base font-medium text-black hover:bg-red-500 hover:text-white"
            >
              <Link href={"/becomeAnAgent"}>Become An Agent</Link>
            </li>
            <li
              onClick={() => onClose()}
              className="flex w-full items-center border-b-[1px] p-5 text-base font-medium text-black hover:bg-red-500 hover:text-white"
            >
              <Link href={"/referralProgram"}>Referral Program</Link>
            </li>
            <li
              onClick={() => onClose()}
              className="flex w-full items-center border-b-[1px] p-5 text-base font-medium text-black hover:bg-red-500 hover:text-white"
            >
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Portal>
  );
};

export default AlertDialog;
