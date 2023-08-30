'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import Checklist from '../checklist/checklist';

const checklistBankAccount = require('/public/checklist/bankaccount.json');

export default function ChecklistCarousel(){
    return (
        <Swiper
            spaceBetween={10}
        >
            <SwiperSlide>
                <Checklist data={checklistBankAccount}/>
            </SwiperSlide>
            <SwiperSlide>
                <Checklist data={checklistBankAccount}/>
            </SwiperSlide>
        </Swiper>
    )
}