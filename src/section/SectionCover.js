import React from "react";

// image
import FotoCV from "../assets/image/users.png";

const SectionCover = () => {
  return (
    <div id="home" className="bg-def-dark-100 w-full">
      <div className="max-w-6xl m-auto text-white py-28 px-5">
        {/* hiasan */}
        <div className="bg-gradient-to-b from-def-dark-200 to-def-green-100 w-32 h-32 absolute top-[-70px] rounded-full lg:left-[20vw] left-[30vw]" />

        {/* main */}
        <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-10">
          {/* description */}
          <div className="text-center md:text-left">
            <div className="text-lg mb-6">Programmer</div>
            <div className="font-bold text-5xl max-w-[450px] mb-3">
              Hi There, I'm <span className="text-def-green-100">Randi Ramadhani</span>
            </div>
            <div className="text-def-light-200 font-light max-w-md mb-8">Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.</div>

            {/* button */}
            <div className="flex justify-center md:justify-start items-center sm:gap-10 gap-4">
              {/* hire me */}
              <a href={"/#contact"}>
                <div className="bg-def-green-200 font-bold text-sm py-3 px-8 cursor-pointer hover:bg-def-dark-200 hover:text-def-light-100 ease-in-out duration-300">
                  <p>Hire Me</p>
                </div>
              </a>

              {/* portfolio */}
              <a href={"/#portfolio"}>
                <div className="bg-white text-def-dark-200 font-bold text-sm py-3 px-8 cursor-pointer hover:bg-def-dark-200 hover:text-def-light-100 ease-in-out duration-300">
                  <p>Portfolio</p>
                </div>
              </a>
            </div>
          </div>

          {/* photo */}
          <div className="group relative w-[300px] h-[300px]">
            {/* foto */}
            <div className="absolute w-full left-0">
              <img src={FotoCV} alt="foto cv" className="relative z-[16] " />
            </div>

            {/* hiasan */}
            <div className="absolute bottom-[-19px] flex items-end justify-center sm:-left-5 left-0">
              <div>
                <div className="w-[160px] h-[160px] bg-gradient-to-r from-def-green-200 to-def-dark-200 absolute bottom-10 -left-10 rounded-full group-hover:rotate-45 ease-in-out duration-500" />
                <div className="w-[150px] h-[320px] bg-def-dark-200" />
              </div>
              <div>
                <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#278568] to-def-green-100 absolute top-0 right-6 rounded-full group-hover:rotate-90 ease-in-out duration-500" />
                <div className="w-[150px] h-[200px] bg-def-dark-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCover;
