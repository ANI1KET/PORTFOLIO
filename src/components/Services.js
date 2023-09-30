/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "E-COMMERCE WEB-APP",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veniam enim ad repudiandae odio recusandae accusantium totam dolorem harum eum.",
    link: "https://github.com/ANI1KET/E-COMMERCE",
  },
  {
    name: "CRYPTO TRADING WEB-APP",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veniam enim ad repudiandae odio recusandae accusantium totam dolorem harum eum.",
    link: "https://github.com/ANI1KET/CRYPTO-APP",
  },
  {
    name: "IMAGE_RESIZER",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veniam enim ad repudiandae odio.",
    link: "https://github.com/ANI1KET/IMAGE_RESIZER",
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
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 lg:drop-shadow-[1px_6px_10px_#5f5e62]"
          >
            <h2 className="h2 text-accent mb-6 ">EXPERIENCE</h2>
            <h3 className="h3 mb-12 max-w-[455px]">
              I'm a Full Stack with over 1 years of
              exprience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex-1">
              {
                services.map((service, index) => {
                  const { name, description, link } = service;
                  return (
                    <div className="border-b border-white/20 h-[142px] mb-[36px] flex" key={index}>
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">{name}</h4>
                        {/* <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">{service["name"]}</h4> */}
                        <p className="font-secondary leading-tight">{description}</p>
                        {/* <p className="font-secondary leading-tight">{service["description"]}</p> */}
                      </div>
                      <div className="flex  flex-col flex-1 items-end">
                        <a href={link} target=" " className="btn w-9 h-9 mr-6 mt-2 mb-8 flex justify-center items-center"> <BsArrowUpRight /> </a>
                        <a href={link} target=" " className="text-gradient text-sm">Link here</a>
                        {/* <a href="#" className="text-gradient text-sm">{service.link}</a> */}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
