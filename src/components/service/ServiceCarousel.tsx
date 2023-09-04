'use client'

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination';

export default function ServiceCarousel() {
    return(
        <section>
            <Swiper
                className='mb-2'
                spaceBetween={10}
                // pagination={true}
                pagination={{
                    el:".service-pagination",
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <SlideItem
                        title="Alien Registration Card(ARC)"
                        notice="Stumped by this? We're here to help"
                        href="/service"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem
                        title="Bank"
                        notice="Need to create a bank account but don't know how?"
                        href="/service/bank"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem
                        title="Cellphone"
                        notice="Fastest way to get a phonenumber"
                        href="/service/cellphone"
                    />
                </SwiperSlide>
            </Swiper>
            <div className="service-pagination text-center"></div>
        </section>
    )
}

function SlideItem({title, notice, href}: {title:string, notice:string, href:string}){
    return(
        <Link 
            className="item w-full rounded-xl"
            href={href}
        >
            <h2 className="text-md mb-2">{title}</h2>
            <p className="text-xs text-slate-400 mb-2">{notice}</p>
            <div className="w-full h-[200px] rounded-xl bg-slate-400"></div>
        </Link>
    )
}