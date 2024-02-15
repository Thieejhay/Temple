import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../assets/about.png';
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
import Davis from '../assets/Secx.png';
import Ben from '../assets/Ben.png';
import Chinwe from '../assets/Chinwe.png';
import Adu from '../assets/Aduragbemi.png';
import Stella from '../assets/Stella.png';
import Benita from '../assets/Benita.png';
import Judith from '../assets/Judith.png';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo5 from '../assets/logo5.png';
import Logo6 from '../assets/logo6.png';
import Logo8 from '../assets/logo8.png';
import Logo9 from '../assets/logo9.png';
import Logo3 from '../assets/logo3.png';
import Logo7 from '../assets/logo7.png';
import Logo44 from '../assets/logo44.png';
import Flame from '../assets/flame.png'
import wave2 from '../assets/Waveleft.png';
import wave from '../assets/Waveright.png';
import Mission from '../assets/cl6.png';
// import wave3 from '../assets/Circle.png';


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
        <div className='bg-black relative flex lg:h-[35rem] h-[25rem]'>
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10 object-cover'></img>
            <span className='flex flex-col gap-0 text-center absolute lg:top-28 top-12 z-20 left-[47%] -translate-x-[47%] text-[#f6bc75]'>
                <span className='lg:text-4xl text-xl font-semibold opacity-90'>Learn More</span>
                <span className='lg:text-4xl text-xl font-semibold opacity-90'>About Temple School</span>
            </span>
        </div>
        <div className='flex flex-col items-center justify-center z-20' id='history'>
            <div className='flex flex-col lg:px-12 px-4 py-6 rounded-lg bg-[#061c56]/95 gap-2 shadow-2xl text-white lg:w-[59rem] -mt-[18rem] lg:-mt-80' id='history'>
                <span className='lg:text-3xl text-xl font-semibold uppercase text-center opacity-80 '>Our History</span>
                <span className='lg:text-base text-sm font-normal text-center opacity-70'>Temple Preparatory School opened in September 2004 with 7 children. The school is located in the serene environment of Ilupeju on the Lagos mainland. Temple Preparatory School runs the British National Curriculum alongside the Cambridge Curriculum, with local Nigerian content also playing a key role in the unique curriculum provided at Temple.</span>
                <span className='text-base font-normal text-center opacity-70'>By the end of 2006, the number of children had grown and the existing structure could not accommodate them. The surge in population warranted the building of extra classroom blocks in the school compound. When the school re-opened in September 2008, the number on roll was more than 300 and extra classrooms had to be added to the building to take care of the new intakes.</span>
                <span className='text-base font-normal text-center opacity-70'>By September 2009, Temple Secondary School was established. It was located at 1 Temple Drive, Off Olusoji Idowu Street, Ilupeju, Lagos.The school's design incorporates the latest thinking in planning and layout, buildi@: standards and information technology.</span>
                <span className='text-base font-normal text-center opacity-70'>By September 2015, Temple Secondary School moved to its permanent site at 4-6 Odegbami Street, Off Aba Johnston Crescent, Adeniyi Jones, Ikeja. Staff and students were thrilled to move to the new site, which has a basketball court, a volley ball court, a sports field and a 25m swimming pool, as well as two boarding blocks with two multi-purpose halls and a multi-sectional classroom/administrative block. The classroom resources are all brand new and therefore specifically designed to complement the curriculum. Temple aims to provide a safe, secure, welcoming and nurturing environment, where everyone is valued equally.</span>
            </div>
        </div>
        <div className='flex flex-col lg:py-8 py-6 px-2 lg:gap-10 gap-5 lg:items-center bg-[#21bdf3] mt-5' id='vision'>
            <span className='flex rounded-lg shadow-xl w-fit h-fit bg-white'>
                <span className={`${showInfo1 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent border-r-2 border-r-black/10'} uppercase font-semibold lg:text-sm text-xs px-5 lg:px-16 py-5 border-r-2 border-black/10 cursor-pointer`} onClick={handleInfo1Click}>Our Vision</span>
                <span className={`${showInfo2 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent border-r-2 border-r-black/10'} uppercase font-semibold lg:text-sm text-xs px-5 lg:px-16 py-5 border-r-2 border-black/10 cursor-pointer`} onClick={handleInfo2Click}>Our Values</span>
                <span className={`${showInfo7 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent border-r-2 border-r-black/10'} uppercase font-semibold lg:text-sm text-xs px-5 lg:px-16 py-5 border-r-2 border-black/10 cursor-pointer`} onClick={handleInfo7Click}>Our Mission</span>
                <span className={`${showInfo8 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent border-r-2 border-r-black/10'} uppercase font-semibold lg:text-sm text-xs px-5 lg:px-16 py-5 border-r-2 border-black/10 cursor-pointer`} onClick={handleInfo8Click}>Temple Flame</span>
            </span>
            <span className='flex rounded-lg bg-white lg:p-6 p-3 lg:w-[53rem]  lg:h-[26rem]'>
                {showInfo1 && 
                    <div className='flex flex-col lg:gap-3 gap-1'>
                        <span className='lg:text-xl text-base text-center lg:text-start font-medium lg:w-[50rem] opacity-70'>At Temple, we believe that every child can excel at something and it is our responsibility to identify that 'something' and develop it.</span>
                        <span className='lg:text-xl text-base text-center lg:text-start font-normal opacity-70'>Our major aims are to prepare the children towards becoming:</span>
                        <span className='flex lg:gap-6 gap-3 p-2 bg-gray-100 h-[17rem] rounded-lg'>
                            <span className='flex flex-col gap-2'>
                                <span className='flex flex-col space-y-2 lg:space-y-3'>
                                    <span className={`${showInfo3 ? 'bg-[#061c56] text-[#f6bc75]' : 'text-[#061c56] bg-[#f6bc75]'} text-sm font-medium p-2 lg:p-3 lg:w-[10.5rem] rounded cursor-pointer`} onClick={handleInfo3Click}>Successful Learners</span>
                                    <span className={`${showInfo4 ? 'bg-[#061c56] text-[#f6bc75]' : 'text-[#061c56] bg-[#f6bc75]'} text-sm font-medium p-2 lg:p-3 lg:w-[10.5rem] rounded  cursor-pointer`} onClick={handleInfo4Click}>Confident Individuals</span>
                                    <span className={`${showInfo5 ? 'bg-[#061c56] text-[#f6bc75]' : 'text-[#061c56] bg-[#f6bc75]'} text-sm font-medium p-2 lg:p-3 lg:w-[10.5rem] rounded cursor-pointer`} onClick={handleInfo5Click}>Responsible Citizens</span>
                                    <span className={`${showInfo6 ? 'bg-[#061c56] text-[#f6bc75]' : 'text-[#061c56] bg-[#f6bc75]'} text-sm font-medium p-2 lg:p-3 lg:w-[10.5rem] rounded cursor-pointer`} onClick={handleInfo6Click}>Effective Contributors</span>
                                </span>
                            </span>
                            {showInfo3 &&
                                <span className='flex flex-col lg:gap-2 gap-2 lg:mt-8 mt-3'>
                                    <span className='lg:text-xl text-sm font-semibold lg:font-normal opacity-70'>At Temple School, we undertake:</span>
                                    <span className='flex flex-col lg:space-y-3 space-y-2'>
                                        <span className='lg:text-base text-sm font-medium opacity-60'>To provide opportunities and motivation for personal achievement.</span>
                                        <span className='lg:text-base text-sm font-medium opacity-60'>To engage children in independent learning.</span>
                                        <span className='lg:text-base text-sm font-medium opacity-60'>To encourage the setting of challenging but attainable goals.</span>
                                    </span>
                               
                                </span>
                            }
                            {showInfo4 &&
                                <span className='flex flex-col lg:gap-2 gap-2 lg:mt-8 mt-3'>
                                    <span className='lg:text-xl text-sm font-semibold lg:font-normal opacity-70 '>At Temple School we undertake:</span>
                                    <span className='flex flex-col lg:space-y-3 space-y-2'>
                                        <span className='lg:text-base text-sm font-medium opacity-60'>To encourage self esteem and self respect</span>
                                        <span className='lg:text-base text-sm font-medium opacity-60'>To engage children in independent learning</span>
                                        <span className='lg:text-base text-sm font-medium opacity-60'>To encourage personal aspiration and ambition</span>
                                        <span className='lg:text-base text-sm font-medium opacity-60'>To celebrate success</span>
                                    </span>
                               
                                </span>
                            }
                            {showInfo5 &&
                                <span className='flex flex-col lg:gap-2 gap-2 lg:mt-5 mt-3'>
                                    <span className='lg:text-xl text-sm font-semibold lg:font-normal opacity-70 '>At Temple School we undertake:</span>
                                    <span className='flex flex-col lg:space-y-3 space-y-2'>
                                        <span className='text-sm lg:text-base font-medium opacity-60'>To ensure everyone is aware of their responsibility within and outside the school community.</span>
                                        <span className='text-sm lg:text-base font-medium opacity-60'>To ensure everyone develops the capacity to understand different beliefs and cultures.</span>
                                        <span className='text-sm lg:text-base font-medium opacity-60'>To ensure everyone can make informed choices.</span>
                                    </span>
                               
                                </span>
                            }
                            {showInfo6 &&
                                <span className='flex flex-col lg:gap-2 gap-2 lg:mt-5 mt-1'>
                                    <span className='lg:text-xl text-sm font-semibold lg:font-normal opacity-70 '>At Temple School we undertake:</span>
                                    <span className='flex flex-col lg:space-y-3 space-y-1'>
                                        <span className='text-sm lg:text-base font-medium opacity-60'>To provide opportunities for everyone to contribute to the life of the school and the wider community.</span>
                                        <span className='text-sm lg:text-base font-medium opacity-60'>To enable everyone gain experience and skills necessary for lifelong learning.</span>
                                        <span className='text-sm lg:text-base font-medium opacity-60'>To provide opportunities for everyone to work in partnerships and in teams.</span>
                                        <span className='text-sm lg:text-base font-medium opacity-60 hidden lg:flex'>To provide opportunities for creativity and innovation.</span>
                                    </span>
                               
                                </span>
                            }
                        </span>
                    </div>
                }

                {showInfo2 && 
                    <div className='flex flex-col gap-3 lg:gap-5 items-center'>
                        <span className='lg:text-lg text-base font-medium text-center opacity-70'>Temple School will provide an inclusive learning environment, which will be a positive stimulus for personal achievement. Through the broadening of experiences of the world, we will encourage everyone towards informed and responsible citizenship.</span>
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
                    <div className='flex items-center justify-center'>
                        <span className='bg-[#061c56] text-[#f6bc75] lg:w-[27rem] w-[15rem] h-[13rem] mt-3 z-20 flex items-center px-4 lg:text-xl text-lg font-medium'>To empower the pupils to pursue a passion for acquiring knowledge, lead lives of integrity, and be self-motivated and socially responsible citizens of the world.</span>
                        <span className='bg-gray-300 lg:w-[25rem] w-[16rem] h-[15rem] lg:-ml-[2rem] -ml-24 z-10'>
                            <img className='w-full h-full' src={Mission} alt=''></img>
                        </span>
                    </div>
                }
                {showInfo8 && 
                    <div className='flex items-center justify-center'>
                        <span className='lg:w-[30rem] lg:h-[24rem] flex items-center justify-center lg:-ml-24 -ml-12 z-10'>
                            <img className='h-[22rem] w-[12rem]' src={Flame} alt=''></img>
                        </span>
                         <span className='bg-[#061c56] text-[#f6bc75] rounded-lg lg:w-[27rem] w-[15rem] h-[15rem] z-20 flex items-center px-4 lg:text-xl text-base font-medium lg:-ml-24'>The blue flame is the hottest of all flames. As hot as the blue flame burns, so does our zeal at Temple burn in pursuance of knowledge, truth and good character.</span>
                    </div>
                }
                
            </span>
        </div>
        <div className='flex lg:flex-row flex-col h-fit gap-5 px-4 lg:px-32 lg:pt-16 pt-12 lg:pb-0 pb-4 w-screen relative justify-center items-center'>
            <span className='lg:flex hidden absolute right-4 top-0'><img src={wave} alt='' className='w-[75rem] h-[30rem] z-10'></img></span>
            <span className='lg:flex hidden absolute left-0 top-0'><img src={wave2} alt='' className='w-[70rem] h-[30rem] z-10'></img></span>
            <span className='lg:flex hidden relative mt-6 lg:mt-6 z-20'>
                <span className='w-[21rem] h-[25rem] bg-[#061c56] rounded-md '></span>
                <span className='lg:w-[21rem] w-[19rem] h-[24rem] -ml-[20rem] mt-[1rem]'>
                    <img className='w-full h-full rounded-md' alt='' src={Robert}></img>
                </span>
            </span>
            <span className='flex flex-col lg:pb-6 z-20 lg:mt-8'>
                <span className='lg:text-2xl text-base font-semibold text-[#061c56] lg:mb-2 opacity-90'>Chairman's Bio</span>
                <span className='mt-1 text-base leading-5 opacity-80 text-justify'>
                Robert Okharedia is an accomplished entrepreneur, skilled at developing businesses and fostering wealth creation. His extensive professional career includes the position of Chairman, CFO, and facility provider at Temple Group of Schools Ltd, which serves over 900 students. He is also Chairman of Ubiaja Investment Company Ltd, responsible for factory production of garri and a farm. Previously, he was CEO of Transnational Haulage Ltd, where he procured over 120 brand new trucks and trailers, managed over 270 employees, and generated an annual revenue of over 2.8 billion Naira.
                </span>
                <span className='mt-1 text-base leading-5 opacity-80 text-justify'>
                Robert Okharedia holds a Master's degree in Business Administration from John F Kennedy University and a Bachelor's degree in Economics from Notre Dame Namur University. He is married with five children and seven grandchildren and serves on the boards of Temple Group of Schools, Esan Microfinance bank, and Maryland Comprehensive Secondary School. Additionally, he is known for his philanthropic work in various community intervention programs and schools.
                </span>
                <span className='lg:text-2xl text-xl font-semibold mt-2 opacity-80 hidden lg:flex'>Mr Robert Okharedia</span>
            </span>
            
            <span className='flex lg:hidden relative z-20 flex-col'>
                <span className='w-[21rem] h-[24rem] bg-[#061c56] rounded-md '></span>
                <span className='w-[21rem] h-[24rem] -mt-[23rem] ml-[1rem]'>
                    <img className='w-full h-full rounded-md' alt='' src={Robert}></img>
                </span>
            </span>
            <span className='lg:text-2xl text-xl font-semibold opacity-80 lg:hidden  flex'>Mr Robert Okharedia</span>
        </div>
        <div className='flex flex-col pb-8 lg:pt-16 pt-4 gap-3 lg:gap-2 items-center' id='team'>
            <span className='lg:text-3xl text-xl font-semibold text-center uppercase'>Meet the management team</span>
            <span className='flex lg:text-center text-justify lg:w-[90%] px-4 lg:px-0'>
                <span className='text-sm font-normal opacity-80'>This Team form the Senior Management Team(SMT). The SMT meets at least twice each term to ensure common values and practices run right through all sections of Temple School. This team also develops strategies, policies and programs to ensure that Temple maintains a culture of continuous improvement. It is a creative and committed team that drives the striving for excellence within the school.</span>
            </span>
            <div className='hidden flex-col gap-6 lg:flex lg:mt-3'>
                <span className='flex gap-12'>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Shirley} alt='' className='w-full h-full '></img></span>
                        <span className='text-center rounded-b-md flex py-6 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium'>Shirley Okharedia</span>
                            <span className='text-base font-medium'>Founding Director</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Adeola} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-6 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Adeola Arofin</span>
                            <span className='text-base font-medium'>Director of Education</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Ben} alt='' className='w-full h-full rounded-md-t'></img></span>
                        <span className='text-center rounded-b-md flex py-6 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Benjamin Ankamah</span>
                            <span className='text-base font-medium'>Business Manager</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Gloria} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-6 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Gloria Rhodes-Nash</span>
                            <span className='text-base font-medium'>Head of Accounts</span>
                        </span>
                    </span>
                    
                </span>
                <span className='flex gap-12'>
                    <span className='flex flex-col w-56 shadow-xl '>
                        <span className='w-56 h-56'><img src={Davis} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-6 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Davis Ogunleye</span>
                            <span className='text-base font-medium'>Principal, Secondary School</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Amina} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-6 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Amina Tswanya</span>
                            <span className='text-base font-medium'>Head, Primary School</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Rita} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Rita Johnson-Nadar</span>
                            <span className='text-base font-medium'>Head, Early Years and Foundation Stage</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Oseri} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Oseri Owoeye</span>
                            <span className='text-base font-medium'>Head, Exceptional Learners Department</span>
                        </span>
                    </span>
                    
                </span>
                <span className='flex gap-12'>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Jos} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Jos Dawodu</span>
                            <span className='text-base font-medium'>Vice Principal, Secondary School (Academics)</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Stella} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Stella Somorin</span>
                            <span className='text-base font-medium'>Head, Events and Public Relations</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Jimoh} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-6 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Jimoh Wasiu</span>
                            <span className='text-base font-medium'>Vice Principal, College</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Chinwe} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Chinwe Awogbade</span>
                            <span className='text-base font-medium'>Head, Boarding House Services</span>
                        </span>
                    </span>  
                </span>
                <span className='flex gap-12'>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Adu} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Aduragbemi Ipinolu</span>
                            <span className='text-base font-medium px-1'>Deputy Head, Early Years and Foundation Stage</span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Kelechi} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Kelechi Oti</span>
                            <span className='text-base font-medium'>Vice Principal, Secondary School (Pastoral) </span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Benita} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Benita Asinobi</span>
                            <span className='text-base font-medium px-1'>Deputy Head, Primary School (Academics) </span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={Judith} alt='' className='w-full h-full rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Judith Onowighose</span>
                            <span className='text-base font-medium px-1'>Deputy Head, Primary School (Pastoral)</span>
                        </span>
                    </span>
                </span>
                
            </div>
            <div className='flex flex-col justify-center items-center py-5 gap-3 lg:hidden'>
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

            </div>
        </div>
        <div className='flex flex-col lg:px-16 px-4 mt-4' id='accc'>
            <span className='uppercase lg:text-3xl text-xl font-semibold text-center mb-3'>Accreditation and affilates</span>
            <span className='rounded-lg lg:pt-12 lg:pb-20 lg:px-8 pt-5 pb-10 px-4 bg-[#061c56] text-center text-[#f6bc75] lg:text-base text-sm'>As part of our efforts to give your child the best education possible, Temple School is affiliated with a number of local and international educational organizations, all with an aim to continuously improving the quality of our education delivery.</span>
            <span className='flex justify-center pb-6'>
                <span className='flex flex-col rounded-lg lg:px-10 px-2 py-5 lg:py-10 w-fit lg:gap-6 gap-3 shadow-xl bg-white lg:-mt-16 -mt-6'>
                    <span className='flex lg:gap-8'>
                        <img src={Logo1} alt='' className='lg:w-40 lg:h-40 w-16 h-16'></img>
                        <img src={Logo2} alt='' className='lg:w-36 lg:h-40 w-20 h-16'></img>
                        <img src={Logo44} alt='' className='lg:w-[30rem] w-[17rem] h-16 lg:h-40'></img>
                    </span>
                    <span className='flex lg:gap-10 gap-5'>
                        <img src={Logo5} alt='' className='lg:w-80 w-32 h-16 lg:h-40'></img>
                        <img src={Logo6} alt='' className='lg:w-[30rem] w-[15rem] h-12 lg:h-28 mt-3'></img>
                    </span>
                    <span className='flex lg:gap-5 gap-2'>
                        <img src={Logo8} alt='' className='lg:w-32 lg:h-24 w-16 h-10'></img>
                        <img src={Logo9} alt='' className='lg:w-32 lg:h-28 w-16 h-10'></img>
                        <img src={Logo3} alt='' className='lg:w-32 lg:h-20 lg:mt-6 mt-2 w-16 h-8'></img>
                        <img src={Logo7} alt='' className='lg:w-[25rem] lg:h-28 w-[10rem] h-12'></img>
                    </span>
                </span>
            </span>
        </div>
        <div className='flex flex-col lg:px-24 px-4 py-5 gap-2' id='policy'>
            <span className='uppercase lg:text-3xl text-xl font-semibold text-center mb-3'>Temple School Policy</span>
             <span className='flex flex-col lg:gap-2 gap-1'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-2xl font-semibold opacity-90 text-[#061c56]'>Safeguarding Statement</span>
                <span className='lg:text-base text-sm opacity-80'>Temple School’s entire philosophy is deeply rooted in an unwavering commitment to the safety and wellbeing of every child, young person and adult in Temple, through consistent and effective safeguarding procedures. We expect all staff and volunteers to share this commitment, and we provide equitable opportunities for all our children, regardless of background or ability.</span>
                <Link to='/policy' className='mt-3 lg:mt-0'><span className='px-6 py-2 border uppercase bg-[#f6bc75] text-base font-normal text-[#061c56] hover:text-white rounded-md w-fit '>
                read more</span></Link>
            </span>
        </div>
    </div>
  )
}

export default AboutContent;