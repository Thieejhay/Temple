import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Open3 from '../assets/n3.png';
import Open2 from '../assets/n4.png';
import Open from '../assets/n5.png';
import Open4 from '../assets/n6.png';

const News3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <NavBar />
        <div className='flex flex-col'>
            <span className='flex justify-center items-center gap-3 pt-4'>
                <img src={Open3} alt='' className='w-[15rem] h-[15rem] rounded-lg'></img>
                <img src={Open2} alt='' className='w-[15rem] h-[20rem] rounded-lg'></img>
            </span>
            <span className='flex flex-col px-24 py-6 gap-5'>
                <span className='flex flex-col gap-2'>
                    <span className='text-3xl font-semibold opacity-90'>Congratulations to our Temple Ambassador – Maria Norman-Salako</span>
                    <span className='text-xl font-medium opacity-90'>Temple Ambassador – Maria Norman-Salako wins second place in AISEN art competition.  </span>
                </span>
                <span className='text-lg font-medium'>Maria Norman-Salako represented Temple Primary School at AISEN Art competition, held in June 2023 with the theme- The Art of Nature. Maria won the second position in the Keystage 2 (KS2) category. It took her nine hours to complete the lovely art piece. Well done MAria, Temple School is proud of you! </span>
            </span>
            <span className='flex justify-center items-center gap-3'>
                <img src={Open} alt='' className='w-[15rem] h-[20rem] rounded-lg'></img>
                <img src={Open4} alt='' className='w-[15rem] h-[15rem] rounded-lg'></img>
            </span>
            
            
            
        </div>
        <div className='flex py-12 justify-center'>
            <span className=' h-48 w-20 bg-[#061c56]'></span>
            <span className='flex px-8 gap-10 items-center justify-center bg-[#061c56]/80'>
                <span className='text-white text-base font-normal w-[31rem]'>Temple School is one of the best schools in Lagos, Nigeria. Our newsletters are full of interesting information about what's going on in school and includes useful dates for your diary.</span>
                <span className='flex'>
                    <input className=" w-72 h-10 border-2 border-white rounded px-3 bg-transparent text-white outline-none" placeholder="Enter email address..."></input>
                    <input className= 'px-6 flex items-center rounded text-[#061c56] uppercase text-sm font-medium bg-[#f6bc75]' type='submit' value='subscribe'></input>
                </span>
            </span>
        </div>
        <Contact />
    </div>
  )
}

export default News3