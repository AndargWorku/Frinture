import React from 'react'
import {features} from '../data'
import feature2 from '../assets/img/feature2.png'
const FeaturesSecond = () => {
    const {title,subtitle,image}=features.feature2
  return (
    <section className='section'>
    <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>

        <div className='flex-1 flex flex-col justify-end'>
            <h1 className='title'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>
            </div>
            <div className='flex-1'>
                <img src={feature2} alt=''/>
            </div>
           
        </div>
    </div>
    </section>
  )
}

export default FeaturesSecond