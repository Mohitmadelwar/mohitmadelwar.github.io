import React from 'react'
import './css/About.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Bs0Circle } from "react-icons/bs";
// import { Button } from '@mui/material';

import { motion } from "framer-motion";

const About = ({index}) => {
  return (
    <div className='bg-black'>
        <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 50 : -50, // Slide from left for even index, right for odd index
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.8, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
        <h1 >About Me</h1>
      
<div className='bio  p-4'>
    <p>
    "Proactive Software Engineer Associate and recent Computer Science and Engineering graduate,
     driven by a passion for crafting exceptional digital experiences. Specializing in React and 
     associated frameworks, I bring a track record of success in delivering innovative solutions and 
     enhancing user engagement. With a keen eye for detail and a commitment to excellence, I thrive in 
     collaborative environments, fostering effective cross-functional 
    partnerships to drive project success. Let's connect to explore how I can bring value to your team and projects!"
         </p>
</div>
</motion.div>

<hr className=" mx-auto h-0.5 bg-white border-0"/>

<div className='timeline-container'> 
<motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.8, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
  <div  >
  <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 mt-5"> Experience</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Associate</h3>
    <h3 className="vertical-timeline-element-subtitle">Blackcoffer</h3>

    <h4 className="vertical-timeline-element-subtitle">Delhi , India</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="April 2023 - September 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }

  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">RealTrend Capital</h4>
    <h4 className="vertical-timeline-element-subtitle">Bengaluru ,India</h4>


  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="November 2021 - January 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }

  >
    <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">ThinkLance Edtechnology</h4>
    <h4 className="vertical-timeline-element-subtitle">Bengaluru ,India</h4>
  </VerticalTimelineElement>

 
</VerticalTimeline>
</div>
</motion.div>

<hr className=" mx-auto h-0.5 bg-white border-0 mt-3"/>

<div  >
<motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.8, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
  <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 mt-5"> Education</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }
  >
    <h3 className="vertical-timeline-element-title">The Bachelor of Engineering (B.E)</h3>
    <h3 className="vertical-timeline-element-subtitle">K.D.K college of Engineering</h3>

    <h4 className="vertical-timeline-element-subtitle">Nagpur , MH , India</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2014 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }

  >
    <h3 className="vertical-timeline-element-title">Polytechnic</h3>
    <h4 className="vertical-timeline-element-subtitle">Government Polytechnic Nagpur</h4>
    <h4 className="vertical-timeline-element-subtitle">Nagpur , MH , India</h4>


  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2013 - 2014"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }

  >
    <h3 className="vertical-timeline-element-title">10th (C.B.S.E Board)</h3>
    <h4 className="vertical-timeline-element-subtitle">Government Polytechnic Nagpur</h4>
    <h4 className="vertical-timeline-element-subtitle">Nagpur , MH , India</h4>
  </VerticalTimelineElement>

 
</VerticalTimeline>
</motion.div>

</div>
<hr className=" mx-auto h-0.5 bg-white border-0 mt-3"/>


</div>

        
    </div>
  )
}

export default About