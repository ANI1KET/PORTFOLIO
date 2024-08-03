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
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Project
              </h2>
              <p className="max-w-lg mb-10">
                I do more than just build projects; I explore and understand the
                technologies I use. I'm excited to face new challenges and use
                my skills to create high-quality solutions. The joy of solving
                problems and writing clean, efficient code keeps me passionate
                about my work.
              </p>
              <a
                href={"https://github.com/ANI1KET?tab=repositories"}
                target=" "
              >
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              <a href="https://codescreenshot.aniketrouniyar.com.np" target=" ">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <motion.div style={{ scale }}>
                  <img
                    src={Img1}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500 z-50 "
                  />
                </motion.div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">CODE EDITOR SCREENSHOT</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </a>
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
              <a href="https://taskmanager.aniketrouniyar.com.np" target=" ">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                <motion.div style={{ scale }}>
                  <img
                    src={Img2}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500 z-50"
                  />
                </motion.div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">TASK MANAGER</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              <a href="https://tracker.aniketrouniyar.com.np/" target=" ">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                <motion.div style={{ scale }}>
                  <img
                    src={Img3}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500 z-50"
                  />
                </motion.div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">REALTIME TRACKER</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
