import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Open2 from '../assets/n9.png';
import Contact from '../components/Contact';


const News5 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
        <NavBar />
        <div className='flex flex-col'>
            <span className='flex flex-col px-24 py-6 gap-5'>
                <span className='flex flex-col'>
                    <span className='text-3xl font-semibold opacity-90'>Celebrating New Leaders - The Flame Bearers and The Aviators! </span>
                </span>
                <span className='text-lg font-medium'>Join us in congratulating the outstanding members of our Students Representative Council for the primary section - The Flame Bearers - and the secondary section - The Aviators. </span>
                <span className='text-lg font-medium'>Ready to kickstart the 2023/2024 academic session, they embody integrity, diligence, and an unwavering passion to elevate our students to greater heights.      
                </span>
            <span className='text-lg font-medium'>Leadership sets individuals apart, enabling them to conquer challenges, ignite inspiration, and ignite positive change. The Flame Bearers and The Aviators have eagerly embraced this responsibility, poised to shape our Temple School community for the better, infusing it with fresh perspectives and unwavering commitment.</span>
            <span className='text-lg font-medium'>As The Flame Bearers and The Aviators soar into their new roles, we urge them to prioritise the dreams, well-being, and aspirations of their fellow students. By nurturing a culture of inclusion, support, and respect, they will cultivate an environment where growth and excellence thrive. </span>
            <span className='text-lg font-medium'>Let us also applaud the previous student leaders for their incredible dedication to shaping Temple School and leaving behind a legacy of unity and progress. To you, outgoing Students Representative Council, we extend our heartfelt gratitude for your extraordinary contributions. </span>
            <span className='text-lg font-medium'>Congratulations, The Flame Bearers and The Aviators! May your leadership journey be filled with boundless learning, personal growth, and impactful change. We eagerly await the remarkable contributions </span>
            </span>
            
            <span className='flex justify-center items-center'>
                <img src={Open2} alt='' className='w-[25rem] h-[55rem] rounded-lg'></img>
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

export default News5