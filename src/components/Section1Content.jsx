import React, {useState} from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import pic1 from '../assets/Eyfs.png'
import Pic from '../assets/gallery/pic.png';
import Pic2 from '../assets/gallery/e2.png';
import Pic3 from '../assets/gallery/e1.png';
import Pic4 from '../assets/gallery/Creche2.png';
import Pic5 from '../assets/gallery/Creche3.png';
import Pic6 from '../assets/gallery/Creche4.png';
import Pic7 from '../assets/gallery/Creche5.png';
import Pic8 from '../assets/gallery/ey1.png';
import Pic9 from '../assets/gallery/e8.png';
import Pic10 from '../assets/gallery/e9.png';
import Pic11 from '../assets/gallery/e4.png';
import { BsPlus, BsDot } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi';
import Banner from '../assets/dd.png';
import Medal from '../assets/Medal.png';

const Section1Content = () => {
    const [showMore, setShowMore] = useState({
        showMore1: false,
        showMore2: false,
        showMore3: false,
        showMore4: false,
        showMore5: false,
        showMore6: false,
        showMore7: false,
        showMore8: false,
        showMore9: false,
        showMore10: false,
        showMore11: false,
        showMore12: false,
        showMore13: false,
      });
    
      const toggleShowMore = (key) => {
        setShowMore((prevState) => ({
          ...Object.fromEntries(Object.entries(prevState).map(([k, v]) => (k === key ? [k, !v] : [k, false]))),
        }));
      };



  return (
    <div className='flex flex-col w-screen'>
        <span className='flex justify-center items-center relative h-[23rem] bg-black'>
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10 object-cover'></img>
            <span className='text-4xl font-semibold opacity-90 absolute top-36 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>Early Years and Foundation Stage</span>
        </span>
        <div className='flex flex-col mb-8 py-3'>
            <span className='flex pr-24 pl-12 mb-10' >
                <img className='w-[34rem]' src={pic1} alt=''></img>
                <span className='flex flex-col -ml-36 gap-3 pl-12 pt-8 pb-4 bg-[#f6bc75] w-full text-[#061c56]'>
                    <span className=' text-5xl font-bold w-[30rem]'>Welcome Address by Head Teacher </span>
                    <span className='text-sm w-[42rem] space-y-3'>
                        <p>It is with great pleasure that we welcome you and our little ones to the 2023/2024 session.</p>
                        <p>We realise that this will be a new experience for your child having been at home for some weeks and for others, a change of school.</p>
                        <p>We would like for this to be as pleasant a transition as possible and so we are sending you this information pack.</p>
                        <p>We hope it will answer any questions you might have and if it does not, please do not hesitate to get in touch.</p>
                    </span>
                    <span className='flex flex-col gap-1 w-[42rem] items-end italic'>
                        <span className='text-lg '>Mrs. Johnson-Nadar</span>
                        <span className='text-lg '>Head Section</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col gap-6 pr-32 pl-40 mb-10'>
                    <span className='text-base opacity-80'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible.</span>
                    <span className='text-base opacity-80'>Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                    <span className='text-base opacity-80'>Early childhood is the foundation on which children build the rest of their lives. The Early Years and Foundation Stage makes a crucial contribution to children's early development and learning. Starting school is an important step! At Temple we have a carefully planned pre-school induction programme to make the transition from home to school sensitive and appropriate for each child. We provide children with a rich variety of teaching and learning experiences that are appropriate to their needs. Learning takes place in a secure and stimulating environment where first hand learning experiences encourage the development of imagination, creativity and the enjoyment of learning.</span>
                    <span className='text-base opacity-80'>What children can do, rather than what they cannot do are the starting points in learning. Play helps young children to learn and develop through doing and talking, which research has shown to be the means by which young children learn to think. Structured play is important as listening, playing, speaking, concentrating, persistence and learning to work and co-operate with others are the main ways through which children learn about themselves and the world around them. During this stage, Early Learning Goals set out what most children are expected to achieve by the end of the Foundation Stage.</span>
            </span>
            <div className='flex flex-col bg-[#061c56] py-1 lg:px-24 w-screen lg:h-40 gap-2 mb-10'>
                <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
                <span className='flex lg:justify-between gap-2 items-center lg:px-6 px-4'>
                    <span className='flex lg:gap-6 gap-2 items-center'>
                        <span className='lg:w-32 w-16 h-16 lg:h-32 rounded-full '>
                            <img src={Medal} alt='' className='w-full h-full'></img>
                        </span>
                        <span className='flex flex-col text-[#f6bc75] lg:w-fit w-[12rem]'>
                            <span className='lg:text-3xl text-sm font-medium lg:tracking-wider'>Our Students Are Talented,</span>
                            <span className='lg:text-2xl text-sm font-normal lg:tracking-wider'>passionate, hard-working and full of ideas.</span>
                        </span>
                    </span>
                    <a href='https://basic.edves.net/#tab2' rel="noreferrer" target='_blank'><span className='lg:px-8 lg:py-5 px-1 py-1 text-xl w-fit h-fit font-semibold text-white bg-[#f6bc75] rounded-md drop-shadow-md'>Apply Now</span></a>
                </span>
                <hr className='w-full h-1 border-none rounded-md bg-[#f6bc75]'></hr>
            </div>
            <span className='flex flex-col gap-5 mb-10 '>
                <span className='px-32 text-2xl font-semibold opacity-90'>The seven areas of learning and development that make up the Early Years and Foundation Stage curriculum are:</span>
                <span className='flex flex-col px-32'>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Personal, Social and Emotional Development</span>
                            <span onClick={() => toggleShowMore('showMore7')}>{showMore.showMore7 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore7 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='text-base'>Our programme supports children to develop:</span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Confidence, whilst feeling safe, secure and ready to learn.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Playing co-operatively and choosing their own activities.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Managing and understanding their feelings and to understand how their actions affect others.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A positive sense of themselves e.g “I am good at making things”.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Managing and understanding their feelings and to understand how their actions affect others.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>The confidence to have a go at new activities.</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Physical Development</span>
                            <span onClick={() => toggleShowMore('showMore8')}>{showMore.showMore8 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore8 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='text-base'>Our programme supports children to develop:</span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Opportunities to develop gross and fine motor skills to hold a pencil effectively to write and draw.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Using a range of large and small equipment - PE equipment, small sequins, tongs, tweezers.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Balancing travelling and climbing equipment.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Practical skills such as dressing, undressing, and using the toilet.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>An understanding about keeping healthy.</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className='flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Communication and Language</span>
                            <span onClick={() => toggleShowMore('showMore9')}>{showMore.showMore9 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore9 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='text-base'>Our programme supports children to develop:</span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Conversational skills.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Listening and concentration skills.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>The ability to respond to and follow instructions.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Extending and developing their vocabulary.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Recreating experiences and roles through play.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Role play area - often following children's interests</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Literacy</span>
                            <span onClick={() => toggleShowMore('showMore10')}>{showMore.showMore10 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore10 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='text-base'>Our programme supports children to develop:</span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Naming and recognising letters of the alphabet.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Strategies to decode new words for reading and writing – phonics.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Hearing, recognising and saying strings of rhyming words.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Writing simple words and phrases.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Using their imagination in response to stories and experiences.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Sharing and discussing familiar books.</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Mathematics</span>
                            <span onClick={() => toggleShowMore('showMore11')}>{showMore.showMore11 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore11 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='text-base'>Our programme supports children to develop:</span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Recognising, writing and ordering numbers.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Skills and understanding for adding and taking away.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Using mathematical words when talking about capacity, position, distance, time and money.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Understanding of shape and size including 2D and 3D shapes.</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Understanding of the World</span>
                            <span onClick={() => toggleShowMore('showMore12')}>{showMore.showMore12 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore12 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='text-base'>Our programme supports children to develop:</span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>History, geography, science, ICT and technology.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Gaining an understanding of their world.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Finding out about other people and places.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Finding out about the past.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Exploring and investigating.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Making observations of animals, plants and talking about changes and differences.</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Expressive arts & Design</span>
                            <span onClick={() => toggleShowMore('showMore13')}>{showMore.showMore13 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore13 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='text-base'>Our programme supports children to develop:</span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Exploring and playing with a variety of art materials and media.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Exploring colour and colour changes.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Exploring shape and texture using all of their senses.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Children sharing their thoughts, feelings and ideas.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Developing an interest in music, singing and imaginative play.</span>
                                </span>
                            </span>
                        }
                    </span>
                </span>
            </span>
            <span className='flex flex-col py-2 px-24 mb-10'>
                <hr className='w-full h-1 border-none rounded-md bg-[#061c56]'></hr>
                <span className='text-3xl font-semibold text-center opacity-90 mb-2 my-1 text-[#061c56] mt-4'>Campus-specific facilities and features</span>
                <span className='flex justify-center mt-3 gap-20 text-[#061c56] mb-4'>
                    <span className='flex flex-col gap-1 pb-3'>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                    </span>
                    <span className='flex flex-col gap-1'>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-1 w-72 ml-5 rounded-xl bg-[#061c56]'></hr>
                    </span>
                </span>
                <hr className='w-full h-1 border-none rounded-md bg-[#061c56]'></hr> 
            </span>
            <span className='flex flex-col bg-[#21bdf3] pt-6 pb-10 mb-10'>
                <span className='text-3xl font-semibold text-center mb-7 opacity-90 text-[#061c56]'>Photo Gallery</span>
                <span className='flex px-32 gap-3'>
                    <span className='w-[20rem] h-60 '>
                        <img className='w-full h-full rounded-lg' src={Pic7} alt=''></img>
                    </span>
                    <span className='w-[40rem] h-60  bg-gray-200'>
                        <img className='w-full h-full rounded-lg object-cover' src={Pic} alt=''></img>
                    </span>
                    <span className='w-[20rem] h-60 '>
                        <img className='w-full h-full rounded-lg object-cover' src={Pic4} alt=''></img>
                    </span>
                </span>
                <span className='flex gap-3 mt-6 px-32'>
                    <span className='w-[21rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic5} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full object-cover rounded-lg' src={Pic3} alt=''></img>
                    </span>
                    <span className='w-[22rem] h-48 ' >
                        <img className='w-full h-full rounded-lg' src={Pic6} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic2} alt=''></img>
                    </span>
                </span>
                <span className='flex gap-3 mt-6 px-32'>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full object-cover rounded-lg' src={Pic11} alt=''></img>
                    </span>
                    <span className='w-[21rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic8} alt=''></img>
                    </span>
                    <span className='w-[22rem] h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic9} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg object-cover' src={Pic10} alt=''></img>
                    </span>
                </span>
            </span>
            <span className='flex flex-col mt-8 px-24'>
                <span className='text-3xl font-semibold text-center mb-5 opacity-90'>Admissions Procedure</span>
                <span className='flex flex-col px-3'>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-80'>
                            <span className='text-xl'>Obtaining the Registration Form</span>
                            <span onClick={() => toggleShowMore('showMore1')}>{showMore.showMore1 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore1 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Pick up registration from any section of the school (Early Years/Primary/Secondary). See respective addresses below.</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Forms cost N10,000 (Early Years Foundation Stage and Primary), N15,000 (Secondary) and N20,000 (College)</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Submission must be done before the entrance examinations which will be indicated at the time of purchase</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='text-xl'>The following must be submitted with the registration form</span>
                            <span onClick={() => toggleShowMore('showMore2')}>{showMore.showMore2 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore2 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A current passport photograph</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A copy of the child's birth certificate</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>The previous term's report card</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A medical report after admission is offered</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-80'>
                            <span className='text-xl'>Individual visits to the school</span>
                            <span onClick={() => toggleShowMore('showMore3')}>{showMore.showMore3 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore3 && 
                            <span className='flex flex-col px-6 space-y-2 pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>A visit to the school can be arranged for the prospective student and their parents. During this visit the student will be taken on a tour of the school and the parents will have the opportunity to speak with the Head of School and/or the sectional heads. Arrangements can also be made for the student to spend the day in the school.</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-3 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className='flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Entrance examinations</span>
                            <span onClick={() => toggleShowMore('showMore4')}>{showMore.showMore4 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore4 && 
                            <span className='flex flex-col px-6 space-y-2 pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>The entrance exams take place in December and in April. As stated earlier, students who pass the entrance examinations may be invited in for an interview</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-4 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className='flex justify-between items-center opacity-80'>
                            <span className='text-xl'>Acceptance</span>
                            <span onClick={() => toggleShowMore('showMore5')}>{showMore.showMore5 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore5 && 
                            <span className='flex flex-col pl-6 space-y-2 pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>Offer letters will be sent to the successful students. The tuition fees must be paid on or before the first day of the term</span>
                                </span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-3 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className='  flex justify-between items-center opacity-90'>
                            <span className='text-xl'>Orientation for new students</span>
                            <span onClick={() => toggleShowMore('showMore6')}>{showMore.showMore6 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore6 && 
                            <span className='flex flex-col px-6 space-y-2 pt-4 opacity-70'>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-xl font-bold'><BsDot /></span>
                                    <span className='text-lg font-normal'>On a designated day before resumption, which will be communicated to new Temple families, students and their parents will be formally introduced to Temple School life and given the school calendar for the school year. The Meet and Greet programme at the beginning of each new session will also enable the new students and their parents meet their teachers and members of management.</span>
                                </span>
                            </span>
                        }
                    </span>
                </span>
            </span>
            
        </div>
    </div>
  )
}

export default Section1Content;