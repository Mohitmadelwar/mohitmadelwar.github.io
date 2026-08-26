import React from 'react'
import './css/About.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Bs0Circle } from "react-icons/bs";
// import { Button } from '@mui/material';

import { motion } from "framer-motion";

const About = ({index}) => {
  return (
    <div id="about" className='bg-black py-4'>
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
      
<div className='bio p-4 mb-2'>
    <p>I am a technology professional, entrepreneur, and software developer with experience building software products, mobile applications, websites, and digital solutions. As Co-Founder of <a href="https://clarityx.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ClarityX</a>, I work on software and web development, mobile apps, IT solutions, digital marketing, and custom software for businesses. My recent work includes developing <a href="http://oncall24.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">OnCall24</a> and the Lockwatch Guard App, along with client websites and business technology projects. I focus on practical product development — from UI and frontend work to full application builds — and enjoy turning ideas into usable software.</p>
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
  <div>
  <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 mt-5"> Experience</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="December 2025 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }
  >
    <h3 className="vertical-timeline-element-title">Co-Founder • Full Stack Developer</h3>
    <h3 className="vertical-timeline-element-subtitle">ClarityX.in</h3>

    <h4 className="vertical-timeline-element-subtitle">Nagpur, India</h4>
    <p className="vertical-timeline-element-subtitle mt-2">
      Software &amp; web development, mobile apps, IT solutions, digital marketing, and custom software development.
    </p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="September 2024 - December 2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h3 className="vertical-timeline-element-subtitle">Alphaquark (Arpint Pvt. Ltd.)</h3>

    <h4 className="vertical-timeline-element-subtitle">Bengaluru, India</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="October 2023 - November 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Associate</h3>
    <h3 className="vertical-timeline-element-subtitle">Blackcoffer</h3>
    <h4 className="vertical-timeline-element-subtitle">New Delhi, India</h4>
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

<div className="timeline-container">
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
  <div>
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
    <h3 className="vertical-timeline-element-title">Computer Science And Engineering (B.E)</h3>
    <h3 className="vertical-timeline-element-subtitle">R.T.M.N.U</h3>

    <h4 className="vertical-timeline-element-subtitle">Nagpur, Maharashtra, India | 7.48 CGPA</h4>
    
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
    <h4 className="vertical-timeline-element-subtitle">St.Paul School</h4>
    <h4 className="vertical-timeline-element-subtitle">Nagpur , MH , India</h4>
  </VerticalTimelineElement>

 
</VerticalTimeline>
  </div>
</motion.div>

</div>
<hr className=" mx-auto h-0.5 bg-white border-0 mt-3"/>

<div className="timeline-container">
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
  <div>
  <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 mt-5"> Certifications</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }
  >
    <h3 className="vertical-timeline-element-title">Microsoft Azure AI Fundamentals (AI-900)</h3>
    <h3 className="vertical-timeline-element-subtitle">MICROSOFT</h3>

    <h4 className="vertical-timeline-element-subtitle">Cloud & AI Certification</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Bs0Circle /> }

  >
    <h3 className="vertical-timeline-element-title">Microsoft Azure Fundamentals (AZ-900)</h3>
    <h4 className="vertical-timeline-element-subtitle">MICROSOFT</h4>
    <h4 className="vertical-timeline-element-subtitle">Cloud Fundamentals Certification</h4>


  </VerticalTimelineElement>

 
</VerticalTimeline>
  </div>
</motion.div>

</div>
<hr className=" mx-auto h-0.5 bg-white border-0 mt-3"/>


</div>

        
    </div>
  )
}

export default About