import React, {useState, useEffect} from 'react';
import Banner from '../assets/dd.png';
import { BsDot, BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import ScrollToTop from '../components/ScrollToTop';

const Policy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [showMore, setShowMore] = useState({
        showMore1: false,
        showMore2: false,
        showMore3: false,
        showMore4: false,
        showMore5: false,
      });
    
      const toggleShowMore = (key) => {
        setShowMore((prevState) => ({
          ...Object.fromEntries(Object.entries(prevState).map(([k, v]) => (k === key ? [k, !v] : [k, false]))),
        }));
      };

  return (
    <div className='flex flex-col w-screen'>
        <ScrollToTop />
        <NavBar />
        <span className='flex justify-center items-center relative h-[20rem] bg-black'>
            <img src={Banner} alt='' className='w-full h-full opacity-50 flex z-10'></img>
            <span className='text-4xl opacity-90 tracking-wide font-semibold absolute top-36 z-20 left-[50%] -translate-x-[50%] text-[#f6bc75] flex'>Temple School Policies</span>
        </span>
        <span className='flex flex-col gap-10 px-32 py-12'>
            <span className='flex flex-col lg:gap-3 gap-1'>
                <span className='flex flex-col'>
                    <hr className='w-10 h-1 rounded-lg bg-[#f6bc75] -mt-2'></hr>
                    <span className='text-2xl font-semibold opacity-80 text-[#061c56]'>Safeguarding Statement</span>
                </span>
                <span className='lg:text-base text-sm opacity-70'>young persons in our charge. Recognising that the welfare of these children and young people is an integral part of the work we do, which is educating the whole child, we declare our belief that all children and young people, regardless of age, disability, identity, race, religion or belief, have an equal right to protection from all types of harm or abuse.</span>
                <span className='lg:text-base text-sm opacity-70'>As such, all members of staff and volunteers are expected to share this commitment. All policies which articulate our commitment to the safety and wellbeing of our children, including the Child Protection, Safeguarding and Health and Safety Policies, can be accessed from our website.</span>
                <span className='lg:text-base text-sm opacity-70'>All candidates applying to work at Temple School must be willing to undergo child protection screening, including checks with past employers. All staff complete mandatory regular training in both Safeguarding and Child Protection and we review our Safeguarding Policies annually.</span>
                <span className='lg:text-base text-sm opacity-70'>All members of staff are expected to adhere to our Code of Conduct, which includes a demonstrated commitment to all our safeguarding practices. When there are concerns about a child’s safety, it may become necessary to share information and work in partnership with other agencies. We will ensure any such concerns are discussed in the first instance, with parent or carers, unless we have reason to believe that such a move could in any way compromise the welfare of the child.</span>
                <span className='flex flex-col'>
                    <span className='lg:text-base text-sm opacity-70'>Temple School actively supports the work being done by the Lagos State Government through the Office of Education</span>
                    <span className='lg:text-base text-sm opacity-70'>Quality Assurance. Our Safeguarding coordinators include:</span>
                    <span className='lg:text-base text-sm opacity-70'>Designated Safeguarding Lead (DSL)- Adeola Arofin (The Principal). [DSL@templeschoolng.com]</span>
                </span>
                <span className='flex flex-col gap-2 opacity-70'>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Assitant Designated Safeguarding Leads (ADSL):</span>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Adurayemi Ipinolu (Deputy Head, Early Years) [ADSLEYFS@templeschoolng.com]</span>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Judith Onowighose (Head of Pastoral, Primary) [ADSLPrimary@templeschoolng.com]</span>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Kelechi Oti (Head of Pastoral, Secondary) [ADSLSecondary@templeschoolng.com]</span>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <span className='text-2xl font-bold'><BsDot /></span>
                        <span className='text-base font-normal'>Ugochi Nnaji (College Counsellor).[ ADSLCollege@templeschoolng.com]</span>
                    </span>
                </span>
            </span>
            <span className='flex flex-col lg:gap-3 gap-1'>
                <span className='flex flex-col'>
                    <hr className='w-10 h-1 rounded-lg bg-[#f6bc75] '></hr>
                    <span className='text-2xl font-semibold opacity-80 text-[#061c56]'>Publicity</span>
                </span>
                <span className='lg:text-base text-sm opacity-70'>At Temple School, we believe in educating the whole child. Thus, we have built a rich array of curricular and cocurricular programmes that blend well to provide the holistic education we pride ourselves for. These generate many joyful memories in school, which parents and carers would naturally wish to preserve through photos and videos. While this seems a very agreeable practice, we are very mindful of our duty of care towards all our children. We take our commitment to safeguarding very seriously and this covers the area of photographic and video images.</span>
                <span className='lg:text-base text-sm opacity-70'>Parents, carers and relatives who take photographs at school productions, sports days, or any of our other programmes must be mindful to keep such for the enjoyment of individual families only. They may not be published in any form of print or on the internet, (including social networking sites), shared with others outside the family unit, or used in any other way that could potentially place a child at risk. We will send out reminders regularly and emphasise this before such programmes. We will also, where practical, keep a record of parents and relatives taking photographs or videos.</span>
                <span className='lg:text-base text-sm opacity-70'>In some extenuating circumstances, a parent or carer may not wish their child to be photographed or videoed. In such instances, we ask that parents contact us to discuss their needs.</span>
                <span className='lg:text-base text-sm opacity-70'>Occasionally, the local press will be invited to take photographs of school events and special achievements. We like to use photographs of our children on our website, in school documents, for parent information meetings, newsletters and on our display screens around the school. If you do not wish photographs of your child to be used for these purposes, then please contact the Principal.</span>
                
            </span>
        </span>
        <span className='flex flex-col lg:px-32 px-4 pb-4'>
            <span className='flex justify-center items-center px-4 lg:text-2xl text-lg font-semibold opacity-90'>COMPLAINTS PROCEDURES AT A GLANCE</span>
                    <span className='flex flex-col gap-3 px-4 py-2 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='lg:text-xl text-lg'>Stage 1</span>
                            <span onClick={() => toggleShowMore('showMore1')}>{showMore.showMore1 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore1 && 
                            <span className='flex flex-col lg:pl-6 space-y-2 lg:pt-1 opacity-70'>
                                <span className='text-base'>Take complaint to concerned staff or to the Customer Care Team (front desk) (If concern is not satisfactorily addressed, move to next stage)</span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-2 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='lg:text-xl text-lg'>Stage 2</span>
                            <span onClick={() => toggleShowMore('showMore2')}>{showMore.showMore2 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore2 && 
                            <span className='flex flex-col lg:pl-6 space-y-2 lg:pt-1 opacity-70'>
                                <span className='text-base'>Escalate concern to the Year Head or Head of Department (If concern is not satisfactorily addressed, move to next stage)</span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-2 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className='flex justify-between items-center opacity-90'>
                            <span className='lg:text-xl text-lg'>Stage 3</span>
                            <span onClick={() => toggleShowMore('showMore3')}>{showMore.showMore3 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore3 && 
                            <span className='flex flex-col lg:pl-6 space-y-2 lg:pt-1 opacity-70'>
                                <span className='text-base'>Escalate concern to the Head of Section (If concern is not satisfactorily addressed, move to next stage)</span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-2 rounded-sm bg-[#061c56] text-[#f6bc75]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='lg:text-xl text-lg'>Stage 4</span>
                            <span onClick={() => toggleShowMore('showMore4')}>{showMore.showMore4 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore4 && 
                            <span className='flex flex-col lg:pl-6 space-y-2 lg:pt-1 opacity-70'>
                                <span className='text-base'>Escalate concern to the Director of Education (If concern is not satisfactorily addressed, move to next stage)</span>
                            </span>
                        }
                    </span>
                    <span className='flex flex-col gap-3 px-4 py-2 rounded-sm bg-[#f6bc75] text-[#061c56]'>
                        <span className=' flex justify-between items-center opacity-90'>
                            <span className='lg:text-xl text-lg'>Stage 5</span>
                            <span onClick={() => toggleShowMore('showMore5')}>{showMore.showMore5 ? <BiMinus className='w-8 h-8'/> : <BsPlus className='w-8 h-8'/>}</span>
                        </span>
                        {showMore.showMore5 && 
                            <span className='flex flex-col lg:pl-6 space-y-2 lg:pt-1 opacity-70'>
                                <span className='text-base'>Escalate concern to the Board</span>
                            </span>
                        }
                    </span>
            </span>
        <Contact />
    </div>
  )
}

export default Policy;