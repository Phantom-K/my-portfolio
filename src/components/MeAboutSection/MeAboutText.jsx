import React from "react";

const MeAboutText = () => {
  return <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
    <h2 className="text-6xl text-brightGreen mb-10">About Me</h2>
    <p className="text-white">
        I am Phantom, a web developer with a passion for learning and buliding.
        I specialize in front-end development, learning new languages and building new projects.
        I upload all my projects on my Linkden and Github page.
        Outside of Programming I enjoy working with people to help develop new projects 
    </p>
    <button className="border border-brownishWhite rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-brownishWhite transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-brightGreen"> My projects</button>
  </div>;
};

export default MeAboutText;
