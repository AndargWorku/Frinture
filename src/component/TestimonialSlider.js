import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import hab from "../assets/img/hab.png"
import{Autoplay,Navigation} from 'swiper'
import {persons} from '../data'


const TestimonialSlider = () => {
  return (
    <Swiper className='testimonialSlider'
    modules={Navigation,Autoplay}
    navigation={false}>
        outoplay={true}
      {persons.map((item,index)=>{
        const {avatar,name,occupation,message}=persons;
        return(
        <SwiperSlide key={index}>
            <div className='flex flex-col min-h-[250px]'>
                <div className='flex items-center gap-x-5 mb-9'>
                    <img src={hab} alt=''/>
                    <div>
                        <div className='text-xl font-semibold'>{item.name}</div>
                        <div className='text-gray-500'>{item.occupation}</div>
                    </div>
                    <div className='text-xl max-w-[570px]'>{item.message}</div>
                </div>
            </div>
        </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

export default TestimonialSlider
