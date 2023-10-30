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
        <div className='flex flex-col'>
            <span className='flex justify-center items-center pt-4'>
                <img src={Open} alt='' className='w-[41rem] h-[19rem] rounded-lg'></img>
            </span>
            <span className='flex flex-col px-24 py-6 gap-5'>
                <span className='flex flex-col'>
                    <span className='text-3xl font-semibold opacity-90'>Temple School receives Beacon of Safety Award from Safe Schools Lagos (SSLAG).</span>
                </span>
                <span className='text-lg font-medium'>Temple School holds an unwavering commitment to safeguarding and prioritising the well-being of every individual within the Temple community, including children, young people, and adults. We hold our staff and volunteers to the same standard and ensure equitable opportunities for all, regardless of their background or abilities. Our commitment to safety has been recognised through the receipt of the Beacon of Safety Award for each section by Safe Schools Lagos. Some of our safety champions were also awarded for their contributions to this continuous effort. </span>
                <span className='text-lg font-medium'>Safe Schools Lagos (SSLAG) is a compliance initiative launched by the Lagos State Government under the leadership of the Governor, Mr. Babajide Olusola Sanwoolu, in response to concerns surrounding safety, safeguarding, and insecurity within the educational sector. </span>
            </span>
            <span className='flex justify-center items-center'>
                <img src={Open2} alt='' className='w-[40rem] h-[20rem] rounded-lg'></img>
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