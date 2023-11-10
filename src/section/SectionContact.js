import React from "react";

// icon
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

// icon local
import IconFacebook from "../assets/icon/sosmed/facebook.svg";
import IconInstagram from "../assets/icon/sosmed/instagram.svg";
import IconLinkedin from "../assets/icon/sosmed/linkedin.svg";
import IconGithub from "../assets/icon/sosmed/github.svg";

const SectionContact = () => {
  return (
    <div id="contact" className="bg-def-dark-100 w-full">
      <div className="max-w-6xl m-auto text-white py-28 px-5">
        <div className="flex justify-between items-start flex-col md:flex-row gap-y-14 gap-x-5">
          {/* desc */}
          <div className="w-[100%] md:w-[50%]">
            <div className="text-2xl font-bold mb-3">Get in Touch</div>

            <div className="max-w-xl mb-9">
              Have a question or a project in mind? I'd love to hear from you.
              Let's chat and make something amazing together.
            </div>

            {/* alamat */}
            <div className="flex gap-2 items-center mb-6">
              {/* icon */}
              <div className="w-fit rounded-full">
                <MapPinIcon className="w-[30px]" fill="#00FCB0" />
              </div>

              <div className="text-white font-light text-base">
                Jawa Timur, Pasuruan, Kec. Beji, RT. 11, RW. 05{" "}
              </div>
            </div>

            {/* phone */}
            <div className="flex gap-2 items-center mb-6">
              {/* icon */}
              <div className="w-fit rounded-full">
                <PhoneIcon className="w-[30px]" fill="#00FCB0" />
              </div>

              <div className="text-white font-light text-base">
                +62 8573-1003-893
              </div>
            </div>

            {/* phone */}
            <div className="flex gap-2 items-center mb-6">
              {/* icon */}
              <div className="w-fit rounded-full">
                <EnvelopeIcon className="w-[30px]" fill="#00FCB0" />
              </div>

              <div className="text-white font-light text-base">
                mochamadrandi@gmail.com
              </div>
            </div>

            <div className="mt-10 flex justify-between items-center max-w-[180px]">
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

          {/* form */}
          <div className="w-[100%] md:w-[50%]">
            <form
              className="w-[100%] md:w-[80%] ml-auto"
            >
              <div 
                className="flex flex-col gap-y-5 text-def-dark-200"
              >
                <input type="email" required placeholder="Email" className="w-full p-3"></input>
                <textarea placeholder="Message" required className="min-h-[200px] w-full p-3"></textarea>
              </div>

              <div
                className="mt-9 flex justify-end"
              >
                <button type="submit" className="hover:bg-def-dark-200 hover:text-white px-8 py-3 font-semibold bg-def-green-200 text-def-dark-200 ease-in-out duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
