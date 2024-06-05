import React from 'react'
import './css/Topsection.css';
import Image from 'react-bootstrap/Image';
import desktop from './Images/desktop.gif'
import kakashe from './Images/kakashe.gif'
import Button from '@mui/material/Button';
import { TypeAnimation } from 'react-type-animation';

const Topsection = () => {
  return (
    <div className='grid-container'>


    <div className='left-grid'>
    <div className='text-img'>

Hello , I'm 
        <Image src={kakashe} className="kakashi"  /> 
    </div>


    <div className='name' >

Mohit Madelwar
       
    </div>
    <div >

  <TypeAnimation
      sequence={[
   
        'Web Developer',
        1000, 
        'Frontend Developer',
        1000,
        'MERN Developer',
        1000,
        'Software developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />

    </div>
    <Button className='hire-me' variant="outlined" size="large" href="#contact" > Hire Me </Button>
         
    </div>
    
  
             <Image className='ml-auto' src={desktop} alt="" />
       

    </div>
  )
}

export default Topsection