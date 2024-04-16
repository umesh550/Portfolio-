import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 1.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <center>
        <div className="font-bree pt-40 pb-28 px-5">
          <center>
            <p className="font-heading lg:text-7xl 2xl:text-8xl text-3xl text-[#36B29D]">
              Hi<span className=" font-mono">,</span> I
              <span className="font-mono">&apos;</span>m Umesh Tiruvalluru
            </p>
            <p className="font-heading lg:text-7xl 2xl:text-8xl text-3xl text-[#36B29D]">
              Frontend Developer
            </p>
            <p className="font-roboto font-semibold text-sm lg:text-lg pt-2 text-[#2F6057]">
              A passionate web developer skilled in React.js,
              <br /> I&apos;m enthusiastically seeking dynamic projects to bring
              to life.
            </p>
            <button className="mt-3 lg:px-5 lg:py-3 transition-all px-3 py-2 text-sm lg:text-base bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium">
              See my work
            </button>
          </center>
        </div>
      </center>
    </motion.div>
  );
};

export default Hero;
