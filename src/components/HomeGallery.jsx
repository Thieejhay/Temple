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

const HomeGallery = () => {
  return (
    <div className='flex flex-col py-8 px-28'>
        <div className='flex justify-between '>
            <img className='w-52 h-48 rounded-lg' src={Pic2} alt=''></img>
            <span className='flex flex-col gap-2 text-center'>
                <span className='uppercase text-3xl font-semibold'>Gallery</span>
            </span>
            <img className='w-52 h-48 rounded-lg' src={Pic3} alt=''></img>
        </div>
        <div className='flex gap-3 mt-6'>
            <img className='w-[21rem] h-48 rounded-lg' src={Pic} alt=''></img>
            <img className='w-52 h-48 rounded-lg' src={Pic5} alt=''></img>
            <img className='w-[22rem] h-48 rounded-lg' src={Pic4} alt=''></img>
            <img className='w-52 h-48 rounded-lg' src={Pic7} alt=''></img>
        </div>
        <div className='flex gap-3 mt-6'>
            <img className='w-52 h-48 rounded-lg' src={Pic8} alt=''></img>
            <img className='w-[21rem] h-48 rounded-lg' src={Pic6} alt=''></img>
            <img className='w-52 h-48 rounded-lg' src={Pic10} alt=''></img>
            <img className='w-[22rem] h-48 rounded-lg' src={Pic9} alt=''></img>
        </div>
        <div className='flex justify-between mt-8'>
            <span className='flex flex-col gap-4 justify-center'>
                <span className='text-3xl font-semibold uppercase w-60'>
                    Watch Our Videos
                </span>
                <span className='text-base font-normal opacity-80 w-80'>A leading British International school offering quality education in Nigeria</span>
                <span className='px-5 py-2 bg-[#d9bc6d] text-sm w-fit rounded-md'>Watch more on our youtube channel</span>
            </span>
            <span className='w-[27rem] h-72 bg-gray-300'></span>
        </div>
    </div>
  )
}

export default HomeGallery;