import React from 'react'
import Detail from '../assets/img/Detail.mp4'
const About = () => {
  return (
    <div className='bg-black '>
             <video autoPlay loop id muted='video'>
       <source src={Detail} type='video/mp4'/>
       </video>
    </div>
  )
}

export default About
