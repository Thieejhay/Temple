import React, {useState} from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci';
import {FaEnvelope} from 'react-icons/fa'
const ContactContent = () => {
    const [showInfo1, setShowInfo1] = useState(true);
    const [showInfo2, setShowInfo2] = useState(false);
    const [showInfo3, setShowInfo3] = useState(false);
    const [showInfo4, setShowInfo4] = useState(false);

    const handleInfo1Click = () => {
        setShowInfo1(true);
        setShowInfo2(false);
        setShowInfo3(false);
        setShowInfo4(false);
    };
    const handleInfo2Click = () => {
        setShowInfo2(true);
        setShowInfo1(false);
        setShowInfo3(false);
        setShowInfo4(false);
    };
    const handleInfo3Click = () => {
        setShowInfo2(false);
        setShowInfo1(false);
        setShowInfo3(true);
        setShowInfo4(false);
    };
    const handleInfo4Click = () => {
        setShowInfo2(false);
        setShowInfo1(false);
        setShowInfo4(true);
        setShowInfo3(false);
    };

  return (
    <div className='flex flex-col '>
       <div className='flex flex-col py-12 gap-8 justify-center items-center bg-[#EEEEEE]'>
            <span className='flex flex-col gap-3'>
                <span className='text-4xl font-semibold opacity-90 text-center'>Contact Us</span>
            </span>
            <span className='flex rounded-lg shadow-xl w-fit h-fit bg-white'>
                <span className={`${showInfo1 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent border-r-2 border-r-black/10'} uppercase font-semibold lg:text-sm text-xs px-4 lg:px-10 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo1Click}>early years</span>
                <span className={`${showInfo2 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent border-r-2 border-r-black/10'} uppercase font-semibold lg:text-sm text-xs px-4 lg:px-10 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo2Click}>primary school </span>
                <span className={`${showInfo3 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent border-r-2 border-r-black/10'} uppercase font-semibold lg:text-sm text-xs px-4 lg:px-10 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo3Click}>secondary school</span>
                <span className={`${showInfo4 ? 'border-b-2 border-b-[#061c56]' : 'border-b-2 border-transparent border-r-2 border-r-black/10'} uppercase font-semibold lg:text-sm text-xs px-4 lg:px-10 py-5 border-r border-black/10 cursor-pointer`} onClick={handleInfo4Click}>college</span>
            </span>

            {showInfo1 &&
                <span className='flex flex-col items-center'>
                    <span className='w-[70rem] h-[25rem] rounded-lg lg:flex hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.553114659692!2d3.359769642661935!3d6.5498712999999915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d96dfbbffff%3A0xca4f9f46f4156779!2sTemple%20School!5e0!3m2!1sen!2sng!4v1698609310678!5m2!1sen!2sng" width="1100" height="350" title='eyfs' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='w-[23rem] h-[25rem] rounded-lg flex lg:hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.553114659692!2d3.359769642661935!3d6.5498712999999915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d96dfbbffff%3A0xca4f9f46f4156779!2sTemple%20School!5e0!3m2!1sen!2sng!4v1698609310678!5m2!1sen!2sng" width="500" height="350" title='eyfs' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='flex lg:gap-6 gap-2 lg:py-8 py-3 px-2 lg:px-0 bg-white rounded-lg lg:w-[62rem] lg:justify-center -mt-20'>
                        <span className='flex lg:gap-3 gap-1 items-center'>
                            <span className='bg-[#061c56] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex justify-center items-center'>
                                <CiLocationOn className='lg:w-7 lg:h-7 w-4 h-4 text-white lg:font-semibold'/>
                            </span>
                            <span className='lg:text-lg text-xs font-normal w-[7rem] lg:w-fit'>213, Ikorodu Road, Ilupeju, Lagos</span>
                        </span>
                        <span className='flex lg:gap-3 gap-1 items-center'>
                            <span className='bg-[#061c56] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex justify-center items-center'>
                                <BsTelephone className='lg:w-6 w-4 lg:h-6 h-4 text-white font-semibold'/>
                            </span>
                            <span className='lg:text-lg text-xs font-normal'>+234 809 520 0447</span>
                        </span>
                        <span className='lg:flex hidden gap-3 items-center'>
                            <span className='bg-[#061c56] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex justify-center items-center'>
                                <FaEnvelope className='w-5 h-5 text-white font-semibold'/>
                            </span>
                            <span className='lg:text-lg text-sm font-normal'>admissions@templeschoolng.com</span>
                        </span>
                    </span>
                </span>
            }
            {showInfo2 &&
                <span className='flex flex-col items-center'>
                    <span className='w-[70rem] h-[25rem] rounded-lg lg:flex hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.553114659692!2d3.359769642661935!3d6.5498712999999915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d91187dde05%3A0x157efcdff1768903!2sTemple%20Schools!5e0!3m2!1sen!2sng!4v1698609428520!5m2!1sen!2sng" width="1100" height="350" title='primary' allowFullScreen="" loading="lazy"    referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='w-[23rem] h-[25rem] rounded-lg flex lg:hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.553114659692!2d3.359769642661935!3d6.5498712999999915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d91187dde05%3A0x157efcdff1768903!2sTemple%20Schools!5e0!3m2!1sen!2sng!4v1698609428520!5m2!1sen!2sng" width="500" height="350" title='primary' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='flex lg:gap-6 gap-2 lg:py-8 py-3 px-2 lg:px-0 bg-white rounded-lg lg:w-[62rem] lg:justify-center -mt-20'>
                        <span className='flex lg:gap-3 gap-1 items-center'>
                            <span className='bg-[#061c56] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex justify-center items-center'>
                                <CiLocationOn className='lg:w-7 lg:h-7 w-4 h-4 text-white lg:font-semibold'/>
                            </span>
                            <span className='lg:text-lg text-xs font-normal w-[7rem] lg:w-fit'>1, Temple Drive,off Olusoji Iduwu st,Illupeju, Lagos </span>
                        </span>
                        <span className='flex lg:gap-3 gap-1 items-center'>
                            <span className='bg-[#061c56] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex justify-center items-center'>
                                <BsTelephone className='lg:w-6 w-4 lg:h-6 h-4 text-white font-semibold'/>
                            </span>
                            <span className='lg:text-lg text-xs font-normal'>+234 817 874 3503</span>
                        </span>
                        <span className='lg:flex hidden gap-3 items-center'>
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
                    <span className='w-[70rem] h-[25rem] rounded-lg lg:flex hidden '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.247990495374!2d3.3464411734619426!3d6.616081622083723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ce1da6ce97%3A0x7a3253802525319c!2sTemple%20Secondary%20School!5e0!3m2!1sen!2sng!4v1698609511841!5m2!1sen!2sng" width="1100" height="350" title='secondary' allowFullScreen=""  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='w-[23rem] h-[25rem] rounded-lg flex lg:hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.247990495374!2d3.3464411734619426!3d6.616081622083723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ce1da6ce97%3A0x7a3253802525319c!2sTemple%20Secondary%20School!5e0!3m2!1sen!2sng!4v1698609511841!5m2!1sen!2sng" width="500" height="350" title='secondary' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='flex lg:gap-6 gap-2 lg:py-8 py-3 px-2 lg:px-0 bg-white rounded-lg lg:w-[62rem] lg:justify-center -mt-20'>
                        <span className='flex lg:gap-3 gap-1 items-center'>
                            <span className='bg-[#061c56] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex justify-center items-center'>
                                <CiLocationOn className='lg:w-7 lg:h-7 w-4 h-4 text-white lg:font-semibold'/>
                            </span>
                            <span className='lg:text-lg text-xs font-normal w-[7rem] lg:w-80'>4-6 Odegbami st, Off Aba Johnson st,Adeniyi Jones,Ikeja,Lagos.</span>
                        </span>
                        <span className='flex lg:gap-3 gap-1 items-center'>
                            <span className='bg-[#061c56] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex justify-center items-center'>
                                <BsTelephone className='lg:w-6 w-4 lg:h-6 h-4 text-white font-semibold'/>
                            </span>
                            <span className='lg:text-lg text-xs font-normal'>+234 908 155 0288</span>
                        </span>
                        <span className='lg:flex hidden gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaEnvelope className='w-5 h-5 text-white font-semibold'/>
                            </span>
                            <span className='text-lg font-normal'>admissions@templeschoolng.com</span>
                        </span>
                    </span>
                </span>
            }
            {showInfo4 &&
                <span className='flex flex-col items-center'>
                    <span className='w-[70rem] h-[25rem] rounded-lg lg:flex hidden '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.403959471664!2d3.3544527737641023!3d6.597268684536505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923850265f1b%3A0xd6ffffe8095fb69e!2s8%20Oyediran%20Cl%2C%20Allen%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700014150863!5m2!1sen!2sng" width="1100" height="350" title='college' allowFullScreen=""  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='w-[23rem] h-[25rem] rounded-lg flex lg:hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.403959471664!2d3.3544527737641023!3d6.597268684536505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923850265f1b%3A0xd6ffffe8095fb69e!2s8%20Oyediran%20Cl%2C%20Allen%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700014150863!5m2!1sen!2sng" width="500" height="350" title='college' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                    <span className='flex lg:gap-6 gap-2 lg:py-8 py-3 px-2 lg:px-0 bg-white rounded-lg lg:w-[62rem] lg:justify-center -mt-20'>
                        <span className='flex lg:gap-3 gap-1 items-center'>
                            <span className='bg-[#061c56] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex justify-center items-center'>
                                <CiLocationOn className='lg:w-7 lg:h-7 w-4 h-4 text-white lg:font-semibold'/>
                            </span>
                            <span className='lg:text-lg text-xs font-normal w-[7rem] lg:w-80'>8 Oyediran close, Opebi, Ikeja, Lagos</span>
                        </span>
                        <span className='flex lg:gap-3 gap-1 items-center'>
                            <span className='bg-[#061c56] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex justify-center items-center'>
                                <BsTelephone className='lg:w-6 w-4 lg:h-6 h-4 text-white font-semibold'/>
                            </span>
                            <span className='lg:text-lg text-xs font-normal'>+234 818 724 9423</span>
                        </span>
                        <span className='lg:flex hidden gap-3 items-center'>
                            <span className='bg-[#061c56] w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaEnvelope className='w-5 h-5 text-white font-semibold'/>
                            </span>
                            <span className='text-lg font-normal'>admissions@templeschoolng.com</span>
                        </span>
                    </span>
                </span>
            }
            
       </div>
       <div className='flex flex-col bg-[#061c56]/90 lg:gap-20 gap-10 lg:py-12 py-6 lg:justify-center lg:items-center'>
            <span className='flex flex-col text-white lg:gap-3 gap-1 '>
                <span className='lg:text-3xl text-xl font-semibold text-center'>General Inquiries</span>
                <span className='text-sm font-normal opacity-80 text-center px-4'>For admission related queries, you can directly contact our schools</span>
            </span>
            <span className='flex flex-col gap-5 px-4'>
                <span className='flex lg:flex-row flex-col gap-5 lg:gap-20'>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Full Name</span>
                        <input className=" w-80 lg:h-10 h-6 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Email Address</span>
                        <input className=" w-80 lg:h-10 h-6 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex lg:flex-row flex-col gap-5 lg:gap-20'>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Phone Number</span>
                        <input className=" w-80 lg:h-10 h-6 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Purpose of inquuiry</span>
                        <input className=" w-80 lg:h-10 h-6 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex lg:flex-row flex-col gap-5 lg:gap-20'>
                    <span className='flex flex-col gap-0'>
                        <span className='text-xs text-white/40'>Subject</span>
                        <input className=" w-80 lg:h-10 h-6 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                    <span className='flex-col gap-0 hidden'>
                        <span className='text-xs text-white/40'>Purpose of inquuiry</span>
                        <input className=" w-80 lg:h-10 h-6 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex lg:flex-row flex-col gap-5 lg:gap-20'>
                    <span className='flex-col gap-0 flex'>
                        <span className='text-xs text-white/40'>I heard about Temple via</span>
                        <input className=" lg:w-[41rem] w-80 lg:h-10 h-6 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex lg:flex-row flex-col gap-5 lg:gap-20'>
                    <span className='flex-col gap-0 flex'>
                        <span className='text-xs text-white/40'>Message</span>
                        <input className=" lg:w-[41rem] w-80 lg:h-10 h-6 border-b border-white px-3 bg-transparent text-white outline-none" placeholder=""></input>
                    </span>
                </span>
                <span className='flex lg:justify-end lg:items-end'><span className='px-12 py-2 uppercase text-[#061c56] bg-[#e5b87c] rounded-md w-fit'>send</span></span>
            </span>
       </div>
    </div>
  )
}

export default ContactContent;