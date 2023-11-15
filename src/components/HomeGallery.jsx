import React from 'react';
import Pic from '../assets/gallery/pic.png'
import Pic2 from '../assets/gallery/pic2.png'
import Pic3 from '../assets/gallery/pic3.png'
import Pic4 from '../assets/gallery/pic4.png'
import Pic5 from '../assets/gallery/pic5.png'
import Pic7 from '../assets/gallery/pic7.png'
import Pic6 from '../assets/gallery/pic6.png'
import Pic8 from '../assets/gallery/pic8.png'
import Pic9 from '../assets/gallery/pic9.png'
import Pic10 from '../assets/gallery/pic10.png'
import Pic11 from '../assets/gallery/Pic11.png'
import Pic12 from '../assets/gallery/dd.png'

const HomeGallery = () => {

  return (
    <div className='flex flex-col py-8 lg:px-28 px-4 bg-[#21bdf3] text-white'>
            <span className='flex flex-col gap-2 text-center lg:mt-6 mt-3'>
                <span className='uppercase lg:text-4xl text-xl font-semibold opacity-90 text-[#061c56]'>Gallery</span>
            </span>
        <div className='lg:flex hidden gap-3 mt-6 '>
            <span className='overflow-hidden flex w-52 h-48 rounded-lg'><img className='w-52 h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic2} alt=''></img></span>
            <span className='overflow-hidden flex w-[21rem] h-48 rounded-lg'><img className='w-[21rem] h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic9} alt=''></img></span>
            <span className='overflow-hidden flex w-[22rem] h-48 rounded-lg'><img className='w-[22rem] h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic12} alt=''></img></span>
            <span className='overflow-hidden flex w-52 h-48 rounded-lg'><img className='w-52 h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic3} alt=''></img></span>
        </div>
        <div className='flex lg:hidden gap-3 mt-3'>
            <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic2} alt=''></img></span>
            <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic9} alt=''></img></span>
        </div>
        <div className='flex lg:hidden gap-3 mt-3'>
            <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic12} alt=''></img></span>
            <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic3} alt=''></img></span>
        </div>
        <div className='flex lg:hidden gap-3 mt-3'>
            <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic5} alt=''></img></span>
            <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic} alt=''></img></span>
        </div>
        <div className='flex lg:hidden gap-3 mt-3'>
            <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic4} alt=''></img></span>
            <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic7} alt=''></img></span>
        </div>
        <div className='flex lg:hidden gap-3 mt-3'>
            <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic8} alt=''></img></span>
            <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic6} alt=''></img></span>
        </div>
        <div className='flex lg:hidden gap-3 mt-3'>
            <span className='overflow-hidden flex w-[19rem] h-24 rounded-lg'><img className='w-[19rem] h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic11} alt=''></img></span>
            <span className='overflow-hidden flex w-44 h-24 rounded-lg'><img className='w-44 h-24 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic10} alt=''></img></span>
        </div>
        <div className='lg:flex hidden gap-3 mt-6'>
           <span className='overflow-hidden flex w-[21rem] h-48 rounded-lg'> <img className='w-[21rem] h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic} alt=''></img></span>
           <span className='overflow-hidden flex w-52 h-48 rounded-lg'><img className='w-52 h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic5} alt=''></img></span>
           <span className='overflow-hidden flex w-[22rem] h-48 rounded-lg'><img className='w-[22rem] h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic4} alt=''></img></span>
           <span className='overflow-hidden flex w-52 h-48 rounded-lg'><img className='w-52 h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic7} alt=''></img></span>
        </div>
        <div className='lg:flex hidden gap-3 mt-6'>
            <span className='overflow-hidden flex w-52 h-48 rounded-lg'> <img className='w-52 h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic8} alt=''></img></span>
            <span className='overflow-hidden flex w-[21rem] h-48 rounded-lg'> <img className='w-[21rem] h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic6} alt=''></img></span>
            <span className='overflow-hidden flex w-52 h-48 rounded-lg'> <img className='w-52 h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic10} alt=''></img></span>
            <span className='overflow-hidden flex w-[22rem] h-48 rounded-lg'> <img className='w-[22rem] h-48 rounded-lg object-cover transition-transform duration-1000 transform hover:scale-125' src={Pic11} alt=''></img></span>
        </div>
        <div className='flex lg:gap-12 items-center justify-center lg:mt-20 mt-5'>
            <span className='flex flex-col lg:gap-4 gap-2 justify-center'>
                <span className='lg:text-3xl text-xl font-semibold uppercase w-60'>
                    Watch Our Videos
                </span>
                <span className='text-base font-normal opacity-80 lg:w-80 w-60'>A leading British International school offering quality education in Nigeria</span>
                <a href='https://youtube.com/@TempleSchools' rel="noreferrer" target='_blank'><span className='px-5 py-2 bg-[#f6bc75] text-[#061c56] hover:text-white text-sm w-fit rounded-md'>Watch more on our youtube channel</span></a>
            </span>
            <span className='bg-gray-300'>
                <iframe width="570" height="310" className='rounded-lg' src="https://www.youtube.com/embed/tEh0P9MNmls?si=dIba9KcA5DSJi1D3" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </span>
        </div>
    </div>
  )
}

export default HomeGallery;