import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Open from '../assets/n7.png';
import Open2 from '../assets/n8.png';
import Contact from '../components/Contact';


const News4 = () => {

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
                    <span className='text-2xl font-semibold opacity-90'>We are thrilled to bring to you the July edition of Temple School's monthly newsletter - The Flame.</span>
                    {/* <span className='text-lg opacity-90'>Join Us For Temple's School Open Day!</span> */}
                </span>
                <span className='text-lg opacity-90 font-medium'>As we enter the final weeks of the school year, we are excited to present to you the second edition of our school's newsletter! This newsletter serves as a platform to celebrate our achievements, reflect on memorable moments, and bid farewell to another remarkable academic year.</span>
                <span className='text-lg font-medium opacity-90'>Throughout the year, our school community has come together to create a rich tapestry of learning experiences, friendships, and personal growth. This newsletter aims to encapsulate these moments and provide a lasting memory of our remarkable journey together.</span>
                <span className='text-lg font-medium opacity-90'>We appreciate all our esteemed parents; your support and engagement have played a pivotal role in the success and growth of our school community. Thank you for your unwavering support throughout the year.</span>
                <span className='text-lg font-medium opacity-90'>As we conclude another academic year, we reflect on the achievements and growth we have witnessed within our school community. Let us celebrate the successes, embrace the challenges, and cherish our shared moments.</span>
                <span className='text-lg font-medium opacity-90'>We extend our deepest gratitude to all our teachers and staff members for your passion, creativity, dedication, continued support, and commitment to making our school a nurturing and inspiring environment for our students. We value your feedback and suggestions as we strive to improve and provide you with the best possible experience.</span>
                <span className='text-lg font-medium opacity-90'>Once again, welcome to the July Edition of Our School Newsletter! Let us celebrate the culmination of a fantastic year and eagerly anticipate the promising future ahead.</span>
                <a href={process.env.PUBLIC_URL + '/files/Jul.pdf'} download>
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

export default News4