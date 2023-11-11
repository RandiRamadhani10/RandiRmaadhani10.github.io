import React from "react";

// icon
import IconHtml from "../assets/icon/skills/html.png";
import IconCss from "../assets/icon/skills/css.png";
import IconJs from "../assets/icon/skills/javascript.png";
import IconReact from "../assets/icon/skills/react.png";
import IconTailwind from "../assets/icon/skills/tailwind.png";
import IconNode from "../assets/icon/skills/node.png";
import IconFirebase from "../assets/icon/skills/firebase.png";

const SectionSkills = () => {
  return (
    <div id="skills" className="bg-def-dark-200 w-full">
      <div className="max-w-6xl m-auto text-white py-28 px-5">
        {/* title */}
        <div className="flex justify-center mb-9">
          <div className="text-2xl font-bold">Core Skills</div>
        </div>

        {/* descript */}
        <div className="flex justify-center m-auto mb-12 text-center max-w-2xl">
          <div>I excel in fundamental software development skills, creating visually stunning and functional digital experiences. From coding to software architecture, my passion is to craft effective and memorable digital solutions.</div>
        </div>

        {/* skills */}
        <div className="flex justify-center items-center flex-wrap mt-16">
          {/* html */}
          <div className="group p-8 w-[250px] transform hover:scale-110 ease-in-out duration-300">
            <img
              src={IconHtml}
              alt="icon html"
              className="drop-shadow-lg m-3"
            />
          </div>

          {/* css */}
          <div className="group p-8 w-[250px] transform hover:scale-110 ease-in-out duration-300">
            <img src={IconCss} alt="icon css" className="drop-shadow-lg m-3" />
          </div>

          {/* js */}
          <div className="group p-8 w-[250px] transform hover:scale-110 ease-in-out duration-300">
            <img src={IconJs} alt="icon js" className="drop-shadow-lg m-3" />
          </div>

          {/* react */}
          <div className="group p-8 w-[250px] transform hover:scale-110 ease-in-out duration-300">
            <img
              src={IconReact}
              alt="icon react"
              className="drop-shadow-lg m-3"
            />
          </div>

          {/* tailwind */}
          <div className="group p-8 w-[250px] transform hover:scale-110 ease-in-out duration-300">
            <img
              src={IconTailwind}
              alt="icon tailwind"
              className="drop-shadow-lg m-3"
            />
          </div>

          {/* node js */}
          <div className="group p-8 w-[250px] transform hover:scale-110 ease-in-out duration-300">
            <img
              src={IconNode}
              alt="icon node"
              className="drop-shadow-lg m-3"
            />
          </div>

          {/* firebase */}
          <div className="group p-8 w-[250px] transform hover:scale-110 ease-in-out duration-300">
            <img
              src={IconFirebase}
              alt="icon firebase"
              className="drop-shadow-lg m-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSkills;
