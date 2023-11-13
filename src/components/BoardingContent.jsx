import React from 'react';
import Banner from '../assets/dd.png';
import HomeAlumna from './HomeAlumna';

const BoardingContent = () => {
  return (
    <div className='flex flex-col w-screen'>
        <span className='flex justify-center items-center relative h-[23rem] bg-black'>
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10'></img>
            <span className='text-4xl opacity-90 tracking-wide font-semibold absolute top-36 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>Boarding</span>
        </span>
        <span className='flex flex-col gap-10 py-3 mb-8'>
            <span className='flex px-36'>
                <img className='w-[23rem] h-[25rem] object-right' src='' alt=''></img>
                <span className='flex flex-col gap-8 pl-12 pt-8 pb-4 bg-[#f6bc75] w-full text-[#061c56]'>
                    <span className=' text-5xl font-bold w-[40rem]'>Welcome Message from the Head of Boarding Overview of the Boarding Program</span>
                    <span className='text-base w-[42rem] space-y-3'>
                        <p>Justo nec ultrices dui sapien eget mi proin sed. Euismod in pellentesque massa placerat duis. Tellus in hac habitasse platea dictumst vestibulum rhoncus. In tellus integer feugiat scelerisque varius morbi. Sit amet aliquam id diam maecenas ultricies. Ipsum faucibus vitae aliquet nec. Purus faucibus ornare suspendisse sed nisi. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.</p>
                    </span>
                    {/* <span className='flex flex-col gap-1 w-[42rem] items-end italic'>
                        <span className='text-lg '>Mrs. Oseri Oweye</span>
                        <span className='text-lg '>Head of ELD</span>
                    </span> */}
                </span>
            </span>
        </span>
        <span className='flex px-36 items-center justify-between mb-4'>
            <span className='flex flex-col gap-2'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-xl font-medium'>Our Boarding Houses</span>
                <span className='text-lg font-light opacity-80 w-80 leading-5'>House Names and Descriptions Facilities and Amenities in Each House</span>
            </span>
            <span className='flex gap-3'>
                <span className='w-80 h-40 bg-gray-200 rounded-lg'></span>
                <span className='w-80 h-40 bg-gray-200 rounded-lg'></span>
            </span>
        </span>
        <span className='flex flex-col px-36 gap-4 mb-8'>
            <span className='flex flex-col gap-2'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-xl font-medium'>Daily Routine:</span>
                <span className='text-lg font-light opacity-80 w-80 leading-5'>Schedule for Boarding Students Morning Wake-up and Evening Bedtime Routine Study Sessions and Free Time</span>
            </span>
            <span className='flex gap-3'>
                <span className='w-full h-32 bg-gray-200 rounded-lg'></span>
            </span>
        </span>
        <span className='flex px-36 h-80'>
            <span className='bg-gray-200 w-[50%]'></span>
            <span className='bg-gray-100 w-[50%] flex flex-col gap-2 pl-20 justify-center'>
                <span className='text-xl font-medium'>Nutritious Dining:</span>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-lg font-light opacity-80 w-[22rem] leading-5'>Overview of Boarding Dining Facilities Sample Menu and Dietary Accommodations</span>
            </span>
        </span>
        <span className='flex px-36 h-80'>
            <span className='bg-gray-100 w-[50%] flex flex-col gap-2 pl-20 justify-center'>
                <span className='text-xl font-medium'>Academic Support</span>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-lg font-light opacity-80 w-[22rem] leading-5'>Boarding Tutors and Support Staff Study Groups and Resources Available</span>
            </span>
            <span className='bg-gray-200 w-[50%]'></span>
        </span>
        <span className='flex px-36 items-center justify-between mt-8 mb-4'>
            <span className='flex flex-col gap-2'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-xl font-medium'>Our Boarding Houses</span>
                <span className='text-lg font-light opacity-80 w-80 leading-5'>House Names and Descriptions Facilities and Amenities in Each House</span>
            </span>
            <span className='flex gap-3'>
                <span className='w-80 h-40 bg-gray-200 rounded-lg'></span>
                <span className='w-80 h-40 bg-gray-200 rounded-lg'></span>
            </span>
        </span>
        <span className='flex flex-col px-36 gap-4 mb-6'>
            <span className='flex flex-col gap-2'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-xl font-medium'>Daily Routine:</span>
                <span className='text-lg font-light opacity-80 w-80 leading-5'>Schedule for Boarding Students Morning Wake-up and Evening Bedtime Routine Study Sessions and Free Time</span>
            </span>
            <span className='flex gap-3'>
                <span className='w-full h-32 bg-gray-200 rounded-lg'></span>
            </span>
        </span>
        <HomeAlumna />
    </div>
  )
}

export default BoardingContent;