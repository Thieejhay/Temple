import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi'
import Banner from '../assets/section.png';
import pic from '../assets/gallery/e2.png';
import pic2 from '../assets/gallery/p2.png';
import pic3 from '../assets/gallery/s2.png';
import pic4 from '../assets/gallery/c2.png';
import { Link } from 'react-router-dom';

const SectionContent = () => {
  return (
    <div className='flex flex-col w-screen'>
        <span className='flex justify-center items-center relative h-[20rem] bg-black'>
             <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10'></img>
            <span className='text-4xl opacity-90 font-semibold absolute top-28 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>Sections</span>
        </span>
        <div className='flex flex-col py-12 px-36 gap-24'>
            <span className='flex flex-col'>
                <span className='uppercase text-lg font-normal text-[#061c56]'>our academics</span>
                <span className='flex justify-between'>
                    <span className='flex flex-col gap-2'>
                        <Link to='/early-years' ><span className='text-3xl font-semibold opacity-90 text-[#061c56]'>Early Years And Foundation Stage</span></Link>
                        <span className='text-sm font-normal w-[32rem] opacity-80'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible. Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                        <span className='flex flex-col gap-1'>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Creche</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Prepschool 1</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Prepschool 2</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Reception</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                        </span>
                        <Link to='/early-years' ><span className='text-sm -mt-3 underline text-[#061c56] font-normal'>Learn more</span></Link>
                    </span>
                    <span className='w-[30rem] h-[25rem] bg-gray-200'>
                        <img className='w-full h-full object-cover rounded-lg' alt='' src={pic}></img>
                    </span>
                </span>
            </span>
            <span className='flex flex-col'>
                <span className='flex justify-between'>
                    <span className='w-[33rem] h-[25rem] bg-gray-200'>
                        <img className='w-full h-full object-cover rounded-lg' alt='' src={pic2}></img>
                    </span>
                    <span className='flex flex-col gap-2'>
                        <Link to='/primary' ><span className='text-3xl font-semibold opacity-90 text-[#061c56]'>Primary School</span></Link>
                        <span className='text-sm font-normal w-[32rem] opacity-80 mb-2'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible. Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                        <span className='flex flex-col gap-1'>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Year 1</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Year 2</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Year 3</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Year 4</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                        </span>
                        <Link to='/primary' ><span className='text-sm -mt-3 underline text-[#061c56] font-normal'>Learn more</span></Link>
                    </span>
                   
                </span>
            </span>
            <span className='flex flex-col'>
                <span className='flex justify-between'>
                    <span className='flex flex-col gap-2'>
                        <Link to='/secondary' ><span className='text-3xl font-semibold opacity-90 text-[#061c56]'>Secondary</span></Link>
                        <span className='text-sm font-normal w-[32rem] opacity-80 pl-'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible. Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                        <span className='flex flex-col gap-1'>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Year 7</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Year 8</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Year 9</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Year 10</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                        </span>
                        <Link to='/secondary' ><span className='text-sm -mt-3 underline text-[#061c56] font-normal'>Learn more</span></Link>
                    </span>
                    <span className='w-[33rem] h-[25rem] bg-gray-200'>
                        <img className='w-full h-full object-cover rounded-lg' alt='' src={pic3}></img>
                    </span>
                </span>
            </span>
            <span className='flex flex-col'>
                <span className='flex justify-between'>
                <span className='w-[33rem] h-[25rem] bg-gray-200'>
                        <img className='w-full h-full object-cover rounded-lg' alt='' src={pic4}></img>
                    </span>
                    <span className='flex flex-col gap-1'>
                        <Link to='/college' ><span className='text-3xl font-semibold opacity-90 mb-2 text-[#061c56]'>College</span></Link>
                        <span className='text-sm font-normal w-[32rem] opacity-80 mb-2'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible. Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                        <span className='flex flex-col gap-2 mt-3'>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Creche</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Prepschool1</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Prepschool2</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                            <span className='flex gap-8 items-center'>
                                <HiOutlineCheckCircle className='w-6 h-6 text-[#061c56]'/>
                                <span className='text-xl font-normal'>Reception</span>
                            </span>
                            <hr className='h-3 w-80 ml-12'></hr>
                        </span>
                        <Link to='/college' ><span className='text-sm -mt-3 underline text-[#061c56] font-normal'>Learn more</span></Link>
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