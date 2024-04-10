import React from "react";

const Hero = () => {
  return (
    <center>
      <div className="bg-[#eee] pt-28 pb-16 px-5">
        <center>
          <p className="font-heading lg:text-7xl 2xl:text-8xl text-4xl text-[#36B29D]">
            Hi<span className=" font-mono">,</span> I
            <span className="font-mono">&apos;</span>m Umesh Tiruvalluru
          </p>
          <p className="font-heading lg:text-7xl 2xl:text-8xl text-4xl text-[#36B29D]">
            Frontend Developer
          </p>
          <p className="font-mono text-sm lg:text-lg pt-2 font-medium text-[#2F6057]">
            A Passionate web developer skilled in React js, <br /> eager for
            dynamic projects.
          </p>
          <button className="mt-3 lg:px-5 lg:py-3 px-3 py-2 text-sm lg:text-base bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold">
            See my work
          </button>
        </center>
      </div>
    </center>
  );
};

export default Hero;
