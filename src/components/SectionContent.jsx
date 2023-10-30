import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi'
import Banner from '../assets/section.png';
import pic from '../assets/gallery/e2.png';
import pic2 from '../assets/gallery/p2.png';
import pic3 from '../assets/gallery/s2.png';
import pic4 from '../assets/gallery/c2.png';

const SectionContent = () => {
  return (
    <div className='flex flex-col w-screen'>
        <span className='flex justify-center items-center relative h-[20rem] bg-black'>
             <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10'></img>
            <span className='text-6xl tracking-wider font-semibold absolute top-28 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>Sections</span>
        </span>
        <div className='flex flex-col py-3 px-32 gap-32'>
            <span className='flex flex-col'>
                <span className='uppercase text-lg font-normal text-[#061c56]'>our academics</span>
                <span className='flex justify-between'>
                    <span className='flex flex-col gap-5'>
                        <span className='text-3xl font-semibold opacity-90'>Early Years</span>
                        <span className='text-sm font-normal w-[32rem] opacity-80'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible. Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                        <span className='flex flex-col gap-2 mt-3'>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Creche</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Prepschool1</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Prepschool2</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Reception</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                        </span>
                    </span>
                    <span className='w-[30rem] h-[25rem] bg-gray-200'>
                        <img className='w-full h-full object-cover rounded-lg' alt='' src={pic}></img>
                    </span>
                </span>
            </span>
            <span className='flex flex-col'>
                <span className='flex justify-between px-6'>
                    <span className='w-[33rem] h-[25rem] bg-gray-200'>
                        <img className='w-full h-full object-cover rounded-lg' alt='' src={pic2}></img>
                    </span>
                    <span className='flex flex-col gap-2'>
                        <span className='uppercase text-lg font-normal text-[#061c56] -mt-12'>our academics</span>
                        <span className='text-3xl font-semibold opacity-90 mb-2'>Primary</span>
                        <span className='text-sm font-normal w-[32rem] opacity-80 mb-2'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible. Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                        <span className='flex flex-col gap-2 mt-3'>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Creche</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Prepschool1</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Prepschool2</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Reception</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                        </span>
                    </span>
                   
                </span>
            </span>
            <span className='flex flex-col'>
                <span className='uppercase text-lg font-normal text-[#061c56]'>our academics</span>
                <span className='flex justify-between'>
                    <span className='flex flex-col gap-5'>
                        <span className='text-3xl font-semibold opacity-90'>Secondary</span>
                        <span className='text-sm font-normal w-[32rem] opacity-80'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible. Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                        <span className='flex flex-col gap-2 mt-3'>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Creche</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Prepschool1</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Prepschool2</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Reception</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                        </span>
                    </span>
                    <span className='w-[33rem] h-[25rem] bg-gray-200'>
                        <img className='w-full h-full object-cover rounded-lg' alt='' src={pic3}></img>
                    </span>
                </span>
            </span>
            <span className='flex flex-col'>
                <span className='flex justify-between px-6'>
                <span className='w-[33rem] h-[25rem] bg-gray-200'>
                        <img className='w-full h-full object-cover rounded-lg' alt='' src={pic4}></img>
                    </span>
                    <span className='flex flex-col gap-2'>
                        <span className='uppercase text-lg font-normal text-[#061c56] -mt-12'>our academics</span>
                        <span className='text-3xl font-semibold opacity-90 mb-2'>College</span>
                        <span className='text-sm font-normal w-[32rem] opacity-80 mb-2'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible. Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                        <span className='flex flex-col gap-2 mt-3'>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Creche</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Prepschool1</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Prepschool2</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-medium'>Reception</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                        </span>
                    </span>
                   
                </span>
            </span>
        </div>
        {/* <span className='flex flex-col py-20 gap-12 bg-[#061c56]/50 justify-center items-center '>
            <span className='uppercase text-3xl font-medium'>admissions policies</span>
            <span className='flex gap-4'>
                <span className='flex flex-col rounded-lg p-4 gap-3 w-fit bg-white shadow-xl'>
                    <span className='flex gap-2 items-center'>
                        <span className='w-10 h-10 rounded-full bg-[#061c56]'></span>
                        <span className='text-2xl font-medium w-24'>Early Years</span>
                    </span>
                    <span className='text-xs w-[16rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione in repellat aliquid voluptatem. Veritatis odio quaerat </span>
                </span>
                <span className='flex flex-col rounded-lg p-4 gap-3 w-fit bg-white shadow-xl'>
                    <span className='flex gap-2 items-center'>
                        <span className='w-10 h-10 rounded-full bg-[#061c56]'></span>
                        <span className='text-2xl font-medium w-24'>Primary School </span>
                    </span>
                    <span className='text-xs w-[16rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione in repellat aliquid voluptatem. Veritatis odio quaerat </span>
                </span>
                <span className='flex flex-col rounded-lg p-4 gap-3 w-fit bg-white shadow-xl'>
                    <span className='flex gap-2 items-center'>
                        <span className='w-10 h-10 rounded-full bg-[#061c56]'></span>
                        <span className='text-2xl font-medium w-24'>Secondary School</span>
                    </span>
                    <span className='text-xs w-[16rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione in repellat aliquid voluptatem. Veritatis odio quaerat </span>
                </span>
                <span className='flex flex-col rounded-lg p-4 gap-3 w-fit bg-white shadow-xl'>
                    <span className='flex gap-2 items-center'>
                        <span className='w-10 h-10 rounded-full bg-[#061c56]'></span>
                        <span className='text-2xl font-medium w-24'>College Years</span>
                    </span>
                    <span className='text-xs w-[16rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione in repellat aliquid voluptatem. Veritatis odio quaerat </span>
                </span>
            </span>
        </span> */}
    </div>
  )
}

export default SectionContent;