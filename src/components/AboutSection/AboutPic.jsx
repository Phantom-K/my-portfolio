import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative "
    >
      <img
        src="../../public/images/AboutPic.png"
        alt=" Phantom_k"
        className="max-h-[300px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-brightGreen blur-md animate-[spin_20s_linear_infinite] p0" />
      </div>
    </motion.div>
  );
};

export default AboutPic;
