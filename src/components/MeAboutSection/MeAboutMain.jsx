import React from "react";
import MeAboutText from "./MeAboutText";
import MeAboutImage from "./MeAboutImage";

const MeAboutMain = () => {
  return <div className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
    <div><MeAboutText/></div>
    <div><MeAboutImage/></div>
  </div>;
};

export default MeAboutMain;
