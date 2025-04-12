import React from "react";
import { PiHexagonThin } from "react-icons/pi";

const AboutPic = () => {
  return <div className="h-full flex items-center justify-center relative ">
    <img src="../../public/images/AboutPic.png"
     alt=" Phantom_k" 
     className="max-h-[250px] w-auto"/>
     <div className="absolute -z-10 flex justify-center items-center animate-pulse ">
     <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[350px] w-auto text-brightGreen blur-md animate-[spin_20s_linear_infinite] p0"/>
     </div>
  </div>;
};

export default AboutPic;
