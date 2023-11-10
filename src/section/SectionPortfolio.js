import React from "react";
import CardPortfolio from "../components/CardPortfolio";

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

const SectionPortfolio = () => {
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
        <div className="flex mt-5 sm:-mt-24 justify-center items-start gap-8 flex-wrap">
          {dummyData.map((res, index) => {
            return (
              <CardPortfolio
                key={"itemCardPorto" + index}
                title={res.title}
                descript={res.descript}
                image={res.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionPortfolio;
