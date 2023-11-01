import React, { useState } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { BsPlus, BsDot } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi';
import Banner from '../assets/col.png';
import Pic2 from '../assets/gallery/c2.png';
import Pic3 from '../assets/gallery/c3.png';
import Pic4 from '../assets/gallery/c4.png';
import Pic5 from '../assets/gallery/c5.png';
import Pic6 from '../assets/gallery/c6.png';
import Pic7 from '../assets/gallery/c7.png';


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
        <span className='flex justify-center items-center relative h-[23rem] bg-black'>
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10'></img>
            <span className='text-4xl opacity-90 tracking-wide font-semibold absolute top-36 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>College Years</span>
        </span>
        <div className='flex flex-col gap-10 mb-8 py-3'>
            <span className='flex pr-24 pl-24'>
                <span className='w-[34rem] bg-gray-100'></span>
                <span className='flex flex-col -ml-36 gap-8 pl-12 pt-12 pb-20 bg-[#544E5D] w-full text-white'>
                    <span className=' text-5xl font-bold w-[32rem]'>Welcome Address</span>
                    <span className='text-base w-[42rem] space-y-3'>
                        <p>Temple College is a private co-educational day and boarding sixth form that intensively and cohesively prepares post 16-year olds for entry into universities that are best suited for each student.</p>
                        <p>We believe in the success of every student and are always driven by our school ethos; to Discover the strength of each student, Develop a strong academic foundation, and ultimately Deploy independent, driven visionaries.</p>
                    </span>
                    {/* <span className='flex flex-col gap-1 w-[42rem] items-end italic'>
                        <span className='text-lg '>Mr. David Ogunleye</span>
                        <span className='text-lg '>Principal, Temple School Secondary Section</span>
                    </span> */}
                </span>
            </span>
            <span className='flex flex-col gap-6 pr-32 pl-40'>
                    <span className='text-base'>Moving from Year 11 to the Sixth Form can be one of the most exciting and challenging periods in a student’s life. At Temple College, our Sixth Form experience gives careful thought to this transition and enables a much more adult approach to study.</span>
                    <span className='text-base'>Temple College prides itself on its unique and inclusive curriculum that goes Beyond Education to prepare students for life as independent young adults, university life, career development and leadership.</span>
                    <span className='text-base'>We believe in the success of every student, and our ethos is to Discover the strength of each student, Develop a strong academic foundation, and ultimately Deploy independent, driven visionaries.</span>
                    <span className='text-base'>To empower the pupils to pursue a passion for acquiring knowledge, lead lives of integrity and be self-motivated and socially responsible citizens of the world.</span>
            </span>
            <span className='flex flex-col gap-3 mt-5'>
                <span className='text-3xl font-semibold text-center'>Campus-specific facilities and features</span>
                <span className='px-32 text-sm'></span>
                <span className='flex justify-center mt-3 gap-20'>
                    <span className='flex flex-col gap-1'>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                    </span>
                    <span className='flex flex-col gap-1'>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                    </span>
                </span>
            </span>
            <span className='flex flex-col mt-8'>
                <span className='text-3xl font-semibold text-center mb-7'>Photo Gallery</span>
                <span className='flex px-32 gap-3'>
                    <span className='w-[20rem] h-60 '>
                        <img className='w-full h-full rounded-lg object-cover' src={Pic7} alt=''></img>
                    </span>
                    <span className='w-[40rem] h-60  bg-gray-200'>
                        <img className='w-full h-full rounded-lg object-cover' src={Banner} alt=''></img>
                    </span>
                    <span className='w-[20rem] h-60 '>
                        <img className='w-full h-full rounded-lg object-cover' src={Pic4} alt=''></img>
                    </span>
                </span>
                <span className='flex gap-3 mt-6 px-32'>
                    <span className='w-[21rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic5} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic3} alt=''></img>
                    </span>
                    <span className='w-[22rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic6} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic2} alt=''></img>
                    </span>
                </span>
            </span>
            <span className='flex flex-col mt-8'>
                <span className='text-3xl font-semibold text-center mb-5'>Admissions Procedure</span>
                <span className='flex flex-col px-24'>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-white'>
                        <span className=' flex justify-between items-center opacity-80'>
                            <span className='text-xl'>Obtaining the Registration Form</span>
                            <span onClick={() => toggleShowMore('showMore1')}>{showMore.showMore1 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore1 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
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
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-white'>
                        <span className=' text-white flex justify-between items-center opacity-90'>
                            <span className='text-xl'>The following must be submitted with the registration form</span>
                            <span onClick={() => toggleShowMore('showMore2')}>{showMore.showMore2 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore2 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
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
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-white'>
                        <span className=' text-white flex justify-between items-center opacity-80'>
                            <span className='text-xl'>Individual visits to the school</span>
                            <span onClick={() => toggleShowMore('showMore3')}>{showMore.showMore3 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore3 && 
                            <span className='flex flex-col px-6 space-y-2 pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A visit to the school can be arranged for the prospective student and their parents. During this visit the student will be taken on a tour of the school and the parents will have the opportunity to speak with the Head of School and/or the sectional heads. Arrangements can also be made for the student to spend the day in the school.</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-2 py-3 rounded-sm bg-[#f6bc75] text-white'>
                        <span className=' text-white flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Entrance examinations</span>
                            <span onClick={() => toggleShowMore('showMore4')}>{showMore.showMore4 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore4 && 
                            <span className='flex flex-col px-6 space-y-2 pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>The entrance exams take place in December and in April. As stated earlier, students who pass the entrance examinations may be invited in for an interview</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-white'>
                        <span className=' text-white flex justify-between items-center opacity-80'>
                            <span className='text-xl'>Acceptance</span>
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
                    <span className='flex flex-col gap-3 px-2 py-3 rounded-sm bg-[#f6bc75] text-white'>
                        <span className=' text-white flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Orientation for new students</span>
                            <span onClick={() => toggleShowMore('showMore6')}>{showMore.showMore6 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore6 && 
                            <span className='flex flex-col px-6 space-y-2 pt-4 opacity-70'>
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