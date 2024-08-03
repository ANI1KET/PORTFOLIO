/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <>
      <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:items-center">
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="bg-image flex bg-contain bg-no-repeat lg:w-[550px] h-[550px] bg-top 
              drop-shadow-[-6px_6px_4px_#5f5e62]
              "
            ></motion.div>
            <div className="text-center font-secondary lg:text-left">
              <motion.h1
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-6 text-[42px] font-bold leading-[0.8] lg:text-[72px]"
              >
                ANIKET ROUNIYAR
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="ml-4 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
              >
                <span className="mr-4 text-white">I am</span>
                <TypeAnimation
                  sequence={[
                    "an Engineer",
                    1000,
                    "a Developer",
                    1000,
                    "a Designer",
                    1000,
                  ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-8 max-w-lg mx-auto lg:mx-0"
              ></motion.p>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
              >
                <button className="btn btn-lg">
                  <a
                    href="https://linkedin.com/in/aniketrouniyar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect with me
                  </a>
                </button>
                <a href="#" className="text-gradient btn-link">
                  My portfolio
                </a>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                // viewport={{ once: false, amount: 0.7 }}
                className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
              >
                <a href="#">
                  <FaYoutube />
                </a>
                <a
                  href="https://github.com/ANI1KET"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/aniketrouniyar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
