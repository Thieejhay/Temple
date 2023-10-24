import React from 'react'
import NovCalendar from './calendar/NovCalendar'
import DecCalendar from './calendar/DecCalendar'
import JanCalendar from './calendar/JanCalendar'
import FebCalendar from './calendar/FebCalendar'

const NewCalendar = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 w-screen bg-[#fab14d]/40 py-8'>
        <span className='flex flex-col gap mb-5 text-center'>
            <span className='uppercase text-3xl font-semibold text-[#061c56]'>academic calendar</span>
            <span className='text-2xl font-medium text-[#061c56]'>2023/2024</span>
        </span>
        <div className='flex gap-6'>
            <span className='flex flex-col gap-2'>
                <span className='text-xl font-semibold text-[#061c56]'>November</span>
                <NovCalendar />
            </span>
            <span className='flex flex-col gap-2'>
                <span className='text-xl font-semibold text-[#061c56]'>December</span>
                <DecCalendar />
            </span>
        </div>
        <div className='flex gap-6'>
            <span className='flex flex-col gap-2'>
                <span className='text-xl font-semibold text-[#061c56]'>January</span>
                <JanCalendar />
            </span>
            <span className='flex flex-col gap-2'>
                <span className='text-xl font-semibold text-[#061c56]'>Febuary</span>
                <FebCalendar />
            </span>
        </div>
    </div>
  )
}

export default NewCalendar