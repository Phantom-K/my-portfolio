import React from "react";

const SingleExperience = ({ experience }) => {
  return (
    <div className=" md:w-[240px] md:h-full sm:h-auto sm:w-full border-2 border-brownishWhite border-dashed rounded-2xl mt-12 p-4 ">
      <p className="font-bold text-brightGreen">{experience.job}</p>
      <p className="text-brownishWhite">{experience.client}</p>
      <p className="text-lightgrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleExperience;
