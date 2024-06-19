import Image from "next/image";
import React from "react";

export default function CardApply({ image, title, content }: any) {
  return (
    <div className="flex max-w-[17rem] flex-col items-center gap-3 rounded-lg border-[1px] bg-white p-5 drop-shadow-lg">
      <Image src={image} alt="counselling icon" className="h-14 w-14" />
      <span className="text-xl font-semibold">{title}</span>
      <p className="text-center text-sm">{content}</p>
      <button className="w-fit rounded-lg bg-green-600 px-4 py-2 text-white">
        Proceed
      </button>
    </div>
  );
}
