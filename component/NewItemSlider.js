import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {stores} from '../data'
 import chair from '../assets/img/chair.png'
import bed from '../assets/img/bed.png'
import cupboard from '../assets/img/cupboard.png'
import light from '../assets/img/light.png';
const {name,image}=stores;
const NewItemSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {stores.map((item, index) => {
        return (
          <SwiperSlide className="max-w-[265] grid-cols-4" key={index} >
            <div className="relative">
              <img src={bed} alt=" bed" />
              <img src={chair} alt="chair" />
              <img src={cupboard} alt="cupboard" />
              <img src={light} alt="light" />
              <div className="absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize">
                {item.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemSlider;
