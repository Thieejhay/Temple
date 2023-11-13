import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Open from '../assets/Eys.png';
import Open2 from '../assets/n2.png';
import Contact from '../components/Contact';

const News2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <NavBar />
        <div className='flex flex-col py-6'>
            <span className='flex justify-center items-center'>
                <img src={Open} alt='' className='w-[30rem] h-37rem]'></img>
                <img src={Open2} alt='' className='w-[30rem] h-37rem]'></img>
            </span>
            <span className='flex flex-col px-28 py-6 gap-5'>
                <span className='flex flex-col'>
                    <span className='text-2xl font-semibold opacity-90'>We are thrilled to bring to you the September edition of Temple School's monthly newsletter - The Flame.</span>
                    {/* <span className='text-lg opacity-90'>Join Us For Temple's School Open Day!</span> */}
                </span>
                <span className='text-lg opacity-90 font-medium'>Welcome to the new academic session! The 2023/2024 academic session promises to be full of exciting opportunities for growth and success.</span>
                <span className='text-lg font-medium opacity-90'>To our returning students and families, we are thrilled to have you back and look forward to seeing your continued dedication and hard work. To our new students and families, you are welcomed with open arms and we will ensure your transition is smooth and enjoyable.</span>
                <span className='text-lg font-medium opacity-90'>We value the involvement of parents and guardians as partners in their child's education. Our dedicated staff and teachers are committed to guiding students towards their full potential.</span>
                <span className='text-lg font-medium opacity-90'>As a school community, we remain committed to fostering a nuturing and an environment where every student feels valued and supported. Please stay informed about upcoming events in our monthly newsletter and attend school events to stay connected.</span>
                <span className='text-lg font-medium opacity-90'>Let us make this a memorable year together, achieving great things through support and collaboration.</span>
                <a href={process.env.PUBLIC_URL + '/files/Sep.pdf'} download>
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

export default News2