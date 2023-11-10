import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CardSkill = ({ title, progress = '0%', isVisible }) => {
  const [showProgress, setshowProgress] = useState('0%')

  useEffect(() => {
    setTimeout(() => {
      if (isVisible) {
        setshowProgress(progress)
      } else {
        setshowProgress('0%')
      }
    }, 100);
  }, [isVisible])

  console.log(isVisible)

  return (
    <div className="w-[100%] sm:w-[45%] group">
      <div className="font-bold text-lg mb-2">{title}</div>

      {/* progress */}
      <div
        className="flex justify-start items-center gap-x-3"
      >
        <div className="w-[90%] h-1 bg-def-dark-100">
          <div
            className={`h-full bg-def-green-100 group-hover:bg-[#00fcb0] ease-in-out duration-500`}
            style={{ width: showProgress }}
          />
        </div>
        <div className="text-def-light-200 group-hover:text-white ease-in-out duration-500">{progress}</div>
      </div>
    </div>
  );
};

export default CardSkill;
