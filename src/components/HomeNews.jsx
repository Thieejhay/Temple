import React from 'react';
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {swiper} from '../data/data'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';


const HomeNews = () => {
  return (
    <div className='flex flex-col w-screen lg:py-8 py-2 lg:gap-2'>
        <div className='flex flex-col items-center gap'>
            <span className='uppercase lg:text-3xl text-xl font-semibold opacity-90'>latest news</span>
            <span className='text-base font-normal text-center lg:px-60 px-4 opacity-80'>You will be pleased to know that we continue to keep you up to date with the daily life at our school, through a series of blogs written by staff and students.</span>
            <Swiper
            modules={[Pagination, Navigation]}
            navigation={{
                nextEl: '.button-next',
                prevEl: '.button-prev',
                
            }}
            breakpoints={{
                640: {slidesPerView: 3},
                0: {slidesPerView: 1}
            }}
            slidesPerView={3}
            spaceBetween={20}
            slidesPerGroup={1}
            loop={true} className='w-[70%] lg:pl-4 lg:h-[21rem] h-[15rem] mySwiper mt-3 lg:mt-8'>
                { swiper.map((swiper, i) => (
                    <SwiperSlide className='flex' key={i}>
                        <span className='px-6 lg:py-5 py-2 flex flex-col lg:gap-2 hover:shadow-xl w-fit'>
                            <span className='w-60 h-28 rounded-lg bg-gray-200'>
                                <img className='w-full h-full rounded-lg' src={swiper.src} alt=''></img>
                            </span>
                            <span className=' text-sm font-medium w-56 h-fit lg:leading-5'>{swiper.title}</span>
                            {/* <span className='flex gap-1 mt-3'>
                                <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>{swiper.date}</span>
                                <span className='text-xs pl-1 opacity-40'>{swiper.day}</span>
                            </span> */}
                            <span className='text-xs font-normal w-56'>{swiper.mssg}</span>
                            <Link to={swiper.link}><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <span className='flex lg:px-56 px-8 justify-between py-4'>
            <span className='flex'>
                <span className='cursor-pointer button-prev mySwiper'>
                    <IoIosArrowBack size={20} className='text-[#061c56]'/>
                </span>
                <span className='cursor-pointer button-next mySwiper'>
                    <IoIosArrowForward size={20} className='text-[#061c56]'/>
                </span>
            </span>
            <Link to='/news&events'><span className='px-6 py-2 border border-[#f6bc75] text-base font-normal text-[#f6bc75]'>
                Read more
            </span></Link>
            
        </span>
    </div>
  )
}

export default HomeNews;