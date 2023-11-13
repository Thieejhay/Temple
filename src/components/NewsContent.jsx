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
            <span className='text-4xl opacity-90 font-semibold absolute top-28 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>News & Events</span>
        </span>
       
        <div className='flex flex-col py-12 gap-8 bg-[#21bdf3]/30'>
            <span className='flex gap-[30rem] items-center justify-center'>
                <span className='flex flex-col gap-2'>
                    <span className='text-3xl font-semibold text-[#061c56]'>Latest News</span>
                </span>
            </span>
            <div className='flex gap-12 flex-col px-24'>
               <div className='flex gap-3 flex-col'>
                    <span className='p-6 flex gap-3 border border-black/70 rounded-md'>
                        <span className='w-20 h-20 bg-[#061c56] rounded-md flex justify-center items-center text-white text-2xl font-semibold'>Nov</span>
                        <span className='w-[20rem] h-48 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news1} alt=''></img>
                        </span>
                        <span className=' flex flex-col gap-3'>
                            <span className=' text-2xl font-medium leading-5 text-[#061c56]'>The Flame: November Temple School Newsletter</span>
                            <span className='text-base font-normal w-[40rem] opacity-70'>We are excited to bring you another issue packed with news, updates, and exciting events. As the year comes to a close, we reflect on our accomplishments as a community and look forward to the exciting events and programmes that await us.</span>
                            <Link to='/news-1'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='p-6 flex gap-3 border border-black/70 rounded-md'>
                        <span className='w-20 h-20 bg-[#061c56] rounded-md flex justify-center items-center text-white text-2xl font-semibold'>Sep</span>
                        <span className='w-[20rem] h-48 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news4} alt=''></img>
                        </span>
                        <span className=' flex flex-col gap-3'>
                            <span className=' text-2xl font-medium leading-5 text-[#061c56]'>The Flame: September Temple School Newsletter</span>
                            <span className='text-base font-normal w-[40rem] opacity-70'>Welcome to the new academic session. The 2023/2024 academic session promises to be full of exciting opportunities for growth and success.</span>
                            <Link to='/news-2'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='p-6 flex gap-3 border border-black/70 rounded-md'>
                        <span className='w-20 h-20 bg-[#061c56] rounded-md flex justify-center items-center text-white text-2xl font-semibold'>Aug</span>
                        <span className='w-[20rem] h-48 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news5} alt=''></img>
                        </span>
                        <span className=' flex flex-col gap-3'>
                            <span className=' text-2xl font-medium  leading-5 text-[#061c56]'>The Flame: August Temple School Newsletter</span>
                            <span className='text-base font-normal w-[40rem] opacity-70'>Welcome to the August edition of our monthly newsletter. We hope you are all having a wonkSrful summer break so far and enjoying some quality time with your loved ones. The staff at Temple School is eagerly waiting for the new academic session to begin, and we cannot wait to welcome all our students back.</span>
                            <Link to='/news-3'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='p-6 flex gap-3 border border-black/70 rounded-md'>
                        <span className='w-20 h-20 bg-[#061c56] rounded-md flex justify-center items-center text-white text-2xl font-semibold'>Jul</span>
                        <span className='w-[20rem] h-48 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news6} alt=''></img>
                        </span>
                        <span className=' flex flex-col gap-3'>
                            <span className=' text-2xl font-medium leading-5 text-[#061c56]'>The Flame: July Temple School Newsletter</span>
                            <span className='text-base font-normal w-[40rem] opacity-70'>As we enter the final weeks of the school year, we are excited to present to you the second edition of our school's newsletter! This newsletter serves as a platform to celebrate our achievements, reflect on memorable moments and bid farewell to another remarkable academic year</span>
                            <Link to='/news-4'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='p-6 flex gap-3 border border-black/70 rounded-md'>
                        <span className='w-20 h-20 bg-[#061c56] rounded-md flex justify-center items-center text-white text-2xl font-semibold'>Jun</span>
                        <span className='w-[20rem] h-48 rounded-lg bg-gray-200'>
                            <img className='w-full h-full rounded-lg' src={news3} alt=''></img>
                        </span>
                        <span className=' flex flex-col gap-3'>
                            <span className=' text-2xl font-medium leading-5 text-[#061c56]'>The Flame: June Temple School Newsletter</span>
                            <span className='text-base font-normal w-[40rem] opacity-70'>With great pleasure, we welcome you to the June edition of Temble School's monthly newsletter.</span>
                            <Link to='/news-5'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    
                </div> 
               
            </div>
        </div>
        <div className='flex flex-col py-12 gap-8 px-24'>
            <span className='flex gap-[30rem] items-center justify-center'>
                <span className='flex flex-col gap-2'>
                    <span className='text-3xl font-semibold text-[#061c56]'>Upcoming Events</span>
                </span>
               
            </span>
            <div className='flex flex-col px-24 gap-8'>
                <span className='flex gap-20'>
                    <span className='flex gap-6 w-[30rem]'>
                        <span className='flex flex-col'>
                            <span className='w-20 h-20 bg-orange-300/70 rounded-md flex justify-center items-center text-white text-3xl font-semibold'>Nov</span>
                            <span className='w-20 h-20 bg-gray-700/70 rounded-b-md flex justify-center items-center text-white text-2xl font-semibold'>4th</span>
                        </span>
                        {/* <span className='w-64 h-40 rounded-lg bg-gray-200'></span> */}
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-2xl font-medium'>Open Day</span>
                            <span className='text-lg font-normal'>All School Sections</span>
                        </span>
                    </span>
                    <span className='flex gap-6 w-[30rem]'>
                        <span className='flex flex-col'>
                            <span className='w-20 h-20 bg-pink rounded-md flex justify-center items-center text-white text-3xl font-semibold'>Nov</span>
                            <span className='w-20 h-20 bg-gray-700/70 rounded-b-md flex justify-center items-center text-white text-2xl font-semibold'>4th</span>
                        </span>
                        {/* <span className='w-96 h-40 rounded-lg bg-gray-200'></span> */}
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-2xl font-medium'>Early Years Foundation Stage and Primary School - Discussion Day</span>
                            <span className='text-lg font-normal'>All School Sections</span>
                        </span>
                    </span>
               </span>
                <span className='flex gap-20'>
                    <span className='flex gap-6 w-[30rem]'>
                        <span className='flex flex-col'>
                            <span className='w-20 h-20 bg-blue-300/70 rounded-md flex justify-center items-center text-white text-3xl font-semibold'>Nov</span>
                            <span className='w-20 h-20 bg-gray-700/70 rounded-b-md flex justify-center items-center text-white text-2xl font-semibold'>8th</span>
                        </span>
                        {/* <span className='w-64 h-40 rounded-lg bg-gray-200'></span> */}
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-2xl font-medium'>Mathlympics</span>
                            <span className='text-lg font-normal'>Secondary School</span>
                        </span>
                    </span>
                    <span className='flex gap-6 w-[30rem]'>
                        <span className='flex flex-col'>
                            <span className='w-20 h-20 bg-blue-300/70 rounded-md flex justify-center items-center text-white text-3xl font-semibold'>Nov</span>
                            <span className='w-20 h-20 bg-gray-700/70 rounded-b-md flex justify-center items-center text-white text-2xl font-semibold'>11th</span>
                        </span>
                        {/* <span className='w-64 h-40 rounded-lg bg-gray-200'></span> */}
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-2xl font-medium'>Discussion Day</span>
                            <span className='text-lg font-normal'>Discussion Day</span>
                        </span>
                    </span>
                </span>
                
            </div>
        </div>
        <NewCalendar />
    </div>
  )
}

export default NewsContent;