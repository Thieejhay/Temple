import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {swiperalumna} from '../data/data'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HomeAlumna = () => {
  return (
    <div className='flex flex-col lg:pt-12 pt-4 lg:pb-8 pb-3 lg:gap-12 gap-5 bg-gray-50'>
        <span className='flex flex-col gap-2 justify-center items-center'>
            <span className='uppercase lg:text-3xl text-xl font-semibold opacity-90'>temple alumni feature</span>
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
                slidesPerView={1}
                spaceBetween={3}
                slidesPerGroup={1}
                loop={true} className='h-80 mySwiper flex'>
                    { swiperalumna.map((swiperalumna, i) => (
                        <SwiperSlide className='flex lg:pl-64 px-3 lg:px-0' key={i}>
                            <div className='flex lg:gap-10 gap-2 w-fit'>
                                <span className='lg:w-64 w-32 h-40 lg:h-72 rounded-md bg-gray-200'>
                                    <img src={swiperalumna.img} alt='' className='w-full h-full'></img>
                                </span>
                                <div className='flex flex-col lg:pt-9 lg:gap-7 gap-3'>
                                    <span className='text-xs lg:w-[35rem] w-[14rem]'>
                                    {swiperalumna.mssg}  
                                    </span>
                                    <span className='flex justify-between'>
                                        <span className='flex flex-col'>
                                            <span className='text-lg font-medium'>{swiperalumna.name}</span>
                                        </span>
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