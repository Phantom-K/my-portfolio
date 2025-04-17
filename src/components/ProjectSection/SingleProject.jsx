import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div className="">
        <h2 className="md:text-3xl sm:text-2xl text-brownishWhite">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={` text-lg flex gap-2 text-brightGreen items-center hover:text-brownishWhite transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View
          <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className=" w-full h-full bg-brightGreen opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="project image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SingleProject;
