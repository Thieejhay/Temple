import React from 'react';
import news1 from '../assets/news.png';
import news3 from '../assets/news3.png';
import news4 from '../assets/news4.png';
import news5 from '../assets/news5.png';
import news6 from '../assets/news6.png';
import news2 from '../assets/news2.png';
import news7 from '../assets/news7.png';
import news8 from '../assets/news8.png';
import news9 from '../assets/news9.png';
import news10 from '../assets/mar copy.png';
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
       
        <div className='flex flex-col lg:py-7 py-4 lg:gap-8 gap-4 bg-white'>
            <span className='flex items-center justify-center'>
                    <span className='lg:text-3xl text-xl font-semibold text-[#061c56]'>Monthly Newsletters</span>
            </span>
            <div className='flex lg:gap-12 gap-4 flex-col lg:px-24 px-4'>
               <div className='flex gap-3 flex-col'>
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#f6bc75] border-[#061c56] rounded-md'>
                        <span className='bg-[#061c56] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Mar</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news10} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#061c56]'>The Flame: March Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-90 text-white'>We would like to extend our heartfelt appreciation to all the incredible individuals who made our 20th Anniversary Sports Days a resounding success!</span>
                            <Link to='/news-10'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                    </span> 
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#061c56] border-[#f6bc75] rounded-md'>
                        <span className='bg-[#f6bc75] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Feb</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news9} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#f6bc75]'>The Flame: Febuary Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-70 text-white'>Welcome to the February edition of "The Flame"!</span>
                            <Link to='/news-9'><span className='text-sm font-normal text-[#f6bc75]'>Read More</span></Link>
                        </span>
                        
                    </span> 
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#f6bc75] border-[#061c56] rounded-md'>
                        <span className='bg-[#061c56] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Jan</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news8} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#061c56]'>The Flame: January Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-90 text-white'>Welcome to the first edition of our monthly newsletter in the year 2024! We extend our warmest greetings to all the parents and guardians of Temple School. We hope you are doing great in your mind and body.</span>
                            <Link to='/news-8'><span className='text-sm font-normal text-[#061c56]'>Read More</span></Link>
                        </span>
                    </span> 
                    <span className='lg:p-6 p-3 flex lg:gap-3 gap-2 border bg-[#061c56] border-[#f6bc75] rounded-md'>
                        <span className='bg-[#f6bc75] rounded-md lg:p-5 p-2 h-fit text-white lg:text-2xl text-lg font-semibold'>Dec</span>
                        <span className='w-[20rem] h-56 rounded-lg lg:flex hidden'>
                            <img className='w-full h-full rounded-lg' src={news7} alt=''></img>
                        </span>
                        <span className=' flex flex-col lg:gap-3 gap-1'>
                            <span className='lg:text-2xl text-lg font-medium lg:leading-5 text-[#f6bc75]'>The Flame: December Temple School Newsletter</span>
                            <span className='lg:text-base text-sm font-normal lg:w-[40rem] opacity-70 text-white'>It is with great excitement that we bring you the December edition of Temple School's monthly newsletter!</span>
                            <Link to='/news-7'><span className='text-sm font-normal text-[#f6bc75]'>Read More</span></Link>
                        </span>
                        
                    </span> 
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
        <div className='flex flex-col lg:py-6 py-4 lg:gap-8 lg:px-20 px-4'>
            <span className='flex items-center justify-center'>
                <span className='flex flex-col gap-2'>
                    <span className='lg:text-3xl text-xl font-semibold text-[#061c56]'>Upcoming Events</span>
                </span>
               
            </span>
            <div className='flex flex-col lg:px-4 px-4 py-4 lg:gap-8 gap-4'>
                <span className='flex lg:flex-row flex-col gap-3'>
                    <span className='flex gap-3'>
                        <span className='w-36 px-2 bg-[#061c56] rounded-md flex justify-center items-center text-white'> 
                            <span className='text-lg font-semibold flex'>21st Jan</span>
                        </span>
                        <span className='flex flex-col gap-1 pt-4 w-[15rem]'>
                            <span className=' text-xl font-semibold opacity-80'>EYFS & Primary Parent's Discussion Day</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3'>
                        <span className='w-36 px-2 bg-[#061c56] rounded-md flex justify-center items-center text-white'> 
                            <span className='text-lg font-semibold flex w-fit'>28th Jan</span>

                        </span>
                        <span className='flex flex-col gap-1 pt-4 w-[15rem]'>
                            <span className=' text-xl font-semibold opacity-80'>Secondary & College Parent's Discussion Day</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3'>
                        <span className='w-36 px-2 bg-[#061c56] rounded-md flex justify-center items-center text-white'> 
                            <span className='text-lg font-semibold flex w-fit'>17th Feb</span>

                        </span>
                        <span className='flex flex-col gap-1 pt-4 w-[15rem]'>
                            <span className=' text-xl font-semibold opacity-80'>Inter House Sport EYFS/PRI</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
               </span>
               <span className='flex lg:flex-row flex-col gap-3'>
                    <span className='flex gap-3'>
                        <span className='w-36 px-2 bg-[#061c56] rounded-md flex justify-center items-center text-white'> 
                            <span className='text-lg font-semibold flex'>24th Feb</span>
                        </span>
                        <span className='flex flex-col gap-1 pt-4 w-[15rem]'>
                            <span className=' text-xl font-semibold opacity-80'>Inter House Sport SEC/COL</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3'>
                        <span className='w-36 px-2 bg-[#061c56] rounded-md flex justify-center items-center text-white'> 
                            <span className='text-lg font-semibold flex w-fit'>26th Feb</span>

                        </span>
                        <span className='flex flex-col gap-1 pt-4 w-[15rem]'>
                            <span className=' text-xl font-semibold opacity-80'>Half-Term Break</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3'>
                        <span className='w-36 px-2 bg-[#061c56] rounded-md flex justify-center items-center text-white'> 
                            <span className='text-lg font-semibold flex w-fit'>4th Mar</span>

                        </span>
                        <span className='flex flex-col gap-1 pt-4 w-[15rem]'>
                            <span className=' text-xl font-semibold opacity-80'>Second Half Term Resumes</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
               </span>
               {/* <span className='flex lg:flex-row flex-col gap-3'>
                    <span className='flex gap-3'>
                        <span className='w-36 px-2 bg-[#061c56] rounded-md flex justify-center items-center text-white'> 
                            <span className='text-lg font-semibold flex w-fit'>24th Feb</span>

                        </span>
                        <span className='flex flex-col gap-1 pt-4 w-[20rem]'>
                            <span className=' text-xl font-semibold opacity-80'>Inter House Sport SEC/COL</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3'>
                        <span className='w-36 px-2 bg-[#061c56] rounded-md flex justify-center items-center text-white'> 
                            <span className='text-lg font-semibold flex w-fit'>26th Feb</span>

                        </span>
                        <span className='flex flex-col gap-1 pt-4 w-[20rem]'>
                            <span className=' text-xl font-semibold opacity-80'>Half-Term Break</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
                    <span className='flex gap-3'>
                        <span className='w-36 px-2 bg-[#061c56] rounded-md flex justify-center items-center text-white'> 
                            <span className='text-lg font-semibold flex w-fit'>4th Feb</span>

                        </span>
                        <span className='flex flex-col gap-1 pt-4 w-[20rem]'>
                            <span className=' text-xl font-semibold opacity-80'>Second Half Term Resumes</span>
                            <span className='text-lg font-normal'></span>
                        </span>
                    </span>
               </span> */}
            </div>
        </div>
        <NewCalendar />
    </div>
  )
}

export default NewsContent;