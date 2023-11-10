import React from "react";

// icon
import { XMarkIcon } from "@heroicons/react/24/outline";

const PopUpPortfolio = ({ isOpen, setisopen, data }) => {
  return (
    <div
      className={`${
        !isOpen && "hidden"
      } overflow-y-auto overflow-x-hidden bg-[#252835de] fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen`}
    >
      <div className="relative bg-def-green-200 w-[90%] max-w-3xl m-auto mt-20 rounded-md p-2">
        {/* content */}
        <div className="bg-def-dark-200 p-6 flex justify-between items-start sm:flex-row flex-col gap-5">
          {/* image */}
          <div className="sm:w-[50%] w-full">
            <img src={data.image} alt={data.title} className="object-cover" />
          </div>

          {/* desc */}
          <div className="sm:w-[50%] w-full">
            <div className="mb-5 font-bold text-xl">{data.title}</div>
            <div>{data.descript}</div>
          </div>
        </div>

        {/* CLOSE BUTTON */}
        <div
          className="absolute -top-4 -right-5 bg-def-dark-200 p-2 rounded-full hover:bg-def-dark-100 ease-in-out duration-300 cursor-pointer"
          onClick={() => {
            setisopen(false);
          }}
        >
          <XMarkIcon className="w-6 text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default PopUpPortfolio;
