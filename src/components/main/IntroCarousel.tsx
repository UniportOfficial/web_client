'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function IntroCarousel (){
    return (
        <Swiper 
            className="my-4 w-full"
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay:3000
            }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className="h-[150px] rounded-lg bg-slate-400"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[150px] rounded-lg bg-slate-400"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[150px] rounded-lg bg-slate-400"></div>
            </SwiperSlide>
        </Swiper>
    )
}