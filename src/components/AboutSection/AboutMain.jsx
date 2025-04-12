import React from "react";
import AboutText from "./AboutText";
import AboutPic from "./AboutPic";

const AboutMain = () => {
  return <div className="pt-40 pb-16">
   <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
   <AboutText/>
   <AboutPic/>
   </div>
  </div>;
};

export default AboutMain;
