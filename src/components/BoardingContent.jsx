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
            <span className='flex px-36 '>
                {/* <img className='w-[23rem] object-right' src='' alt=''></img> */}
                <span className='flex flex-col gap-8 px-16 items-center pt-8 pb-4 bg-[#f6bc75] w-full text-[#061c56]'>
                    <span className=' text-5xl font-bold '>Welcome to Temple School's Boarding</span>
                    <span className='text-xl space-y-3'>
                        <p>Welcome to your new home away from home. Our residence team are happy to go through a warm orientation for the new residents. </p>
                        <p>At Temple, we're excited to open our doors to prospective boarders like you. Our boarding community is a place where safety, comfort, and friendship come together to create a second home.</p>
                        <p>We're dedicated to nurturing your growth, supporting your studies, and making your experience here unforgettable. From engaging activities to caring staff, we're here to help you thrive.</p>
                        <p>Explore our vibrant boarding facilities and discover a place where you belong. Join us on this exciting journey at Temple School!</p>
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
                <span className='text-3xl font-medium text-[#061c56]'>Our Boarding Houses</span>
                
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
                    <span className='lg:text-xl text-lg'>Boys Residence at Temple School</span>
                    <span onClick={() => toggleShowMore('showMore1')}>{showMore.showMore1 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                </span>
                {showMore.showMore1 && 
                    <span className='flex flex-col lg:px-4 space-y-2 opacity-70'>
                        <span className='flex gap-2 items-center'>
                            <span className='text-lg font-normal'>Our Boys Residence is thoughtfully designed to cater to the needs of our young male boarders, providing a safe and comfortable living space conducive to growth and camaraderie.</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-lg font-normal'>Accomodation Details:</span>
                        </span>
                        <span className='flex flex-col gap-2'>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Units: The Boys Residence consists of 6 units, meticulously planned to offer a homely atmosphere and a sense of community.</span>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Capacity: Housing a total of 120 boys, aged between 10 and 16 years, fostering an environment that encourages friendship and mutual respect.</span>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Room Configuration: Each unit features regular rooms accommodating 6 students, designed to offer personal space and comfort. Additionally, highland rooms are available, accommodating 12 students, providing a lively and interactive environment.</span>
                            </span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-lg font-normal'>Community and Bonding:</span>
                        </span>
                        <span className='flex flex-col gap-2'>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Our Boys Residence encourages a sense of responsibility among the students, fostering an inclusive and supportive community.</span>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>With a mix of personal spaces and shared areas, our aim is to create a balance that nurtures individual growth while promoting social interaction and teamwork.</span>
                            </span>
                        </span>
                    </span>
                }
            </span>
        </span>
        <span className='flex flex-col px-36'>
            <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                <span className=' flex justify-between items-center opacity-90'>
                    <span className='lg:text-xl text-lg'>Girls Residence at Temple School</span>
                    <span onClick={() => toggleShowMore('showMore2')}>{showMore.showMore2 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                </span>
                {showMore.showMore2 && 
                    <span className='flex flex-col lg:px-4 space-y-2 opacity-90'>
                        <span className='flex gap-2 items-center'>
                            <span className='text-lg font-normal'>Our Girls Residence is purposefully designed to offer a secure and nurturing environment, providing a comfortable and supportive living space for our young female boarders.</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-lg font-normal'>Accomodation Details:</span>
                        </span>
                        <span className='flex flex-col gap-2'>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Units: The Girls Residence consists of 8 units, meticulously designed to foster a sense of community and well-being among our female students.</span>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Capacity: </span>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Unit Layout: Each unit for girls is designed to accommodate 10 students, offering a balanced and comfortable living arrangement.</span>
                            </span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-lg font-normal'>Room Features:</span>
                        </span>
                        <span className='flex flex-col gap-2'>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Personal Spaces: Rooms are arranged to ensure privacy and comfort, providing students with personal spaces to unwind and study.</span>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Community Areas: Shared spaces are available within the residence, encouraging interaction, bonding, and a supportive atmosphere among the girls.</span>
                            </span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <span className='text-lg font-normal'>Community and Growth:</span>
                        </span>
                        <span className='flex flex-col gap-2'>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>The Girls Residence aims to foster a sense of responsibility and mutual support among the students, providing an environment where friendships flourish.</span>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <span className='text-2xl font-bold'><BsDot /></span>
                                <span className='text-base font-normal'>Through a balance of personal and shared spaces, we strive to create an atmosphere that encourages individual growth while promoting unity and collaboration.</span>
                            </span>
                        </span>
                    </span>
                }
            </span>
        </span>
        <span className='flex flex-col gap-4 px-36 py-6'>
            <span className='flex flex-col lg:gap-2 gap-1'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-2xl font-semibold opacity-90 text-[#061c56]'>Comprehensive Overview of Amenities and Facilities Available Facilities and Amenities</span>
                <span className='flex flex-col gap-2 opacity-90'>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Common Areas: Shared spaces within the Boys Residence are well-maintained, providing areas for recreational activities, study groups, and relaxation.</span>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Supervision: 24/7 supervision is in place, ensuring the safety and well-being of our students at all times.</span>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Security: Stringent security measures are implemented to create a secure living environment for all boarders.</span>
                    </span>
                </span>
                
            </span>
            <span className='flex flex-col lg:gap-2 gap-1'>
                <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                <span className='text-2xl font-semibold opacity-90 text-[#061c56]'>Life at Temple School Boarding Community</span>
                <span className='lg:text-base text-sm opacity-80'>Bonding Activities, Events, and Community-building Initiatives</span>
                <span className='flex flex-col gap-2 opacity-90'>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Swimming: Dive into our swimming program, where students can improve their swimming skills, learn water safety, and enjoy the benefits of this refreshing sport.</span>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Football: Join our football sessions designed to enhance teamwork, coordination, and fitness while enjoying the thrill of the game on our well-maintained fields.</span>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Basketball: Shoot hoops and dribble your way through our basketball program, focusing on skill development, strategy, and sportsmanship.</span>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Tag Rugby: Engage in the exhilarating sport of tag rugby, combining elements of rugby with agility and strategy, offering a fun and fast-paced experience.</span>
                    </span>
                </span>
                <span className='lg:text-base text-sm opacity-80'>These activities are not only enjoyable but also contribute to the physical, mental, and social well-being of our students. They are part of our commitment to providing a well-rounded educational experience that goes beyond the classroom, nurturing skills, teamwork, and a healthy lifestyle.</span>
            </span>
        </span>
        <span className='flex flex-col py-8 lg:px-0 px-4 bg-[#21bdf3] text-white mb-5 lg:mb-10'>
            <span className='lg:text-3xl text-xl font-semibold text-center lg:mb-7 mb-3 opacity-90 text-[#061c56]'>Photo Gallery</span>
            <span className='lg:flex hidden px-32 gap-3'>
                <span className='w-52 h-48' >
                    <img className='w-full h-full rounded-lg object-cover' src={pic3} alt=''></img>
                </span>
                <span className='w-[21rem] h-48 ' >
                    <img className='w-full h-full rounded-lg object-cover' src={pic2} alt=''></img>
                </span>
                <span className='w-52 h-48' >
                    <img className='w-full h-full rounded-lg object-cover' src={pic5} alt=''></img>
                </span>
                <span className='w-[22rem] h-48' >
                    <img className='w-full h-full rounded-lg object-cover' src={pic4} alt=''></img>
                </span>
            </span>
            <span className='lg:flex hidden px-32 gap-3 mt-2'>
                <span className='w-[21rem] h-48 ' >
                    <img className='w-full h-full rounded-lg object-cover' src={pic} alt=''></img>
                </span>
                <span className='w-52 h-48 ' >
                    <img className='w-full h-full rounded-lg object-cover' src={pic1} alt=''></img>
                </span>
                <span className='w-[22rem] h-48 ' >
                    <img className='w-full h-full rounded-lg object-cover' src={pic7} alt=''></img>
                </span>
                <span className='w-52 h-48 ' >
                    <img className='w-full h-full rounded-lg object-cover' src={pic6} alt=''></img>
                </span>
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
        {/* <span className='flex px-36 h-80 mt-5'>
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
        </span> */}
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