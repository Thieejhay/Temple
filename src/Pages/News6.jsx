import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';

import Open2 from '../assets/open9.png';
import Open3 from '../assets/open8.png';

import Contact from '../components/Contact';


const News6 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
        <NavBar />
        <div className='flex flex-col py-6'>
            <span className='flex justify-center items-center'>
                <img src={Open3} alt='' className='w-[30rem] h-37rem]'></img>
                <img src={Open2} alt='' className='w-[30rem] h-37rem]'></img>
            </span>
            <span className='flex flex-col px-28 py-6 gap-5'>
                <span className='flex flex-col'>
                    <span className='text-2xl font-semibold opacity-90'>It is with great excitement that we bring you the October edition of Temple School's monthly newsletter! - The Flame.</span>
                    {/* <span className='text-lg opacity-90'>Join Us For Temple's School Open Day!</span> */}
                </span>
                <span className='text-lg opacity-90 font-medium'>As we celebrate Nigeria's 63rd Independence, it is a time to reflect on our heritage, honour our history, and appreciate the progress we have made as a nation. This month's newsletter serves as a tribute to Nigeria and a testament to the values and accomplishments that make our country so extraordinary.</span>
                <span className='text-lg font-medium opacity-90'>Temple School is committed to fostering a sense of patriotism and unity among our students. We believe that by understanding and appreciating our country's history, traditions, and diversity, we can inspire the next generation to be influential leaders and positive change-makers.</span>
                <span className='text-lg font-medium opacity-90'>We encourage parents and guardians to stay informed by reading through this month's newsletter and to participate in our upcoming events. We also encourage our students to take advantage of the opportunities available to them and make the most of their academic, social, and personal development.</span>
                <span className='text-lg font-medium opacity-90'>Let us all continue to work together toward the growth and success of our school and our beloved country.</span>
                <a href={process.env.PUBLIC_URL + '/files/Oct.pdf'} download>
                    <span className='h-fit py-2 px-3 text-center text-[#335672] bg-[#f6bc75] uppercase text-lg w-fit flex'>Download the pack</span>
                </a>
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

export default News6