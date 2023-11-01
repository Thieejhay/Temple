import React, {useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {events} from '../data/data'




  const localizer = momentLocalizer(moment);

const HomeCalendar = () => {

    const [activeMonth, setActiveMonth] = useState(new Date());
    const formatDateRange = (start, end) => {
      const startDate = moment(start).format('D');
      const endDate = moment(end).format('D');
      const startMonth = moment(start).format('MMMM');
      const endMonth = moment(end).format('MMMM');
      
      if (startMonth === endMonth) {
        if (startDate === endDate) {
          return `${startDate} ${startMonth}`;
        } else {
          return `${startDate}-${endDate} ${startMonth}`;
        }
      } else {
        return `${startDate} ${startMonth} - ${endDate} ${endMonth}`;
      }
    };
    
    

    const customToolbar = (toolbar) => {
        const goToBack = () => {
          toolbar.onNavigate('PREV');
          setActiveMonth(moment(toolbar.date).subtract(1, 'months').toDate());
        };
    
        const goToNext = () => {
          toolbar.onNavigate('NEXT');
          setActiveMonth(moment(toolbar.date).add(1, 'months').toDate());
        };
    
        
    
        return (
          <div className='flex justify-center mb-2 mt-1'>
            <button onClick={goToBack}><IoIosArrowBack className='w-6 h-6'/></button>
            <h1>{moment(toolbar.date).format('MMMM YYYY')}</h1>
            <button onClick={goToNext}><IoIosArrowForward className='w-6 h-6'/></button>
            
          </div>
        );
      };
      const activeEvents = events.filter((event) =>
      moment(event.start).isSame(activeMonth, 'month')
    );
    const calendarStyles = `
    .rbc-header {
        border-bottom: none;
        border-top: none
        }
    .rbc-month-view {
      background-color: #f0f0f0;
    }
    .rbc-day-bg {
      border: none; // Remove the border of the date cells
      text-indent: -9999px; // Hide text inside date cells
    }
    .rbc-event-content {
      display: none; // Hide the event content
    }
    .rbc-calendar {
        background-color: #f0f0f0; /* Set your desired background color here */
        border-radius: 25px; 
        padding-bottom: 20px
      }
    
  `;
  
  const customEventStyles = (event, start, end,) => {
    let backgroundColor = '';
    let borderColor = '';
  

    if (event.type === 'blue') {
      backgroundColor = 'blue';
    } else if (event.type === 'yellow') {
      backgroundColor = 'yellow';
    } else if (event.type === 'pink') {
      backgroundColor = 'lightpink';
    } else if (event.type === 'green') {
    backgroundColor = 'green';
    } else if (event.type === 'purple') {
    backgroundColor = 'lilac';
    } else if (event.type === 'orange') {
        backgroundColor = 'orange';
  }
  
    return {
      style: {
        backgroundColor,
        borderColor,
      },
    };
  };

  return (
    <div className='flex lg:flex-row flex-col w-screen justify-center lg:gap-8'>
        <style>{calendarStyles}</style>
        <div className="lg:w-[30rem] w-[23.5rem] px-4">
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 350 }}
            views={false}
            dayLayoutAlgorithm="no-overlap"
            components={{
                toolbar: customToolbar,
              }}
            eventPropGetter={customEventStyles}
            // formats={{ dayFormat: customDayFormat }}
            />
        </div>
        <div className="lg:w-1/4 p-6 lg:mt-3">
            <h2 className='text-lg font-semibold lg:mb-4 mb-2'>Events for {moment(activeMonth).format('MMMM YYYY')}</h2>
            <span className='flex flex-col lg:gap-5 gap-2 w-[30rem]'>
                {activeEvents.map((event) => (
                    <span key={event.id} className='flex gap-4'>
                        <span className='text-base font-semibold'>{formatDateRange(event.start, event.end)}</span>
                        <span className='text-base font-normal opacity-80'>{event.title}</span>
                    </span>
                ))}
            </span>
        </div>
    </div>
  )
}

export default HomeCalendar;