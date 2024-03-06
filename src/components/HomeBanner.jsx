import React, { useState, useEffect } from 'react';
import Bg1 from '../assets/234.png';
import Bg2 from '../assets/345.png';
import Bg3 from '../assets/123.png';




const HomeBanner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);



    const imageSlide = [
        {
          backgroundImage: Bg1,
          text: 'Igniting Minds, Shaping Futures: ',
          textxx:'Welcome to Temple School!',
          textx: 'Where Learning Knows No Bounds'
        },
        {
          backgroundImage: Bg2,
          text: 'Igniting Minds, Shaping Futures: ',
          textxx:'Welcome to Temple School!',
          textx: 'We Empower Leaders and Foster Excellence'
        },
        {
          backgroundImage: Bg3,
          text: 'Igniting Minds, Shaping Futures: ',
          textxx:'Welcome to Temple School!',
          textx: 'Embark on a Journey of Knowledge with us!'
        },
      ];

    useEffect(() => {
        const timer = setTimeout(() => {
          if (currentSlide === 2) {
            setCurrentSlide(0);
          } else {
            setCurrentSlide(currentSlide + 1);
          }
        }, 6000);
    
        return () => clearTimeout(timer);
      }, [currentSlide]);

      const goToNext = (index) => {
        setCurrentSlide(index);
      };

      const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentSlide].backgroundImage})`,
        backgroundSize: 'cover',
        width: '100vw',
        transition: 'background 0.3s ease-in',

      };


  return (

    <div className="flex w-screen flex-col">
        <div className='lg:h-[32rem] h-[15rem]'><div style={bgImageStyle} className="flex h-full"></div></div>
        <span className="flex flex-col justify-center items-center lg:gap-4 gap-2 lg:-mt-[20rem] -mt-56 ">
            <span className='flex flex-col items-center justify-center text-center'>
              <span className="lg:text-[5rem] text-2xl font-semibold text-[#f6bc75] w-fit">
                  {imageSlide[currentSlide].textxx}
              </span>
              <span className="lg:text-4xl text-xl mt-12 font-semibold text-[#ffffff] w-fit">
                  {imageSlide[currentSlide].text}
              </span>
              <span className="lg:text-3xl text-lg font-medium text-[#f6bc75] w-fit">
                  {imageSlide[currentSlide].textx}
              </span>
            </span>
            <a href='https://basic.edves.net/#tab2' rel="noreferrer" target='_blank'><span className='flex px-3 py-2 text-xl w-fit h-fit font-semibold hover:text-white hover:bg-[#061c56] bg-[#f6bc75] rounded-md drop-shadow-md text-[#061c56] '>Apply Now</span></a>
            <span className="flex gap-2 mt-12">
            {imageSlide.map((slide, index) => (
              <span
                key={index}
                onClick={() => {
                  goToNext(index);
                }}
                className={`w-2 h-2 border border-white bg-${currentSlide === index ? '[#f6bc75]' : 'transparent'} mt-3 cursor-pointer rounded-full`}
              ></span>
            ))}
            </span>
        </span> 
    </div>
  )
}

export default HomeBanner;