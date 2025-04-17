import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const project = [
  {
    name: "Resturant",
    year: "Oct2024",
    align: "right",
    image: "../../Public/images/table.jpg",
    link: "#",
  },
  {
    name: "Real estate",
    year: "Nov2024",
    align: "left",
    image: "../../Public/images/computer.jpg",
    link: "#",
  },
  {
    name: "Catcus",
    year: "Feb202",
    align: "right",
    image: "../../Public/images/laptop.jpg",
    link: "#",
  },
  {
    name: "Profile",
    year: "Apr2025",
    align: "left",
    image: "../../Public/images/macbook.jpg",
    link: "#",
  },
];
const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className=" flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {project.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
