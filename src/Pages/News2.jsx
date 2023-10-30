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
        <div className='flex flex-col'>
            <span className='flex justify-center items-center w-screen'>
                <img src={Open} alt='' className='w-full h-[20rem] object-cover'></img>
            </span>
            <span className='flex flex-col px-24 py-6 gap-5'>
                <span className='flex flex-col'>
                    <span className='text-3xl font-semibold opacity-90'>Counting down...Temple School’s 20th Anniversary</span>
                    <span className='text-lg opacity-90'>The Temple School Journey. Where Passion meets Education</span>
                </span>
                <span className='text-lg font-medium'>In the bustling city of Lagos, a remarkable educational institution emerged, igniting a spark of curiosity and passion in young minds. Welcome to Temple Preparatory School, a haven of learning and growth nestled at 213 Ikorodu Road, Ilupeju, currently the EYFS section location. Let us take a step back and delve into how it all began.</span>
                <span className='text-lg font-medium'>Join us on a journey back to July 12, 2004, when Temple School opened its doors to eager pupils aged between 2 and 11 years old. Founded by the visionary Mrs. Shirley Okharedia, a distinguished educator who was previously the Head of Grange School G.R.A. Ikeja. Temple School is an independent co-educational institution revered for its commitment to nurturing young minds.</span>
                <span className='text-lg font-medium'>Imagine the excitement that filled the air as summer rolled in that same year. From July 12 to August 27, the school organised a remarkable Summer Holiday programme that captivated a remarkable number of a 100 pupils. This immersive experience offered a perfect blend of academic excellence, thrilling educational field trips, exhilarating sports activities, and enlightening computer training. It was an unforgettable season of exploration and growth.</span>
                <span className='text-lg font-medium'>Embracing the spirit of gratitude and compassion, Temple School took its pupils on an eye-opening journey to Grace Springs Medical Centre and the Little Saints Orphanage on October 29, 2004, as part of the Harvest Thanksgiving Day celebrations. This compassionate act of kindness left an indelible mark on the hearts of all involved.</span>
            </span>
            <span className='flex justify-center items-center'>
                <img src={Open2} alt='' className='w-[18rem] h-[28rem]'></img>
            </span>
            <span className='flex flex-col px-24 py-6 gap-5'>
                <span className='text-lg font-medium'>The quest for knowledge extended beyond the school's walls. On October 27, 2004, Temple School embarked on a captivating field trip to its local surroundings in Ilupeju. The young learners eagerly observed the diverse architectural wonders that dotted their neighbourhood, an integral part of their Geography lesson. This hands-on experience ignited their curiosity and broadened their understanding of the world around them.</span>
                <span className='text-lg font-medium'>On November 9, 2004, some staff embarked on an extraordinary journey to Nairobi, Kenya, to partake in a week-long course specifically designed for international school teachers. This investment in professional development ensured that Temple School's teachers remained at the forefront of educational excellence. Other staff members attended a transformative 3-day workshop at the esteemed Golden Gate Restaurant in Ikoyi. Here, teachers honed their skills in identifying and assisting children with dyslexia and autism, ensuring that no child was left behind.</span>
                <span className='text-lg font-medium'>The Temple School journey has been nothing short of extraordinary, marked by moments of growth, compassion, and relentless pursuit of excellence. As this remarkable institution continues to shape the minds of tomorrow's leaders, it stands as a testament to the power of education to inspire, transform, and ignite the flame of curiosity within every child.</span>
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