import React, { useState } from 'react';
import Football from '../assets/Football.png';
import Basketball from '../assets/Basketball.png';
import Volleyball from '../assets/Volleyball.png';
import Tabletennis from '../assets/Tabletennis.png';
import Highjump from '../assets/Highjump.png';
import Rugby from '../assets/Rugby.png';
import Longjump from '../assets/Jump.png';
import Shortput from '../assets/Shortput.png';
import Swimming from '../assets/Swimming.png';
import Javelin from '../assets/Javelin.png';
import Atletics from '../assets/Atletics.png';
import Sports from '../assets/Sports.png';
import Arts from '../assets/Arts.png';
import Clubs from '../assets/Clubs.png';
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import Banner from '../assets/program.png';


const ProgramsContent = () => {

    const [showMore, setShowMore] = useState({
        showMore1: false,
        showMore2: false,
        showMore3: false,
        showMore4: false,
      });
    
      const toggleShowMore = (key) => {
        setShowMore((prevState) => ({
          ...Object.fromEntries(Object.entries(prevState).map(([k, v]) => (k === key ? [k, !v] : [k, false]))),
        }));
      };


  return (
    <div className='flex flex-col w-screen'>
        <span className='flex justify-center items-center relative h-[20rem] bg-black'>
             <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10'></img>
            <span className='text-4xl opacity-90 font-semibold absolute top-28 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>Programs</span>
        </span>
        <span className='flex pl-28 py-6 gap-16 bg-gray-200'>
            <span className='flex flex-col gap-5 justify-end'>
                <span className='text-5xl font-medium text-[#061c56] w-80 opacity-90'>Co-curicular Activities</span>
                <span className='text-xs w-[25rem] opacity-80'>There is a wide range of extracurricular activities available for Temple children. We believe that by offering all these enrichment opportunities outside the classroom, we can help our pupils develop more fully as individuals. Every child is encouraged to participate, and meetings are held once a week.</span>
            </span>
            <span className='flex gap-4'>
                <span className='w-56 h-72 bg-gray-500 rounded-lg'><img src={Arts} className='w-full h-full' alt=''></img></span>
                <span className='w-56 h-72 bg-gray-500 rounded-lg'><img src={Sports} className='w-full h-full' alt=''></img></span>
                <span className='w-56 h-72 bg-gray-500 rounded-lg'><img src={Clubs} className='w-full h-full' alt=''></img></span>
            </span>
        </span>
        <span className='flex flex-col py-12 gap-10 px-24'>
            <span className='flex flex-col px-3'>
                <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-white'>
                    <span className=' flex justify-between items-center opacity-80'>
                        <span className='text-xl'>Early Years and Foundation Stage</span>
                        <span onClick={() => toggleShowMore('showMore1')}>{showMore.showMore1 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                    </span>
                    {showMore.showMore1 && 
                        <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Debating/Public Speaking - <span className='lowercase text-lg font-normal'>Builds confidence for public speaking</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Languages -<span className='lowercase text-lg font-normal'>Developing our children's interests in our local languages</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Earth - <span className='lowercase text-lg font-normal'>A conservation society that seeks to engage in activities that will promote habits that are beneficial to our planet</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Photography - <span className='lowercase text-lg font-normal'>Explores light, angles, colour and shapes in photography</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>BALLET - <span className='lowercase text-lg font-normal'>This exclusive club is for young boys and girls who are committed tVearning the beautiful dance that is ballet.</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>tAEKWONDO - <span className='lowercase text-lg font-normal'>For developing the discipline and mastery of this martial art.</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Maths - <span className='lowercase text-lg font-normal'>Helps children develop empathy, promotes academic growth and empowerment through self-expression</span></span>
                            </span>
                        </span>
                    }
                </span>
                <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-white'>
                    <span className=' text-white flex justify-between items-center opacity-90'>
                        <span className='text-xl'>Primary School Clubs</span>
                        <span onClick={() => toggleShowMore('showMore2')}>{showMore.showMore2 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                    </span>
                    {showMore.showMore2 && 
                        <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-80'>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Debating/Public Speaking - <span className='lowercase text-lg font-normal'>Builds confidence for public speaking</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Languages -<span className='lowercase text-lg font-normal'>Developing our children's interests in our local languages</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Earth - <span className='lowercase text-lg font-normal'>A conservation society that seeks to engage in activities that will promote habits that are beneficial to our planet</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Photography - <span className='lowercase text-lg font-normal'>Explores light, angles, colour and shapes in photography</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>BALLET - <span className='lowercase text-lg font-normal'>This exclusive club is for young boys and girls who are committed tVearning the beautiful dance that is ballet.</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>tAEKWONDO - <span className='lowercase text-lg font-normal'>For developing the discipline and mastery of this martial art.</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Maths - <span className='lowercase text-lg font-normal'>Helps children develop empathy, promotes academic growth and empowerment through self-expression</span></span>
                            </span>
                        </span>
                    }
                </span>
                <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-white'>
                    <span className=' text-white flex justify-between items-center opacity-80'>
                        <span className='text-xl'>Secondary School Clubs</span>
                        <span onClick={() => toggleShowMore('showMore3')}>{showMore.showMore3 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                    </span>
                    {showMore.showMore3 && 
                        <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>CHESS  - <span className='lowercase text-lg font-normal'>Teaches the rudiments and skills of playing the game of chess</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>SCHOOL BAND -<span className='lowercase text-lg font-normal'>A society of musicians who practice for performing in a varisty of school events</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>FITNESS - <span className='lowercase text-lg font-normal'>Designed to promote healthy habits for the body</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>LIFE SAVING - <span className='lowercase text-lg font-normal'>Based on the Red Cross Society teaches life saving first aid and other practices.</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>BALLET - <span className='lowercase text-lg font-normal'>This exclusive club is for young boys and girls who are committed tVearning the beautiful dance that is ballet.</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>CULINARY ARTS CLUB - <span className='lowercase text-lg font-normal'>Where students leam the basics of food hygiene. food preparation and food presentation.</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>FILM CLUB - <span className='lowercase text-lg font-normal'>Learning the rudiments of documentary making</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>TEMPLEMUN - <span className='lowercase text-lg font-normal'>Our very own Temple Model United Nations, an educational simulation and academic dialogue in which students learn about world issues, diplomacy, international relations and the United Nations</span></span>
                            </span>
                        </span>
                    }
                </span>
                <span className='flex flex-col gap-3 px-2 py-3 rounded-sm bg-[#f6bc75] text-white'>
                    <span className=' text-white flex justify-between items-center opacity-90'>
                        <span className='text-xl'>College</span>
                        <span onClick={() => toggleShowMore('showMore4')}>{showMore.showMore4 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                    </span>
                    {showMore.showMore4 && 
                        <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-80'>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>The Ontario Secondary School Diploma Programme (OSSD)-<span className='lowercase text-lg font-normal'>Temple College has forged a very strong partnership with Braemar College in Ontario, Canada, and together, we offer students the OSSD Pathway.Pathways options in the OSSD programme:Humanities,Art & Design,Math & Science,Business</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>Cambridge Advanced Levels-<span className='lowercase text-lg font-normal'>The Cambridge Advanced Level exam is an international school leaving qualification regulated by the British Council. We deliver the traditional 2- year programme.Students can choose from the following subjects below in accordance with the subject blocks:Art and Design ,Accounting,Biology,Business Studies,Economics,Chemistry,English Language,English Literature etc</span></span>
                            </span>
                            <span className='flex gap-2 items center'>
                                <span className='text-xl font-bold'>.</span>
                                <span className='uppercase text-xl font-semibold'>West African Senior School Certificate Examination Programme-<span className='lowercase text-lg font-normal'>This is a standardised exam in West Africa administered by the West African Examination Council. This one-year programme offers an alternative to A-levels for students to take the national school leaving certificate examination in May/June.Students can choose from a list of courses.</span></span>
                            </span>
                            
                        </span>
                    }
                </span>
            </span>
            <span className='flex flex-col gap-4'>
                <span className='flex flex-col gap-3'>
                    <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                    <span className='text-2xl font-semibold'>Field Trip</span>
                    <span className='text-base'>The school also arranges a number of foreign visits that support the curriculum and give students the chance to expand their horizons as well as to help them understand different cultures. We enjoy exciting activities during our residential trips abroad, such as abseiling, archery, kayaking, zip-wire, and grass sledging. We also get the chance to do things like explore coastal walks, hunt for fossils, look for red squirrels in woodlands on the Isle of Wight, and go to other fun and safe camps.</span>
                </span>
                <span className='flex flex-col gap-3'>
                    <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                    <span className='text-2xl font-semibold'>Community Work</span>
                    <span className='text-base'>The school also arranges a number of foreign visits that support the curriculum and give students the chance to expand their horizons as well as to help them to understand different cultures. We enjoy exciting activities during our residential trips abroad such as abseiling, archery, kayaking, zip wire and grass sledging. We also get the chance to do things like exploring coastal walks, hunting for fossils and looking for red squirrels in woodlands on the Isle of Wight and other fun and safe camps.</span>
                </span>
            </span>
            <span className='flex flex-col gap-8'>
                <span className='flex flex-col gap-3'>
                    <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                    <span className='text-2xl font-semibold text-[#061c56]'>SPORTS</span>
                </span>
                <span className='flex gap-6 justify-center'>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56]'>Football</span>
                        <span className='w-44 h-44 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Football}></img></span>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 h-36 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Basketball}></img></span>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56] flex-col'><span>basket</span><span>ball</span></span>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56]'>volleyball</span>
                        <span className='w-44 h-44 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Volleyball}></img></span>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 h-36 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Tabletennis}></img></span>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56] flex-col'><span>table</span><span>tenis</span></span>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56]'>high jump</span>
                        <span className='w-44 h-44 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Highjump}></img></span>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 h-36 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Rugby}></img></span>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56] flex-col'><span>tag</span><span>rugby</span></span>
                    </span>
                </span>
                <span className='flex gap-6 justify-center'>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56]'>Long jump</span>
                        <span className='w-44 h-44 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Longjump}></img></span>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 h-36 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Shortput}></img></span>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56] flex-col'><span>short</span><span>put</span></span>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56]'>swimming</span>
                        <span className='w-44 h-44 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Swimming}></img></span>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 h-44 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Javelin}></img></span>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56] flex-col'>javelin</span>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <span className='w-44 py-4 text-xl font-bold uppercase rounded-xl text-[#f6bc75] flex items-center justify-center bg-[#061c56]'>atletics</span>
                        <span className='w-44 h-44 rounded-xl bg-gray-100'><img className='w-full h-full' alt='' src={Atletics}></img></span>
                    </span>
                </span>
            </span>
        </span>
        {/* <span className='flex flex-col py-12 gap-10 bg-[#27ace8]/10 justify-center items-center '>
            <span className='uppercase text-3xl font-medium'>choose programs</span>
            <span className='flex gap-4'>
                <span className='flex flex-col rounded-lg p-4 gap-3 w-fit bg-white shadow-xl'>
                    <span className='flex flex-col gap-2 items-center'>
                        <span className='w-10 h-10 rounded-full bg-[#061c56]'></span>
                        <span className='text-2xl font-medium '>Early Years</span>
                    </span>
                    <span className='text-xs w-[16rem] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione in repellat aliquid voluptatem. Veritatis odio quaerat </span>
                </span>
                <span className='flex flex-col rounded-lg p-4 gap-3 w-fit bg-white shadow-xl'>
                    <span className='flex flex-col gap-2 items-center'>
                        <span className='w-10 h-10 rounded-full bg-[#061c56]'></span>
                        <span className='text-2xl font-medium '>Primary School </span>
                    </span>
                    <span className='text-xs w-[16rem] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione in repellat aliquid voluptatem. Veritatis odio quaerat </span>
                </span>
                <span className='flex flex-col rounded-lg p-4 gap-3 w-fit bg-white shadow-xl'>
                    <span className='flex flex-col gap-2 items-center'>
                        <span className='w-10 h-10 rounded-full bg-[#061c56]'></span>
                        <span className='text-2xl font-medium '>Secondary School</span>
                    </span>
                    <span className='text-xs w-[16rem] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione in repellat aliquid voluptatem. Veritatis odio quaerat </span>
                </span>
                <span className='flex flex-col rounded-lg p-4 gap-3 w-fit bg-white shadow-xl'>
                    <span className='flex flex-col gap-2 items-center'>
                        <span className='w-10 h-10 rounded-full bg-[#061c56]'></span>
                        <span className='text-2xl font-medium '>College Years</span>
                    </span>
                    <span className='text-xs w-[16rem] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione in repellat aliquid voluptatem. Veritatis odio quaerat </span>
                </span>
            </span>
        </span> */}
    
    </div>
  )
}

export default ProgramsContent;