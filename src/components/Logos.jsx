import React from 'react';
import Marquee from 'react-fast-marquee';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import Logo4 from '../assets/logo4.png';
import Logo5 from '../assets/logo5.png';
import Logo6 from '../assets/logo6.png';
import Logo7 from '../assets/logo7.png';
import Logo8 from '../assets/logo8.png';
import Logo9 from '../assets/logo9.png';

const Logos = () => {
  return (
    <div className='flex lg:px-28 lg:pt-8 '>
        <Marquee speed={40}>
            <div className='flex gap-10 items-center h-32'>
                <img className='w-24 h-20' src={Logo1} alt=''></img>
                <img className='w-24 h-20' src={Logo2} alt=''></img>
                <img className='w-28 h-20' src={Logo4} alt=''></img>
                <img className='w-28 h-20' src={Logo5} alt=''></img>
                <img className='w-32 h-12' src={Logo6} alt=''></img>
                <img className='w-36 h-20' src={Logo3} alt=''></img>
                <img className='w-32 h-16' src={Logo7} alt=''></img>
                <img className='w-28 h-20' src={Logo8} alt=''></img>
                <img className='w-24 h-20 mr-8' src={Logo9} alt=''></img>
            </div>
        </Marquee>
    </div>
  )
}

export default Logos;