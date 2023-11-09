import React from "react";

// icon
import IconFacebook from "../assets/icon/sosmed/facebook.svg";
import IconInstagram from "../assets/icon/sosmed/instagram.svg";
import IconLinkedin from "../assets/icon/sosmed/linkedin.svg";
import IconGithub from "../assets/icon/sosmed/github.svg";

const Footer = () => {
  return (
    <div className="bg-def-dark-200 w-full">
      <div className="max-w-6xl m-auto text-white pt-20 pb-10 px-5 relative">
        {/* logo */}
        <div className="flex justify-center items-start left-0 right-0 absolute max-md:top-[40px]">
          <div className="font-bold text-2xl cursor-pointer">
            <div>
              RAN<span className="text-def-green-100">DI</span>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="flex justify-center items-center flex-wrap sm:gap-40 gap-5 mt-1">
          <div className="flex justify-between items-center gap-5">
            {/* about */}
            <div>About</div>

            {/* services */}
            <div>Services</div>
          </div>

          <div className="flex justify-between items-center gap-5">
            {/* portfolio */}
            <div>Portfolio</div>

            {/* Skills */}
            <div>Skills</div>
          </div>
        </div>

        {/* sosmed */}
        <div className="mt-8 flex justify-center items-center flex-col">
          <div className="text-def-light-200">Follow me on social media:</div>

          <div className="mt-5 flex justify-between items-center">
            {/* fb */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="mx-1 rounded-full cursor-pointer hover:bg-def-green-200 bg-def-dark-100 ease-in-out duration-300"
              rel="noreferrer"
            >
              <img src={IconFacebook} alt="fb" className="w-[33px]" />
            </a>

            {/* ig */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="mx-1 rounded-full cursor-pointer hover:bg-def-green-200 bg-def-dark-100 ease-in-out duration-300"
              rel="noreferrer"
            >
              <img src={IconInstagram} alt="ig" className="w-[33px]" />
            </a>

            {/* linkedin */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="mx-1 rounded-full p-[2px] cursor-pointer hover:bg-def-green-200 bg-def-dark-100 ease-in-out duration-300"
              rel="noreferrer"
            >
              <img src={IconLinkedin} alt="linkedin" className="w-[30px]" />
            </a>

            {/* github */}
            <a
              href="https://github.com"
              target="_blank"
              className="mx-[2.5px] p-[5.5px] rounded-full cursor-pointer hover:bg-def-green-200 bg-def-dark-100 ease-in-out duration-300"
              rel="noreferrer"
            >
              <img src={IconGithub} alt="github" className="w-[25px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
