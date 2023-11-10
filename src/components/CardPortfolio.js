import React from "react";
// icon
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const CardPortfolio = ({ title, descript, image }) => {
  return (
    <div className="group cursor-pointer">
      {/* image */}
      <div className="overflow-hidden md:max-w-[300px]">
        <img
          src={image}
          className="object-cover group-hover:scale-110 ease-in-out duration-300"
          alt={"photo" + title}
        />
      </div>

      {/* title */}
      <div className="my-5 font-bold text-lg">
        <div>{title}</div>
      </div>

      {/* descript */}
      <div
        className="flex justify-between items-center gap-3"
      >
        <div className="max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">{descript}</div>

        <ArrowLongRightIcon className="w-9 bg-def-dark-100 rounded-full px-2 py-2 -rotate-45 group-hover:rotate-0 ease-in-out duration-500 group-hover:bg-def-green-200"/>
      </div>
    </div>
  );
};

export default CardPortfolio;
