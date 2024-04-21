import React from "react";
import umesh from "../assets/img/Umesh.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="my-10 px-5">
      <p className=" text-3xl mb-10 font-bree text-center font-bold">About</p>
      <div className="lg:flex block justify-between mx-auto lg:space-x-12 max-w-3xl">
        <img src={umesh} alt="" className="object-contain w-72 rounded-2xl" />

        <div className="my-6">
          <p className="font-heading text-2xl">Lorem ipsum</p>
          <p className=" font-roboto leading-8 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <button className="mt-4 px-5 py-3 transition-all  text-sm lg:text-base bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
