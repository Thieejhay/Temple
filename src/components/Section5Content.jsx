import React from 'react';
import Banner from '../assets/dd.png';
import pic1 from '../assets/eldb.png'
import Pic8 from '../assets/gallery/d1.png';
import Pic9 from '../assets/gallery/d2.png';
import Pic10 from '../assets/gallery/d3.png';
import Pic11 from '../assets/gallery/d5.png';
import Pic7 from '../assets/gallery/d6.png';
import Pic6 from '../assets/gallery/d7.png';
import Pic5 from '../assets/gallery/d4.png';
import Pic4 from '../assets/gallery/d8.png';
import icon from'../assets/ic1.png'
import icon2 from'../assets/ic2.png'
import icon3 from'../assets/ic3.png'
import icon4 from'../assets/ic4.png'
import icon5 from'../assets/ic5.png'
import icon6 from'../assets/ic6.png'
import icon7 from'../assets/ic8.png'
import icon8 from'../assets/ic9.png'
import pic12 from '../assets/eld4.png'
import pic13 from '../assets/eld5.png'
import pic14 from '../assets/eld6.png'
import pic15 from '../assets/eld3.png'

// import pice from '../assets/Eld.png'

const Section5Content = () => {
  return (
    <div className='flex flex-col w-screen'>
        <span className='flex flex-col justify-center items-center relative h-[23rem] bg-black'>
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10 object-cover'></img>
            <span className='text-4xl opacity-90 font-semibold absolute top-36 z-20 left-[47%] -translate-x-[47%] text-[#f6bc75] flex'>Exceptional Learners Department</span>
            <span className='text-4xl opacity-90 font-semibold absolute top-[11.5rem] z-20 left-[47%] -translate-x-[47%] text-[#f6bc75] flex'>(ELD)</span>
        </span>
        <div className='flex flex-col gap-10 py-3'>
            <span className='flex pl-36 pr-20'>
                <img className='w-[23rem] h-[29rem] object-right' src={pic1} alt=''></img>
                <span className='flex flex-col gap-8 pl-12 pt-8 pb-4 bg-[#f6bc75] w-full text-[#061c56]'>
                    <span className=' text-5xl font-bold w-[32rem]'>Welcome Address</span>
                    <span className='text-base w-[42rem] space-y-3'>
                        <p>We welcome you to the Exceptional Learners Department and look forward to working with you to find the most effective ways to support your child's education. </p>
                        <p> Our diverse team of skilled and licensed specialists help children with unique educational needs and impairments during their early development using appropriate teaching materials, evidenced-based approaches and therapy services in an understanding and supportive learning environment.</p>
                        <p>I trust that this packet will answer all your questions about the ELD, if you have further questions, please do not hesitate to contact us. I anticipate a productive and engaging session.</p>
                    </span>
                    <span className='flex flex-col gap-1 w-[42rem] items-end italic'>
                        <span className='text-lg '>Mrs. Oseri Oweye</span>
                        <span className='text-lg '>Head of ELD</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col justify-center items-center gap-5 py-6'>
                <span className='text-3xl font-semibold opacity-80'>Meet the Supervisors</span>
                <span className='flex gap-5'>
                    <span className='flex flex-col w-56 items-center shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={pic15} alt='' className='w-full h-full rounded-b-none rounded-t-md'></img></span>
                        <span className='text-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Ms. Cadmus</span>
                            <span className='text-base font-medium'>EYFS Team lead & speech Therapist </span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 items-center shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={pic12} alt='' className='w-full h-full rounded-b-none rounded-t-md'></img></span>
                        <span className='text-center w-full h-full justify-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Mrs Adesiyan</span>
                            <span className='text-base font-medium'>Primary Team lead </span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 items-center shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={pic13} alt='' className='w-full h-full rounded-b-none rounded-t-md'></img></span>
                        <span className='text-center w-full h-full justify-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Mrs Shadeko</span>
                            <span className='text-base font-medium'>Secondary wave 1 & 3 lead </span>
                        </span>
                    </span>
                    <span className='flex flex-col w-56 items-center shadow-xl'>
                        <span className='w-56 h-56 bg-gray-200'><img src={pic14} alt='' className='w-full h-full rounded-b-none rounded-t-md'></img></span>
                        <span className='text-center w-full h-full justify-center rounded-b-md flex py-3 flex-col bg-[#061c56] hover:text-white text-[#f6bc75]'>
                            <span className='text-xl font-medium '>Ms Kolawole</span>
                            <span className='text-base font-medium'>Secondary wave 2 lead </span>
                        </span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col gap-2 py-4 justify-center items-center'>
                <span className='text-3xl font-semibold opacity-80'>Support Pathways</span>
                <span className='flex flex-col gap-2'>
                    <span className='flex gap-2'>
                        <span className='w-52 rounded-lg py-3 text-center text-white text-lg uppercase bg-[#061c56]'>Provision</span>
                        <span className='w-52 rounded-lg py-3 text-center text-white text-lg uppercase bg-[#f6bc75]'>Wave 1</span>
                        <span className='w-52 rounded-lg py-3 text-center text-white text-lg uppercase bg-[#f6bc75]'>Wave 2</span>
                        <span className='w-52 rounded-lg py-3 text-center text-white text-lg uppercase bg-[#f6bc75]'>Wave 3</span>
                    </span>
                    <span className='flex gap-2'>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-lg uppercase bg-[#061c56]'>Curriculum</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Grade level, no differentiaion</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Grade level, with differentiated tests and reduced subjects</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Personalized Curriculum/Vocational Pathway</span>
                    </span>
                    <span className='flex gap-2'>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-lg uppercase bg-[#061c56]'>Support Teacher</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Subject Teacher</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Subject Teacher and Learing Facilator</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Personal Learing Facilator</span>
                    </span>
                    <span className='flex gap-2'>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-lg uppercase bg-[#061c56]'>IEP/behaviour Contract</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>No</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Yes</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>Yes</span>
                    </span>
                    <span className='flex gap-2'>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-lg uppercase bg-[#061c56]'>Therapy</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>No</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>1 type of therapy</span>
                        <span className='w-52 rounded-lg h-24 px-2 items-center flex text-center justify-center text-white text-base bg-[#f6bc75]'>ABBA , Speech and Occupational</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col gap-2 py-4 px-20 justify-center items-center w-screen bg-[#061c56]'>
                <span className='text-3xl font-semibold opacity-80 text-white'>Areas of Need</span>
                <span className='flex flex-col gap-6'>
                    <span className='flex gap-5'>
                        <span className='flex hover:shadow-xl rounded-lg bg-white relative group'>
                           <span className='opacity-0 flex gap-3 p-2 group-hover:opacity-100 transition-transform duration-1000'>
                                <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'>
                                    <img className='w-full h-full rounded-md' alt='' src={icon}></img>
                                </span>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-xl font-medium opacity-90'>Cognition & learning</span>
                                    <span className='text-sm opacity-80 font-normal w-[30rem] '>This focuses on your child's academic level, particularly in literacy and numeracy as well as their executive function skills.</span>
                                </span>
                           </span>
                           <span className='uppercase absolute top-[50%] -translate-y-[50%] left-[50%] text-2xl -translate-x-[50%] group-hover:opacity-0 font-semibold text-[#21bdf3]'>Cognition & learning</span>
                        </span>
                        <span className='flex hover:shadow-xl rounded-lg bg-white relative group'>
                            <span className='opacity-0 flex gap-3 p-2 group-hover:opacity-100 transition-transform duration-1000'>
                                <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'><img className='w-full h-full rounded-md' alt='' src={icon2}></img></span>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-xl font-medium opacity-90'>Social Emotional Mental Health</span>
                                    <span className='text-sm opacity-80 font-normal w-[30rem]'>This looks at your child's social skills, managing their emotions, and understanding their environment (including but not limited to health and safety and independent living skills).</span>
                                </span>
                            </span>
                            <span className='uppercase absolute top-[50%] -translate-y-[50%] left-[50%] text-2xl -translate-x-[50%] group-hover:opacity-0 font-semibold text-[#21bdf3] text-center flex'>Social Emotional Mental Health</span>
                        </span>
                    </span>
                    <span className='flex gap-5'>
                        <span className='flex hover:shadow-xl rounded-lg bg-white relative group'>
                           <span className='opacity-0 flex gap-3 p-2 group-hover:opacity-100 transition-transform duration-1000'>
                                <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'>
                                    <img className='w-full h-full rounded-md' alt='' src={icon3}></img>
                                </span>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-xl font-medium opacity-90'>Social Emotional Mental Health</span>
                                    <span className='text-sm opacity-80 font-normal w-[30rem]'>This focuses on the learner's communication skills and vocabulary. We offer speech therapy services to develop this area.</span>
                                </span>
                           </span>
                           <span className='uppercase absolute top-[50%] -translate-y-[50%] left-[50%] text-2xl -translate-x-[50%] group-hover:opacity-0 font-semibold text-[#21bdf3] text-center'>Social Emotional Mental Health</span>
                        </span>
                        <span className='flex hover:shadow-xl rounded-lg bg-white relative group'>
                            <span className='opacity-0 flex gap-3 p-2 group-hover:opacity-100 transition-transform duration-1000'>
                                <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'><img className='w-full h-full rounded-md' alt='' src={icon4}></img></span>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-xl font-medium opacity-90'>Sensory/Physical Needs</span>
                                    <span className='text-sm opacity-80 font-normal w-[30rem]'>This area focuses on your child's sensory needs and their fine and gross motor skills. We provide occupational therapy and provide support for your child's sensory needs.</span>
                                </span>
                            </span>
                            <span className='uppercase absolute top-[50%] -translate-y-[50%] left-[50%] text-2xl -translate-x-[50%] group-hover:opacity-0 font-semibold text-[#21bdf3] text-center flex'>Sensory/Physical Needs</span>
                        </span>
                    </span>
                </span>
            </span>
            <span className='w-screen h-60 bg-[#f6bc75] -mt-10'>
            </span>
            <span className='flex flex-col gap-2 py-4 px-20 justify-center items-center w-screen bg-[#061c56] -mt-10'>
                <span className='text-3xl font-semibold opacity-80 text-white'>Our Process:The Graduated Approach</span>
                <span className='flex flex-col gap-6'>
                    <span className='flex gap-5'>
                        <span className='flex hover:shadow-xl rounded-lg bg-white relative group'>
                           <span className='opacity-0 flex gap-3 p-2 group-hover:opacity-100 transition-transform duration-1000'>
                                <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'>
                                    <img className='w-full h-full rounded-md' alt='' src={icon5}></img>
                                </span>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-xl font-medium'>Plan</span>
                                    <span className='text-sm opacity-80 font-normal w-[30rem]'>The team will create an Individualised Education Plan with agreed outcomes by the end of the session, then hold an IEP meeting to review and agree on the targets. Every IEP must be signed by parents.</span>
                                </span>
                           </span>
                           <span className='uppercase absolute top-[50%] -translate-y-[50%] left-[50%] text-2xl -translate-x-[50%] group-hover:opacity-0 font-semibold text-[#21bdf3] text-center'>Plan</span>
                        </span>
                        <span className='flex hover:shadow-xl rounded-lg bg-white relative group'>
                            <span className='opacity-0 flex gap-3 p-2 group-hover:opacity-100 transition-transform duration-1000'>
                                <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'><img className='w-full h-full rounded-md' alt='' src={icon6}></img></span>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-xl font-medium'>Asses</span>
                                    <span className='text-sm opacity-80 font-normal w-[30rem]'>When your child resumes we observe their behaviour and assess their academic abilities over a 4 week period. A record of concern may also be raised by the class teacher.</span>
                                </span>
                            </span>
                            <span className='uppercase absolute top-[50%] -translate-y-[50%] left-[50%] text-2xl -translate-x-[50%] group-hover:opacity-0 font-semibold text-[#21bdf3] text-center flex'>Asses</span>
                        </span>
                    </span>
                    <span className='flex gap-5'>
                        <span className='flex hover:shadow-xl rounded-lg bg-white relative group'>
                           <span className='opacity-0 flex gap-3 p-2 group-hover:opacity-100 transition-transform duration-1000'>
                                <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'>
                                    <img className='w-full h-full rounded-md' alt='' src={icon7}></img>
                                </span>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-xl font-medium'>Social Emotional Mental Health</span>
                                    <span className='text-sm opacity-80 font-normal w-[30rem]'>At the end of the session, an Annual Review meeting will be set up to go through your child's overall progress and achievements throughout the session.</span>
                                </span>
                           </span>
                           <span className='uppercase absolute top-[50%] -translate-y-[50%] left-[50%] text-2xl -translate-x-[50%] group-hover:opacity-0 font-semibold text-[#21bdf3] text-center'>Social Emotional Mental Health</span>
                        </span>
                        <span className='flex hover:shadow-xl rounded-lg bg-white relative group'>
                            <span className='opacity-0 flex gap-3 p-2 group-hover:opacity-100 transition-transform duration-1000'>
                                <span className='w-12 h-12 rounded-md mt-1 bg-slate-100'><img className='w-full h-full rounded-md' alt='' src={icon8}></img></span>
                                <span className='flex flex-col gap-1'>
                                    <span className='text-xl font-medium'>Do</span>
                                    <span className='text-sm opacity-80 font-normal w-[30rem]'>The learning facilitator and therapists work with your child and monitor and record their progress daily.</span>
                                </span>
                            </span>
                            <span className='uppercase absolute top-[50%] -translate-y-[50%] left-[50%] text-2xl -translate-x-[50%] group-hover:opacity-0 font-semibold text-[#21bdf3] text-center flex'>Do</span>
                        </span>
                    </span>
                </span>
            </span>
            {/* <span className='flex flex-col py-2 px-20 gap-7'>
                <span className='text-2xl font-semibold opacity-90 pl-5'>ASSIGNED LEARNING FACILITATORS</span>
                <span className='flex gap-5'>
                    <span className='flex rounded-lg'>
                        <span className='w-56 h-60 bg-gray-100'><img className='w-full h-full object-cover rounded-l-lg' src={Pic10} alt=''></img></span>
                        <span className='w-[23rem] h-60 p-5 flex flex-col rounded-r-lg gap-1 bg-[#544E5D]'>
                            <span className='text-base opacity-80 text-[#f6bc75]'>What they do?</span>
                            <span className='text-lg opacity-80 text-white'>The Learning Facilitator is assigned to your child to support them through their learning and also conduct therapy sessions based on agreed outcomes and the needs of your child.</span>
                        </span>
                    </span>
                    <span className='flex rounded-lg'>
                        <span className='w-56 h-60 bg-gray-100'><img className='w-full h-full rounded-l-lg object-cover' src={Pic11} alt=''></img></span>
                        <span className='w-[23rem] h-60 p-5 flex flex-col rounded-r-lg gap-1 bg-[#544E5D]'>
                            <span className='text-base opacity-80 text-[#f6bc75]'>How do i contact them?</span>
                            <span className='text-lg opacity-80 text-white'>The Learning Facilitator is unavailable during school hours because he or she is working diligently with your child. You will be able to reach them before or after school via their email orphone.</span>
                        </span>
                    </span>
                </span>
            </span> */}
            <span className='flex py-10 px-12 gap-10 -mt-10 bg-[#21bdf3] text-white'>
                <span className='flex flex-col w-[50%] gap-4'>
                    <span className='flex flex-col gap-2'>
                        <span className='uppercase font-medium text-3xl opacity-90'>INTERVENTION</span>
                        <span className='text-base opacity-80'>The intervention programme involves a teaching assistant available to your child three times a week during specific subjects that require extra attention. This involves review of lessons during one-on-one or small group study periods, differentiation of activities, instruction and assessments, access arrangements for international examinations, behaviour monitoring, setting academic targets, handwriting improvement and weekly monitoring reports.</span>
                    </span>
                    <span className='flex flex-col gap-2'>
                        <span className='uppercase font-medium text-3xl opacity-90'>FULL SUPPORT</span>
                        <span className='text-base opacity-80'>Temple School's entire philosophy is deeply rooted in an unwavering commitment to the safety and wellbeing of every child, young person and adult in Temple, through consistent and effective safeguarding procedures. We expect all staff and volunteers to share this commitment, and we provide equitable opportunities for all our children, regardless of background or ability.</span>
                    </span>
                    <span className='flex flex-col gap-2'>
                        <span className='uppercase font-medium text-3xl opacity-90'>ASDAN</span>
                        <span className='text-lg opacity-80'>ASDAN is a UK-based education charity and awarding body that provides programmes to more than 30 countries and territories across the world. Their courses equip learners to thrive in 21st Century education, work and life. Temple School SEN Department now offers all courses available of the ASDAN international platform.</span>
                        <span className='text-base opacity-80'>These courses are geared for children and adults with a wide range of abilities and cater for multiple types of support requirements. The focus is on showing what the student CAN do and highlighting their strengths. Challenges and tasks tend to be more practical, but cover a range of topics, including maths, science, language, social science, vocational training, and life skills acquisition.</span>
                    </span>
                </span>
                <span className='flex flex-col w-[50%] gap-8 mt-12'>
                    <span className='flex gap-8 px-8'>
                        <span className='w-52 h-32 ' >
                            <img className='w-full h-full object-cover rounded-lg' src={Pic11} alt=''></img>
                        </span>
                        <span className='w-[18rem] h-32 ' >
                            <img className='w-full h-full rounded-lg object-cover' src={Pic8} alt=''></img>
                        </span>
                    </span>
                    <span className='flex gap-8 px-8'>
                        <span className='w-72 h-32 ' >
                            <img className='w-full h-full rounded-lg object-cover' src={Pic9} alt=''></img>
                        </span>
                        <span className='w-52 h-32 ' >
                            <img className='w-full h-full rounded-lg object-cover' src={Pic10} alt=''></img>
                        </span>
                    </span>
                    <span className='flex gap-8 px-8'>
                        <span className='w-52 h-32 ' >
                            <img className='w-full h-full object-cover rounded-lg' src={Pic5} alt=''></img>
                        </span>
                        <span className='w-[18rem] h-32 ' >
                            <img className='w-full h-full rounded-lg object-cover' src={Pic6} alt=''></img>
                        </span>
                    </span>
                    <span className='flex gap-8 px-8'>
                        <span className='w-72 h-32 ' >
                            <img className='w-full h-full rounded-lg object-cover' src={Pic7} alt=''></img>
                        </span>
                        <span className='w-52 h-32 ' >
                            <img className='w-full h-full rounded-lg object-cover' src={Pic4} alt=''></img>
                        </span>
                    </span>
                </span>
            </span>
            {/* <span className='flex flex-col items-center justify-center py-8'>
                <span className='flex flex-col rounded-lg p-6 w-[48rem] bg-[#E5B87C]/20'>
                    <span className='text-sm opacity-60 w-[20rem]'>The Daily Report Book details your child's school day and performance in lessons and therapy. Please sign and use the daily report book to communicate with the learning facilitator. The Wave 2 and 3 learners will receive an ELD Progress Report (a summative report) at half-term and the end of term.</span>
                </span>
                <span className='flex  w-[45rem] justify-between'>
                    <span className='text-base font-semibold uppercase text-[#E5B87C] mt-2'>progress report</span>
                    <span className='w-[22rem] h-[15rem] rounded-lg bg-gray-700 -mt-36'></span>
                </span>
            </span> */}
        </div>
    </div>
  )
}

export default Section5Content;