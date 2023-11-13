import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Open2 from '../assets/n9.png';
import Open3 from '../assets/n10.png';
import Contact from '../components/Contact';


const News5 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
        <NavBar />
        <div className='flex flex-col py-6'>
            <span className='flex justify-center items-center'>
                <img src={Open2} alt='' className='w-[30rem] h-37rem]'></img>
                <img src={Open3} alt='' className='w-[30rem] h-37rem]'></img>
            </span>
            <span className='flex flex-col px-28 py-6 gap-5'>
                <span className='flex flex-col'>
                    <span className='text-2xl font-semibold opacity-90'>We are thrilled to bring to you the June edition of Temple School's monthly newsletter - The Flame.</span>
                    {/* <span className='text-lg opacity-90'>Join Us For Temple's School Open Day!</span> */}
                </span>
                <span className='text-lg opacity-90 font-medium'>With great pleasure, we welcome you to the June edition of Temple School's monthly newsletter. This newsletter is an opportunity for us to share important information about school events, academic achievements, and community updates.</span>
                <span className='text-lg font-medium opacity-90'>As we move into the final stretch of the school year, there is a lot to celebrate. Our students have been working hard and achieving great things both in and out of the classroom. From academic success to athletic victories, our school community has a lot to be proud of.</span>
                <span className='text-lg font-medium opacity-90'>Many exciting events are coming up in the next few weeks, including our end-of-year celebrations and graduation ceremonies. We look forward to celebrating our students' accomplishments and saying goodbye to our graduating College seniors as they embark on the next chapter of their lives.</span>
                <span className='text-lg font-medium opacity-90'>Thank you for your continued support of our school and our students. We hope you enjoy reading this month's newsletter and staying up to date on all the latest news and events.</span>
                <a href={process.env.PUBLIC_URL + '/files/Jun.pdf'} download>
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

export default News5