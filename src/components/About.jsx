/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="section" id="about" >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-32 lg:gap-y-0">
          <motion.div
            variants={fadeIn('up', 1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-16 bg-about bg-blend-normal flex bg-contain bg-no-repeat lg:w-[600px] h-[600px] mix-blend-lighten bg-top drop-shadow-[1px_2px_6px_#fffe78]">
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex-1">
              <h2 className="h2 text-accent">About Me</h2>
              <h3 className="h3 mb-4">
                I'm a Full-Stack Developer.
              </h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis!
              </p>
            </div>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={1} duration={2} />
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  exprience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={5} duration={2} />
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={1} duration={5} />
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div> */}
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
