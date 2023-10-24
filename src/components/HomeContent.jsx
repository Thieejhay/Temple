import React from 'react'
import HomeNews from './HomeNews';
import HomeGallery from './HomeGallery';
import HomeAlumna from './HomeAlumna';
import Founder from '../assets/Founder.png';
import Logos from './Logos';
import Medal from '../assets/Medal.png';
import Award from '../assets/Awarding.png';
import Empower from '../assets/Empower.png';
import Engage from '../assets/Engage.png';
import Graduation from '../assets/Graduation.png'
import HomeBanner from './HomeBanner';
import HomeCalendar from './HomeCalendar';

const HomeContent = () => {
  return (
    <div className='flex flex-col w-screen overflow-hidden'>
        <div className='flex h-[31rem]'>
            <HomeBanner />
        </div>
        <div className='flex px-40 pt-12 pb-20 w-screen'>
            <div className='flex flex-col w-[50%] pb-6'>
                <span className='text-sm font-medium text-[#061c56] mb-4'>Message From The Founding Director</span>
                <span className='flex flex-col mb-4 gap-1'>
                    <span className='text-4xl uppercase font-bold'>Charting a Legacy </span>
                    <span className='text-4xl uppercase font-bold'>of Excellence.</span>
                </span>
                <span className='mt-1 text-xs leading-5 opacity-95 w-[96%]'>
                Over the past 18 years, we have grown and flourished, guided by a vision of providing exceptional education that nurtures young minds and shapes future leaders.
                </span>
                <span className='mt-1 text-xs leading-5 opacity-95 w-[96%]'>
                At Temple School, we are not just an educational institution; we are a close-knit community where every individual is cherished, respected, and encouraged to shine. Our unwavering commitment to academic excellence, coupled with a rich tapestry of co-curricular activities, helps students discover their passions and talents while fostering holistic development.
                </span>
                <span className='mt-1 text-xs leading-5 opacity-95 w-[96%]'>
                As we embark on this journey together, let us continue to uphold the values that define us - integrity, empathy, and a thirst for knowledge. Our dedicated faculty and staff are here to support and inspire every student, fostering an environment where curiosity thrives and dreams are realized.
                </span>
                <span className='mt-1 text-xs leading-5 opacity-95 w-[96%]'>
                I am excited to welcome you to Temple School, where every day is an opportunity to learn, grow, and make cherished memories. Here's to a future filled with success and boundless possibilities.
                </span>
                <span className='text-2xl font-semibold mt-2'>Mrs Shirley Okharedia</span>
            </div>
            <div className='flex relative w-[50%]'>
                <span className='w-72 h-96 bg-gray-200 rounded-md bottom-8 left-32 absolute'></span>
                <span className='w-80 h-96 bg-gray-800 rounded-md bottom-16 left-40 absolute'>
                    <img className='w-full h-full' alt='' src={Founder}></img>
                </span>
            </div>
        </div>
        <div className='flex flex-col pb-12 justify-center items-center'>
            <span className='text-xl font-medium uppercase'>Empowering Tomorrow's Leaders: Nuturing the promise within</span>
            <span className='flex flex-col mt-5 items-center gap-1'>
                <span className='text-sm font-normal opacity-60 text-center px-40'>We believe in nurturing the potential within every young mind, guiding them towards a future brimming with possibilities. With faith in our students' potential and a dedication to holistic growth, we embark on a journey of learning that goes beyond textbooks, fostering character, compassion, and curiosity along the way.</span>
                
            </span>
            <span className='flex gap-8 justify-center mt-12'>
                <span className='flex flex-col gap-3 text-center items-center w-60'>
                    <img className='w-[5.5rem] h-24' src={Empower} alt=''></img>
                    <span className='text-xl font-medium opacity-70 tracking-wider'>Empower</span>
                    <span className='text-xs opacity-60 leading-5'></span>
                </span>
                <span className='flex flex-col gap-3 text-center items-center w-60'>
                <img className='w-[5.5rem] h-24' src={Engage} alt=''></img>
                    <span className='text-xl font-medium opacity-70 tracking-wider'>Engage</span>
                    <span className='text-xs opacity-60 leading-5'></span>
                </span>
                <span className='flex flex-col gap-3 text-center items-center w-60'>
                    <img className='w-[5.5rem] h-24' src={Graduation} alt=''></img>
                    <span className='text-xl font-medium opacity-70 tracking-wider'>Graduation</span>
                </span>
                <span className='flex flex-col gap-3 text-center items-center w-60'>
                <img className='w-[5.5rem] h-24' src={Award} alt=''></img>
                    <span className='text-xl font-medium opacity-70 tracking-wider'>Awarding</span>
                </span>
                
            </span>
        </div>
        <div className='flex flex-col bg-[#061c56] py-1 px-24 w-screen h-40 gap-2'>
            <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
            <span className='flex justify-between items-center px-6'>
                <span className='flex gap-6 items-center'>
                    <span className='w-32 h-32 rounded-full '>
                        <img src={Medal} alt='' className='w-full h-full'></img>
                    </span>
                    <span className='flex flex-col text-[#f6bc75]'>
                        <span className='text-3xl font-medium tracking-wider'>Our Students Are Talented,</span>
                        <span className='text-2xl font-normal tracking-wider'>passionate, hard-working and full of ideas.</span>
                    </span>
                </span>
                <div className='px-6 py-3 text-xs w-fit h-fit  font-medium text-white bg-[#f6bc75] rounded-md drop-shadow-md'>Apply Now</div>
            </span>
            <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
        </div>
        <div className='flex flex-col pt-6 w-screen gap-6'>
            <span className='flex flex-col gap-2 text-center'>
                <span className='uppercase text-2xl font-semibold'>academic calendar</span>
                <span className='text-base font-normal text-center px-60'>Our students are talented, hard working and full of good ideas. We encourage and empower them to their ideas to life. Hands-on opportunities are what we're all about.</span>
            </span>
            <HomeCalendar />
        </div>
        <div className='flex flex-col bg-[#061c56] py-1 px-24 w-screen h-40 gap-2 my-6'>
            <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
            <span className='flex justify-center px-6 text-[#f6bc75] text-2xl uppercase tracking-wider font-medium'>Our teacher and students achievements</span>
            <span className='flex gap-80 my-3 justify-center'>
                <span className='flex flex-col gap-0 items-center'>
                    <span className='text-5xl font-medium text-white leading-10'>2004</span>
                    <span className='text-sm font-normal text-[#d9bc6d]'>Founded</span>
                </span>
                <span className='flex flex-col gap-0 items-center'>
                    <span className='text-5xl font-medium text-white leading-10'>934</span>
                    <span className='text-sm font-normal text-[#d9bc6d]'>Certified Teachers</span>
                </span>
                <span className='flex flex-col gap-0 items-center'>
                    <span className='text-5xl font-medium text-white leading-10'>6000</span>
                    <span className='text-sm font-normal text-[#d9bc6d]'>Graduated Students</span>
                </span>
            </span>
            <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75] mt-1'></hr>
        </div>
        <HomeNews />
        <HomeGallery />
        <HomeAlumna />
        <div className='flex flex-col gap-4 justify-center items-center py-8 px-32 bg-[#cddfec]/80'>
            <span className='uppercase text-4xl font-medium'>accreditation & affiliates</span>
            <span className='text-2xl font-normal text-center text-[#061c56]'>As part of our efforts to give your child the best education possible, Temple School is affiliated with a number of local and international educational organizations, all with an aim to continuously improving the quality of our education delivery.</span>
        </div>
        <Logos />
        <div className='flex py-12 justify-center'>
            <span className=' h-48 w-20 bg-[#061c56]'></span>
            <span className='flex px-8 gap-10 items-center justify-center bg-[#061c56]/80'>
                <span className='text-white text-base font-normal w-[31rem]'>Temple School is one of the best schools in Lagos, Nigeria. Our newsletters are full of interesting information about what's going on in school and includes useful dates for your diary.</span>
                <span className='flex'>
                    <input className=" w-72 h-10 border-2 border-white rounded px-3 bg-transparent text-white outline-none" placeholder="Enter email address..."></input>
                    <input className= 'px-6 flex items-center rounded text-[#061c56] uppercase text-sm font-medium bg-[#f6bc75]' type='submit' value='subscribe'></input>
                </span>
            </span>
        </div>
    </div>
  )
}

export default HomeContent;