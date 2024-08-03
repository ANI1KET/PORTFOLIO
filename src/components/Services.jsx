import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "E-COMMERCE WEB-APP",
    description:
      "E-commerce Website is a full stack web application that allows businesses to sell their products online to authorized customers.",
    gitlink: "https://github.com/ANI1KET/E-COMMERCE_BACKEND",
    hostlink: "https://ecommerce.aniketrouniyar.com.np",
  },
  {
    name: "FULL STACK CHAT APP",
    description:
      "CHAT-APP-BOT E-COMMERCE WEBSITE GROUP VIDEO CHAT Chat-App is build using Node.js and WebSockets, allowing people to communicate seamlessly. Plus, there's a friendly bot included",
    gitlink: "https://github.com/ANI1KET/BACKEND_CHAT_APP_WITH_BOT",
    hostlink: "https://chatapp.aniketrouniyar.com.np",
  },
  {
    name: "VIDEO CHAT",
    description:
      "Group Video Chat is made using WebRTC protocol to gain real knowledge about video chat.",
    gitlink: "https://github.com/ANI1KET/VIDEO_CHAT_BACKEND",
    hostlink: "https://videochat.aniketrouniyar.com.np",
  },
  // {
  //   name: "Product Design",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veniam enim ad repudiandae odio recusandae accusantium.",
  //   link: "Learn more",
  // },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 lg:drop-shadow-[1px_6px_10px_#5f5e62]"
          >
            <h2 className="h2 text-accent mb-6 ">EXPERIENCE</h2>
            <h3 className="h3 mb-12 max-w-[455px]">
              I'm a Full Stack with over 1.5 years of exprience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex-1">
              {services.map((service, index) => {
                const { name, description, gitlink, hostlink } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[142px] mb-[36px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">
                        {name}
                      </h4>
                      {/* <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">{service["name"]}</h4> */}
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                      {/* <p className="font-secondary leading-tight">{service["description"]}</p> */}
                      {/* <p className="font-secondary leading-tight">{service.description}</p> */}
                    </div>
                    <div className="flex  flex-col flex-1 items-end">
                      <a
                        href={hostlink}
                        target=" "
                        className="btn w-9 h-9 mr-6 mt-2 mb-8 flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={gitlink}
                        target=" "
                        className="text-gradient text-sm"
                      >
                        Link here
                      </a>
                      {/* <a href="#" className="text-gradient text-sm">{service.hostlink}</a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
