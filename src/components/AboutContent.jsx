import React, { useState } from 'react';
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci';
import Adeola from '../assets/ADEOLA.png';
import Oseri from '../assets/OSERI.png';
import Amina from '../assets/AMINA.png';
import Rita from '../assets/RITA.png';
import Robert from '../assets/Robert.png';
import Shirley from '../assets/Shirley.png';
import Kelechi from '../assets/Kelechi.png';
import Jos from '../assets/Jos.png';
import Jimoh from '../assets/Jimoh.png';
import Gloria from '../assets/Gloria.png';
import Davis from '../assets/Davis.png';
import Ben from '../assets/Ben.png';
import Chinwe from '../assets/Chinwe.png';
import Adu from '../assets/Aduragbemi.png';
import Stella from '../assets/Stella.png';
import School1 from '../assets/school1.png';
import School2 from '../assets/school2.png';
import School3 from '../assets/school3.png';
import School4 from '../assets/school4.png';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo5 from '../assets/logo5.png';
import Logo6 from '../assets/logo6.png';
import Logo8 from '../assets/logo8.png';
import Logo9 from '../assets/logo9.png';
import Logo3 from '../assets/logo3.png';
import Logo7 from '../assets/logo7.png';
import Logo44 from '../assets/logo44.png';
import { Link } from 'react-router-dom';


