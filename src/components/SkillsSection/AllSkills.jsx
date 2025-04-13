import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill:"JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: RiReactjsFill,
  },
];
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          const Icon = item.icon;
          return  <SingleSkill key={index} text={item.skill} imgSvg={<Icon />} />
        })}
      </div>
    </div>
  );
};

export default AllSkills;
