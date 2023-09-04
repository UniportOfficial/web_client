'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import Checklist from '../checklist/checklist';

export default function ChecklistCarousel({datas}: {datas: Array<any>}){
    return (
        <Swiper
            spaceBetween={10}
        >
            {
                datas.map((data,idx)=>{
                    return(
                        <SwiperSlide key={`checklist-${idx}`}>
                            <Checklist data={data}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}