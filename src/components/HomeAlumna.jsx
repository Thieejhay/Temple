import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Alumi from '../assets/Alumi.png'
import { Pagination, Navigation } from 'swiper/modules';
import {swiperalumna} from '../data/data'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HomeAlumna = () => {
  return (
    <div className='flex flex-col pt-12 pb-8 gap-20 bg-gray-50'>
        <span className='flex flex-col gap-2 justify-center items-center'>
            <span className='uppercase text-3xl font-semibold'>temple alumna feature</span>
            <span className='text-base font-normal opacity-80 w-[38rem] leading-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam asperiores voluptas</span>
        </span>
        <div className='flex'>
            <Swiper
                breakpoints={{
                    640: {slidesPerView: 1},
                    0: {slidesPerView: 1}
                }}
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                    
                }}
                pagination={{ 
                    dynamicBullets: true,
                    
                }}
                slidesPerView={3}
                spaceBetween={2}
                slidesPerGroup={1}
                loop={true} className='h-80 mySwiper flex'>
                    { swiperalumna.map((swiperalumna, i) => (
                        <SwiperSlide className='flex pl-64' key={i}>
                            <div className='flex gap-10 w-fit'>
                                <span className='w-64 h-72 rounded-md bg-gray-200'>
                                    <img src={Alumi} alt='' className='w-full h-full'></img>
                                </span>
                                <div className='flex flex-col pt-9 gap-7'>
                                    <span className='text-xs w-[35rem]'>
                                    {swiperalumna.mssg}  
                                    </span>
                                    <span className='flex justify-between'>
                                        <span className='flex flex-col'>
                                            <span className='text-lg font-medium'>{swiperalumna.name}</span>
                                            <span className='text-sm opacity-90'>{swiperalumna.desc}</span>
                                        </span>
                                        <span className='text-base font-medium'>{swiperalumna.rating}</span>
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    </div>
  )
}

export default HomeAlumna;