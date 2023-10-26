import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import pic1 from '../assets/Sec.png'
import Pic from '../assets/gallery/Sec.png';
import Pic2 from '../assets/gallery/Sec2.png';
import Pic3 from '../assets/gallery/Pic12.png';
import Pic4 from '../assets/gallery/Primary4.png';
import Pic5 from '../assets/gallery/Sec3.png';
import Pic6 from '../assets/gallery/pic9.png';
import Pic7 from '../assets/gallery/pic7.png';

const Section3Content = () => {
  return (
    <div className='flex flex-col w-screen'>
        <span className='flex flex-col justify-center items-center gap-4 py-28 bg-[#EEEEEE]'>
            <span className='text-4xl font-semibold'>Secondary School</span>
        </span>
        <div className='flex flex-col gap-10 mb-8'>
            <span className='flex pr-24 pl-12'>
                <img className='w-[34rem]' src={pic1} alt=''></img>
                <span className='flex flex-col -ml-36 gap-3 pl-12 pt-4 pb-4 bg-[#544E5D] w-full text-white'>
                    <span className=' text-5xl font-bold w-[32rem]'>Welcome Address by Principal </span>
                    <span className='text-sm w-[42rem] space-y-3'>
                        <p>Temple Secondary School (TSS) is a British School which proudly offers unique opportunities for every child (from age 11) to acquire quality education as a springboard for remarkable life achievements and actualisation of dreams. At TSS, there are proven, result-oriented, multi-dimensional approaches with state-of-the-art facilities employed towards discovering every child's potential, positioning them for stardom and excellence. Our staff capacity is poised to passionately deliver the very best in academics, sports, music and other extra-curricular engagements.  Our pastoral care is driven and dispensed with intentionality and professionalism. As an academically inclusive school, our Exceptional Learners Department (ELD) boasts of experts trained to perfectly teach and provide robust care for children with learning challenges. We believe education is a journey, and we are committed to providing a nurturing and inspiring environment for all children to thrive. We educate the whole child because every child is worthy.Welcome to TSS!</p>
                    </span>
                    <span className='flex flex-col gap-1 w-[42rem] items-end italic'>
                        <span className='text-lg '>Mr. David Ogunleye</span>
                        <span className='text-lg '>Principal, Temple School Secondary Section</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col gap-6 pr-32 pl-40'>
                    <span className='text-sm'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child's life and development. We are aware of this and we have made learning as fun as possible.</span>
                    <span className='text-sm'>Our overall aim is to provide each child with the appropriate work within a stimulating and nurturing environment so that each child has the opportunity and incentive to achieve his/her full potential. Children learn best when their efforts receive positive encouragement and this is an integral part of our classroom practice in our Early Years and Foundation Stage.</span>
                    <span className='text-sm'>Early childhood is the foundation on which children build the rest of their lives. The Early Years and Foundation Stage makes a crucial contribution to children's early development and learning. Starting school is an important step! At Temple we have a carefully planned pre-school induction programme to make the transition from home to school sensitive and appropriate for each child. We provide children with a rich variety of teaching and learning experiences that are appropriate to their needs. Learning takes place in a secure and stimulating environment where first hand learning experiences encourage the development of imagination, creativity and the enjoyment of learning.</span>
                    <span className='text-sm'>What children can do, rather than what they cannot do are the starting points in learning. Play helps young children to learn and develop through doing and talking, which research has shown to be the means by which young children learn to think. Structured play is important as listening, playing, speaking, concentrating, persistence and learning to work and co-operate with others are the main ways through which children learn about themselves and the world around them. During this stage, Early Learning Goals set out what most children are expected to achieve by the end of the Foundation Stage.</span>
            </span>
            <span className='flex flex-col gap-3 mt-5'>
                <span className='text-3xl font-semibold text-center'>Campus-specific facilities and features</span>
                <span className='px-32 text-sm'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span>
                <span className='flex justify-center mt-3 gap-20'>
                    <span className='flex flex-col gap-1'>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                    </span>
                    <span className='flex flex-col gap-1'>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                        <span className='flex gap-2 items-center'>
                            <HiOutlineCheckCircle className='w-5 h-5 text-[#061c56]'/>
                            <span className='text-lg font-normal'>Quis nostrud exercitation ullamco</span>
                        </span>
                        <hr className='h-3 w-72 ml-5'></hr>
                    </span>
                </span>
            </span>
            <span className='flex flex-col mt-8'>
                <span className='text-3xl font-semibold text-center mb-7'>Campus Photo Gallery</span>
                <span className='flex px-32 gap-3'>
                    <span className='w-[20rem] h-60 '>
                        <img className='w-full h-full rounded-lg' src={Pic7} alt=''></img>
                    </span>
                    <span className='w-[40rem] h-60  bg-gray-200'>
                        <img className='w-full h-full rounded-lg' src={Pic} alt=''></img>
                    </span>
                    <span className='w-[20rem] h-60 '>
                        <img className='w-full h-full rounded-lg' src={Pic4} alt=''></img>
                    </span>
                </span>
                <span className='flex gap-3 mt-6 px-32'>
                    <span className='w-[21rem] h-48 ' >
                        <img className='w-full h-full rounded-lg' src={Pic5} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg' src={Pic3} alt=''></img>
                    </span>
                    <span className='w-[22rem] h-48 ' >
                        <img className='w-full h-full rounded-lg' src={Pic6} alt=''></img>
                    </span>
                    <span className='w-52 h-48 ' >
                        <img className='w-full h-full rounded-lg' src={Pic2} alt=''></img>
                    </span>
                </span>
            </span>
            <span className='flex flex-col mt-8'>
                <span className='text-3xl font-semibold text-center mb-5'>Admissions Procedure</span>
                <span className='flex flex-col gap-2 px-32'>
                    <span className='px-4 py-3 border-2 border-[#061c56] flex'>
                            <span className='text-xl'>Obtaining the Registration Form</span>
                    </span>
                    <span className='px-4 py-3 border-2 border-[#061c56] flex'>
                            <span className='text-xl'>The following must be submitted with the registration form</span>
                    </span>
                    <span className='px-4 py-3 border-2 border-[#061c56] flex'>
                            <span className='text-xl'>Individual visits to the school & Entrance examinations</span>
                    </span>
                    <span className='px-4 py-3 border-2 border-[#061c56] flex'>
                            <span className='text-xl'>Acceptance & Orientation for new students</span>
                    </span>
                </span>
            </span>
        </div>
    </div>  
  )
}

export default Section3Content