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
import wave2 from '../assets/Waveleft.png';
import wave from '../assets/Waveright.png';
import wave3 from '../assets/Circle.png';
import School1 from '../assets/school1.png';
import School2 from '../assets/school2.png';
import School3 from '../assets/school3.png';
import School4 from '../assets/school4.png';
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';


const HomeContent = () => {
  return (
    <div className='flex flex-col w-screen overflow-hidden'>
        <div className='flex lg:h-[32rem] h-[15rem]'>
            <HomeBanner />
        </div>
        <div className='flex lg:flex-row flex-col px-4 lg:px-32 lg:pt-16 pt-4 lg:pb-16 pb-5 w-screen relative' id='director'>
            <span className='lg:flex hidden absolute right-4 top-0'><img src={wave} alt='' className='w-[75rem] h-[35rem] z-10'></img></span>
            <span className='lg:flex hidden absolute left-0 top-0'><img src={wave2} alt='' className='w-[70rem] h-[35rem] z-10'></img></span>
            <span className='lg:flex hidden absolute right-40 top-44'><img src={wave3} alt='' className='w-[5rem] h-[4rem] z-30'></img></span>
            <span className='flex flex-col lg:w-[50%] lg:pb-6 z-20'>
                <span className='lg:text-xl text-base font-semibold text-[#061c56] lg:mb-2 opacity-90'>Message From The Founding Director</span>
                <span className='flex flex-col lg:mb-4 lg:gap-1 text-[#061c56]'>
                    <span className='lg:text-4xl text-2xl uppercase font-bold opacity-80'>Charting a Legacy </span>
                    <span className='lg:text-4xl text-2xl uppercase font-bold opacity-80'>of Excellence.</span>
                </span>
                <span className='mt-1 text-base leading-5 opacity-80 lg:w-[96%] text-justify'>
                Over the past 18 years, we have grown and flourished, guided by a vision of providing exceptional education that nurtures young minds and shapes future leaders.
                </span>
                <span className='mt-1 text-base leading-5 opacity-80 lg:w-[96%] text-justify'>
                At Temple School, we are not just an educational institution; we are a close-knit community where every individual is cherished, respected, and encouraged to shine. Our unwavering commitment to academic excellence, coupled with a rich tapestry of co-curricular activities, helps students discover their passions and talents while fostering holistic development.
                </span>
                <span className='mt-1 text-base leading-5 opacity-80 lg:w-[96%] text-justify'>
                As we embark on this journey together, let us continue to uphold the values that define us - integrity, empathy, and a thirst for knowledge. Our dedicated faculty and staff are here to support and inspire every student, fostering an environment where curiosity thrives and dreams are realized.
                </span>
                <span className='mt-1 text-base leading-5 opacity-80 lg:w-[96%] text-justify'>
                I am excited to welcome you to Temple School, where every day is an opportunity to learn, grow, and make cherished memories. Here's to a future filled with success and boundless possibilities.
                </span>
                <span className='lg:text-2xl text-xl font-semibold mt-2 opacity-80 hidden lg:flex'>Mrs Shirley Okharedia</span>
            </span>
            <span className='flex relative lg:w-[50%] mt-3 lg:mt-0 z-20'>
                <span className='w-80 h-[25rem] hidden lg:flex bg-[#061c56] rounded-md lg:bottom-12 left-1 lg:left-24 absolute'></span>
                <span className='lg:w-[21rem] w-full lg:h-[25rem] bg-gray-800 rounded-md lg:bottom-20 lg:left-32 lg:absolute'>
                    <img className='w-full h-full' alt='' src={Founder}></img>
                </span>
            </span>
            <span className='lg:text-2xl text-xl font-semibold opacity-80 lg:hidden  flex'>Mrs Shirley Okharedia</span>
        </div>
        <div className='flex flex-col lg:pb-12 pb-3 justify-center items-center '>
            <span className='lg:text-3xl font-semibold uppercase opacity-90 text-center px-4 text-[#061c56]'>Educating The Whole Child Because Every Child Is Worthy</span>
            <span className='flex flex-col items-center gap-1'>
                <span className='lg:text-sm text-xs font-normal opacity-80 text-center lg:px-40 px-4'>We believe in nurturing the potential within every young mind, guiding them towards a future brimming with possibilities. With faith in our students' potential and a dedication to holistic growth, we embark on a journey of learning that goes beyond textbooks, fostering character, compassion, and curiosity along the way.</span>
                
            </span>
            <span className='flex lg:gap-8 gap-6 justify-center lg:mt-12 mt-4'>
                <span className='flex flex-col gap-3 text-center items-center lg:w-60'>
                    <img className='lg:w-[5.5rem] w-16 h-16 lg:h-24' src={Empower} alt=''></img>
                    <span className='lg:text-xl text-sm font-medium opacity-70 lg:tracking-wider '>Empower</span>
                </span>
                <span className='flex flex-col gap-3 text-center items-center lg:w-60'>
                    <img className='lg:w-[5.5rem] w-16 h-16 lg:h-24' src={Engage} alt=''></img>
                    <span className='lg:text-xl text-sm font-medium opacity-70 lg:tracking-wider'>Engage</span>  
                </span>
                <span className='flex flex-col gap-3 text-center items-center lg:w-60'>
                    <img className='lg:w-[5.5rem] w-16 h-16 lg:h-24' src={Graduation} alt=''></img>
                    <span className='lg:text-xl text-sm font-medium opacity-70 lg:tracking-wider'>Graduation</span>
                </span>
                <span className='flex flex-col gap-3 text-center items-center lg:w-60'>
                    <img className='lg:w-[5.5rem] w-16 h-16 lg:h-24' src={Award} alt=''></img>
                    <span className='lg:text-xl text-sm font-medium opacity-70 lg:tracking-wider'>Awarding</span>
                </span>
                
            </span>
        </div>
        <div className='flex flex-col lg:gap-5 gap-3 lg:pt-4 py-5' id='school'>
            <span className='lg:text-3xl text-xl font-semibold text-center uppercase'>Our Schools</span>
            <div className='flex lg:flex-row flex-col lg:gap-10 gap-8 justify-center items-center'>
                <span className='flex flex-col h-[34rem]'>
                    <span className=' '>
                        <img src={School1} alt='' className='w-[17rem] h-60 rounded-t-lg'></img>
                    </span>
                    <span className='lg:p-4 p-3 w-[17rem] flex flex-col h-[19rem] justify-between '>
                        <span className='text-[#061c56] text-2xl font-semibold uppercase tracking-wider'>Early Years</span>
                        <span className='lg:text-xs text-sm font-normal opacity-80 mb-3'>The Children in Early Years and Foundation stage between 1 and 4 years.</span>
                        <span className='flex gap-2 items-center'>
                            <BsTelephone className='w-6 h-6 text-[#061c56]'/>
                            <span className='text-xs font-light opacity-80'>+234 708 556 1673</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <CiLocationOn className='w-6 h-6 text-[#061c56]'/>
                            <span className='text-xs font-light opacity-80'>213, Ikorodu Road, Illupeju, Lagos</span>
                        </span>
                        <Link to='/early-years'><span className='bg-[#f6bc75] hover:text-white flex justify-center py-4 text-sm font-normal border-2 rounded-lg text-[#061c56]'>Learn More</span></Link>
                    </span>
                </span>
                <span className='flex flex-col h-[34rem]'>
                    <span className=''>
                        <img src={School2} alt='' className='w-[17rem] h-60 rounded-t-lg'></img>
                    </span>
                    <span className='lg:p-4 p-3 w-[17rem] h-[19rem] justify-between flex flex-col'>
                        <span className='text-[#061c56] text-2xl font-semibold uppercase tracking-wider '>Primary</span>
                        <span className='lg:text-xs text-sm font-normal opacity-80 mb-1'>In our primary section, the curriculum is presented to them in an integrated manner, through cross-curricular themes</span>
                        <span className='flex gap-2 items-center'>
                            <BsTelephone className='w-6 h-6 text-[#061c56]'/>
                            <span className='text-xs font-light opacity-80'>+234 708 556 1673</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <CiLocationOn className='w-6 h-6 text-[#061c56]'/>
                            <span className='flex flex-col gap-0'>
                                <span className='text-xs font-light opacity-80'>1, Temple Drive,off Olusoji Iduwu st,</span>
                                <span className='text-xs font-light opacity-80'>Illupeju, Lagos</span>
                            </span>
                        </span>
                        <Link to='/primary '><span className='bg-[#f6bc75] hover:text-white flex justify-center py-4 text-sm font-normal border-2 rounded-lg text-[#061c56]'>Learn More</span></Link>
                    </span>
                </span>
                <span className='flex flex-col h-[34rem]'>
                    <span className=''>
                        <img src={School3} alt='' className='w-[17rem] h-60 rounded-t-lg'></img>
                    </span>
                    <span className='lg:p-4 p-3 w-[17rem] h-[19rem] justify-between flex flex-col'>
                        <span className='text-[#061c56] text-2xl font-semibold uppercase tracking-wider'>Secondary</span>
                        <span className='lg:text-xs text-sm font-normal opacity-80'>Builds upon the attention to detail that underscores the provision in Temple Early Years & Foundation Stage, and Temple Primary.</span>
                        <span className='flex gap-2 items-center'>
                            <BsTelephone className='w-6 h-6 text-[#061c56]'/>
                            <span className='flex flex-col gap-0'>
                                <span className='text-xs font-light opacity-80'>+234 708 556 1673</span>
                            </span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <CiLocationOn className='w-6 h-6 text-[#061c56]'/>
                            <span className='flex flex-col gap-0'>
                                <span className='text-xs font-light opacity-80'>4-6 Odegbami st, Off Aba Johnson </span>
                                <span className='text-xs font-light opacity-80'>st,Adeniyi Jones,Ikeja,Lagos.</span>
                            </span>
                        </span>
                        <Link to='/secondary'><span className='bg-[#f6bc75] hover:text-white flex justify-center py-4 text-sm font-normal border-2 rounded-lg text-[#061c56]'>Learn More</span></Link>
                    </span>
                </span>
                <span className='flex flex-col h-[34rem]'>
                    <span className=''>
                        <img src={School4} alt='' className='w-[17rem] h-60 rounded-t-lg'></img>
                    </span>
                    <span className='lg:p-4 p-3 w-[17rem] flex flex-col h-[19rem] justify-between'>
                        <span className='text-[#061c56] text-2xl font-semibold uppercase tracking-wider'>College</span>
                        <span className='lg:text-xs text-sm font-normal opacity-80 mb-1'>A private co-educational day and boarding sixth form that intensively and cohesively prepare post 16 year olds for entry into universities</span>
                        <span className='flex gap-2 items-center mb-1'>
                            <BsTelephone className='w-6 h-6 text-[#061c56]'/>
                            <span className='text-xs font-light opacity-80'>+234 708 556 1673</span>
                        </span>
                        <span className='flex gap-2 items-center mb-1'>
                            <CiLocationOn className='w-6 h-6 text-[#061c56]'/>
                            <span className='text-xs font-light opacity-80'>8 Oyediran close, Opebi, Ikeja, Lagos</span>
                        </span>
                        <Link to='/college'><span className='bg-[#f6bc75] hover:text-white flex justify-center py-4 text-sm font-normal border-2 rounded-lg text-[#061c56]'>Learn More</span></Link>
                    </span>
                </span>
            </div>
        </div>
        <div className='flex flex-col bg-[#061c56] py-1 lg:px-24 w-screen lg:h-40 gap-2'>
            <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
            <span className='flex lg:justify-between gap-2 items-center lg:px-6 px-4'>
                <span className='flex lg:gap-6 gap-2 items-center'>
                    <span className='lg:w-32 w-16 h-16 lg:h-32 rounded-full '>
                        <img src={Medal} alt='' className='w-full h-full'></img>
                    </span>
                    <span className='flex flex-col text-[#f6bc75] w-fit'>
                        <span className='lg:text-3xl text-sm font-medium lg:tracking-wider'>Our Students Are Talented,</span>
                        <span className='lg:text-2xl text-sm font-normal lg:tracking-wider'>passionate, hard-working and full of ideas.</span>
                        <a href='https://basic.edves.net/#tab2' rel="noreferrer" target='_blank'><span className='lg:hidden flex px-2 py-1 text-base w-fit h-fit font-semibold hover:text-white bg-[#f6bc75] rounded-md drop-shadow-md text-[#061c56] '>Apply Now</span></a>
                    </span>
                </span>
                <a href='https://basic.edves.net/#tab2' rel="noreferrer" target='_blank'><span className='lg:flex hidden lg:px-8 lg:py-5 px-1 py-1 text-xl w-fit h-fit font-semibold hover:text-white bg-[#f6bc75] rounded-md drop-shadow-md text-[#061c56] '>Apply Now</span></a>
            </span>
            <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
        </div>
        <div className='flex flex-col lg:pt-6 pb-3 pt-2 w-screen lg:gap-6 gap-2 bg-[#cddfec]/30' id='calendar'>
            <span className='flex flex-col gap text-center'>
                <span className='uppercase lg:text-3xl text-xl font-semibold opacity-90'>academic calendar</span>
                <span className='text-base font-normal text-center px-4 lg:px-60 opacity-80'>Our students are talented, hard working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we're all about.</span>
            </span>
            <HomeCalendar />
        </div>
        <div className='flex flex-col bg-[#061c56] py-1 lg:px-24 px-4 w-screen lg:h-40 lg:gap-2' >
            <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
            <span className='flex justify-center lg:px-6 text-[#f6bc75] text-center lg:text-2xl text-lg uppercase lg:tracking-wider font-medium'>Our teacher and students achievements</span>
            <span className='flex lg:gap-80 justify-between my-3 lg:justify-center items-center'>
                <span className='flex flex-col gap-0 items-center w-28'>
                    <span className='lg:text-5xl text-2xl font-medium text-white lg:leading-10'>2004</span>
                    <span className='text-sm font-normal text-[#d9bc6d]'>Founded</span>
                </span>
                <span className='flex flex-col gap-0 items-center w-28'>
                    <span className='lg:text-5xl text-2xl font-medium text-white lg:leading-10'>934</span>
                    <span className='text-sm font-normal text-[#d9bc6d] text-center'>Certified Teachers</span>
                </span>
                <span className='flex flex-col gap-0 items-center w-28'>
                    <span className='lg:text-5xl text-2xl font-medium text-white lg:leading-10'>6000</span>
                    <span className='text-sm font-normal text-[#d9bc6d] text-center'>Graduated Students</span>
                </span>
            </span>
            <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75] mt-1'></hr>
        </div>
        <div id='news'>
            <HomeNews />
        </div>
        <div id='gallery'><HomeGallery /></div>
        <HomeAlumna />
        <div className='flex flex-col lg:gap-4 justify-center items-center lg:py-8 py-4 lg:px-32 px-4 bg-[#f6bc75]' id='acc'>
            <span className='uppercase lg:text-3xl text-xl font-medium text-[#061c56]/90'>accreditation & affiliates</span>
            <span className='lg:text-2xl text-xl font-normal text-center text-[#061c56]'>As part of our efforts to give your child the best education possible, Temple School is affiliated with a number of local and international educational organizations, all with an aim to continuously improving the quality of our education delivery.</span>
        </div>
        <Logos />
        <div className='flex lg:py-12 py-4 justify-center'>
            <span className='h-48 w-20 bg-[#061c56] hidden lg:flex'></span>
            <span className='flex flex-col lg:flex-row px-8 text-center py-3 lg:py-0 lg:gap-10 gap-3 items-center justify-center bg-[#061c56]/80'>
                <span className='text-white lg:text-base text-sm font-normal lg:w-[31rem]'>Temple School is one of the best schools in Lagos, Nigeria. Our newsletters are full of interesting information about what's going on in school and includes useful dates for your diary.</span>
                <span className='flex'>
                    <input className=" lg:w-72 w-60 h-10 border-2 border-white rounded px-3 bg-transparent text-white outline-none" placeholder="Enter email address..."></input>
                    <input className= 'px-3 lg:px-6 flex items-center rounded text-[#061c56] uppercase text-xs lg:text-sm font-medium bg-[#f6bc75] hover:text-white' type='submit' value='subscribe'></input>
                </span>
            </span>
        </div>
    </div>
  )
}

export default HomeContent;