import React from 'react'
import './css/Topsection.css';
import Image from 'react-bootstrap/Image';
import desktop from './Images/desktop.gif'
import Profile from './Images/profile.jpg'
import Button from '@mui/material/Button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Topsection = () => {
  return (
    <div className='grid-container'>
      <motion.div 
        className='left-grid'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className='text-img'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello , I'm 
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <Image src={Profile} className="kakashi float" />
          </motion.div>
        </motion.div>

        <motion.div 
          className='name'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Mohit Madelwar
        </motion.div>

        <motion.div 
          className='type-animation'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              'Full-Stack Web Developer',
              2000, 
              'React.js Developer',
              2000,
              'MERN Stack Developer',
              2000,
              'Frontend Developer',
              2000,
              'Vue.js Developer',
              2000,
              'Node.js Developer',
              2000
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Button 
            className='hire-me btn-hover glow' 
            variant="contained" 
            size="large" 
            href="#contact"
          > 
            Hire Me 
          </Button>
        </motion.div>
      </motion.div>
    
      <motion.div
        className='img'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          initial={{ scale: 0.8, rotate: 10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Image className='desktop-image pulse' src={desktop} alt="Desktop Development" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Topsection