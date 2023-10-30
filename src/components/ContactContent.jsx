import React, {useState} from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci';
import {FaEnvelope} from 'react-icons/fa'
const ContactContent = () => {
    const [showInfo1, setShowInfo1] = useState(true);
    const [showInfo2, setShowInfo2] = useState(false);
    const [showInfo3, setShowInfo3] = useState(false);

    const handleInfo1Click = () => {
        setShowInfo1(true);
        setShowInfo2(false);
        setShowInfo3(false);
    };
    const handleInfo2Click = () => {
        setShowInfo2(true);
        setShowInfo1(false);
        setShowInfo3(false);
    };
    const handleInfo3Click = () => {
        setShowInfo2(false);
        setShowInfo1(false);
        setShowInfo3(true);
    };

  return (
    <div className='flex flex-col '>
       <div className='flex flex-col py-12 gap-8 justify-center items-center bg-[#EEEEEE]'>
            <span className='flex flex-col gap-3'>
                <span className='text-5xl font-semibold text-center'>Contact Us</span>
                <span className=''>For admission related queries, you can directly contact our schools</span>
            </span>
            <span className='flex rounded-lg shadow-xl w-fit h-fit bg-white'>
                <span className={`${showInfo1 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent'} uppercase font-semibold text-sm px-10 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo1Click}>early rears</span>
                <span className={`${showInfo2 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent'} uppercase font-semibold text-sm px-10 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo2Click}>primary school </span>
                <span className={`${showInfo3 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent'} uppercase font-semibold text-sm px-10 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo3Click}>secondary school</span>
                <span className={`${showInfo1 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent'} uppercase font-semibold text-sm px-10 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo1Click}>college</span>
            </span>

            {showInfo1 &&
                <span className='flex flex-col items-center'>
                    <span className='w-[70rem] h-[25rem] rounded-lg'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.553114659692!2d3.359769642661935!3d6.5498712999999915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d96dfbbffff%3A0xca4f9f46f4156779!2sTemple%20School!5e0!3m2!1sen!2sng!4v1698609310678!5m2!1sen!2sng" width="1100" height="350" title='eyfs' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='flex gap-6 py-8 bg-white rounded-lg w-[62rem] justify-center -mt-20'>
                        <span className='flex gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <CiLocationOn className='w-7 h-7 text-white font-semibold'/>
                            </span>
                            <span className='text-lg font-normal'>Ikorodu Road, Ilupeju, Lagos</span>
                        </span>
                        <span className='flex gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <BsTelephone className='w-6 h-6 text-white font-semibold'/>
                            </span>
                            <span className='text-lg font-normal'>+234 809 280 2741</span>
                        </span>
                        <span className='flex gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaEnvelope className='w-5 h-5 text-white font-semibold'/>
                            </span>
                            <span className='text-lg font-normal'>admissions@templeschoolng.com</span>
                        </span>
                    </span>
                </span>
            }
            {showInfo2 &&
                <span className='flex flex-col items-center'>
                    <span className='w-[70rem] h-[25rem] rounded-lg'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.553114659692!2d3.359769642661935!3d6.5498712999999915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d91187dde05%3A0x157efcdff1768903!2sTemple%20Schools!5e0!3m2!1sen!2sng!4v1698609428520!5m2!1sen!2sng" width="1100" height="350" title='primary' allowfullscreen="" loading="lazy"    referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='flex gap-6 py-8 bg-white rounded-lg w-[62rem] justify-center -mt-20'>
                        <span className='flex gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <CiLocationOn className='w-7 h-7 text-white font-semibold'/>
                            </span>
                            <span className='text-sm font-normal'>1, Temple Drive,off Olusoji Iduwu st,Illupeju, Lagos </span>
                        </span>
                        <span className='flex gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <BsTelephone className='w-6 h-6 text-white font-semibold'/>
                            </span>
                            <span className='text-lg font-normal'>+234 809 280 2741</span>
                        </span>
                        <span className='flex gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaEnvelope className='w-5 h-5 text-white font-semibold'/>
                            </span>
                            <span className='text-lg font-normal'>admissions@templeschoolng.com</span>
                        </span>
                    </span>
                </span>
            }
            {showInfo3 &&
                <span className='flex flex-col items-center'>
                    <span className='w-[70rem] h-[25rem] rounded-lg'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.247990495374!2d3.3464411734619426!3d6.616081622083723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ce1da6ce97%3A0x7a3253802525319c!2sTemple%20Secondary%20School!5e0!3m2!1sen!2sng!4v1698609511841!5m2!1sen!2sng" width="1100" height="350" title='secondary' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='flex gap-6 py-8 bg-white rounded-lg w-[62rem] justify-center -mt-20'>
                        <span className='flex gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <CiLocationOn className='w-7 h-7 text-white font-semibold'/>
                            </span>
                            <span className='text-sm w-80 font-normal'>4-6 Odegbami st, Off Aba Johnson st,Adeniyi Jones,Ikeja,Lagos.</span>
                        </span>
                        <span className='flex gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <BsTelephone className='w-6 h-6 text-white font-semibold'/>
                            </span>
                            <span className='text-lg font-normal'>+234 809 280 2741</span>
                        </span>
                        <span className='flex gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaEnvelope className='w-5 h-5 text-white font-semibold'/>
                            </span>
                            <span className='text-lg font-normal'>admissions@templeschoolng.com</span>
                        </span>
                    </span>
                </span>
            }
            
       </div>
       <div className='flex flex-col bg-[#061c56]/90 gap-20 py-12 justify-center items-center'>
            <span className='flex flex-col text-white gap-3'>
                <span className='text-5xl font-semibold text-center'>General Inquiries</span>
                <span className='text-sm font-normal opacity-80'>For admission related queries, you can directly contact our schools</span>
            </span>
            <span className='flex flex-col gap-5'>
                <span className='flex gap-20'>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Full Name</span>
                        <input className=" w-72 h-10 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Email Address</span>
                        <input className=" w-72 h-10 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex gap-20'>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Phone Number</span>
                        <input className=" w-72 h-10 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Purpose of inquuiry</span>
                        <input className=" w-72 h-10 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex gap-20'>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Subject</span>
                        <input className=" w-72 h-10 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                    <span className='flex-col gap-0 hidden'>
                        <span className='text-xs text-white/40'>Purpose of inquuiry</span>
                        <input className=" w-72 h-10 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex gap-20'>
                    <span className='flex-col gap-0 flex'>
                        <span className='text-xs text-white/40'>I heard about Temple via</span>
                        <input className=" w-[41rem] h-10 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex gap-20'>
                    <span className='flex-col gap-0 flex'>
                        <span className='text-xs text-white/40'>Message</span>
                        <input className=" w-[41rem] h-10 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex justify-end items-end'><span className='px-12 py-2 uppercase text-[#061c56] bg-[#e5b87c] rounded-md w-fit'>send</span></span>
            </span>
       </div>
    </div>
  )
}

export default ContactContent;