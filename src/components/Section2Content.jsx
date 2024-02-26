import React , { useState } from 'react';
// import { HiOutlineCheckCircle } from 'react-icons/hi';
import pic1 from '../assets/Prim.png';
import pic12 from '../assets/AMINA.png'
import Pic from '../assets/gallery/Primary6.png';
import Pic2 from '../assets/gallery/Primary.png';
import Pic3 from '../assets/gallery/pic3.png';
import Pic4 from '../assets/gallery/Primary4.png';
import Pic5 from '../assets/gallery/Primary2.png';
import Pic6 from '../assets/gallery/Primary5.png';
import Pic7 from '../assets/gallery/pic2.png';
import Pic8 from '../assets/gallery/ps1.png';
import Pic9 from '../assets/gallery/p2.png';
import Pic10 from '../assets/gallery/p3.png';
import Pic11 from '../assets/gallery/p4.png';
import { BsPlus, BsDot } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi';
import Banner from '../assets/Pry.png';
import Medal from '../assets/Medal.png';

const Section2Content = () => {

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
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10 object-cover'></img>
            <span className='lg:text-4xl text-2xl opacity-90 tracking-wide font-semibold absolute lg:top-36 top-16 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>Primary School</span>
        </span>
        <div className='flex flex-col  mb-8 py-3'>
            <span className='flex lg:flex-row flex-col-reverse lg:px-32 lg:mb-10 mb-5'>
                <img className='w-[20rem] h-[27rem] lg:flex hidden' src={pic1} alt=''></img>
                <span className='flex flex-col gap-3 lg:pl-12 px-4 pt-8  bg-[#f6bc75] w-full text-[#061c56]'>
                    <span className='lg:text-5xl text-2xl font-bold lg:w-[33rem]'>Welcome Address by Head of Primary School </span>
                    <span className='text-sm lg:w-[45rem] space-y-2 text-[#061c56]'>
                        <p>We are thrilled to welcome you to our Temple School Primary Section, where we capture the essence of what makes our school an extraordinary place of learning and growth!</p>
                        <p>We are dedicated to nurturing young minds, fostering creativity, and inspiring a lifelong love for learning. Our web page is a window into the vibrant world of our primary school, where every day is filled with curiosity, discovery, and endless possibilities.</p>
                        <p>Our web page does not just showcase our school; it is a testament to the incredible journey of growth and discovery that each child undertakes at Temple Primary School because every child is worthy! We invite you to engage with us, celebrate our successes, and join our community in shaping the future leaders of tomorrow.</p>
                        <p>Stay tuned for updates, achievements, and the magic that happens within our school walls.</p>
                    </span>
                    <span className='flex flex-col gap-1 lg:w-[45rem] items-end italic'>
                        <img className='w-[11rem] h-[11rem] flex items-start lg:hidden rounded-lg' src={pic12} alt=''></img>
                        <span className='lg:text-lg text-base '>Mrs. Amina Tswanya</span>
                        <span className='lg:text-lg text-base '>Head of Temple Primary Section</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col px-4 lg:px-0 lg:gap-6 gap-2 lg:pr-32 lg:pl-36 lg:mb-10 mb-5'>
                    <span className='lg:text-base  text-sm opacity-80'>Welcome to Temple Primary School, where our commitment to providing a distinctive hybrid curriculum stands as the cornerstone of our educational approach. In our primary section, we prioritize a broad and balanced education that fosters the holistic development of our students, encompassing spiritual, moral, cultural, mental, and physical dimensions. Our educators set high expectations, acknowledging and addressing the unique needs of each learner. Lessons are thoughtfully crafted based on a nuanced understanding of the diversities among our pupils, including those with exceptional abilities. </span>
                    <span className='lg:text-base text-sm opacity-80'>The primary curriculum at Temple is a harmonious fusion of the Cambridge Curriculum, National Curriculum, and Nigerian Curriculum. This integrative approach is realized through cross-curricular themes, creating a dynamic and comprehensive learning experience. Core subjects such as English, Mathematics, Science, and Information Communication Technology (I.C.T.) form the foundation, while our elective curriculum offers a diverse range of studies including History, Geography, French, Religious Education, Citizenship, Global Perspectives, Art, Music, and Physical Education (P.E). </span>
                    <span className='lg:text-base text-sm opacity-80'>In addition to the academic curriculum, our learners actively participate in co-curricular activities like swimming, coding, and robotics, while engaging in extra-curricular events such as taekwondo, ballet, drama, debate, and contemporary dance. As a testament to their academic prowess, our pupils sit for the Cambridge Checkpoint in Year 6. </span>
                    <span className='lg:text-base text-sm opacity-80'>Join us at Temple Primary School, where we take pride in cultivating well-rounded individuals and celebrating our champions who excel in the Temple Primary School Cambridge Checkpoint. </span>
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
                            <span className='lg:text-2xl text-xs lg:w-fit w-[10rem] font-normal lg:tracking-wider'>passionate, hard-working and full of ideas.</span>
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
                    <span className='w-[20rem] h-60 overflow-hidden flex'>
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic7} alt=''></img>
                    </span>
                    <span className='w-[40rem] h-60 overflow-hidden flex'>
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic} alt=''></img>
                    </span>
                    <span className='w-[20rem] h-60 overflow-hidden flex'>
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic4} alt=''></img>
                    </span>
                </span>
                <div className='flex lg:hidden gap-3'>
                    <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic7} alt=''></img></span>
                    <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic} alt=''></img></span>
                </div>
                <div className='flex lg:hidden gap-3 mt-3'>
                    <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic5} alt=''></img></span>
                    <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic4} alt=''></img></span>
                </div>
                <div className='flex lg:hidden gap-3 mt-3'>
                    <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic3} alt=''></img></span>
                    <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic6} alt=''></img></span>
                </div>
                <div className='flex lg:hidden gap-3 mt-3'>
                    <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic8} alt=''></img></span>
                    <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic2} alt=''></img></span>
                </div>
                <div className='flex lg:hidden gap-3 mt-3'>
                    <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic11} alt=''></img></span>
                    <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic9} alt=''></img></span>
                </div>
                <span className='lg:flex hidden gap-3 mt-6 px-32'>
                    <span className='w-[21rem] h-48 overflow-hidden' >
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic5} alt=''></img>
                    </span>
                    <span className='w-52 h-48 overflow-hidden' >
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic3} alt=''></img>
                    </span>
                    <span className='w-[22rem] h-48 overflow-hidden' >
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic6} alt=''></img>
                    </span>
                    <span className='w-52 h-48 overflow-hidden' >
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic2} alt=''></img>
                    </span>
                </span>
                <span className='lg:flex hidden gap-3 mt-6 px-32'>
                    <span className='w-52 h-48 overflow-hidden' >
                        <img className='w-full h-full rounded-lg' src={Pic8} alt=''></img>
                    </span>
                    <span className='w-[21rem] h-48 overflow-hidden' >
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic11} alt=''></img>
                    </span>
                    <span className='w-[22rem] h-48 overflow-hidden' >
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic9} alt=''></img>
                    </span>
                    <span className='w-52 h-48 overflow-hidden' >
                        <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic10} alt=''></img>
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
                                    <span className='text-lg font-normal'>Pick up registration forms from any section of the school (Early Years/Primary/Secondary). See respective addresses below.</span>
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

export default Section2Content;