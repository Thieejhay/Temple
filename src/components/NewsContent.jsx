import React from 'react';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import NewCalendar from './NewCalendar';

const NewsContent = () => {
  return (
    <div className='flex flex-col w-screen'>
        <span className='flex pb-40 pt-20 justify-center text-white bg-blue-900'>
            <span className='flex flex-col gap-2 text-center'>
                <span className='text-5xl font-semibold'>News & Events</span>
                <span className='text-sm font-normal opacity-80'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
            </span>
        </span>
        <div className='flex gap-12 justify-center -mt-32 pb-20 w-screen'>
            <span className='flex flex-col w-[38rem] h-[17rem] rounded bg-gray-500 p-5 text-white gap-3 justify-end'>
                <span className='px-4 rounded py-2 bg-[#061c56] text-sm w-fit'>Science</span>
                <span className='text-sm font-medium '>Apply For Community Scholarship </span>
                <span className='text-xs'>Admin.1 day ago.4 mins read</span>
                <span className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique recusandae nihil qui, mollitia a fugiat fuga necessitatibus, earum, autem ea sed. At vel eos sint iure ab odio consequuntur</span>
            </span>
            <span className='flex flex-col w-[20rem] h-[17rem] rounded bg-gray-500 p-5 text-white gap-3 justify-end'>
            <span className='px-4 rounded py-2 bg-[#061c56] text-sm w-fit'>Achievment</span>
                <span className='text-sm font-medium '>Apply For Community Scholarship </span>
                <span className='text-xs'>Admin.1 day ago.4 mins read</span>
            </span>
        </div>
        <div className='flex flex-col py-12 gap-8'>
            <span className='flex gap-[30rem] items-center justify-center'>
                <span className='flex flex-col gap-2'>
                    <span className='text-3xl font-semibold text-[#061c56]'>Latest News</span>
                    <span className='text-sm opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a</span>
                </span>
                <span className='px-4 py-2 bg-[#061c56] text-[#d9bc6d] rounded text- w-fit h-fit'>Filter Date</span>
            </span>
            <div className='flex gap-y-0 gap-x-12 gap flex-wrap px-24 justify-center'>
                <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-2xl w-fit'>
                    <span className='w-60 h-28 rounded-lg bg-gray-200'>
                        <img className='w-full h-full' alt='' src={news1}></img>
                    </span>
                    <span className=' text-sm font-medium w-56 h-12 leading-5'>Temple secondary school hosted group 4 of the 2018 akintola williams national youth debate</span>
                    <span className='flex gap-1 mt-3'>
                        <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>By Admin on Nov 23rd, 2020</span>
                        <span className='text-xs pl-1 opacity-40'>1 day ago</span>
                    </span>
                    <span className='text-xs font-normal w-56'>Lorem ipsum dolor, sit amet conse ctetur adipisicing elit. Consequuntur....</span>
                    <span className='text-sm font-normal text-[#061c56]'>Read More</span>
                </span>
                <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-2xl w-fit'>
                    <span className='w-60 h-28 rounded-lg bg-gray-200'>
                        <img className='w-full h-full' alt='' src={news2}></img>
                    </span>
                    <span className=' text-sm font-medium w-56 h-12 leading-5'>Temple secondary school hosted group 4 of the 2018 akintola williams national youth debate</span>
                    <span className='flex gap-1 mt-3'>
                        <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>By Admin on Nov 23rd, 2020</span>
                        <span className='text-xs pl-1 opacity-40'>1 day ago</span>
                    </span>
                    <span className='text-xs font-normal w-56'>Lorem ipsum dolor, sit amet conse ctetur adipisicing elit. Consequuntur....</span>
                    <span className='text-sm font-normal text-[#061c56]'>Read More</span>
                </span>
                <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-2xl w-fit'>
                    <span className='w-60 h-28 rounded-lg bg-gray-200'></span>
                        <span className=' text-sm font-medium w-56 h-12 leading-5'>Temple secondary school hosted group 4 of the 2018 akintola williams national youth debate</span>
                        <span className='flex gap-1 mt-3'>
                            <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>By Admin on Nov 23rd, 2020</span>
                            <span className='text-xs pl-1 opacity-40'>1 day ago</span>
                        </span>
                        <span className='text-xs font-normal w-56'>Lorem ipsum dolor, sit amet conse ctetur adipisicing elit. Consequuntur....</span>
                    <span className='text-sm font-normal text-[#061c56]'>Read More</span>
                </span>
                <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-2xl w-fit'>
                    <span className='w-60 h-28 rounded-lg bg-gray-200'></span>
                        <span className=' text-sm font-medium w-56 h-12 leading-5'>Temple secondary school hosted group 4 of the 2018 akintola williams national youth debate</span>
                        <span className='flex gap-1 mt-3'>
                            <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>By Admin on Nov 23rd, 2020</span>
                            <span className='text-xs pl-1 opacity-40'>1 day ago</span>
                        </span>
                        <span className='text-xs font-normal w-56'>Lorem ipsum dolor, sit amet conse ctetur adipisicing elit. Consequuntur....</span>
                    <span className='text-sm font-normal text-[#061c56]'>Read More</span>
                </span>
                <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-2xl w-fit'>
                    <span className='w-60 h-28 rounded-lg bg-gray-200'></span>
                        <span className=' text-sm font-medium w-56 h-12 leading-5'>Temple secondary school hosted group 4 of the 2018 akintola williams national youth debate</span>
                        <span className='flex gap-1 mt-3'>
                            <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>By Admin on Nov 23rd, 2020</span>
                            <span className='text-xs pl-1 opacity-40'>1 day ago</span>
                        </span>
                        <span className='text-xs font-normal w-56'>Lorem ipsum dolor, sit amet conse ctetur adipisicing elit. Consequuntur....</span>
                    <span className='text-sm font-normal text-[#061c56]'>Read More</span>
                </span>
                <span className='px-6 py-5 flex flex-col gap-2 hover:shadow-2xl w-fit'>
                    <span className='w-60 h-28 rounded-lg bg-gray-200'></span>
                        <span className=' text-sm font-medium w-56 h-12 leading-5'>Temple secondary school hosted group 4 of the 2018 akintola williams national youth debate</span>
                        <span className='flex gap-1 mt-3'>
                            <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>By Admin on Nov 23rd, 2020</span>
                            <span className='text-xs pl-1 opacity-40'>1 day ago</span>
                        </span>
                        <span className='text-xs font-normal w-56'>Lorem ipsum dolor, sit amet conse ctetur adipisicing elit. Consequuntur....</span>
                    <span className='text-sm font-normal text-[#061c56]'>Read More</span>
                </span>
            </div>
        </div>
        <div className='flex flex-col py-12 gap-8 px-24'>
            <span className='flex gap-[30rem] items-center justify-center'>
                <span className='flex flex-col gap-2'>
                    <span className='text-3xl font-semibold text-[#061c56]'>Event List</span>
                    <span className='text-sm opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a</span>
                </span>
                <span className='px-4 py-2 bg-[#061c56] text-[#d9bc6d] rounded text- w-fit h-fit'>Newer</span>
            </span>
            <div className='flex flex-col px-24 gap-8'>
                <span className='flex gap-6'>
                    <span className='flex flex-col'>
                        <span className='w-20 h-20 bg-orange-300/70 rounded-md'></span>
                        <span className='w-20 h-20 bg-gray-700/70 rounded-b-md'></span>
                    </span>
                    <span className='w-64 h-40 rounded-lg bg-gray-200'></span>
                    <span className='flex flex-col gap-1 pt-4'>
                        <span className=' text-sm font-medium'>Holiday Trip With Elementry Class</span>
                        <span className='flex gap-1'>
                            <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>By Admin on Nov 23rd, 2020</span>
                        <   span className='text-xs pl-1 opacity-40'>1 day ago</span>
                        </span>
                        <span className='text-xs font-normal w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel sint explicabo laboriosam id nesciunt recusandae? Reprehenderit molestias accusamus laboriosam dolore officia recusandae est quod nihil, doloremque, dolores, reiciendis quo.</span>
                    </span>
                </span>
                <span className='flex gap-6'>
                    <span className='flex flex-col'>
                        <span className='w-20 h-20 bg-pink rounded-md'></span>
                        <span className='w-20 h-20 bg-gray-700/70 rounded-b-md'></span>
                    </span>
                    <span className='w-64 h-40 rounded-lg bg-gray-200'></span>
                    <span className='flex flex-col gap-1 pt-4'>
                        <span className=' text-sm font-medium'>Holiday Trip With Elementry Class</span>
                        <span className='flex gap-1'>
                            <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>By Admin on Nov 23rd, 2020</span>
                        <   span className='text-xs pl-1 opacity-40'>1 day ago</span>
                        </span>
                        <span className='text-xs font-normal w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel sint explicabo laboriosam id nesciunt recusandae? Reprehenderit molestias accusamus laboriosam dolore officia recusandae est quod nihil, doloremque, dolores, reiciendis quo.</span>
                    </span>
                </span>
                <span className='flex gap-6'>
                    <span className='flex flex-col'>
                        <span className='w-20 h-20 bg-blue-300/70 rounded-md'></span>
                        <span className='w-20 h-20 bg-gray-700/70 rounded-b-md'></span>
                    </span>
                    <span className='w-64 h-40 rounded-lg bg-gray-200'></span>
                    <span className='flex flex-col gap-1 pt-4'>
                        <span className=' text-sm font-medium'>Holiday Trip With Elementry Class</span>
                        <span className='flex gap-1'>
                            <span className='text-xs border-r border-black pr-1 h-4 opacity-40'>By Admin on Nov 23rd, 2020</span>
                        <   span className='text-xs pl-1 opacity-40'>1 day ago</span>
                        </span>
                        <span className='text-xs font-normal w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel sint explicabo laboriosam id nesciunt recusandae? Reprehenderit molestias accusamus laboriosam dolore officia recusandae est quod nihil, doloremque, dolores, reiciendis quo.</span>
                    </span>
                </span>
                
            </div>
        </div>
        <NewCalendar />
    </div>
  )
}

export default NewsContent;