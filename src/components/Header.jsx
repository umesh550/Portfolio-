import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 50) {
      document.querySelector(".nav__list").style.background =
        "linear-gradient(#19e0bdcc, #6db9efcc)";
    } else {
      document.querySelector(".nav__list").style.background = "";
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <nav className="fixed z-50 w-full font-bree">
        <div className="flex items-center nav__list mx-3 lg:mx-10 rounded-full my-3 px-6 py-2.5 justify-between">
          <p className="font-heading text-2xl">
            Portfolio<span className="font-mono">.</span>
          </p>
          <div className="hidden lg:flex justify-between space-x-9 text-lg items-center">
            <p className="hover:text-[#36B29D] transition-all">
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#home">About</a>
            </p>
            <p>
              <a href="#home">Skills</a>
            </p>
            <p>
              <a href="#home">Projects</a>
            </p>
            <p>
              <a href="#home">Contact</a>
            </p>
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div className="p-1.5 rounded-full hover:bg-gray-300 transition-all ease-in-out">
              <FaLinkedinIn size={20} />
            </div>
            <div className="p-1.5 rounded-full hover:bg-gray-300 transition-all ease-in-out">
              <FaGithub size={20} />
            </div>
            <div className="p-1.5 rounded-full hover:bg-gray-300 transition-all ease-in-out">
              <IoMdMoon size={20} />
            </div>
            <div className=" lg:hidden ">
              <IoMenu size={21} />
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
    // <center>
    //   <header className="bg-[#eee] font-mono text-sm p-3 lg:text-base 2xl:text-lg font-semibold ">
    //     <nav className="fixed w-full pr-5">
    //       <ul className="flex items-center max-w-sm  lg:max-w-lg rounded-full  h-14 justify-around">
    //         <p className="font-heading text-lg">
    //           Portfolio<span className="font-mono">.</span>
    //         </p>
    //         <li>
    //           <a href="#">Home</a>
    //         </li>
    //         <li>
    //           <a href="#">About</a>
    //         </li>
    //         <li>
    //           <a href="#">Skills</a>
    //         </li>
    //         <li>
    //           <a href="#">Projects</a>
    //         </li>
    //         <li>
    //           <a href="#">Contact</a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <div className="hidden space-x-2 absolute right-6 top-6 rounded-2xl lg:flex">
    //       <FaLinkedin size={24} />
    //       <FaGithub size={24} />
    //     </div>
    //   </header>
    // </center>
  );
};

export default Header;
