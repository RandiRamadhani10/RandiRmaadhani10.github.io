/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// icon
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOPen, setisOPen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const checkScrolling = () => {
    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        setIsScrolling(false)
      } else {
        setIsScrolling(true)
      }
    };
  };

  useEffect(() => {
    checkScrolling()
  }, [isScrolling]); // Efek hanya berjalan sekali saat komponen dipasang

  return (
    <div className="text-white sticky top-0 z-30 w-full">
      <div className={`${isScrolling ? 'bg-def-dark-200' : 'lg:bg-transparent bg-def-dark-200'} px-16 py-3 min-h-[80px] absolute w-full z-20 ease-in-out duration-300`}>
        <div className="flex justify-between items-center max-w-7xl m-auto">
          {/* logo */}
          <a href={"/#home"}>
            <div className="font-bold text-def-orange-300 pr-16 text-xl cursor-pointer">
              <div>
                RAN<span className="text-def-green-200">DI</span>
              </div>
            </div>
          </a>

          {/* menu desktop */}
          <div className="hidden lg:flex gap-20 font-light text-base text-[#ffffffa8]">
            {/* about */}
            <a href="/#about">
              <div className="cursor-pointer hover:text-white ease-in-out duration-300">
                <p>About</p>
              </div>
            </a>

            {/* Services */}
            <a href={"/#services"}>
              <div className="cursor-pointer hover:text-white ease-in-out duration-300">
                <p>Services</p>
              </div>
            </a>

            {/* Portfolio */}
            <a href={"/#portfolio"}>
              <div className="cursor-pointer hover:text-white ease-in-out duration-300">
                <p>Portfolio</p>
              </div>
            </a>

            {/* Skills */}
            <a href={"/#skills"}>
              <div className="cursor-pointer hover:text-white ease-in-out duration-300">
                <p>Skills</p>
              </div>
            </a>
          </div>

          {/* contact */}
          <a href={"/#contact"}>
            <div className={`hidden lg:block bg-def-green-200 font-bold text-sm py-3 px-8 cursor-pointer ${isScrolling ? 'hover:bg-white hover:text-def-dark-200' : 'hover:bg-def-dark-200 hover:text-def-light-100'} ease-in-out duration-300`}>
              <p>{"Let's Talk"}</p>
            </div>
          </a>

          {/* hamburger button */}
          <div
            className="group block lg:hidden font-bold text-sm py-2 px-4 border border-[#747474] rounded-md cursor-pointer hover:bg-def-orange-300 hover:text-bg-100 hover:border-bg-100 ease-in-out duration-300"
            onClick={() => {
              setisOPen(!isOPen);
            }}
          >
            <Bars3Icon className="h-6 w-6 text-white group-hover:text-bg-100" />
          </div>
        </div>
      </div>

      {/* menu mobile */}
      <div
        className={`block lg:hidden absolute bg-def-green-200 ${
          isOPen ? "top-[80px]" : "top-[-1755px]"
        } ease-in-out duration-300 right-0 left-0 bg-def-orange-100 text-black`}
      >
        <div className="font-light items-center flex flex-col text-base text-bg-100 gap-5 py-5">
          {/* about */}
          <a href="/#about">
            <div
              className="cursor-pointer hover:text-white ease-in-out duration-300"
              onClick={() => {
                setisOPen(false);
              }}
            >
              <p>About</p>
            </div>
          </a>

          {/* services */}
          <a href={"/#services"}>
            <div
              className="cursor-pointer hover:text-white ease-in-out duration-300"
              onClick={() => {
                setisOPen(false);
              }}
            >
              <p>Services</p>
            </div>
          </a>

          {/* Portfolio */}
          <a href={"/#portfolio"}>
            <div
              className="cursor-pointer hover:text-white ease-in-out duration-300"
              onClick={() => {
                setisOPen(false);
              }}
            >
              <p>Portfolio</p>
            </div>
          </a>

          {/* Skills */}
          <a href={"/#skills"}>
            <div
              className="cursor-pointer hover:text-white ease-in-out duration-300"
              onClick={() => {
                setisOPen(false);
              }}
            >
              <p>Skills</p>
            </div>
          </a>

          {/* Contact */}
          <a href={"/#contact"}>
            <div
              className="cursor-pointer text-white ease-in-out duration-300 bg-def-dark-200 px-3 py-1 rounded-md hover:bg-def-light-100 hover:text-def-dark-200"
              onClick={() => {
                setisOPen(false);
              }}
            >
              <p>{"Let's Talk"}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
