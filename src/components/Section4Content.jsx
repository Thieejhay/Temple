import React, { useState } from 'react';
// import { HiOutlineCheckCircle } from 'react-icons/hi';
import { BsPlus, BsDot } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi';
import Banner from '../assets/cob.png';
import Pic1 from '../assets/coll.png';
import Pic2 from '../assets/gallery/c2.png';
import Pic3 from '../assets/gallery/cl1.png';
import Pic9 from '../assets/gallery/cl2.png';
import Pic4 from '../assets/gallery/cl5.png';
import Pic5 from '../assets/gallery/cl3.png';
import Pic6 from '../assets/gallery/cl6.png';
import Pic8 from '../assets/gallery/c6.png';
import Pic7 from '../assets/gallery/cl4.png';
import Medal from '../assets/Medal.png';


const Section4Content = () => {

    const [showMore, setShowMore] = useState({
        showMore1: false,
        showMore2: false,
        showMore3: false,
        showMore4: false,
        showMore5: false,
        showMore6: false,
      });
    
      const toggleShowMore = (key) => {
        setShowMore((prevState) => ({
          ...Object.fromEntries(Object.entries(prevState).map(([k, v]) => (k === key ? [k, !v] : [k, false]))),
        }));
      };

  return (
    <div className='flex flex-col w-screen'>
        <span className='flex justify-center items-center relative h-[10rem] lg:h-[20rem] bg-black'>
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10 '></img>
            <span className='lg:text-4xl text-2xl opacity-90 tracking-wide font-semibold absolute lg:top-36 top-16 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>College Years</span>
        </span>
        <div className='flex flex-col mb-8 py-3'>
            <span className='flex lg:flex-row flex-col-reverse lg:px-32 lg:mb-10 mb-5'>
                <img className='w-[20rem] h-[25rem] lg:flex hidden' src={Pic1} alt=''></img>
                <span className='flex flex-col gap-3 lg:pl-12 px-4 pt-8 bg-[#f6bc75] w-full text-[#061c56]'>
                    <span className='lg:text-5xl text-2xl font-bold lg:w-[30rem]'>Welcome Address by Head of College</span>
                    <span className='text-sm lg:w-[42rem]  space-y-3 text-[#061c56]'>
                        <p>Temple College is a private co-educational day and boarding sixth form that intensively and cohesively prepares post 16-year olds for entry into universities that are best suited for each student.</p>
                        <p>We believe in the success of every student and are always driven by our school ethos; to Discover the strength of each student, Develop a strong academic foundation, and ultimately Deploy independent, driven visionaries.</p>
                    </span>
                    <span className='flex flex-col gap-1 w-[42rem] items-end italic'>
                        <span className='text-lg '>Mrs Adeola Arofin</span>
                        <span className='text-lg '>Head of Temple School College Section</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col px-4 lg:px-0 lg:gap-6 gap-2 lg:pr-32 lg:pl-36 lg:mb-10 mb-5'>
                    <span className='lg:text-base text-sm opacity-80'>Moving from Year 11 to the Sixth Form can be one of the most exciting and challenging periods in a student’s life. At Temple College, our Sixth Form experience gives careful thought to this transition and enables a much more adult approach to study.</span>
                    <span className='lg:text-base text-sm opacity-80'>Temple College prides itself on its unique and inclusive curriculum that goes Beyond Education to prepare students for life as independent young adults, university life, career development and leadership.</span>
                    <span className='lg:text-base text-sm opacity-80'>We believe in the success of every student, and our ethos is to Discover the strength of each student, Develop a strong academic foundation, and ultimately Deploy independent, driven visionaries.</span>
                    <span className='lg:text-base text-sm opacity-80'>To empower the pupils to pursue a passion for acquiring knowledge, lead lives of integrity and be self-motivated and socially responsible citizens of the world.</span>
            </span>
            <div className='flex flex-col bg-[#061c56] py-1 lg:px-24 w-screen lg:h-40 gap-2 mb-5'>
                <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
                <span className='flex lg:justify-between gap-2 items-center lg:px-6 px-1'>
                    <span className='flex lg:gap-6 gap-2 items-center'>
                        <span className='lg:w-32 w-16 h-16 lg:h-32 rounded-full '>
                            <img src={Medal} alt='' className='w-full h-full'></img>
                        </span>
                        <span className='flex flex-col text-[#f6bc75] w-fit'>
                            <span className='lg:text-3xl text-sm font-medium lg:tracking-wider'>Our Students Are Talented</span>
                            <span className='lg:text-2xl text-xs w-[10rem] lg:w-fit font-normal lg:tracking-wider'>passionate, hard-working and full of ideas.</span>
                        </span>
                    </span>
                    <a href='https://basic.edves.net/#tab2' rel="noreferrer" target='_blank'><span className='lg:px-8 lg:py-5 px-2 py-2 lg:text-xl text-lg w-fit h-fit font-medium lg:font-semibold text-white bg-[#f6bc75] rounded-md drop-shadow-md'>Apply Now</span></a>
                </span>
                <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
            </div>
            {/* <span className='flex flex-col py-2 lg:px-24 mb-5'>
                <hr className='w-full h-1 border-none rounded-md bg-[#061c56]'></hr>
                <span className='lg:text-3xl text-xl font-semibold text-center opacity-90 mb-2 my-1 text-[#061c56] mt-4'>Campus-specific facilities and features</span>
                <span className='flex lg:flex-row flex-col justify-center mt-3 lg:gap-20 text-[#061c56] mb-4'>
                    <span className='flex flex-col gap-1 lg:pb-3 px-4 lg:px-0'>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                    </span>
                    <span className='flex flex-col gap-1 px-4 lg:px-0'>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                    </span>
                </span>
                <hr className='w-full h-1 border-none rounded-md bg-[#061c56]'></hr> 
            </span> */}
            <span className='flex flex-col py-8 lg:px-0 px-4 bg-[#21bdf3] text-white mb-5 lg:mb-10'>
                <span className='lg:text-3xl uppercase text-xl font-semibold text-center lg:mb-7 mb-3 opacity-90 text-[#061c56]'>Photo Gallery</span>
                <span className='lg:flex hidden px-32 gap-3'>
                    <span className='w-[21rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic7} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg' src={Pic3} alt=''></img>
                    </span>
                    <span className='w-[22rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic8} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg' src={Pic4} alt=''></img>
                    </span>
                </span>
                <div className='flex lg:hidden gap-3'>
                    <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic3} alt=''></img></span>
                    <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic7} alt=''></img></span>
                </div>
                <div className='flex lg:hidden gap-3 mt-3'>
                    <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic8} alt=''></img></span>
                    <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic4} alt=''></img></span>
                </div>
                <div className='flex lg:hidden gap-3 mt-3'>
                    <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic9} alt=''></img></span>
                    <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic5} alt=''></img></span>
                </div>
                <div className='flex lg:hidden gap-3 mt-3'>
                    <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic6} alt=''></img></span>
                    <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic2} alt=''></img></span>
                </div>
                <span className='lg:flex hidden gap-3 mt-6 px-32'>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic9} alt=''></img>
                    </span>
                    <span className='w-[21rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic5} alt=''></img>
                    </span>
                    <span className='w-[22rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic6} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic2} alt=''></img>
                    </span>
                </span>
            </span>
            <span className='flex flex-col lg:mt-4 mt-3 lg:px-24'>
                <span className='lg:text-3xl uppercase text-xl font-semibold text-center mb-5 opacity-90'>Admissions Procedure</span>
                <span className='flex flex-col px-3'>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-80'>
                            <span className='lg:text-xl text-lg'>Obtaining the Registration Form</span>
                            <span onClick={() => toggleShowMore('showMore1')}>{showMore.showMore1 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore1 && 
                            <span className='flex flex-col lg:pl-6 space-y-2 lg:pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Pick up registration from any section of the school (Early Years/Primary/Secondary). See respective addresses below.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Forms cost N10,000 (Early Years Foundation Stage and Primary), N15,000 (Secondary) and N20,000 (College)</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Submission must be done before the entrance examinations which will be indicated at the time of purchase</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='lg:text-xl text-lg'>The following must be submitted with the registration form</span>
                            <span onClick={() => toggleShowMore('showMore2')}>{showMore.showMore2 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore2 && 
                            <span className='flex flex-col lg:pl-6 space-y-2 lg:pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A current passport photograph</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A copy of the child's birth certificate</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>The previous term's report card</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A medical report after admission is offered</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-80'>
                            <span className='lg:text-xl text-lg'>Individual visits to the school</span>
                            <span onClick={() => toggleShowMore('showMore3')}>{showMore.showMore3 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore3 && 
                            <span className='flex flex-col lg:px-6 space-y-2 lg:pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A visit to the school can be arranged for the prospective student and their parents. During this visit the student will be taken on a tour of the school and the parents will have the opportunity to speak with the Head of School and/or the sectional heads. Arrangements can also be made for the student to spend the day in the school.</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-3 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className='flex justify-between items-center opacity-90'>
                            <span className='lg:text-xl text-lg'>Entrance examinations</span>
                            <span onClick={() => toggleShowMore('showMore4')}>{showMore.showMore4 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore4 && 
                            <span className='flex flex-col lg:px-6 space-y-2 lg:pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>The entrance exams take place in December and in April. As stated earlier, students who pass the entrance examinations may be invited in for an interview</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className='flex justify-between items-center opacity-80'>
                            <span className='lg:text-xl text-lg'>Acceptance</span>
                            <span onClick={() => toggleShowMore('showMore5')}>{showMore.showMore5 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore5 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Offer letters will be sent to the successful students. The tuition fees must be paid on or before the first day of the term</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-3 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className='  flex justify-between items-center opacity-90'>
                            <span className='lg:text-xl text-lg'>Orientation for new students</span>
                            <span onClick={() => toggleShowMore('showMore6')}>{showMore.showMore6 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore6 && 
                            <span className='flex flex-col lg:px-6 space-y-2 lg:pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>On a designated day before resumption, which will be communicated to new Temple families, students and their parents will be formally introduced to Temple School life and given the school calendar for the school year. The Meet and Greet programme at the beginning of each new session will also enable the new students and their parents meet their teachers and members of management.</span>
                                </span>
                            </span>
                        }
                    </span>
                </span>
            </span>
            
        </div>
        
    </div>  
  )
}

export default Section4Content;