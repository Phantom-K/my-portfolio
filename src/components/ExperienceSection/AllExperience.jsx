import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    client: "Freelance",
    date: "2024-present",
    responsibilities: [
      "Implementing resuable components",
      "Working on performance of websites",
      "Generating new ideas for better experiences",
    ],
  },
  {
    job: "Web Developer",
    client: "Freelance",
    date: "2023-present",
    responsibilities: [
      "Contributed to the front-end development of a developer community platform.",
      "Wrote clean, maintainable code and documented features for collaborative growth.",
      "Engaged with contributors via GitHub to implement feature requests and fixes.",
    ],
  },
  {
    job: "  Web Projects Lead",
    client: "Personal Projects",
    date: "2023-present",
    responsibilities: [
      "Planned, designed, and developed a portfolio of web apps, including blogs, dashboards, and e-commerce prototypes.",
      "Built modular components with React and Tailwind CSS for rapid prototyping.",
      "Improved web accessibility and performance scores using Lighthouse audits.",
    ],
  },
];
const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRight className=" text-6xl text-brownishWhite lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
