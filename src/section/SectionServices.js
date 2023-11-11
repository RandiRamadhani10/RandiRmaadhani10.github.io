import React from "react";

// icon
import { ComputerDesktopIcon, DevicePhoneMobileIcon, PaintBrushIcon } from "@heroicons/react/24/outline";

const SectionServices = () => {
  return (
    <div id="services" className="bg-def-dark-100 text-white w-full">
      <div className="relative overflow-hidden max-w-6xl m-auto py-28 px-5">
        {/* title */}
        <div className="flex justify-center mb-9">
          <div className="text-2xl font-bold">Services</div>
        </div>

        {/* desc */}
        <div className="flex justify-center m-auto mb-12 text-center max-w-2xl">
          <div className="text-def-light-200">
            Experienced Web & Mobile Developer with a demonstrated history of working in the information technology and services industry. Skilled in JavaScript, React.js, and React native. Strong engineering professional with a Bachelor's
            degree focused in Computer Programming.
          </div>
        </div>

        {/* services */}
        <div className="flex justify-evenly items-center flex-col md:flex-row md:gap-0 gap-10">
          {/* web */}
          <div className="group max-w-sm md:max-w-[280px] flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full flex justify-center md:justify-start mb-8 group-hover:scale-y-110 ease-in-out duration-300">
              <ComputerDesktopIcon className="text-def-green-200 w-16" />
            </div>
            <div className="font-bold mb-3 text-lg group-hover:text-def-green-200 ease-in-out duration-300">Web Development</div>
            <div className="font-light">I specialize in web development and design, creating visually appealing, user-friendly digital experiences.</div>
          </div>

          {/* mobile */}
          <div className="group max-w-sm md:max-w-[280px] flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full flex justify-center md:justify-start mb-8 group-hover:scale-y-110 ease-in-out duration-300">
              <DevicePhoneMobileIcon className="text-def-green-200 w-16" />
            </div>
            <div className="font-bold mb-3 text-lg group-hover:text-def-green-200 ease-in-out duration-300">Mobile Development</div>
            <div className="font-light">I specialize in mobile development and design, creating visually appealing, user-friendly digital experiences.</div>
          </div>

          {/* design */}
          <div className="group max-w-sm md:max-w-[280px] flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full flex justify-center md:justify-start mb-8 group-hover:scale-y-110 ease-in-out duration-300">
              <PaintBrushIcon className="text-def-green-200 w-16" />
            </div>
            <div className="font-bold mb-3 text-lg group-hover:text-def-green-200 ease-in-out duration-300">Design</div>
            <div className="font-light">Focused on UI/UX excellence and mobile development, I craft visually captivating and user-friendly digital experiences.</div>
          </div>
        </div>

        {/* hiasan */}
        <div className="absolute -top-36 right-0 w-[234px] h-[234px] bg-gradient-to-b from-[#175F52] to-def-green-100 rounded-full hover:rotate-90 ease-in-out duration-300" />
      </div>
    </div>
  );
};

export default SectionServices;
