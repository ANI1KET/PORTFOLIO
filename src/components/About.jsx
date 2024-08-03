/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-32 lg:gap-y-0">
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-6 bg-about bg-blend-normal flex bg-contain bg-no-repeat lg:w-[1400px] h-[600px] mix-blend-lighten bg-top drop-shadow-[1px_2px_6px_#fffe78] sm:max-w-xl"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex-1">
              <h2 className="h2 text-accent">About Me</h2>
              <h3 className="h3 mb-4">I'm a Full-Stack Developer.</h3>
              <p className="mb-2">
                As a full-stack developer, I've explored a vast array of
                technologies.
              </p>
              <p className="mb-2">
                My front-end magic utilizes JavaScript, TypeScript, React.js,
                and Next.js to craft user interfaces and interactive
                experiences.
              </p>
              <p className="mb-2">
                For back-end wizardry, Node.js is my core, building robust APIs
                and managing data flow. I'm comfortable in both relational
                (SQL/MySQL) and NoSQL (MongoDB) worlds, along with ORMs like
                Prisma and Mongoose.
              </p>
              <p className="mb-2">
                My competitive programming background hones my problem-solving
                skills.
              </p>
              <p className="mb-4">
                I don't just build projects; I develop to understand the
                technologies involved. I'm eager to contribute my skills to
                exciting challenges and deliver high-quality solutions. The
                thrill of problem-solving and the satisfaction of elegant code
                fuel my passion for this journey.
              </p>
            </div>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={1} duration={2} />+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  exprience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={10} duration={2} />+
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
            {/* <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
