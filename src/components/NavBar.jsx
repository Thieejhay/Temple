import React, {useState}  from 'react';
import {FaEnvelope} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi';
import Logo from '../assets/Templelogo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [showSectionsDropdown, setShowSectionsDropdown] = useState(false);
    const [showSectionsDropdown1, setShowSectionsDropdown1] = useState(false);
    const [showSectionsDropdown2, setShowSectionsDropdown2] = useState(false);

  return (
    <div className='flex flex-col text-white w-screen'>
        <div className='flex items-center justify-between bg-[#061c56] py-4 px-4 lg:px-12'>
            <span className='flex gap-3 items-center'>
                <img className='w-24 h-24' src={Logo} alt=''></img>
                <span className='lg:text-4xl text-xl font-semibold lg:tracking-wider'>Temple School</span>
            </span>
            <a href='https://templesch.edves.net/login/' rel="noreferrer" target='_blank' ><span className='h-fit py-1 w-24 text-center text-[#335672] bg-[#f6bc75] uppercase text-[0.5rem] flex lg:hidden'>parents/students portal</span></a>
            <span className='lg:flex hidden lg:gap-3 items-center'>
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
        <span className='flex lg:hidden gap-3 items-center px-2 py-2 bg-[#061c56]/80'>
                <span className='flex items-center gap-1'>
                    <BiPhoneCall className='w-3 h-3'/>
                    <span className='text-xs font-medium'>+234 809 520 0447</span>
                </span>
                <span className='flex items-center gap-1'>
                    <FaEnvelope />
                    <span className='text-xs font-medium'>info@templeschoolng.com</span>
                </span>
            </span>
        <div className='lg:flex hidden bg-[#061c56]/80 py-2 px-12'>
            <span className='flex gap-10'>
                <span className='relative'onMouseEnter={() => setShowSectionsDropdown2(true)} onMouseLeave={() => setShowSectionsDropdown2(false)}>
                    <Link to='/'><span className='text-sm font-semibold uppercase'>Home</span></Link>
                    {showSectionsDropdown2 && (
                        <span className=' flex flex-col absolute mt-2 w-40 -left-10 rounded-sm shadow-lg bg-[#061c56]/90
                         z-50'>
                            <HashLink to='#calendar' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Calendar</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='#news' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white' >
                                <span >News</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='#gallery' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Gallery</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='#acc' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Accreditation & Affiliates</span>
                            </HashLink>
                        </span>
                    )}
                </span>
                <span className='relative'onMouseEnter={() => setShowSectionsDropdown1(true)} onMouseLeave={() => setShowSectionsDropdown1(false)}>
                    <Link to='/about-us'><span className='text-sm font-semibold uppercase'>About us</span></Link>
                    {showSectionsDropdown1 && (
                        <span className=' flex flex-col absolute mt-2 w-40 -left-10 rounded-sm shadow-lg bg-[#061c56]/90
                        z-50'>
                            <HashLink to='#history' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span>Our History</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='#vision' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white' >
                                <span >Our Vision</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='#school' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Our Schools</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='#team' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Management team</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='#accc' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Accreditation & Affiliates</span>
                            </HashLink>
                        </span>
                    )}
                </span>
                <span className='relative'onMouseEnter={() => setShowSectionsDropdown(true)}
                onMouseLeave={() => setShowSectionsDropdown(false)}>
                    <Link to='/section'><span className='text-sm font-semibold uppercase'>sections</span></Link>
                    {showSectionsDropdown && (
                        <span className=' flex flex-col absolute mt-2 w-40 -left-10 rounded-sm shadow-lg bg-[#061c56]/90
                     z-50'>
                        <Link to='/early-years' className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'><span>
                            Early Years and Foundation Stage
                        </span></Link>
                        <hr className='w-full h-1 text-white opacity-50'></hr>
                        <Link to='/primary' className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'><span >
                            Primary School
                        </span></Link>
                        <hr className='w-full h-1 text-white opacity-50'></hr>
                        <Link to='/secondary' className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'><span >
                            Secondary School
                        </span></Link>
                        <hr className='w-full h-1 text-white opacity-50'></hr>
                        <Link to='/college' className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'><span >
                            College
                        </span></Link>
                        </span>
                    )}
                </span>
                <Link to='/programs'><span className='text-sm font-semibold uppercase'>programs</span></Link>
                <Link to='/eld'><span className='text-sm font-semibold uppercase'>eld</span></Link>
                <Link to='/news&events'><span className='text-sm font-semibold uppercase'>news & events</span></Link>
                <Link to='/contact-us'><span className='text-sm font-semibold uppercase'>Contact us</span></Link>
            </span>
        </div>
    </div>
  )
}

export default NavBar;