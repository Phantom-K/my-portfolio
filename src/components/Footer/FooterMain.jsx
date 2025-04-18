import React from "react";
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "proects" },
  { link: "Contacts", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightgrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightgrey">Phantom_k</p>
        <ul className="flex gap-4 text-lightgrey text-xl">
          {links.map((link, index) => {
            return (
              <li key={index} className="group">
                <a
                  href="0"
                  className="cursor-pointer  hover:text-white transition-all duration-500"
                >
                  {link.link}
                </a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <p className="Max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">2025 Phantom_k | All rights reserved</p>
    </div>
  );
};

export default FooterMain;
