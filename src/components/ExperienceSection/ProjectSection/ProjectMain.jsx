import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const project =[{
    name:'Catcus',
    year:'2023',
    align:'right',
    image:'',
    link:'#',
}]
const ProjectMain = () => {
  return <div>
    <ProjectText/>
    <div className="">
        <SingleProject/>
    </div>
  </div>;
};

export default ProjectMain;
