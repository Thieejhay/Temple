import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Open2 from '../assets/open12.png';
import Open3 from '../assets/open13.png';
import Contact from '../components/Contact';


const News7 = () => {

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
                    <span className='text-2xl font-semibold opacity-90'>Welcome to the December edition of The Flame, Temple School's monthly newsletter! - The Flame.</span>
                    {/* <span className='text-lg opacity-90'>Join Us For Temple's School Open Day!</span> */}
                </span>
                <span className='text-lg opacity-90 font-medium'>As the year draws to a close, we find ourselves reflecting on the joy, growth, and achievements that have filled our journey at Temple School. December, a month teeming with festivities and warmth, offers us the perfect opportunity to celebrate the spirit of togetherness and gratitude that defines our school community.</span>
                <span className='text-lg font-medium opacity-90'>In this edition, we have curated a collection of captivating articles, tips, nuggets, updates, and invitations to awe-inspiring events that will leave you inspired and uplifted, ensuring a delightful reading experience for all.</span>
                <span className='text-lg font-medium opacity-90'>Thank you for your continued support. From our Temple School family to yours, we extend our warmest wishes for a joyous and memorable December.</span>
                <a href={process.env.PUBLIC_URL + '/files/Dec.pdf'} download>
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

export default News7;