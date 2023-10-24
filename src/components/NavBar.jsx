import React from 'react';
import {FaEnvelope} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi';
import Logo from '../assets/Templelogo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex flex-col text-white'>
        <div className='flex justify-between bg-[#061c56] py-4 px-12'>
            <span className='flex gap-3 items-center'>
                <img className='w-16 h-16' src={Logo} alt=''></img>
                <span className='text-3xl font-semibold tracking-wider'>Temple School</span>
            </span>
            <span className='flex gap-3 items-center'>
                <span className='flex items-center gap-1'>
                    <BiPhoneCall className='w-3 h-3'/>
                    <span className='text-xs font-medium'>+234 809 520 0447</span>
                </span>
                <span className='flex items-center gap-1'>
                    <FaEnvelope />
                    <span className='text-xs font-medium'>info@templeschoolng.com</span>
                </span>
                <a href='https://templesch.edves.net/login/' rel="noreferrer" target='_blank' ><span className='px-3 py-2 text-[#335672] bg-[#f6bc75] uppercase text-xs'>parents/students portal</span></a>
            </span>
        </div>
        <div className='flex bg-[#061c56]/80 py-2 px-12'>
            <span className='flex gap-10'>
                <Link to='/'><span className='text-sm font-semibold uppercase'>Home</span></Link>
                <Link to='/about-us'><span className='text-sm font-semibold uppercase'>About us</span></Link>
                <span className='group relative'>
                    <Link to='/section'><span className='text-sm font-semibold uppercase'>section</span></Link>
                    <span className=' flex flex-col absolute mt-2 w-40 -left-10 rounded-sm shadow-lg bg-[#061c56]/90
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <Link to='/early-years' className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'><span>
                            Early-years
                        </span></Link>
                        <Link to='/primary' className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'><span >
                            Primary school
                        </span></Link>
                        <Link to='/secondary' className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'><span >
                            Secondary School
                        </span></Link>
                        <Link to='/college' className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'><span >
                            College
                        </span></Link>
                    </span>
                </span>
                <Link to='/programs'><span className='text-sm font-semibold uppercase'>programs</span></Link>
                <Link to=''><span className='text-sm font-semibold uppercase'>admissions</span></Link>
                <Link to='/news&events'><span className='text-sm font-semibold uppercase'>news & events</span></Link>
                <Link to='/contact-us'><span className='text-sm font-semibold uppercase'>Contact us</span></Link>
            </span>
        </div>
    </div>
  )
}

export default NavBar;