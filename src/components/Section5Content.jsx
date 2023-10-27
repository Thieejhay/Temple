import React from 'react';
import pic1 from '../assets/Sec.png';
import pic2 from '../assets/Eld.png'

const Section5Content = () => {
  return (
    <div className='flex flex-col w-screen'>
        <span className='flex flex-col justify-center items-center gap-4 py-28 bg-[#EEEEEE]'>
            <span className='text-4xl font-semibold'>Exceptional Learners Department (ELD)</span>
        </span>
        <div className='flex flex-col gap-10 mb-8'>
            <span className='flex pr-24 pl-12'>
                <img className='w-[34rem]' src={pic1} alt=''></img>
                <span className='flex flex-col -ml-36 gap-8 pl-12 pt-8 pb-4 bg-[#544E5D] w-full text-white'>
                    <span className=' text-5xl font-bold w-[32rem]'>Welcome Address </span>
                    <span className='text-base w-[42rem] space-y-3'>
                        <p>We welcome you to the Exceptional Learners Department and look forward to working with you to find the most effective ways to support your child's education. Our diverse team of skilled and licensed specialists help children with unique educational needs and impairments during their early development using appropriate teaching materials, evidenced-based approaches and therapy services in an understanding and supportive learning environment. I trust that this packet will answer all your questions about the ELD, if you have further questions, please do not hesitate to contact us. I anticipate a productive and engaging session.</p>
                    </span>
                    {/* <span className='flex flex-col gap-1 w-[42rem] items-end italic'>
                        <span className='text-lg '>Mr. David Ogunleye</span>
                        <span className='text-lg '>Principal, Temple School Secondary Section</span>
                    </span> */}
                </span>
            </span>
            <span className='flex flex-col justify-center items-center gap-5 py-6'>
                <span className='text-3xl font-semibold opacity-80'>Meet the Supervisors</span>
                <span className='flex gap-5'>
                    <span className='flex flex-col gap-3 w-48'>
                        <span className='w-48 h-48 rounded-lg bg-slate-50'></span>
                        <span className='text-base font-medium text-center leading-5 h-8'>EYFS Team lead & speech Therapist</span>
                        <span className='text-base font-normal text-center '>Ms. Cadmus</span>
                    </span>
                    <span className='flex flex-col gap-3 w-48'>
                        <span className='w-48 h-48 rounded-lg bg-slate-50'></span>
                        <span className='text-base font-medium text-center h-8'>Primary Team lead</span>
                        <span className='text-base font-normal text-center'>Mrs Adesiyan</span>
                    </span>
                    <span className='flex flex-col gap-3 w-48'>
                        <span className='w-48 h-48 rounded-lg bg-slate-50'></span>
                        <span className='text-base font-medium text-center leading-5 h-8'>Secondary wave 1 & 3 lead </span>
                        <span className='text-base font-normal text-center'>Mrs Shadeko</span>
                    </span>
                    <span className='flex flex-col gap-3 w-48'>
                        <span className='w-48 h-48 rounded-lg bg-slate-50'></span>
                        <span className='text-base font-medium text-center h-8'>Secondary wave 2 lead </span>
                        <span className='text-base font-normal text-center'>Ms Kolawole</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col gap-5 py-4 justify-center items-center'>
                <span className='text-3xl font-semibold opacity-80'>Support Pathways</span>
                <span className='flex flex-col gap-8'>
                    <span className='flex gap-10'>
                        <span className='w-52 rounded-lg py-3 text-center text-white text-lg uppercase bg-[#061c56]'>Provision</span>
                        <span className='w-52 rounded-lg py-3 text-center text-white text-lg uppercase bg-[#f6bc75]'>Wave 1</span>
                        <span className='w-52 rounded-lg py-3 text-center text-white text-lg uppercase bg-[#f6bc75]'>Wave 2</span>
                        <span className='w-52 rounded-lg py-3 text-center text-white text-lg uppercase bg-[#f6bc75]'>Wave 3</span>
                    </span>
                    <span className='flex gap-10'>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-lg uppercase bg-[#061c56]'>Curriculum</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Grade level, no differentiaion</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Grade level, with differentiated tests and reduced subjects</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Personalized Curriculum/Vocational Pathway</span>
                    </span>
                    <span className='flex gap-10'>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-lg uppercase bg-[#061c56]'>Support Teacher</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Subject Teacher</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Subject Teacher and Learing Facilator</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Personal Learing Facilator</span>
                    </span>
                    <span className='flex gap-10'>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-lg uppercase bg-[#061c56]'>IEP/behaviour Contract</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>No</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Yes</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Yes</span>
                    </span>
                    <span className='flex gap-10'>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-lg uppercase bg-[#061c56]'>Therapy</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>No</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>1 type of therapy</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>ABBA , Speech and Occupational</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col gap-2 py-4 px-20 justify-center items-center w-screen'>
                <span className='text-3xl font-semibold opacity-80'>Area of Need</span>
                <span className='text-base font-normal mb-8 opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                <span className='flex flex-col gap-6'>
                    <span className='flex gap-5'>
                        <span className='flex gap-3 p-5 hover:shadow-xl rounded-lg'>
                            <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'></span>
                            <span className='flex flex-col gap-1'>
                                <span className='text-xl font-medium'>Cognition & learning</span>
                                <span className='text-sm opacity-80 font-normal w-[30rem]'>This focuses on your child's academic level, particularly in literacy and numeracy as well as their executive function skills.</span>
                            </span>
                        </span>
                        <span className='flex gap-3 p-5 hover:shadow-xl rounded-lg'>
                            <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'></span>
                            <span className='flex flex-col gap-1'>
                                <span className='text-xl font-medium'>Social Emotional Mental Health</span>
                                <span className='text-sm opacity-80 font-normal w-[30rem]'>This looks at your child's social skills, managing their emotions, and understanding their environment (including but not limited to health and safety and independent living skills).</span>
                            </span>
                        </span>
                    </span>
                    <span className='flex gap-5'>
                        <span className='flex gap-3 p-5 hover:shadow-xl rounded-lg'>
                            <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'></span>
                            <span className='flex flex-col gap-1'>
                                <span className='text-xl font-medium'>Social Emotional Mental Health</span>
                                <span className='text-sm opacity-80 font-normal w-[30rem]'>This focuses on the learner's communication skills and vocabulary. We offer speech therapy services to develop this area.</span>
                            </span>
                        </span>
                        <span className='flex gap-3 p-5 hover:shadow-xl rounded-lg'>
                            <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'></span>
                            <span className='flex flex-col gap-1'>
                                <span className='text-xl font-medium'>Sensory/Physical Needs</span>
                                <span className='text-sm opacity-80 font-normal w-[30rem]'>This area focuses on your child's sensory needs and their fine and gross motor skills. We provide occupational therapy and provide support for your child's sensory needs.</span>
                            </span>
                        </span>
                    </span>
                </span>
            </span>
            <span className='w-screen h-60'>
                <img className='w-full h-full' src={pic2} alt=''></img>
            </span>
            <span className='flex flex-col gap-2 py-4 px-20 justify-center items-center w-screen'>
                <span className='text-3xl font-semibold opacity-80'>Our Process:The Graduated Approach</span>
                <span className='flex flex-col gap-6'>
                    <span className='flex gap-5'>
                        <span className='flex gap-3 p-5 hover:shadow-xl rounded-lg'>
                            <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'></span>
                            <span className='flex flex-col gap-1'>
                                <span className='text-xl font-medium'>Cognition & learning</span>
                                <span className='text-sm opacity-80 font-normal w-[30rem]'>This focuses on your child's academic level, particularly in literacy and numeracy as well as their executive function skills.</span>
                            </span>
                        </span>
                        <span className='flex gap-3 p-5 hover:shadow-xl rounded-lg'>
                            <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'></span>
                            <span className='flex flex-col gap-1'>
                                <span className='text-xl font-medium'>Social Emotional Mental Health</span>
                                <span className='text-sm opacity-80 font-normal w-[30rem]'>This looks at your child's social skills, managing their emotions, and understanding their environment (including but not limited to health and safety and independent living skills).</span>
                            </span>
                        </span>
                    </span>
                    <span className='flex gap-5'>
                        <span className='flex gap-3 p-5 hover:shadow-xl rounded-lg'>
                            <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'></span>
                            <span className='flex flex-col gap-1'>
                                <span className='text-xl font-medium'>Social Emotional Mental Health</span>
                                <span className='text-sm opacity-80 font-normal w-[30rem]'>This focuses on the learner's communication skills and vocabulary. We offer speech therapy services to develop this area.</span>
                            </span>
                        </span>
                        <span className='flex gap-3 p-5 hover:shadow-xl rounded-lg'>
                            <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'></span>
                            <span className='flex flex-col gap-1'>
                                <span className='text-xl font-medium'>Sensory/Physical Needs</span>
                                <span className='text-sm opacity-80 font-normal w-[30rem]'>This area focuses on your child's sensory needs and their fine and gross motor skills. We provide occupational therapy and provide support for your child's sensory needs.</span>
                            </span>
                        </span>
                    </span>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Section5Content