import React from 'react';
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


const ProgramsContent = () => {
  return (
    <div className='flex flex-col w-screen'>
        {/* <span className='flex flex-col justify-center items-center gap-2 py-16 bg-[#27ace8]/50 text-white'>
            <span className='text-4xl font-semibold'>Exceptional Learners Department (ELD)</span>
            <span className='text-sm font-normal w-[60rem] text-center mt-2'>The whole team at Temple school is committed to providing a welcoming, attractive, and stimulating environment to support the needs and develop the learning of the children and families in the school. All areas of school life are inclusive, and the teaching is tailored toward individual learning, providing challenge and support; encouraging everyone to reach their full potential.</span>
            <span className='text-sm font-normal w-[60rem] text-center'>Our school is staffed by a team of qualified teachers, teaching assistants, speech therapists and occupational therapists. Staff provide a positive ethos to enable the children to work towards the development of 'life skills' and instil life-long learning aspirations for everyone through a range of activities which are fun and enjoyable. Our ELN provision ranges from subject intervention to full support.</span>
        </span> */}
        {/* <span className='flex py-24 text-white bg-gray-500'>
            <span className='flex flex-col gap-3 pl-[50%]'>
                <span className='uppercase text-2xl font-semibold'>intervention</span>
                <span className='text-xs w-[80%]'>The intervention programme involves a teaching assistant available to your child three times a week during specific subjects that require extra attention. This involves review of lessons during one-on-one or small group study periods, differentiation of activities, instruction and assessments, access arrangements for international examinations, behaviour monitoring, setting academic targets, handwriting improvement and weekly monitoring reports.</span>
            </span>
        </span> */}
        {/* <span className='flex flex-col gap-16 items-center text-white py-12 bg-[#061c56]'>
            <span className='flex flex-col gap-2'>
                <span className='text-3xl font-semibold text-center'>Safe Guarding Statement</span>
                <span className='w-[70rem] h-80 bg-gray-200 rounded-lg'></span>
            </span>
            <span className='flex flex-col gap-2 w-[70rem] pr-10'>
                <span className='text-3xl font-semibold'>Our Safe Guarding Statement</span>
                <span className='text-base'>Temple School's entire philosophy is deeply rooted in an unwavering commitment to the safety and wellbeing of every child, young person and adult in Temple, through consistent and effective safeguarding procedures. We expect all staff and volunteers to share this commitment, and we provide equitable opportunities for all our children, regardless of background or ability.</span>
                <span className='px-5 py-2 text-sm bg-[#f6bc75] w-fit rounded-lg'>Know more</span>
            </span>
            <span className='flex flex-col gap-2 w-[70rem] pr-10'>
                <span className='text-3xl font-semibold'>The New Safeguarding and Child Protection Policy</span>
                <span className='text-base'>Temple School's entire philosophy is deeply rooted in an unwavering commitment to the safety and wellbeing of every child, young person and adult in Temple, through consistent and effective safeguarding procedures. We expect all staff and volunteers to share this commitment, and we provide equitable opportunities for all our children, regardless of background or ability.</span>
                <span className='px-5 py-2 text-sm bg-[#f6bc75] w-fit rounded-lg'>Know more</span>
            </span>
        </span> */}
        <span className='flex pl-28 py-6 gap-16 bg-gray-100'>
            <span className='flex flex-col gap-5 justify-end'>
                <span className='text-5xl font-medium text-[#061c56] w-80'>Co-curicular Activities</span>
                <span className='text-[0.7rem] w-[25rem]'>There is a wide range of co-curricular activities available for Temple children. We believe that by offering all these enrichment opportunities outside the classroom, we can help our pupils develop more fully as individuals. Every child is encouraged to participate and meetings hold once a week.</span>
            </span>
            <span className='flex gap-4'>
                <span className='w-56 h-72 bg-gray-500 rounded-lg'><img src={Arts} className='w-full h-full' alt=''></img></span>
                <span className='w-56 h-72 bg-gray-500 rounded-lg'><img src={Sports} className='w-full h-full' alt=''></img></span>
                <span className='w-56 h-72 bg-gray-500 rounded-lg'><img src={Clubs} className='w-full h-full' alt=''></img></span>
            </span>
        </span>
        <span className='flex flex-col py-12 gap-10 px-24'>
            <span className='rounded-xl  h-16 shadow-shadow1'></span>
            <span className='flex flex-col px-3 gap-10'>
                <span className='flex flex-col gap-3'>
                    <span className='px-2 py-3 border-2 border-[#061c56] flex'>
                        <span className='text-xl'>Primary School Clubs</span>
                    </span>
                    <span className='flex flex-col pl-6 space-y-2 pt-4'>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Contemporary dance - <span className='lowercase text-lg font-normal'>promotes a dance and performing arts culture</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Sewing - <span className='lowercase text-lg font-normal'>introduces basic sewing skills and resourcefulness to children</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Debating/Public Speaking - <span className='lowercase text-lg font-normal'>builds confidence for public speaking</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Languages -<span className='lowercase text-lg font-normal'>Developing our children's interests in our local languages</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Poetry - <span className='lowercase text-lg font-normal'>promotes creative linguistic prowess.</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Earth - <span className='lowercase text-lg font-normal'>a conservation society that seeks to engage in activities that will promote habits that are beneficial to our planet</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Maths - <span className='lowercase text-lg font-normal'>Develops thinking and problem solving skills in Mathematics</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Science - <span className='lowercase text-lg font-normal'>Cultivates the inquisitive minds in practical scientific enquiry</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Cookery - <span className='lowercase text-lg font-normal'>Sets culinary skills in motion</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Art & Craft - <span className='lowercase text-lg font-normal'>drives development of fine motor skills and creativity</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Drama - <span className='lowercase text-lg font-normal'>Helps children develop empathy, promotes academic growth and empowerment through self-expression</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Choir - <span className='lowercase text-lg font-normal'>Creates a platform for the expression of voice, develop skills and confidence</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Photography - <span className='lowercase text-lg font-normal'>Teaches basic skills in photography</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Ballet - <span className='lowercase text-lg font-normal'>this exclusive club is for young boys and girls who are committed to learning the beautiful dance that is ballet.</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Taekwondo - <span className='lowercase text-lg font-normal'>for developing the discipline and mastery of this martial art.</span></span>
                        </span>
                    </span>
                </span>
                <span className='flex flex-col gap-3'>
                    <span className='px-2 py-3 border-2 border-[#061c56] flex'>
                        <span className='text-xl'>Secondary School Clubs</span>
                    </span>
                    <span className='flex flex-col pl-6 space-y-2 pt-4'>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Chess - T<span className='lowercase text-lg font-normal'>eaches the rudiments and skills of playing the game of chess.</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>School Band - <span className='lowercase text-lg font-normal'>A society of musicians who practice for performing in a variety of school events</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Fitness - <span className='lowercase text-lg font-normal'>Designed to promote healthy habits for the body</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Life saving - <span className='lowercase text-lg font-normal'>Based on the Red Cross Society, teaches life saving first aid and other practices.</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Pottery - <span className='lowercase text-lg font-normal'>Focuses on sculpting.</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Arts and craft - <span className='lowercase text-lg font-normal'>Focuses on developing creativity and uniqueness of ideas</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Dance - <span className='lowercase text-lg font-normal'>Embraces all forms of dance, indigenous and international</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Photography - <span className='lowercase text-lg font-normal'>Explores light, angles, colour and shapes in photography</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Debating - <span className='lowercase text-lg font-normal'>Improves expressive and receptive language skills in the studentsMaths - A society of gifted and talented Mathematicians</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Science -  <span className='lowercase text-lg font-normal'>Explores critical thinking in scientific enquiry and modern scientific breakthroughs.</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Double Dutch -  <span className='lowercase text-lg font-normal'>A fun club that teachers jump rope skills and stamina</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Megatones - <span className='lowercase text-lg font-normal'>The School Choir Club</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Expressive Arts - <span className='lowercase text-lg font-normal'>Students explore self-expression and interpretation through drama</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Culinary Arts Club - <span className='lowercase text-lg font-normal'>Where students learn the basics of food hygiene, food preparation and food presentation.</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>Film Club - <span className='lowercase text-lg font-normal'>Learning the rudiments of documentary making</span></span>
                        </span>
                        <span className='flex gap-2 items center'>
                            <span className='text-xl font-bold'>.</span>
                            <span className='uppercase text-xl font-semibold'>TempleMUN - <span className='lowercase text-lg font-normal'>Our very own Temple Model United Nations, an educational simulation and academic dialogue in which students learn about world issues, diplomacy, international relations, and the United Nations</span></span>
                        </span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col gap-4'>
                <span className='flex flex-col gap-3'>
                    <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                    <span className='text-2xl font-semibold'>Field Trip</span>
                    <span className='text-xs'>The school also arranges a number of foreign visits that support the curriculum and give students the chance to expand their horizons as well as to help them to understand different cultures. We enjoy exciting activities during our residential trips abroad such as abseiling, archery, kayaking, zip wire and grass sledging. We also get the chance to do things like exploring coastal walks, hunting for fossils and looking for red squirrels in woodlands on the Isle of Wight and other fun and safe camps.</span>
                </span>
                <span className='flex flex-col gap-3'>
                    <hr className='w-10 h-1 rounded-lg bg-[#f6bc75]'></hr>
                    <span className='text-2xl font-semibold'>Community Work</span>
                    <span className='text-xs'>The school also arranges a number of foreign visits that support the curriculum and give students the chance to expand their horizons as well as to help them to understand different cultures. We enjoy exciting activities during our residential trips abroad such as abseiling, archery, kayaking, zip wire and grass sledging. We also get the chance to do things like exploring coastal walks, hunting for fossils and looking for red squirrels in woodlands on the Isle of Wight and other fun and safe camps.</span>
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
        <span className='flex flex-col py-12 gap-10 bg-[#27ace8]/10 justify-center items-center '>
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
        </span>
    
    </div>
  )
}

export default ProgramsContent;