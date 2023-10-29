import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Open from '../assets/open2.png';
import Open2 from '../assets/open4.png';
import Open3 from '../assets/open3.png';
import Open4 from '../assets/open.png';
import Contact from '../components/Contact';


const News1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
        <NavBar />
        <div className='flex flex-col py-8 px-36 gap-2'>
            <span className='text-3xl font-semibold opacity-90'>Open Day - All School Section </span>
            <span className='text-lg opacity-90 w-[60rem]'>Exciting News! Join us at Temple School’s Open Day! Explore our world-class facilities and discover why we are the perfect choice for you child’s education journey.</span>
            <span className='flex flex-col gap-3'>
                <span className='flex flex-col'><span className='text-xl font-semibold'>Early Years Foundation Stage (EYFS):</span><span className='text-base w-[48rem]'> Give your precious little ones the best start in life. Join us to witness how our EYFS programmes nurture and stimulate young minds. </span></span>
                <img src={Open} alt='' className='w-[30rem] h-[30rem]'></img>
            </span>
            <span className='flex flex-col gap-3'>
                <span className='flex flex-col'><span className='text-xl font-semibold'>Primary School:</span><span className='text-base w-[48rem]'>Ignite your child’s curiosity and love for learning. Discover our innovative approach to primary education and experience the vibrant atmosphere at Temple Primary School. </span></span>
                <img src={Open3} alt='' className='w-[30rem] h-[30rem]'></img>
            </span>
            <span className='flex flex-col gap-3'>
                <span className='flex flex-col'><span className='text-xl font-semibold'>Secondary School:</span><span className='text-base w-[48rem]'>Unlock your child’s potential. Our experienced teachers and modern curriculum empower students to excel. Join us and witness the Temple Secondary School difference.   </span></span>
                <img src={Open2} alt='' className='w-[30rem] h-[30rem]'></img>
            </span>
            <span className='flex flex-col gap-3'>
                <span className='flex flex-col'><span className='text-xl font-semibold'>College:</span><span className='text-base w-[48rem]'>Preparing students for a successful future. Explore out advanced facilities and cutting-edge programmes, and join us to discover the endless opportunities that Temple College offers. </span></span>
                <img src={Open4} alt='' className='w-[30rem] h-[30rem]'></img>
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

export default News1