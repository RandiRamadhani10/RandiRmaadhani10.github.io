import React from "react";

// image
import FotoCV from '../assets/image/user.png'

const SectionCover = () => {
  return (
    <div id="home" className="bg-def-dark-100 w-full">
      <div className="max-w-6xl m-auto text-white py-28 px-5">
        {/* hiasan */}
        <div className="bg-def-green-100 w-32 h-32 absolute top-[-70px] rounded-full lg:left-[20vw] left-[30vw]" />

        {/* main */}
        <div className="flex justify-between items-center flex-col-reverse md:flex-row">
          {/* description */}
          <div
            className="text-center md:text-left"
          >
            <div className="text-lg mb-6">Programmer</div>
            <div className="font-bold text-6xl max-w-[450px] mb-3">
              Hi There, I'm{" "}
              <span className="text-def-green-100">Dwi Randi</span>
            </div>
            <div className="text-def-light-200 font-light max-w-md mb-8">
              Welcome to my portfolio of captivating digital experiences.
              Explore my work and let's create something extraordinary together.
            </div>

            {/* button */}
            <div className="flex justify-center md:justify-start items-center sm:gap-10 gap-4">
              {/* hire me */}
              <a href={"/#contact"}>
                <div className="bg-def-green-200 font-bold text-sm py-3 px-8 cursor-pointer hover:bg-def-dark-200 hover:text-def-light-100 ease-in-out duration-300">
                  <p>Hire Me</p>
                </div>
              </a>

              {/* portfolio */}
              <a href={"/#contact"}>
                <div className="bg-white text-def-dark-200 font-bold text-sm py-3 px-8 cursor-pointer hover:bg-def-dark-200 hover:text-def-light-100 ease-in-out duration-300">
                  <p>Portfolio</p>
                </div>
              </a>
            </div>
          </div>

          {/* photo */}
          <div 
            className="bg-def-dark-200 max-w-[400px] rounded-t-full p-2 mb-9 md:mb-0"
          >
            <div
              className="bg-def-green-200 rounded-t-full"
            >
              <img src={FotoCV} alt="foto user"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCover;
