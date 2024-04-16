import React from "react";
import umesh from "../assets/img/Umesh.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="my-10 ">
      <p className=" text-3xl mb-10 font-bree text-center font-bold">About</p>
      <div>
        <img src={umesh} alt="" className="overflow-hidden w-64 rounded-2xl" />
      </div>
    </div>
  );
};

export default About;
