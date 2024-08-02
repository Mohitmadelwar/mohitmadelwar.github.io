import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CodeIcon } from '@heroicons/react/solid';
import { projects } from "./data";
import './css/Project.css';

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants ={
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-20 ">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "This section presents a selection of personally developed applications."
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 "
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          ref={containerRef}
        >
          
          {projects.map((project) => (
            <motion.a
              href={project.link}
              key={project.image}
              className="p-4 border-2 border-transparent hover:border-blue-500 transition-colors duration-300 "
              variants={itemVariants}
            >
                <h1 className="tracking-widest text-lg title-font font-medium text-green-400 mb-2 mt-2">
                    {project.subtitle}
                  </h1>
              <div className="flex relative ">
                 <h2 className="tracking-widest text-sm title-font font-medium text-green-400">
                    {project.subtitle}
                  </h2>
            
                <img
                  alt="gallery"
                  className="image absolute inset-0 w-full h-full object-cover object-center "
                  src={project.image}
                  
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                 
                </div>
              </div>
            
              <p className="description leading-relaxed mt-5 ">{project.description}</p>

            </motion.a>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;