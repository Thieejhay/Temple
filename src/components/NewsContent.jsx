import React from 'react';
import news1 from '../assets/news.png';
import news3 from '../assets/news3.png';
import news4 from '../assets/news4.png';
import news5 from '../assets/news5.png';
import news6 from '../assets/news6.png';
import { Link } from 'react-router-dom';
import NewCalendar from './NewCalendar';
import Banner from '../assets/event.png';

const NewsContent = () => {
  return (
    <div className='flex flex-col w-screen'>
        <span className='flex justify-center items-center relative h-[20rem] bg-black'>
             <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10'></img>
            <span className='text-6xl tracking-wider font-semibold absolute top-28 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>News & Events</span>
        </span>
       
        <div className='flex flex-col py-12 gap-8'>
            <span className='flex gap-[30rem] items-center justify-center'>
                <span className='flex flex-col gap-2'>
                    <span className='text-3xl font-semibold text-[#061c56]'>Latest News</span>
                </span>
                {/* <span className='px-4 py-2 bg-[#061c56] text-[#d9bc6d] rounded text- w-fit h-fit'>Filter Date</span> */}
            </span>
            <div className='flex gap-12 flex-col px-24 justify-center items-center'>
               <div className='flex gap-6'>
                <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-xl w-fit'>
                        <span className='w-60 h-28 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news1} alt=''></img>
                        </span>
                        <span className=' text-sm font-medium w-56 h-fit leading-5'>Open Day- All school section</span>
                        <span className='text-xs font-normal w-56'>Join us for Temple School's Open Day!</span>
                        <Link to='/news-1'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                    </span> 
                    <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-xl w-fit'>
                        <span className='w-60 h-28 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news3} alt=''></img>
                        </span>
                        <span className=' text-sm font-medium w-56 h-fit leading-5'>Counting down...Temple School's 20th Anniversary</span>
                        <span className='text-xs font-normal w-56'>The Temple School Journey. Where Passion meets Education </span>
                        <Link to='/news-2'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                    </span> 
                    <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-xl w-fit'>
                        <span className='w-60 h-28 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news4} alt=''></img>
                        </span>
                        <span className=' text-sm font-medium w-56 h-fit leading-5'>Congratulations to our Temple Ambassador - Maria Norman-Salako</span>
                        <span className='text-xs font-normal w-56'>Maria Norman-Salako wins second place in AISEN art competition. </span>
                        <Link to='/news-3'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                    </span>
                </div> 
                <div className='flex gap-6'>
                    <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-xl w-fit'>
                        <span className='w-60 h-28 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news5} alt=''></img>
                        </span>
                        <span className=' text-sm font-medium w-56 h-fit leading-5'>Temple School receives Beacon of Safety Award from Safe Schools Lagos (SSLAG). </span>
                        <span className='text-xs font-normal w-56'>Safety Award from Safe Schools Lagos (SSLAG).  </span>
                        <Link to='/news-4'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                    </span> 
                    <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-xl w-fit'>
                        <span className='w-60 h-28 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news6} alt=''></img>
                        </span>
                        <span className=' text-sm font-medium w-56 h-fit leading-5'>Celebrating New Leaders - The Flame Bearers and The Aviators!</span>
                        <span className='text-xs font-normal w-56'>Join us in congratulating the outstanding members of our Students Representative Council</span>
                        <Link to='/news-5'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                    </span> 
                    <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-xl w-fit opacity-0'>
                        <span className='w-60 h-28 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news6} alt=''></img>
                        </span>
                        <span className=' text-sm font-medium w-56 h-fit leading-5'>Celebrating New Leaders - The Flame Bearers and The Aviators!</span>
                        <span className='text-xs font-normal w-56'>Join us in congratulating the outstanding members of our Students Representative Council</span>
                    </span> 
                </div>
            </div>
        </div>
        <div className='flex flex-col py-12 gap-8 px-24'>
            <span className='flex gap-[30rem] items-center justify-center'>
                <span className='flex flex-col gap-2'>
                    <span className='text-3xl font-semibold text-[#061c56]'>Event List</span>
                </span>
                {/* <span className='px-4 py-2 bg-[#061c56] text-[#d9bc6d] rounded text- w-fit h-fit'>Newer</span> */}
            </span>
            <div className='flex flex-col px-32 gap-8'>
                <span className='flex gap-6'>
                    <span className='flex flex-col'>
                        <span className='w-20 h-20 bg-orange-300/70 rounded-md flex justify-center items-center text-white text-3xl font-semibold'>Nov</span>
                        <span className='w-20 h-20 bg-gray-700/70 rounded-b-md flex justify-center items-center text-white text-2xl font-semibold'>4th</span>
                    </span>
                    <span className='w-64 h-40 rounded-lg bg-gray-200'></span>
                    <span className='flex flex-col gap-1 pt-4'>
                        <span className=' text-2xl font-medium'>Open Day</span>
                        <span className='text-lg font-normal w-[33rem]'>All School Sections</span>
                    </span>
                </span>
                <span className='flex gap-6'>
                    <span className='flex flex-col'>
                        <span className='w-20 h-20 bg-pink rounded-md flex justify-center items-center text-white text-3xl font-semibold'>Nov</span>
                        <span className='w-20 h-20 bg-gray-700/70 rounded-b-md flex justify-center items-center text-white text-2xl font-semibold'>4th</span>
                    </span>
                    <span className='w-96 h-40 rounded-lg bg-gray-200'></span>
                    <span className='flex flex-col gap-1 pt-4'>
                        <span className=' text-2xl font-medium'>Early Years Foundation Stage and Primary School - Discussion Day</span>
                        <span className='text-lg font-normal w-[33rem]'>All School Sections</span>
                    </span>
                </span>
                <span className='flex gap-6'>
                    <span className='flex flex-col'>
                        <span className='w-20 h-20 bg-blue-300/70 rounded-md flex justify-center items-center text-white text-3xl font-semibold'>Nov</span>
                        <span className='w-20 h-20 bg-gray-700/70 rounded-b-md flex justify-center items-center text-white text-2xl font-semibold'>8th</span>
                    </span>
                    <span className='w-64 h-40 rounded-lg bg-gray-200'></span>
                    <span className='flex flex-col gap-1 pt-4'>
                        <span className=' text-2xl font-medium'>Mathlympics</span>
                        <span className='text-lg font-normal w-[33rem]'>Secondary School</span>
                    </span>
                </span>
                <span className='flex gap-6'>
                    <span className='flex flex-col'>
                        <span className='w-20 h-20 bg-blue-300/70 rounded-md flex justify-center items-center text-white text-3xl font-semibold'>Nov</span>
                        <span className='w-20 h-20 bg-gray-700/70 rounded-b-md flex justify-center items-center text-white text-2xl font-semibold'>11th</span>
                    </span>
                    <span className='w-64 h-40 rounded-lg bg-gray-200'></span>
                    <span className='flex flex-col gap-1 pt-4'>
                        <span className=' text-2xl font-medium'>Discussion Day</span>
                        <span className='text-lg font-normal w-[33rem]'>Discussion Day</span>
                    </span>
                </span>
                
            </div>
        </div>
        <NewCalendar />
    </div>
  )
}

export default NewsContent;