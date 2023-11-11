import React from "react";
import CardSkill from "../components/CardSkill";

// third party
import VisibilitySensor from "react-visibility-sensor";

// data dummy
const dummyData = [
  {
    title: "HTML",
    progress: "50%",
  },
  {
    title: "CSS",
    progress: "60%",
  },
  {
    title: "JS",
    progress: "90%",
  },
  {
    title: "React",
    progress: "40%",
  },
  {
    title: "Tailwind",
    progress: "70%",
  },
  {
    title: "PHP",
    progress: "30%",
  },
];

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
        <VisibilitySensor>
          {({ isVisible }) => (
            <div className="flex justify-between items-start flex-wrap gap-y-3">
              {dummyData.map((res, index) => {
                return <CardSkill key={"skill" + index} title={res.title} progress={res.progress} isVisible={isVisible} />;
              })}
            </div>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default SectionSkills;
