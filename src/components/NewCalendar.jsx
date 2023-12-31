import React, { useState } from 'react'
import NovCalendar from './calendar/NovCalendar'
import DecCalendar from './calendar/DecCalendar'
import JanCalendar from './calendar/JanCalendar'
import FebCalendar from './calendar/FebCalendar'
import OctCalendar from './calendar/OctCalendar'
import MarCalendar from './calendar/MarCalendar'
import AprCalendar from './calendar/AprCalendar'
import MayCalendar from './calendar/MayCalender'
import JunCalendar from './calendar/JunCalendar'
import JulCalendar from './calendar/JulCalendar'

const NewCalendar = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
      };
  return (
    <div className='flex flex-col justify-center items-center lg:gap-6 gap-3 w-screen bg-[#f6bc75] lg:py-8 py-4'>
        <span className='flex flex-col gap lg:mb-5 text-center'>
            <span className='uppercase lg:text-3xl text-xl font-semibold text-[#061c56]'>academic calendar</span>
            <span className='lg:text-2xl text-lg font-medium text-[#061c56]'>2023/2024</span>
        </span>
        <div className='flex lg:flex-row flex-col lg:gap-6 gap-3'>
            <span className='flex flex-col gap-2'>
                <span className='text-xl font-semibold text-[#061c56]'>October</span>
                <OctCalendar />
            </span>
            <span className='flex flex-col gap-2'>
                <span className='text-xl font-semibold text-[#061c56]'>November</span>
                <NovCalendar />
            </span>
        </div>
        {showMore &&
            <div className='flex flex-col gap-6'>
                <div className='flex lg:flex-row flex-col lg:gap-6 gap-3'>
                    <span className='flex flex-col gap-2'>
                        <span className='text-xl font-semibold text-[#061c56]'>December</span>
                        <DecCalendar />
                    </span>
                    <span className='flex flex-col gap-2'>
                        <span className='text-xl font-semibold text-[#061c56]'>January</span>
                        <JanCalendar />
                    </span>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-6 gap-3'>
                    <span className='flex flex-col gap-2'>
                        <span className='text-xl font-semibold text-[#061c56]'>Febuary</span>
                        <FebCalendar />
                    </span>
                    <span className='flex flex-col gap-2'>
                        <span className='text-xl font-semibold text-[#061c56]'>March</span>
                        <MarCalendar />
                    </span>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-6 gap-3'>
                    <span className='flex flex-col gap-2'>
                        <span className='text-xl font-semibold text-[#061c56]'>April</span>
                        <AprCalendar />
                    </span>
                    <span className='flex flex-col gap-2'>
                        <span className='text-xl font-semibold text-[#061c56]'>May</span>
                        <MayCalendar />
                    </span>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-6 gap-3'>
                    <span className='flex flex-col gap-2'>
                        <span className='text-xl font-semibold text-[#061c56]'>June</span>
                        <JunCalendar />
                    </span>
                    <span className='flex flex-col gap-2'>
                        <span className='text-xl font-semibold text-[#061c56]'>July</span>
                        <JulCalendar />
                    </span>
                </div>
            </div>
        }
        <button className='px-4 py-2 bg-[#061c56] text-[#d9bc6d] rounded text- w-fit h-fit' onClick={toggleShowMore}>{showMore ? 'Show Less' : 'Load More'}</button>
    </div>
  )
}

export default NewCalendar