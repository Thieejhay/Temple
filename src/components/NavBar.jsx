import React, {useState, useEffect, useRef}  from 'react';
import {FaEnvelope} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi';
import Logo from '../assets/Templelogo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    // const [showHomeDropdown, setShowHomeDropdown] = useState(false);
    const [showSectionsDropdown, setShowSectionsDropdown] = useState(false);
    const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);
    const dropdownRef = useRef(null);
    let hideTimeout;

    const handleMouseEnter = (dropdown) => {
        clearTimeout(hideTimeout);
        switch (dropdown) {
          case 'sections':
            setShowSectionsDropdown(true);
            // setShowHomeDropdown(false);
            setShowAboutUsDropdown(false);
            break;
        //   case 'home':
        //     setShowHomeDropdown(true);
        //     setShowSectionsDropdown(false);
        //     setShowAboutUsDropdown(false);
        //     break;
          case 'aboutUs':
            setShowAboutUsDropdown(true);
            setShowSectionsDropdown(false);
            // setShowHomeDropdown(false);
            break;
          default:
            break;
        }
      };
    
      const handleMouseLeave = () => {
        hideTimeout = setTimeout(() => {
          setShowSectionsDropdown(false);
        //   setShowHomeDropdown(false);
          setShowAboutUsDropdown(false);
        }, 300);
      };
    
      const handleDropdownMouseEnter = () => {
        clearTimeout(hideTimeout);
      };
    
      const handleDropdownMouseLeave = () => {
        hideTimeout = setTimeout(() => {
          setShowSectionsDropdown(false);
        //   setShowHomeDropdown(false);
          setShowAboutUsDropdown(false);
        }, 300);
      };
    
    
      
      useEffect(() => {
        return () => {
          clearTimeout(hideTimeout);
        };
      }, [hideTimeout]);




  return (
    <div className='flex flex-col text-white w-screen'>
        <div className='flex items-center justify-between bg-[#061c56] py-2 px-2 lg:px-12'>
            <Link to='/'>
                <span className='flex lg:gap-3 gap-1 items-center'>
                    <img className='lg:w-24 lg:h-24 w-16 h-16' src={Logo} alt=''></img>
                    <span className='lg:text-4xl text-2xl font-semibold lg:tracking-wider'>Temple School</span>
                </span>
            </Link>
            <a href='https://templesch.edves.net/login/' rel="noreferrer" target='_blank' ><span className='h-fit py-1 w-24 text-center text-[#335672] bg-[#f6bc75] rounded hover:text-white uppercase text-[0.5rem] flex lg:hidden'>parents/students portal</span></a>
            <span className='lg:flex hidden lg:gap-3 items-center'>
                <span className='flex items-center gap-1'>
                    <BiPhoneCall className='w-3 h-3'/>
                    <span className='text-xs font-medium'>+234 809 520 0447</span>
                </span>
                <span className='flex items-center gap-1'>
                    <FaEnvelope />
                    <span className='text-xs font-medium'>info@templeschoolng.com</span>
                </span>
                <a href='https://templesch.edves.net/login/' rel="noreferrer" target='_blank' ><span className='px-3 py-2 text-[#335672] bg-[#f6bc75] rounded hover:text-white uppercase text-xs'>parents/students portal</span></a>
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
            <span className='flex gap-7'>
                <span className='relative'>
                    <Link to='/'><span className='text-sm font-semibold uppercase hover:text-[#f6bc75]'>Home</span></Link>
                    {/* {showHomeDropdown && (
                        <span className=' flex flex-col absolute mt-2 w-40 -left-10 rounded-sm shadow-lg bg-[#061c56]/90
                         z-50' ref={dropdownRef} onMouseEnter={handleDropdownMouseEnter}
                         onMouseLeave={handleDropdownMouseLeave}>
                            <HashLink to='#director' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Founding Director</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
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
                    )} */}
                </span>
                <span className='relative' onMouseEnter={() => handleMouseEnter('aboutUs')} onMouseLeave={handleMouseLeave}>
                    <Link to='/about-us'><span className='text-sm font-semibold uppercase hover:text-[#f6bc75]'>About us</span></Link>
                    {showAboutUsDropdown && (
                        <span className=' flex flex-col absolute mt-2 w-40 -left-10 rounded-sm shadow-lg bg-[#061c56]/90
                        z-50' ref={dropdownRef} onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}>
                            <HashLink to='/about-us#history' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span>Our History</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='/about-us#vision' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white' >
                                <span >Our Vision</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='/about-us#team' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Management team</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='/about-us#accc' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Accreditation & Affiliates</span>
                            </HashLink>
                            <hr className='w-full h-1 text-white opacity-50'></hr>
                            <HashLink to='/about-us#policy' smooth className='text-base p-2 rounded text-white hover:text-[#061c56] hover:bg-white'>
                                <span >Temple policy</span>
                            </HashLink>
                        </span>
                    )}
                </span>
                <span className='relative' onMouseEnter={() => handleMouseEnter('sections')} onMouseLeave={handleMouseLeave}>
                    <Link to='/section'><span className='text-sm font-semibold uppercase hover:text-[#f6bc75] '>sections</span></Link>
                    {showSectionsDropdown && (
                        <span className=' flex flex-col absolute mt-2 w-40 -left-10 rounded-sm shadow-lg bg-[#061c56]/90
                     z-50' ref={dropdownRef} onMouseEnter={handleDropdownMouseEnter}
                     onMouseLeave={handleDropdownMouseLeave}>
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
                <Link to='/programs'><span className='text-sm font-semibold uppercase hover:text-[#f6bc75]'>programs</span></Link>
                <Link to='/eld'><span className='text-sm font-semibold uppercase hover:text-[#f6bc75]'>eld</span></Link>
                <Link to='/boarding'><span className='text-sm font-semibold uppercase hover:text-[#f6bc75]'>Boarding</span></Link>
                <Link to='/news&events'><span className='text-sm font-semibold uppercase hover:text-[#f6bc75]'>news & events</span></Link>
                <Link to='/contact-us'><span className='text-sm font-semibold uppercase hover:text-[#f6bc75]'>Contact us</span></Link>
            </span>
        </div>
    </div>
  )
}

export default NavBar;