const AboutContent = () => {

    const [showInfo1, setShowInfo1] = useState(true);
    const [showInfo2, setShowInfo2] = useState(false);
    const [showInfo3, setShowInfo3] = useState(true);
    const [showInfo4, setShowInfo4] = useState(false);
    const [showInfo5, setShowInfo5] = useState(false);
    const [showInfo6, setShowInfo6] = useState(false);
    const [showInfo7, setShowInfo7] = useState(false);
    const [showInfo8, setShowInfo8] = useState(false);
    

    const handleInfo1Click = () => {
        setShowInfo1(true);
        setShowInfo2(false);
        setShowInfo7(false);
        setShowInfo8(false);
    };
    const handleInfo2Click = () => {
        setShowInfo2(true);
        setShowInfo1(false);
        setShowInfo7(false);
        setShowInfo8(false);
    };
    const handleInfo7Click = () => {
        setShowInfo7(true);
        setShowInfo1(false);
        setShowInfo2(false);
        setShowInfo8(false);
        
    };
    const handleInfo8Click = () => {
        setShowInfo8(true);
        setShowInfo1(false);
        setShowInfo7(false);
        setShowInfo2(false);
    };
    const handleInfo3Click = () => {
        setShowInfo3(true);
        setShowInfo4(false);
        setShowInfo5(false);
        setShowInfo6(false);
    };
    const handleInfo4Click = () => {
        setShowInfo4(true);
        setShowInfo3(false);
        setShowInfo5(false);
        setShowInfo6(false);
    };
    const handleInfo5Click = () => {
        setShowInfo5(true);
        setShowInfo3(false);
        setShowInfo4(false);
        setShowInfo6(false);
    };
    const handleInfo6Click = () => {
        setShowInfo6(true);
        setShowInfo3(false);
        setShowInfo4(false);
        setShowInfo5(false);
    };
    


  return (
    <div className='flex flex-col w-screen'>
        <div className='flex flex-col h-[33rem] items-center justify-center bg-[#EEEEEE] gap-10'>
            <span className='flex flex-col gap-0 text-center'>
                <span className='text-3xl font-medium'>Learn More</span>
                <span className='text-3xl font-medium'>About Temple School</span>
            </span>
            <span className='px-6 py-2 border-2 border-white rounded-md text-white'>Watch Video</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col px-12 py-12 rounded-lg gap-2 shadow-2xl bg-white w-[59rem] -mt-36 mb-12'>
                <span className='text-2xl font-semibold uppercase text-center mb-3'>Our History</span>
                <span className='text-sm font-normal text-center'>Temple Preparatory School opened in September 2004 with 7 children. The school is located in the serene environment of Ilupeju on the Lagos mainland. Temple Preparatory School runs the British National Curriculum alongside the Cambridge Curriculum, with local Nigerian content also playing a key role in the unique curriculum provided at Temple.</span>
                <span className='text-sm font-normal text-center'>By the end of 2006, the number of children had grown and the existing structure could not accommodate them. The surge in population warranted the building of extra classroom blocks in the school compound. When the school re-opened in September 2008, the number on roll was more than 300 and extra classrooms had to be added to the building to take care of the new intakes.</span>
                <span className='text-sm font-normal text-center'>By September 2009, Temple Secondary School was established. It was located at 1 Temple Drive, Off Olusoji Idowu Street, Ilupeju, Lagos.The school's design incorporates the latest thinking in planning and layout, buildi@: standards and information technology.</span>
                <span className='text-sm font-normal text-center'>By September 2015, Temple Secondary School moved to its permanent site at 4-6 Odegbami Street, Off Aba Johnston Crescent, Adeniyi Jones, Ikeja. Staff and students were thrilled to move to the new site, which has a basketball court, a volley ball court, a sports field and a 25m swimming pool, as well as two boarding blocks with two multi-purpose halls and a multi-sectional classroom/administrative block. The classroom resources are all brand new and therefore specifically designed to complement the curriculum. Temple aims to provide a safe, secure, welcoming and nurturing environment, where everyone is valued equally.</span>
            </div>
        </div>
        <div className='flex flex-col py-8 gap-10 items-center bg-gray-200'>
            <span className='flex rounded-lg shadow-xl w-fit h-fit bg-white'>
                <span className={`${showInfo1 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent'} uppercase font-semibold text-sm px-16 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo1Click}>Our Vision</span>
                <span className={`${showInfo2 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent'} uppercase font-semibold text-sm px-16 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo2Click}>Our Values</span>
                <span className={`${showInfo7 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent'} uppercase font-semibold text-sm px-16 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo7Click}>Our Mission</span>
                <span className={`${showInfo8 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent'} uppercase font-semibold text-sm px-16 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo8Click}>Temple Flame</span>
            </span>
            <span className='flex rounded-lg bg-white p-6 w-[53rem] h-[26rem]'>
                {showInfo1 && 
                    <div className='flex flex-col gap-3 '>
                        <span className='text-xl font-medium w-[50rem] opacity-80'>At Temple, we believe that every child can excel at something and it is our responsibility to identify that 'something' and develop it.</span>
                        <span className='text-xl font-normal opacity-70'>Our major aims are to prepare the children towards becoming:</span>
                        <span className='flex gap-6 p-2 bg-gray-100 rounded-lg'>
                            <span className='flex flex-col gap-2'>
                                <span className='flex flex-col space-y-3'>
                                    <span className={`${showInfo3 ? 'bg-[#061c56] text-[#f6bc75]' : 'text-[#061c56] bg-[#f6bc75]'} text-base font-medium p-3 rounded cursor-pointer`} onClick={handleInfo3Click}>Successful Learners</span>
                                    <span className={`${showInfo4 ? 'bg-[#061c56] text-[#f6bc75]' : 'text-[#061c56] bg-[#f6bc75]'} text-base font-medium p-3 rounded  cursor-pointer`} onClick={handleInfo4Click}>Confident Individuals</span>
                                    <span className={`${showInfo5 ? 'bg-[#061c56] text-[#f6bc75]' : 'text-[#061c56] bg-[#f6bc75]'} text-base font-medium p-3 rounded cursor-pointer`} onClick={handleInfo5Click}>Responsible Citizens</span>
                                    <span className={`${showInfo6 ? 'bg-[#061c56] text-[#f6bc75]' : 'text-[#061c56] bg-[#f6bc75]'} text-base font-medium p-3 rounded cursor-pointer`} onClick={handleInfo6Click}>Effective Contributors</span>
                                </span>
                            </span>
                            {showInfo3 &&
                                <span className='flex flex-col gap-2 mt-8'>
                                    <span className='text-xl font-normal opacity-70'>At Temple School we undertake:</span>
                                    <span className='flex flex-col space-y-3'>
                                        <span className='text-base font-medium opacity-60'>To provide opportunities and motivation for personal achievement</span>
                                        <span className='text-base font-medium opacity-60'>To engage children in independent learning</span>
                                        <span className='text-base font-medium opacity-60'>To encourage the setting of challenging but attainable goals</span>
                                    </span>
                               
                                </span>
                            }
                            {showInfo4 &&
                                <span className='flex flex-col gap-2 mt-8'>
                                    <span className='text-xl font-normal opacity-70 '>At Temple School we undertake:</span>
                                    <span className='flex flex-col space-y-3'>
                                        <span className='text-base font-medium opacity-60'>To encourage self esteem and self respect</span>
                                        <span className='text-base font-medium opacity-60'>To engage children in independent learning</span>
                                        <span className='text-base font-medium opacity-60'>To encourage personal aspiration and ambition</span>
                                        <span className='text-base font-medium opacity-60'>To celebrate success</span>
                                    </span>
                               
                                </span>
                            }
                            {showInfo5 &&
                                <span className='flex flex-col gap-2 mt-8'>
                                    <span className='text-xl font-normal opacity-70 '>At Temple School we undertake:</span>
                                    <span className='flex flex-col space-y-3'>
                                        <span className='text-xs font-medium opacity-60'>To ensure everyone is aware of their responsibility within and outside the school community</span>
                                        <span className='text-xs font-medium opacity-60'>To ensure everyone develops the capacity to understand different beliefs and cultures</span>
                                        <span className='text-xs font-medium opacity-60'>To ensure everyone can make informed choices</span>
                                    </span>
                               
                                </span>
                            }
                            {showInfo6 &&
                                <span className='flex flex-col gap-2 mt-8'>
                                    <span className='text-xl font-normal opacity-70 '>At Temple School we undertake:</span>
                                    <span className='flex flex-col space-y-3'>
                                        <span className='text-xs font-medium opacity-60'>To provide opportunities for everyone to contribute to the life of the school and the wider community</span>
                                        <span className='text-xs font-medium opacity-60'>To enable everyone gain experience and skills necessary for lifelong learning</span>
                                        <span className='text-xs font-medium opacity-60'>To provide opportunities for everyone to work in partnerships and in teams</span>
                                        <span className='text-xs font-medium opacity-60'>To provide opportunities for creativity and innovation</span>
                                    </span>
                               
                                </span>
                            }
                        </span>
                    </div>
                }

                {showInfo2 && 
                    <div className='flex flex-col gap-5 items-center'>
                        <span className=' text-lg font-medium text-center opacity-70'>Temple School will provide an inclusive learning environment, which will be a positive stimulus for personal achievement. Through the broadening of experiences of the world, we will encourage everyone towards informed and responsible citizenship.</span>
                        <span className='flex gap-5'>
                            <span className='flex flex-col gap-5'>
                                <span className='text-base font-medium py-3 w-40 flex justify-center rounded bg-[#061c56] text-[#f6bc75] hover:bg-[#f6bc75] hover:text-[#061c56]'>Love</span>
                                <span className='text-base font-medium py-3 w-40 flex justify-center rounded bg-[#f6bc75] text-[#061c56]  hover:bg-[#061c56]  hover:text-[#f6bc75]'>Mutual</span>
                                <span className='text-base font-medium py-3 w-40 flex justify-center rounded bg-[#061c56] text-[#f6bc75] hover:bg-[#f6bc75] hover:text-[#061c56]'>Respect</span>
                                <span className='text-base font-medium py-3 w-40 flex justify-center rounded bg-[#f6bc75] text-[#061c56]  hover:bg-[#061c56]  hover:text-[#f6bc75]'>Tolerance</span>
                            </span>
                            <span className='flex flex-col gap-5'>
                                <span className='text-base font-medium py-3 w-40 flex justify-center rounded bg-[#f6bc75] text-[#061c56]  hover:bg-[#061c56]  hover:text-[#f6bc75]'>Integrity</span>
                                <span className='text-base font-medium py-3 w-40 flex justify-center rounded bg-[#061c56] text-[#f6bc75] hover:bg-[#f6bc75] hover:text-[#061c56]'>Humility</span>
                                <span className='ttext-base font-medium py-3 w-40 flex justify-center rounded bg-[#f6bc75] text-[#061c56]  hover:bg-[#061c56]  hover:text-[#f6bc75]'>Discipline</span>
                                <span className='text-base font-medium py-3 w-40 flex justify-center rounded bg-[#061c56] text-[#f6bc75] hover:bg-[#f6bc75] hover:text-[#061c56]'>Resilience</span>
                            </span>
                        </span>
                    </div>

                }
                {showInfo7 && 
                    <div className='flex gap-5 items-center justify-center w-full'>
                        <span className='text-4xl font-semibold w-[30rem] text-center flex justify-center text-[#061c56]'>To empower the pupils to pursue a passion for acquiring knowledge,lead lives of integrity and be self motivated and socially responsiblecitizens of the world.</span>
                    </div>
                }
                {showInfo8 && 
                    <div className='flex gap-5 items-center justify-center w-full'>
                        <span className='text-4xl font-semibold w-[30rem] text-center flex justify-center text-[#f6bc75]'>The blue flame is the hottest of all flames. As hot as the blue flame burns, so does our zeal at Temple burn in pursuance of knowledge, truth and good character.</span>
                    </div>
                }
                
            </span>
        </div>
        <div className='flex flex-col gap-5 py-8'>
            <span className='text-3xl font-semibold text-center'>Our Schools</span>
            <div className='flex gap-10 justify-center'>
                <span className='flex flex-col '>
                    <span className='w-[17rem] h-60 '>
                        <img src={School1} alt='' className='w-full h-full rounded-t-lg'></img>
                    </span>
                    <span className='p-4 w-[17rem] flex flex-col gap-5'>
                        <span className='text-[#061c56] text-2xl font-semibold uppercase tracking-wider'>Early Years</span>
                        <span className='text-xs font-normal opacity-80 mb-3'>The Children in Early Years and Foundation stage with 1 and 4 years.</span>
                        <span className='flex gap-2 items-center'>
                            <BsTelephone className='w-6 h-6 text-[#061c56]'/>
                            <span className='text-xs font-light opacity-80'>+234 708 556 1673</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <CiLocationOn className='w-6 h-6 text-[#061c56]'/>
                            <span className='text-xs font-light opacity-80'>213, Ikorodu Road, Illupeju, Lagos</span>
                        </span>
                        <Link to='/early-years'><span className='text-[#061c56] flex justify-center py-4 text-sm font-normal border-2 rounded-lg border-[#061c56]'>Learn More</span></Link>
                    </span>
                </span>
                <span className='flex flex-col '>
                    <span className='w-[17rem] h-60'>
                        <img src={School2} alt='' className='w-full h-full rounded-t-lg'></img>
                    </span>
                    <span className='p-4 w-[17rem] flex flex-col gap-4'>
                        <span className='text-[#061c56] text-2xl font-semibold uppercase tracking-wider '>Primary</span>
                        <span className='text-xs font-normal opacity-80 mb-1'>In our primary section, the curriculum is presented to them in an integrated manner, through cross-curricular themes</span>
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
                        <Link to='/primary '><span className='text-[#061c56] flex justify-center py-4 text-sm font-normal border-2 rounded-lg border-[#061c56]'>Learn More</span></Link>
                    </span>
                </span>
                <span className='flex flex-col '>
                    <span className='w-[17rem] h-60 '>
                        <img src={School3} alt='' className='w-full h-full rounded-t-lg'></img>
                    </span>
                    <span className='p-4 w-[17rem] flex flex-col gap-2'>
                        <span className='text-[#061c56] text-2xl font-semibold uppercase tracking-wider'>Secondary</span>
                        <span className='text-xs font-normal opacity-80 mb-1'>Builds upon the attention to detial that underscore the provision in Temple Early Years & Foundation Stage and Temple Primary.</span>
                        <span className='flex gap-2 items-center mb-1'>
                            <BsTelephone className='w-6 h-6 text-[#061c56]'/>
                            <span className='flex flex-col gap-0'>
                                <span className='text-xs font-light opacity-80'>+234 708 556 1673</span>
                                <span className='text-xs font-light opacity-80'>+234 708 556 1673</span>
                            </span>
                        </span>
                        <span className='flex gap-2 items-center mb-1'>
                            <CiLocationOn className='w-6 h-6 text-[#061c56]'/>
                            <span className='flex flex-col gap-0'>
                                <span className='text-xs font-light opacity-80'>4-6 Odegbami st, Off Aba Johnson </span>
                                <span className='text-xs font-light opacity-80'>st,Adeniyi Jones,Ikeja,Lagos.</span>
                            </span>
                        </span>
                        <Link to='/secondary'><span className='text-[#061c56] flex justify-center py-4 text-sm font-normal border-2 rounded-lg border-[#061c56]'>Learn More</span></Link>
                    </span>
                </span>
                <span className='flex flex-col '>
                    <span className='w-[17rem] h-60 '>
                        <img src={School4} alt='' className='w-full h-full rounded-t-lg'></img>
                    </span>
                    <span className='p-4 w-[17rem] flex flex-col gap-3'>
                        <span className='text-[#061c56] text-2xl font-semibold uppercase tracking-wider'>College</span>
                        <span className='text-xs font-normal opacity-80 mb-1'>A private co-educational day and boarding sixth form that intensively and cohesively prepare post 16 year olds for entry into universities</span>
                        <span className='flex gap-2 items-center mb-1'>
                            <BsTelephone className='w-6 h-6 text-[#061c56]'/>
                            <span className='text-xs font-light opacity-80'>+234 708 556 1673</span>
                        </span>
                        <span className='flex gap-2 items-center mb-1'>
                            <CiLocationOn className='w-6 h-6 text-[#061c56]'/>
                            <span className='text-xs font-light opacity-80'>213, Ikorodu Road, Illupeju, Lagos</span>
                        </span>
                        <Link to='/college'><span className='text-[#061c56] flex justify-center py-4 text-sm font-normal border-2 rounded-lg border-[#061c56]'>Learn More</span></Link>
                    </span>
                </span>
            </div>
        </div>
        <div className='flex flex-col py-8 gap-7 items-center'>
            <span className='text-3xl font-semibold text-center uppercase'>Meet the management team</span>
            <span className='flex text-center w-[90%]'>
                <span className='text-sm font-normal opacity-80'>This Team form the Senior Management Team(SMT). The SMT meets at least twice each term to ensure common values and practices run right through all sections of Temple School. This team also develops strategies, policies and programs to ensure that Temple maintains a culture of continuous improvement. It is a creative and committed team that drives the striving for excellence within the school.</span>
            </span>
            <div className='flex flex-col gap-6'>
                <span className='flex gap-6'>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Robert} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Robert Okharedia</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Shirley} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Shirley Okharedia</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Adeola} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Adeola Arofin</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Ben} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Benjamin Ankamah</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Davis} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Davis Ogunleye</span>
                    </span>
                </span>
                <span className='flex gap-6'>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Amina} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Amina Tswanya</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Rita} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Rita Johnson-Nadar</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Oseri} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Oseri Owoeye</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Gloria} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>
                            Gloria Rhodes-Nash
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Jos} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Jos Dawodu</span>
                    </span>
                </span>
                <span className='flex gap-6'>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Stella} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>
                            Stella Somorin
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Jimoh} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Jimoh Wasiu</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Chinwe} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Chinwe Awogbade</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Adu} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Aduragbemi Ipinolu</span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl rounded-b-md'>
                        <span className='w-56 h-56 rounded-md bg-gray-200'><img src={Kelechi} alt='' className='w-full h-full rounded-md'></img></span>
                        <span className='text-xl font-medium justify-center flex py-5 hover:bg-[#061c56] hover:text-white'>Kelechi Oti</span>
                    </span>
                </span>
            </div>
        </div>
        <div className='flex flex-col px-16'>
            <span className='uppercase text-3xl font-semibold text-center mb-3'>Accreditation and affilates</span>
            <span className='rounded-lg pt-12 pb-20 px-8 bg-[#061c56] text-center text-[#f6bc75] text-base'>As part of our efforts to give your child the best education possible, Temple School is affiliated with a number of local and international educational organizations, all with an aim to continuously improving the quality of our education delivery.</span>
            <span className='flex justify-center pb-6'>
                <span className='flex flex-col rounded-lg px-10 py-10 w-fit gap-6 shadow-xl bg-white -mt-16'>
                    <span className='flex gap-8'>
                        <img src={Logo1} alt='' className='w-40 h-40'></img>
                        <img src={Logo2} alt='' className='w-36 h-40'></img>
                        <img src={Logo44} alt='' className='w-[30rem] h-40'></img>
                    </span>
                    <span className='flex gap-10'>
                        <img src={Logo5} alt='' className='w-80 h-40'></img>
                        <img src={Logo6} alt='' className='w-[30rem] h-28 mt-3'></img>
                    </span>
                    <span className='flex gap-5'>
                        <img src={Logo8} alt='' className='w-32 h-24'></img>
                        <img src={Logo9} alt='' className='w-32 h-28'></img>
                        <img src={Logo3} alt='' className='w-32 h-20 mt-6'></img>
                        <img src={Logo7} alt='' className='w-[25rem] h-28'></img>
                    </span>
                </span>
            </span>
        </div>
    </div>
  )
}

export default AboutContent;