import React, { useState } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import pic1 from '../assets/Sec.png'
import Pic from '../assets/gallery/Sec.png';
import Pic2 from '../assets/gallery/Sec2.png';
import Pic3 from '../assets/gallery/Pic12.png';
import Pic4 from '../assets/gallery/s4.png';
import Pic5 from '../assets/gallery/Sec3.png';
import Pic6 from '../assets/gallery/pic9.png';
import Pic7 from '../assets/gallery/pic7.png';
import Pic8 from '../assets/gallery/s1.png';
import Pic9 from '../assets/gallery/s2.png';
import Pic10 from '../assets/gallery/s3.png';
import Pic11 from '../assets/gallery/s5.png';
import { BsPlus, BsDot } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi';
import Banner from '../assets/pic4.png';
import Medal from '../assets/Medal.png';

const Section3Content = () => {

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
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10 object-cover'></img>
            <span className='text-4xl opacity-90 tracking-wide font-semibold absolute top-36 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>Secondary School</span>
        </span>
        <div className='flex flex-col mb-8 py-3'>
            <span className='flex pr-24 pl-12 mb-10'>
                <img className='w-[34rem]' src={pic1} alt=''></img>
                <span className='flex flex-col -ml-36 gap-3 pl-12 pt-4 pb-4 bg-[#f6bc75] w-full text-[#061c56]'>
                    <span className=' text-5xl font-bold w-[32rem]'>Welcome Address by Principal </span>
                    <span className='text-sm w-[42rem] space-y-3'>
                        <p>Temple Secondary School (TSS) is a British School which proudly offers unique opportunities for every child (from age 11) to acquire quality education as a springboard for remarkable life achievements and actualisation of dreams. At TSS, there are proven, result-oriented, multi-dimensional approaches with state-of-the-art facilities employed towards discovering every child's potential, positioning them for stardom and excellence. Our staff capacity is poised to passionately deliver the very best in academics, sports, music and other extra-curricular engagements.  Our pastoral care is driven and dispensed with intentionality and professionalism. As an academically inclusive school, our Exceptional Learners Department (ELD) boasts of experts trained to perfectly teach and provide robust care for children with learning challenges. We believe education is a journey, and we are committed to providing a nurturing and inspiring environment for all children to thrive. We educate the whole child because every child is worthy.Welcome to TSS!</p>
                    </span>
                    <span className='flex flex-col gap-1 w-[42rem] items-end italic'>
                        <span className='text-lg '>Mr. David Ogunleye</span>
                        <span className='text-lg '>Principal, Temple School Secondary Section</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col gap-4 pr-32 pl-40 mb-10'>
                    <span className='text-base opacity-80'>Temple Secondary School stands as an international institution dedicated to the holistic development of students aged 11 through 17. Since its establishment in September 2009, our school has grown into a vibrant community of over four hundred and twenty learners, drawing students from across Lagos, various Nigerian states, and even international locations. </span>
                    <span className='text-base opacity-80'>Our unique curriculum, a blend of British, Cambridge, and Nigerian educational frameworks, distinguishes Temple Secondary School as a trailblazer in Nigeria. This distinctive approach, embedded within a robust spiritual environment, equips our students with the tools for academic success and personal growth. We take pride in preparing them not only for the challenges of tertiary education but also for the complexities of life beyond the classroom. </span>
                    <span className='text-base opacity-80'>Temple Secondary School offers a well-rounded education, fostering not just academic excellence but also personal development. Our core skill development focuses on Independence, Critical Thinking, Discipline, Organisation, Collaboration, Leadership, and Creativity. With five academic departments covering Creative and Professional, Languages, Humanities and Social Sciences, Mathematics, and Science, our students are well-prepared for the challenges ahead. </span>
                    <span className='text-base opacity-80'>Our commitment to excellence is reflected in our formative and summative assessments, providing valuable feedback and guidance as students' progress through each term and year. External examinations, including the Cambridge Checkpoint in Year 9 and the Cambridge IGCSE in Year 11, ensure our students meet global academic standards. </span>
                    <span className='text-base opacity-80'>At Temple Secondary School, we envision confident, brilliant, determined, and well-spoken young men and women who can proudly represent our school on any platform, anywhere in the world. Join us on this exciting journey of academic discovery, personal growth, and excellence. </span>
            </span>
            <div className='flex flex-col bg-[#061c56] py-1 lg:px-24 w-screen lg:h-40 gap-2'>
                <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
                <span className='flex lg:justify-between gap-2 items-center lg:px-6 px-4'>
                    <span className='flex lg:gap-6 gap-2 items-center'>
                        <span className='lg:w-32 w-16 h-16 lg:h-32 rounded-full '>
                            <img src={Medal} alt='' className='w-full h-full'></img>
                        </span>
                        <span className='flex flex-col text-[#f6bc75] lg:w-fit w-[12rem]'>
                            <span className='lg:text-3xl text-sm font-medium lg:tracking-wider'>Our Students Are Talented,</span>
                            <span className='lg:text-2xl text-sm font-normal lg:tracking-wider'>passionate, hard-working and full of ideas.</span>
                        </span>
                    </span>
                    <a href='https://basic.edves.net/#tab2' rel="noreferrer" target='_blank'><span className='lg:px-8 lg:py-5 px-1 py-1 text-xl w-fit h-fit font-semibold text-white bg-[#f6bc75] rounded-md drop-shadow-md'>Apply Now</span></a>
                </span>
                <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
            </div>
            <span className='flex flex-col bg-[#f6bc75] py-2 px-24'>
                <hr className='w-full h-1 border-none rounded-md bg-[#061c56]'></hr>
                <span className='text-3xl font-semibold text-center opacity-90 mb-2 my-1 text-[#061c56]'>Campus-specific facilities and features</span>
                <span className='flex justify-center mt-3 gap-20 text-[#061c56]'>
                    <span className='flex flex-col gap-1 pb-3'>
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
                    <span className='flex flex-col gap-1'>
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
            </span>
            <span className='flex flex-col pt-6 pb-10 bg-[#21bdf3] mb-10'>
                <span className='text-3xl font-semibold text-center mb-7 opacity-90 text-white'>Photo Gallery</span>
                <span className='flex px-32 gap-3'>
                    <span className='w-[20rem] h-60 '>
                        <img className='w-full h-full rounded-lg object-cover' src={Pic7} alt=''></img>
                    </span>
                    <span className='w-[40rem] h-60  bg-gray-200'>
                        <img className='w-full h-full rounded-lg object-cover' src={Pic} alt=''></img>
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
                <span className='flex gap-3 mt-6 px-32'>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full object-cover rounded-lg' src={Pic11} alt=''></img>
                    </span>
                    <span className='w-[21rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic8} alt=''></img>
                    </span>
                    <span className='w-[22rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic9} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic10} alt=''></img>
                    </span>
                </span>
            </span>
            <span className='flex flex-col mt-8'>
                <span className='text-3xl font-semibold text-center mb-5 opacity-90'>Admissions Procedure</span>
                <span className='flex flex-col px-24'>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
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
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
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
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-80'>
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
                    <span className='flex flex-col gap-3 px-4 py-3 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
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
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-80'>
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
                    <span className='flex flex-col gap-3 px-4 py-3 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
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

export default Section3Content