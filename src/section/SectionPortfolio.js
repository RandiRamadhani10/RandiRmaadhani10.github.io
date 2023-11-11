import React, { useEffect, useState } from "react";
import CardPortfolio from "../components/CardPortfolio";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper-css.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Controller } from "swiper/modules";

// icon
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import PopUpPortfolio from "../components/PopUpPortfolio";

// dumy data
const dummyData = [
  {
    title: "Evorty",
    descript: "Evorty is an event management expertise that helps and makes it easier for Event Planners to achieve the goal of carrying out an event.",
    image: "https://res.cloudinary.com/do3gqpixo/image/upload/v1699427660/portfolio/lvxnofeynceq1lnqgjs4.png",
  },
  {
    title: "SecondHand",
    descript: "Is a Mobile App for an E-Commerce Platform.",
    image: "https://firebasestorage.googleapis.com/v0/b/starter-9dff2.appspot.com/o/secondhand.png?alt=media&token=dc9182e7-2d02-45a6-8115-978331a3f91e",
  },
  {
    title: "MyWalet",
    descript:
      "I'm proud to present my latest project on LinkedIn, an IoT application designed to manage swallow nest farms. This innovative application was developed using React Native and Firebase, showcasing my skills in mobile app development and cloud integration.",
    image: "https://firebasestorage.googleapis.com/v0/b/starter-9dff2.appspot.com/o/mywalet.png?alt=media&token=7e5e4fde-3bf1-49ed-a9c7-ed7daa019745",
  },
  {
    title: "MyBas",
    descript: "I had the opportunity to lead the development of this innovative Smart Home Application that allows users to remotely control their home devices and appliances using their smartphones.",
    image: "https://firebasestorage.googleapis.com/v0/b/starter-9dff2.appspot.com/o/mybass.png?alt=media&token=e49e92c9-4677-430d-bec0-d0c5b5527bce",
  },
  {
    title: "Selamanik Laundry",
    descript: "I developed a comprehensive Laundry Management Application that simplifies the laundry process and enhances the user experience. This project showcases my skills in mobile app development and backend web development.",
    image: "https://firebasestorage.googleapis.com/v0/b/starter-9dff2.appspot.com/o/selamanik.png?alt=media&token=e7f3deb3-c177-4af7-9a15-cfd6fccf7688",
  },
  {
    title: "Absensi PT. Gunung Api Mulia",
    descript:
      "Introducing 'Absensi PT. Gunung Api Mulia,' a cutting-edge web application developed using React.js. Absensi PT. Gunung Api Mulia is a powerful and user-friendly employee attendance management system designed to streamline and enhance administrative processes.",
    image: "https://firebasestorage.googleapis.com/v0/b/starter-9dff2.appspot.com/o/absensi.png?alt=media&token=365659fc-4283-4485-9d66-1f19436f6a9e",
  },
  {
    title: "WorkCheck",
    descript:
      "Introducing 'WorkCheck' the companion mobile application built with React Native for seamless and efficient employee attendance management on the go. WorkCheck extends the capabilities of the Absensi PT. Gunung Api Mulia web application, providing administrators and employees with a convenient and accessible solution directly from their mobile devices.",
    image: "https://firebasestorage.googleapis.com/v0/b/starter-9dff2.appspot.com/o/workcheck.png?alt=media&token=81058881-c45a-476e-bf95-86ae218383cd",
  },
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const SectionPortfolio = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedPorto, setselectedPorto] = useState({});
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="portfolio" className="bg-def-dark-200 w-full">
      <div className="max-w-6xl m-auto text-white pb-28 px-5">
        <div className="bg-gradient-to-t from-def-dark-200 to-def-green-100 py-10 sm:py-28 px-4">
          {/* title */}
          <div className="flex justify-center mb-9">
            <div className="text-2xl font-bold">Portfolio</div>
          </div>

          {/* descript */}
          <div className="flex justify-center m-auto mb-12 text-center max-w-2xl">
            <div>Explore my projects, encompassing user interface and experience, prototyping, and testing for web and mobile projects. Let's collaboratively build outstanding digital experiences together.</div>
          </div>
        </div>

        {/* card */}
        <div className="relative mt-5 sm:-mt-24">
          <Swiper
            slidesPerView={windowDimensions.width >= 990 ? 3 : windowDimensions.width >= 760 ? 2 : 1}
            spaceBetween={30}
            slidesPerGroup={1}
            pagination={{
              el: ".my-custom-pagination-div",
              clickable: true,
            }}
            loop={true}
            modules={[Pagination, Controller]}
            controller={{ control: controlledSwiper }}
            onSwiper={setControlledSwiper}
            className="swiper w-[87%]"
          >
            {dummyData.map((res, index) => (
              <SwiperSlide
                key={"itemCardPorto" + index}
                className="mb-1"
                onClick={async () => {
                  await setselectedPorto(res);
                  await setisOpenModal(true);
                }}
              >
                <CardPortfolio title={res.title} descript={res.descript} image={res.image} />
              </SwiperSlide>
            ))}
            <div className="my-custom-pagination-div block xl:hidden mt-5" />
          </Swiper>

          <div className="hidden xl:flex relative w-[100%] justify-between mx-auto top-[-219px]">
            {/* prev */}
            <div
              className=" cursor-pointer w-[50px] h-[50px] flex justify-center items-center top-[-210px] left-[-70px]"
              onClick={() => {
                controlledSwiper.slidePrev();
              }}
            >
              <ArrowSmallLeftIcon className="bg-def-dark-100 hover:bg-def-green-200 rounded-full w-12 p-3 ease-in-out duration-300" />
            </div>

            {/* next */}
            <div
              className=" cursor-pointer w-[50px] h-[50px] flex justify-center items-center top-[-260px] right-[-1050px]"
              onClick={() => {
                controlledSwiper.slideNext();
              }}
            >
              <ArrowSmallRightIcon className="bg-def-dark-100 hover:bg-def-green-200 rounded-full w-12 p-3 ease-in-out duration-300" />
            </div>
          </div>
        </div>

        {/* pop up */}
        <PopUpPortfolio isOpen={isOpenModal} setisopen={setisOpenModal} data={selectedPorto} />
      </div>
    </div>
  );
};

export default SectionPortfolio;
