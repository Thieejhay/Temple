import React, {useState} from 'react';
import Banner from '../assets/dd.png';
// import HomeAlumna from './HomeAlumna';
// import { HiOutlineCheckCircle } from 'react-icons/hi';
import pic from '../assets/gallery/bd.png'
import pic1 from '../assets/gallery/bd7.png'
import pic2 from '../assets/gallery/bd1.png'
import pic3 from '../assets/gallery/bd2.png'
import pic4 from '../assets/gallery/bd4.png'
import pic5 from '../assets/gallery/bd8.png'
import pic6 from '../assets/gallery/bd9.png'
import pic7 from '../assets/gallery/bd10.png'
import { BsPlus, BsDot } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi';

const BoardingContent = () => {

    const [showMore, setShowMore] = useState({
        showMore1: false,
        showMore2: false,
        showMore3: false,
        // showMore4: false,
        // showMore5: false,
        // showMore6: false,
      });
    
      const toggleShowMore = (key) => {
        setShowMore((prevState) => ({
          ...Object.fromEntries(Object.entries(prevState).map(([k, v]) => (k === key ? [k, !v] : [k, false]))),
        }));
      };


  return (
    <div className='flex flex-col w-screen'>
        <span className='flex justify-center items-center relative h-[20rem] bg-black'>
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10'></img>
            <span className='text-4xl opacity-90 tracking-wide font-semibold absolute top-36 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>Boarding</span>
        </span>
        <span className='flex flex-col gap-10 py-3 mb-8'>
            <span className='flex px-36'>
                <img className='w-[23rem] h-[25rem] object-right' src='' alt=''></img>
                <span className='flex flex-col gap-8 pl-12 pt-8 pb-4 bg-[#f6bc75] w-full text-[#061c56]'>
                    <span className=' text-5xl font-bold w-[40rem]'>Welcome Message from the Head of the Boarding Program</span>
                    <span className='text-base w-[42rem] space-y-3'>
                        <p>We Welcome our students to their new home away from home. Our residence team are happy to go through a warm orientation for the new students</p>
                    </span>
                    {/* <span className='flex flex-col gap-1 w-[42rem] items-end italic'>
                        <span className='text-lg '>Mrs. Oseri Oweye</span> 
                        <span className='text-lg '>Head of ELD</span>
                    </span> */}
                </span>
            </span>
        </span>
        <span className='flex px-36 items-center justify-between mb-4'>
            <span className='flex flex-col gap-2'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-3xl font-medium'>Our Boarding Houses</span>
                
            </span>
            <span className='flex gap-3'>
                <span className='w-80 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                    <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic} alt=''></img>
                </span>
                <span className='w-80 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                    <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic1} alt=''></img>
                </span>
            </span>
        </span>
        <span className='flex flex-col px-36'>
            <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                <span className=' flex justify-between items-center opacity-80'>
                    <span className='lg:text-xl text-lg'>Residence - Boys</span>
                    <span onClick={() => toggleShowMore('showMore1')}>{showMore.showMore1 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                </span>
                {showMore.showMore1 && 
                    <span className='flex flex-col lg:px-4 space-y-2 opacity-70'>
                        <span className='flex gap-2 items-center'>
                            <span className='text-xl font-bold'><BsDot /></span>
                            <span className='text-lg font-normal'>The Boys Residence is made up of 6 units providing accommodation for a total of 120 boys between the ages of 10 to 16 and Each unit for boys accommodates 6 students in a regular room and 12 students in the highland room</span>
                        </span>
                        <span className='flex justify-center gap-5'>
                            <span className='w-72 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                                <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic2} alt=''></img>
                            </span>
                            <span className='w-72 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                                <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic3} alt=''></img>
                            </span>
                        </span>
                        <span className='flex justify-center gap-3'>
                            <span className='w-72 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                                <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic4} alt=''></img>
                            </span>
                            <span className='w-72 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                                <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic5} alt=''></img>
                            </span>
                        </span>
                    </span>
                }
            </span>
        </span>
        <span className='flex flex-col px-36'>
            <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                <span className=' flex justify-between items-center opacity-90'>
                    <span className='lg:text-xl text-lg'>Residence - Girls</span>
                    <span onClick={() => toggleShowMore('showMore2')}>{showMore.showMore2 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                </span>
                {showMore.showMore2 && 
                    <span className='flex flex-col lg:px-4 space-y-2 opacity-90'>
                        <span className='flex gap-2 items-center'>
                            <span className='text-xl font-bold'><BsDot /></span>
                            <span className='text-lg font-normal'>The Girls Residence comprises of 8 units providing accommodation for a total of 80 girls between the ages of 10 and 16. Each unit for girls accommodates 10 students We are presently looking to expand the accommodation for our girls.</span>
                        </span>
                        <span className='flex justify-center gap-5'>
                            <span className='w-72 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                                <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic} alt=''></img>
                            </span>
                            <span className='w-72 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                                <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic1} alt=''></img>
                            </span>
                        </span>
                        <span className='flex justify-center gap-3'>
                            <span className='w-72 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                                <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic7} alt=''></img>
                            </span>
                            <span className='w-72 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                                <img className='w-full h-full rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={pic6} alt=''></img>
                            </span>
                        </span>
                    </span>
                }
            </span>
        </span>
        {/* <span className='flex flex-col px-36 gap-4 mb-8 mt-4'>
            <span className='flex flex-col gap-2'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-xl font-medium'>Daily Routine:</span>
                <span className='text-lg font-light opacity-80 w-80 leading-5'>Schedule for Boarding Students Morning Wake-up and Evening Bedtime Routine Study Sessions and Free Time</span>
            </span>
            <span className='flex gap-3'>
                <span className='w-full h-32 bg-gray-200 rounded-lg'></span>
            </span>
        </span> */}
        <span className='flex px-36 h-80 mt-5'>
            <span className='bg-gray-200 w-[50%]'></span>
            <span className='bg-gray-100 w-[50%] flex flex-col gap-2 pl-20 justify-center'>
                <span className='text-xl font-medium'>Nutritious Dining:</span>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-lg font-light opacity-80 w-[22rem] leading-5'>Overview of Boarding Dining Facilities Sample Menu and Dietary Accommodations</span>
            </span>
        </span>
        <span className='flex px-36 h-80 mb-5'>
            <span className='bg-gray-100 w-[50%] flex flex-col gap-2 pl-20 justify-center'>
                <span className='text-xl font-medium'>Academic Support</span>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-lg font-light opacity-80 w-[22rem] leading-5'>Boarding Tutors and Support Staff Study Groups and Resources Available</span>
            </span>
            <span className='bg-gray-200 w-[50%]'></span>
        </span>
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
        <span className='flex flex-col px-36 mb-5'>
            <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                <span className=' flex justify-between items-center opacity-80'>
                    <span className='lg:text-xl text-lg'>Rules and Procedures</span>
                    <span onClick={() => toggleShowMore('showMore3')}>{showMore.showMore3 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                </span>
                {showMore.showMore3 && 
                    <span className='flex flex-col lg:px-6 space-y-2 lg:pt-4 opacity-70'>
                        <span className='flex gap-2 items-center'>
                            <span className='text-xl font-bold'><BsDot /></span>
                            <span className='text-lg font-normal'>Compulsory Items - Hand sanitizers, Sanitizing Spray(500ml), Face Mask(2 pks of 50), Antibacterial wipe, Insecticide</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-xl font-bold'><BsDot /></span>
                            <span className='text-lg font-normal'>Mentors/Mentec Support - A senior (usually a yr 10 student) is assigned to mentor a new boarder to create a partnership of support and case for the new boarder.</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-xl font-bold'><BsDot /></span>
                            <span className='text-lg font-normal'>Studies/Prep - Prep is compulsory. Students benefit from the staff support for reinforcement on academic goals.</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-xl font-bold'><BsDot /></span>
                            <span className='text-lg font-normal'>Child protection - Unauthorised visitors are not permitted to see the children. Relevant permission from the Head of Boarding or the Head of School is required to enable any type of visitation.</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-xl font-bold'><BsDot /></span>
                            <span className='text-lg font-normal'>Code of conduct- Proper dressing is a must for a boarder, both in and out of the hostel. Correct school uniform and day wear must be worn daily Boys are to have low cut not higher than half an inch, Girls to have neatly woven cornrows or braided hair(natural colour attachment only).</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-xl font-bold'><BsDot /></span>
                            <span className='text-lg font-normal'>Communication - Parents are allowed to call their childrem or wards on call days. Friday 5pm to 6.30pm, Saturdays and Sundays 2pm to 6pm</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-xl font-bold'><BsDot /></span>
                            <span className='text-lg font-normal'>Health - The Boarding house has a qualified day nurse. medically trained house managers for first aid treatment and a 24 hour staffed medical center very close to the boarding house for emergencies.</span>
                        </span>
                    </span>
                }
            </span>
        </span>
        {/* <span className='flex px-36 items-center justify-between mt-8 mb-4'>
            <span className='flex flex-col gap-2'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-xl font-medium'>Our Boarding Houses</span>
                <span className='text-lg font-light opacity-80 w-80 leading-5'>House Names and Descriptions Facilities and Amenities in Each House</span>
            </span>
            <span className='flex gap-3'>
                <span className='w-80 h-40 bg-gray-200 rounded-lg'></span>
                <span className='w-80 h-40 bg-gray-200 rounded-lg'></span>
            </span>
        </span>
        <span className='flex flex-col px-36 gap-4 mb-6'>
            <span className='flex flex-col gap-2'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-xl font-medium'>Daily Routine:</span>
                <span className='text-lg font-light opacity-80 w-80 leading-5'>Schedule for Boarding Students Morning Wake-up and Evening Bedtime Routine Study Sessions and Free Time</span>
            </span>
            <span className='flex gap-3'>
                <span className='w-full h-32 bg-gray-200 rounded-lg'></span>
            </span>
        </span> */}
        {/* <HomeAlumna /> */}
    </div>
  )
}

export default BoardingContent;