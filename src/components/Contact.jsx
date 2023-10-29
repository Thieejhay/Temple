import React from 'react';
import Logo from '../assets/Templelogo.png';
import wave from '../assets/wave.png';
import wave2 from '../assets/wave2.png';
import { BiLogoFacebook, BiLogoYoutube, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';


const Contact = () => {
  return (
    <div className='flex flex-col'>
        
        <div className='flex justify-between py-8 px-24 bg-[#061c56] relative'>
            <span className='flex absolute right-0 top-0'><img src={wave} alt='' className='w-[60rem] h-[20rem] z-10'></img></span>
            <span className='flex absolute left-0 bottom-0'><img src={wave2} alt='' className='w-[70rem] h-[15rem] z-10'></img></span>
            <span className='flex flex-col gap-8 z-20'>
                <span className='flex flex-col gap-5'>
                    <span className='flex gap-2 items-center'>
                        <img className='w-10 h-10' src={Logo} alt=''></img>
                        <span className='text-3xl font-medium text-white'>Temple</span>
                    </span>
                    <span className='text-sm font-normal text-white w-[38rem]'>Temple School is situated on four sites: two in Lupeju, one in Ikeja, and the other off Allen Avenue. Ilupeju is home to the Early Years and Primary Schools, while the secondary school is in Ikeja and the college is off Allen Avenue. All four sites are within easy-to-access areas on mainland Lagos.</span>
                </span>
                <span className='flex flex-col gap-5'>
                    <span className='text-white text-2xl font-medium'>Follow Us</span>
                    <span className='flex gap-10'>
                    <a href='https://facebook.com/TempleSchool' rel="noreferrer" target='_blank'><BiLogoFacebook className='text-white w-6 h-6'/></a>
                    <a href='https://twitter.com/TempleSchools' rel="noreferrer" target='_blank'><BiLogoTwitter className='text-white w-6 h-6'/></a>
                    <a href='https://youtube.com/@TempleSchools' rel="noreferrer" target='_blank'><BiLogoYoutube className='text-white w-6 h-6'/></a>
                    <a href='https://instagram.com/templeschools' rel="noreferrer" target='_blank'><BiLogoInstagram className='text-white w-6 h-6'/></a>
                    </span>
                </span>
            </span>
            <span className='flex flex-col p-6 bg-white rounded-md z-20'>
                <span className='text-2xl font-medium flex justify-center mb-2'>Direct Contact us</span>
                <input className=" w-60 h-10 mb-2 border-b-2 border-black/10 px-3 bg-transparent text-[#061c56] outline-none" placeholder="Enter Name"></input>
                <input className=" w-60 h-10 mb-2 border-b-2 border-black/10 px-3 bg-transparent text-[#061c56] outline-none" placeholder="Enter email address..."></input>
                <input className=" w-60 h-10 mb-6 border-b-2 border-black/10 px-3 bg-transparent text-[#061c56] outline-none" placeholder="Message"></input>
                <span className='flex justify-center'><input className= 'px-6 py-3 w-fit rounded  bg-[#061c56]/40 uppercase text-sm font-medium text-white' type='submit' value='send message'></input></span>
            </span>
        </div>
        <div className='flex justify-between bg-[#061c56]/60 px-24 py-2 items-center'>
            <span className='text-base font-normal text-white'>Temple school website 2020 All Rights Reserved</span>
            <span className='flex gap-10'>
                <span className='text-xs font-normal text-white'>About</span>
                <span className='text-xs font-normal text-white'>FAQ</span>
                <span className='text-xs font-normal text-white'>Privacy Policy</span>
            </span>
            <span className='flex w-28'></span>
        </div>
    </div>
  )
}

export default Contact;