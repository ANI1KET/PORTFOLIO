import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import { useScroll, useTransform } from "framer-motion";

const Work = () => {

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1.2], [0.2, 1.8]);

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:mt-16">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="">
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Project
              </h2>
              <p className="max-w-sm mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                veniam enim ad repudiandae odio recusandae accusantium totam
                dolorem harum eum.
              </p>
              <a href={'https://github.com/ANI1KET?tab=repositories'} target=" ">
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
              </div>

              <motion.div style={{ scale }}>
                <img src={Img1} alt="" className="group-hover:scale-125 transition-all duration-500 z-50 " />
              </motion.div>


              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">CRYPTO-TRADE</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 lg:gap-y-12"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              <motion.div style={{ scale }}>
                <img src={Img2} alt="" className="group-hover:scale-125 transition-all duration-500 z-50" />
              </motion.div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">E-COMMERCE</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              <motion.div style={{ scale }}>
                <img src={Img3} alt="" className="group-hover:scale-125 transition-all duration-500 z-50" />
              </motion.div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">IMAGE_RESIZER</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
