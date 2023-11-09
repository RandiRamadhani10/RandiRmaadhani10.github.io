import React from "react";

// library
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const SectionAbout = () => {
  return (
    <div id="about" className="bg-def-dark-200 w-full">
      <div className="relative max-w-6xl m-auto text-white pt-28 px-5">
        {/* title */}
        <div className="flex justify-center mb-9">
          <div className="text-2xl font-bold">About Me</div>
        </div>

        {/* about */}
        <div className="flex justify-center m-auto mb-12 text-center max-w-2xl">
          <div className="text-def-light-200">
            I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and
            visually stunning digital experiences. With a passion for
            user-centric design, I transform ideas into functional and beautiful
            interfaces. Let's collaborate and shape the future of design
            together.
          </div>
        </div>

        {/* project count */}
        <div className="flex justify-evenly items-center flex-col sm:flex-row gap-10 sm:gap-0">
          {/* project done */}
          <div className="flex flex-col items-center">
            <div className="font-bold text-4xl mb-2 text-[#9effe1]">
              <CountUp
                start={-500}
                end={502}
                duration={1.5}
                useEasing={true}
                enableScrollSpy={false}
                scrollSpyDelay={5}
                useGrouping={true}
                separator=","
                decimal="."
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div>Projects Done</div>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-center">
            <div className="font-bold text-4xl mb-2 text-[#9effe1]">
              <CountUp
                start={-500}
                end={10}
                duration={1.5}
                useEasing={true}
                enableScrollSpy={false}
                scrollSpyDelay={5}
                useGrouping={true}
                separator=","
                decimal="."
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span>+</span>
            </div>
            <div>Year Of Experience</div>
          </div>

          {/* Clents */}
          <div className="flex flex-col items-center">
            <div className="font-bold text-4xl mb-2 text-[#9effe1]">
              <CountUp
                start={-500}
                end={200}
                duration={1.5}
                useEasing={true}
                enableScrollSpy={false}
                scrollSpyDelay={5}
                useGrouping={true}
                separator=","
                decimal="."
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span>+</span>
            </div>
            <div>Clents Served</div>
          </div>
        </div>

        {/* hiasan */}
        <div className="w-full flex justify-center mt-10">
          <div className="w-[200px] h-[95px] bg-def-green-200 rounded-t-full" />
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
