import React from 'react';
import news1 from '../assets/news.png';
import news3 from '../assets/news3.png';
import news4 from '../assets/news4.png';
import news5 from '../assets/news5.png';
import news6 from '../assets/news6.png';
import news2 from '../assets/news2.png';
import { Link } from 'react-router-dom';
import NewCalendar from './NewCalendar';
import Banner from '../assets/event.png';

const NewsContent = () => {
  return (
    <div className='flex flex-col w-screen'>
        <span className='flex justify-center items-center relative h-[10rem] lg:h-[20rem] bg-black'>
             <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10'></img>
            <span className='lg:text-4xl text-2xl font-semibold opacity-90 absolute lg:top-28 top-16 z-20 lg:left-[50%] lg:-translate-x-[50%] left-[48%] -translate-x-[48%] text-center text-[#f6bc75] flex'>News & Events</span>
        </span>
       
        <div className='flex flex-col lg:py-12 py-4 lg:gap-8 gap-4 bg-white'>
            <span className='flex items-center justify-center'>
                <span className='flex flex-col gap-2'>
                    <span className='lg:text-3xl text-xl font-semibold text-[#061c56]'>Monthly Newsletters</span>
                </span>
            </span>
            <div className='flex lg:gap-12 gap-4 flex-col lg:px-24 px-4'>
               <div className='flex gap-3 flex-col'>
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#f6bc75] border-[#061c56] rounded-md'>
                        <span className='bg-[#061c56] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Nov</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news1} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#061c56]'>The Flame: November Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-90 text-white'>We are excited to bring you another issue packed with news, updates, and exciting events. As the year comes to a close, we reflect on our accomplishments as a community and look forward to the exciting events and programmes that await us.</span>
                            <Link to='/news-1'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#061c56] border-[#f6bc75] rounded-md'>
                        <span className='bg-[#f6bc75] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Oct</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news2} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#f6bc75]'>The Flame: October Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-70 text-white'>It is with great excitement that we bring you the October edition of Temple School's monthly newsletter!</span>
                            <Link to='/news-6'><span className='text-sm font-normal text-[#f6bc75]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#f6bc75] border-[#061c56]  rounded-md'>
                        <span className='bg-[#061c56] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Sep</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news4} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#061c56]'>The Flame: September Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-90 text-white'>Welcome to the new academic session. The 2023/2024 academic session promises to be full of exciting opportunities for growth and success.</span>
                            <Link to='/news-2'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#061c56] border-[#f6bc75] rounded-md'>
                        <span className='bg-[#f6bc75] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Aug</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news5} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#f6bc75]'>The Flame: August Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-70 text-white'>Welcome to the August edition of our monthly newsletter. We hope you are all having a wonderful summer break so far and enjoying some quality time with your loved ones. The staff at Temple School is eagerly waiting for the new academic session to begin, and we cannot wait to welcome all our students back.</span>
                            <Link to='/news-3'><span className='text-sm font-normal text-[#f6bc75]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#f6bc75] border-[#061c56]  rounded-md'>
                        <span className='bg-[#061c56] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Jul</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news6} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#061c56]'>The Flame: July Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-90 text-white'>As we enter the final weeks of the school year, we are excited to present to you the second edition of our school's newsletter! This newsletter serves as a platform to celebrate our achievements, reflect on memorable moments and bid farewell to another remarkable academic year</span>
                            <Link to='/news-4'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#061c56] border-[#f6bc75] rounded-md'>
                        <span className='bg-[#f6bc75] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Jun</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news3} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#f6bc75]'>The Flame: June Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-70 text-white'>With great pleasure, we welcome you to the June edition of Temble School's monthly newsletter.</span>
                            <Link to='/news-5'><span className='text-sm font-normal text-[#f6bc75]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    
                </div> 
               
            </div>
        </div>
        <div className='flex flex-col lg:py-6 py-4 lg:gap-8 lg:px-24 px-4'>
            <span className='flex items-center justify-center'>
                <span className='flex flex-col gap-2'>
                    <span className='lg:text-3xl text-xl font-semibold text-[#061c56]'>Upcoming Events</span>
                </span>
               
            </span>
            <div className='flex flex-col lg:px-20 px-4 py-4 lg:gap-8 gap-4'>
                <span className='flex lg:flex-row flex-col gap-3'>
                    <span className='flex gap-3 w-[25rem]'>
                        <span className='p-2 w-fit h-fit bg-[#061c56] rounded-md flex justify-center items-center text-white flex-col'> 
                            <span className='text-lg font-semibold flex w-fit'>13th Nov</span>
                            <span className='text-lg font-semibold '>2023</span>
                        </span>
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-xl font-semibold opacity-80'>November Cycle Test 2</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3 w-[25rem]'>
                        <span className='p-2 w-fit h-fit bg-[#061c56] rounded-md flex justify-center items-center text-white flex-col'> 
                            <span className='text-lg font-semibold flex w-fit'>27th Nov</span>
                            <span className='text-lg font-semibold '>2023</span>
                        </span>
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-xl font-semibold opacity-80'>Revision Week</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3 w-[25rem]'>
                        <span className='p-2 w-fit h-fit bg-[#061c56] rounded-md flex justify-center items-center text-white flex-col'> 
                            <span className='text-lg font-semibold flex w-fit'>4th Dec</span>
                            <span className='text-lg font-semibold '>2023</span>
                        </span>
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-xl font-semibold opacity-80'>End of Term Examination</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
               </span>
               <span className='flex lg:flex-row flex-col gap-3'>
                    <span className='flex gap-3 w-[25rem]'>
                        <span className='p-2 w-fit h-fit bg-[#061c56] rounded-md flex justify-center items-center text-white flex-col'> 
                            <span className='text-lg font-semibold flex w-fit'>8th Nov</span>
                            <span className='text-lg font-semibold '>2023</span>
                        </span>
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-xl font-semibold opacity-80'>Entrance Examination</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3 w-[25rem]'>
                        <span className='p-2 w-fit h-fit bg-[#061c56] rounded-md flex justify-center items-center text-white flex-col'> 
                            <span className='text-lg font-semibold flex w-fit'>14th Nov</span>
                            <span className='text-lg font-semibold '>2023</span>
                        </span>
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-xl font-semibold opacity-80'>Christmas Concert</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3 w-[25rem]'>
                        <span className='p-2 w-fit h-fit bg-[#061c56] rounded-md flex justify-center items-center text-white flex-col'> 
                            <span className='text-lg font-semibold flex w-fit'>18th Dec</span>
                            <span className='text-lg font-semibold '>2023</span>
                        </span>
                        <span className='flex flex-col gap-1 pt-4'>
                            <span className=' text-xl font-semibold opacity-80'>January Vacation</span>
                            <span className='text-lg font-normal'></span>
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