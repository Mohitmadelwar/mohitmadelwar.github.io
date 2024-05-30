import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data";
import { motion } from "framer-motion";

export default function Tools({index}) {
  return (
    <section id="skills" className="bg-black">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <motion.div 
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: true }}
          >
            <ChipIcon className="text-[gray] w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
          <span className=" text-[#969DA8] lg:w-2/3 mx-auto leading-relaxed text-base ">
           "Dive into my skill set and expertise"
            </span>
          </motion.div>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="p-2 sm:w-1/3 w-full"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 50 : -50, // Slide from right if even index, from left if odd
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center border-2 border-transparent hover:bg-blue-500 transition-colors duration-300">
                <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>

    </section>
    
  );
}