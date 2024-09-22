import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import slide1 from '/public/img/nike1.png'
import slide2 from '/public/img/naike2.png'
import slide3 from '/public/img/naike3.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import Welcome from "../Welcome/Welcome.jsx";

const MySwiper = () => {


    return (
        <div>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{                    
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {welcomSlide.map(slide => (
                    <SwiperSlide key={slide.id}><Welcome subtitle={slide.subtitle} title={slide.title} text={slide.text} img={slide.img}/></SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
};

export default MySwiper;