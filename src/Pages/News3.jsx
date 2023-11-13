import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Open3 from '../assets/n3.png';
import Open2 from '../assets/n4.png';


const News3 = () => {
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
                    <span className='text-2xl font-semibold opacity-90'>Welcome to the August edition ofour monthly newsletter - The Flame.</span>
                    {/* <span className='text-lg opacity-90'>Join Us For Temple's School Open Day!</span> */}
                </span>
                <span className='text-lg opacity-90 font-medium'>We hope you are all having a wonderful summer break so far and enjoying some quality time with your loved ones. The staff at Temple School is eagerly walting for the new academic session to begin, and we cannot wait to welcome all our students back. As we get ready for the n&w academic session, we would like to update you all on some important information and events scheduled for the upcoming months.</span>
                <span className='text-lg font-medium opacity-90'>Firstly, we would like to extend a warm welcome to all our new families joining the Temple School community this year. Our staff is already working hard to ensure a smooth transition for all new students and wip cannot wait to meet you all in person.</span>
                <span className='text-lg font-medium opacity-90'>We are proud of our school's academic excellence, as well as the vibrant creative and athletic programs that we offer. Our dedicated and passionate teachers and staff are eager to work with your children, and we are confident that they will thrive in our welcoming and supportive environment.</span>
                <span className='text-lg font-medium opacity-90'>Furthermore, we would like to remind students and parents that the first day of school is on September 4th, 2023. Students are expected to arrive at school on time and in complete uniform. Our staff will be organising several orientation sessions for students on the first day of school to help them get started on the right foot.</span>
                <span className='text-lg font-medium opacity-90'>Lastly, we would like to thank you for choosing Temple School.</span>
                <a href={process.env.PUBLIC_URL + '/files/Aug.pdf'} download>
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

export default News3