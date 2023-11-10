import React, { useEffect, useState } from "react";
import CardPortfolio from "../components/CardPortfolio";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper-css.css"

// import required modules
import { Pagination } from "swiper/modules";
import { Controller } from "swiper/modules";

// icon
import {
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/solid";

// dumy data
const dummyData = [
  {
    title: "Project 1",
    descript:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://placehold.co/600x400.png",
  },
  {
    title: "Project 2",
    descript:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://placehold.co/600x400.png",
  },
  {
    title: "Project 3",
    descript:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://placehold.co/600x400.png",
  },
  {
    title: "Project 4",
    descript:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://placehold.co/600x400.png",
  },
  {
    title: "Project 5",
    descript:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://placehold.co/600x400.png",
  },
  {
    title: "Project 6",
    descript:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://placehold.co/600x400.png",
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
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

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
            <div>
              Explore my design services, from user interface and experience to
              prototyping and testing. Let's craft exceptional digital
              experiences together.
            </div>
          </div>
        </div>

        {/* card */}
        <div className="relative mt-5 sm:-mt-24">
          <Swiper
            slidesPerView={
              windowDimensions.width >= 990
                ? 3
                : windowDimensions.width >= 760
                ? 2
                : 1
            }
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
              <SwiperSlide key={"itemCardPorto" + index} className="mb-1">
                <CardPortfolio
                  title={res.title}
                  descript={res.descript}
                  image={res.image}
                />
              </SwiperSlide>
            ))}
            <div className="my-custom-pagination-div block xl:hidden mt-5" />
          </Swiper>

          <div className="hidden xl:flex relative w-[100%] justify-between mx-auto top-[-219px]">
            {/* prev */}
            <div
              className=" cursor-pointer w-[50px] h-[50px] flex justify-center items-center top-[-210px] left-[-70px]"
              onClick={() => {
                controlledSwiper.slidePrev()
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
      </div>
    </div>
  );
};

export default SectionPortfolio;
