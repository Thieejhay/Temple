import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const events = [
    {
      id: 1,
      title: '1st Temple examination',
      start: new Date(2023, 11, 1, 9, 0), 
      end: new Date(2023, 11, 4, 10, 0),
      type: 'study'
    },
    {
      id: 2,
      title: 'National education Day',
      start: new Date(2023, 11, 7, 14, 0),
      end: new Date(2023, 11, 12, 15, 0),
      type: 'holiday'
    },
    {
        id: 3,
        title: 'OSIS activity',
        start: new Date(2023, 11, 15, 14, 0),
        end: new Date(2023, 11, 16, 15, 0),
        type: 'activity'
      },
      {
        id: 4,
        title: 'Study Tour to Indonesia',
        start: new Date(2023, 11, 18, 14, 0),
        end: new Date(2023, 11, 21, 15, 0),
        type: 'tour'
      },
      {
        id: 5,
        title: 'Semester Break',
        start: new Date(2023, 11, 23, 14, 0),
        end: new Date(2023, 11, 30, 15, 0),
        type: 'break'
      },
    
  ];
  const localizer = momentLocalizer(moment);

const DecCalendar = () => {

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
        padding-bottom: 20px;
        padding-top: 20px
      }
    
  `;

  const customEventStyles = (event, start, end,) => {
    let backgroundColor = '';
    let borderColor = '';
  
    if (event.type === 'study') {
      backgroundColor = 'green';
    } else if (event.type === 'activity') {
      backgroundColor = 'yellow';
    } else if (event.type === 'tour') {
      backgroundColor = 'orange';
    } else if (event.type === 'holiday') {
    backgroundColor = 'blue';
    } else if (event.type === 'break') {
    backgroundColor = 'purple';
    } else if (event.type === 'party') {
        backgroundColor = 'lightpink';
  }
  
    return {
      style: {
        backgroundColor,
        borderColor,
      },
    };
  };
  const initialDate = new Date(2023, 11, 1)

  return (
    <div className='flex w-fit border border-transparent bg-white'>
        <style>{calendarStyles}</style>
        <div className="w-[19rem] p-4">
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 230 }}
            views={false}
            defaultDate={initialDate}
            eventPropGetter={customEventStyles}
            toolbar={null}
            // formats={{ dayFormat: customDayFormat }}
            />
        </div>
        <div className="py-4">
            <h2 className='text-lg font-semibold mb-4 mt-3'>Events for December 2023</h2>
            <span className='flex flex-col gap-3 w-[19rem]'>
                {events.map((event) => (
                    <span key={event.id} className='flex'>
                        <span className='text-sm font-semibold w-[8rem]'>{moment(event.start).format('D')} - {' '} {moment(event.end).format('D MMMM ')}</span>
                        <span className='text-sm font-normal opacity-80'>{event.title}</span>
                    </span>
                ))}
            </span>
        </div>  
    </div>
  )
}

export default DecCalendar