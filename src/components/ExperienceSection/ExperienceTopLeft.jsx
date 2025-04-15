import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return <div className=" flex flex-col gap-6 w-[300px ]">
    <p className=" text-brownishWhite font-bold uppercase text-3xl font-special text-center">Since 2024</p>
    <div className=" flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text='years'/>
        <p className="font-bold text-6xl text-darkGreen">-</p>
        <ExperienceInfo number="4" text='years'/>
    </div>
    <p className="text-center text-white">With 1 year experience building simple and user friendly websites</p>
        <ExperienceInfo number="5k$" text='Max Budget'/>
  </div>;
};

export default ExperienceTopLeft;
