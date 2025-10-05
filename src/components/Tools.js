import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data";
import { motion } from "framer-motion";

export default function Tools({index}) {
  return (
    <section id="skills" className="bg-black">
      <div className="container px-5 py-10 mx-auto max-w-7xl">
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
            <ChipIcon className="text-blue-400 w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills &amp; Technologies
            </h1>
          <span className="text-gray-300 lg:w-2/3 mx-auto leading-relaxed text-base">
           "Dive into my skill set and expertise"
            </span>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="w-full"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="glass rounded-xl flex p-4 h-full items-center border border-transparent hover:border-blue-400/30 transition-all duration-300 group cursor-pointer min-h-[80px]">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4 group-hover:text-blue-300 transition-colors duration-300" />
                </motion.div>
                <span className="title-font font-medium text-white group-hover:text-blue-100 transition-colors duration-300 text-sm">
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