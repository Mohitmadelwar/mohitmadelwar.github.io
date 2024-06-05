import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "./data";
import { motion } from "framer-motion";

import './css/Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials"  className="bg-black">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="text-[gray] w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font t mb-12">
          Client Testimonials
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#969DA8]">
            "Discover what others have to say about our collaboration and expertise."
          </p>
        <div className="flex flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="p-4 md:w-1/2 w-full"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50, 
              }}
              whileInView={{
                opacity: 1,
                x: 0, 
                transition: {
                  duration: 0.8,
                },
              }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-blue-500 mb-4" />
                <p className="desc leading-relaxed mb-6 text-gray-500 text-justify">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}