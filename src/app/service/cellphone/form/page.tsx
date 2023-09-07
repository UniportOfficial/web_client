'use client'

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faChevronLeft, faBars, faX } from "@fortawesome/free-solid-svg-icons";

import Modal from 'react-modal';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const checklistData = require("/public/checklist/bankaccount.json");
Modal.setAppElement("#form");

export default function CellphoneForm(){
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <section id="form">
            <div className="slide p-8 w-screen h-screen relative box-border">
                <div className="slide-head w-full mt-3 flex justify-between text-2xl">
                    <button className="form-prev-navigation"><FontAwesomeIcon icon={faChevronLeft}/></button>
                    <div className="form-pagination flex justify-center items-center gap-[3px]"/>
                    <button onClick={openModal}><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <Swiper
                    className="w-full h-auto"
                    spaceBetween={10}
                    navigation={{
                        prevEl: ".form-prev-navigation"
                    }}
                    pagination={{el: '.form-pagination'}}
                    modules={[Pagination, Navigation]}
                >   

                    <SwiperSlide>
                        <div className="h-auto">
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="slide-footer">

                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
            >   
                <div className="modal-wrapper h-full flex flex-col justify-between">
                    <div className="modal-head flex justify-end">
                        <button onClick={closeModal}><FontAwesomeIcon icon={faX} /></button>
                    </div>
                    <div className="modal-body my-8">
                        <h1 className="text-center text-xl mb-10">Bank Account</h1>
                        <div className="guide text-sm text-center mb-8">
                            <p>To open a bank account,</p>
                            <p>you'll need the documents shown here.</p>
                        </div>
                        <div className="checklist border-2 border-slate-400 bg-slate-200 rounded-lg p-4">
                            <ul className="text-xs">
                                {
                                    checklistData.map((item: any, idx:number)=>{
                                        return (
                                            <li className="flex items-center mb-2" key={idx}>
                                                <input className="mr-2" type="checkbox" id={`${item.content}-${idx}`}/>
                                                <label htmlFor={`${item.content}-${idx}`}>{item.content}</label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            
                        </div>
                    </div>
                    <div className="modal-footer">
                        <p className="text-sm text-center">We'll work with you to prepare them.</p>
                    </div>
                </div>
            </Modal>
        </section>
        
    )
}