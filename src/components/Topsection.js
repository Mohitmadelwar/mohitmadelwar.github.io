import React from 'react'
import './css/Topsection.css';
import Image from 'react-bootstrap/Image';
import desktop from './Images/desktop.gif'
import kakashe from './Images/kakashe.gif'
import Button from '@mui/material/Button';

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

  Web Developer
       
    </div>
    <Button className='hire-me' variant="outlined" size="large" > Hire Me </Button>
         
    </div>
    
  
             <Image className='ml-auto' src={desktop} alt="" />
       

    </div>
  )
}

export default Topsection