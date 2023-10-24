import React, {useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';


const events = [
    {
      id: 1,
      title: '1st Temple examination',
      start: new Date(2023, 10, 1, 9, 0), 
      end: new Date(2023, 10, 4, 10, 0),
      type: 'study'
    },
    {
      id: 2,
      title: 'National education Day',
      start: new Date(2023, 10, 7, 14, 0),
      end: new Date(2023, 10, 12, 15, 0),
      type: 'holiday'
    },
    {
        id: 3,
        title: 'OSIS activity',
        start: new Date(2023, 10, 15, 14, 0),
        end: new Date(2023, 10, 16, 15, 0),
        type: 'activity'
      },
      {
        id: 4,
        title: 'Study Tour to Indonesia',
        start: new Date(2023, 10, 18, 14, 0),
        end: new Date(2023, 10, 21, 15, 0),
        type: 'tour'
      },
      {
        id: 5,
        title: 'Semester Break',
        start: new Date(2023, 10, 23, 14, 0),
        end: new Date(2023, 10, 30, 15, 0),
        type: 'break'
      },
      {
        id: 5,
        title: 'Cultural week',
        start: new Date(2023, 9, 19, 14, 0),
        end: new Date(2023, 9, 25, 15, 0),
        type: 'party'
      },
    
  ];

  const localizer = momentLocalizer(moment);

const HomeCalendar = () => {

    const [activeMonth, setActiveMonth] = useState(new Date());

    // const customDayFormat = (date, culture, localizer) => {
    //     const firstLetterOfDay = localizer.format(date, 'dddd', culture).charAt(0);
    //     return firstLetterOfDay;
    //   };
    
    

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
    .rbc-calendar {
        background-color: #f0f0f0; /* Set your desired background color here */
        border-radius: 25px; 
        padding-bottom: 20px
      }
    
  `;
  
  const customEventStyles = (event, start, end,) => {
    let backgroundColor = '';
    let borderColor = '';
  

    if (event.type === 'study') {
      backgroundColor = 'blue';
    } else if (event.type === 'activity') {
      backgroundColor = 'yellow';
    } else if (event.type === 'tour') {
      backgroundColor = 'lightpink';
    } else if (event.type === 'holiday') {
    backgroundColor = 'green';
    } else if (event.type === 'break') {
    backgroundColor = 'lilac';
    } else if (event.type === 'party') {
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
    <div className='flex w-screen justify-center gap-8'>
        <style>{calendarStyles}</style>
        <div className="w-[30rem] p-4">
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 350 }}
            views={false}
            components={{
                toolbar: customToolbar,
              }}
            eventPropGetter={customEventStyles}
            // formats={{ dayFormat: customDayFormat }}
            />
        </div>
        <div className="w-1/4 p-4 mt-3">
            <h2 className='text-lg font-semibold mb-4'>Events for {moment(activeMonth).format('MMMM YYYY')}</h2>
            <span className='flex flex-col gap-7 w-[30rem]'>
                {activeEvents.map((event) => (
                    <span key={event.id} className='flex'>
                        <span className='text-base font-semibold w-[10rem]'>{moment(event.start).format('D')} - {' '} {moment(event.end).format('D MMMM ')}</span>
                        <span className='text-base font-normal opacity-80'>{event.title}</span>
                    </span>
                ))}
            </span>
        </div>
    </div>
  )
}

export default HomeCalendar;