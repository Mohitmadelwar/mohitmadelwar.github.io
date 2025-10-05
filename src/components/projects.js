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
              className="project-card card-hover"
              variants={itemVariants}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="project-title">
                {project.subtitle}
              </h1>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  alt={project.subtitle}
                  className="image"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white font-medium">View Project →</span>
                </div>
              </div>
              <p className="description">{project.description}</p>
              <div className="mt-3 text-center">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Project
                </a>
              </div>
            </motion.a>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;
