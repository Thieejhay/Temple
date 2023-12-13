import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const events = [
    {
        id: 52,
        title: "Revision Week",
        start: new Date(2024, 6, 1, 0, 0),
        end: new Date(2024, 6, 5, 0, 0),
        type: 'green'
      },
      {
        id: 54,
        title: "End of Session Examination",
        start: new Date(2024, 6, 8, 0, 0),
        end: new Date(2024, 6, 12, 0, 0),
        type: 'purple'
      },
      {
        id: 55,
        title: "Graduation",
        start: new Date(2024, 6, 12, 0, 0),
        end: new Date(2024, 6, 12, 0, 0),
        type: 'orange'
      },
      {
        id: 56,
        title: "20th Anniversary Week",
        start: new Date(2024, 6, 15, 0, 0),
        end: new Date(2024, 6, 15, 0, 0),
        type: 'purple'
      },
      {
        id: 57,
        title: "Awards Day",
        start: new Date(2024, 6, 18, 0, 0),
        end: new Date(2024, 6, 18, 0, 0),
        type: 'orange'
      },
      {
        id: 58,
        title: "End of Session",
        start: new Date(2024, 6, 19, 0, 0), 
        end: new Date(2024, 6, 19, 0, 0),
        type: 'blue'
      },
  ];
  const localizer = momentLocalizer(moment);

const JulCalendar = () => {

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
  
    if (event.type === 'green') {
      backgroundColor = 'green';
    } else if (event.type === 'yellow') {
      backgroundColor = 'yellow';
    } else if (event.type === 'orange') {
      backgroundColor = 'orange';
    } else if (event.type === 'blue') {
    backgroundColor = 'blue';
    } else if (event.type === 'purple') {
    backgroundColor = 'purple';
    } else if (event.type === 'pink') {
        backgroundColor = 'lightpink';
  }
  
    return {
      style: {
        backgroundColor,
        borderColor,
      },
    };
  };
  const initialDate = new Date(2024, 6, 1)

  return (
    <div className='flex lg:flex-row flex-col w-fit border border-transparent bg-white rounded'>
        <style>{calendarStyles}</style>
        <div className="w-[19rem] p-4">
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 220 }}
            views={false}
            defaultDate={initialDate}
            eventPropGetter={customEventStyles}
            toolbar={null}
            // formats={{ dayFormat: customDayFormat }}
            />
        </div>
        <div className="py-[14px] lg:px-0 px-4">
            <h2 className='text-lg font-semibold mb-1 mt-1'>Events for July 2024</h2>
            <span className='flex flex-col gap-3 lg:w-[19rem]'>
                {events.map((event) => (
                    <span key={event.id} className='flex gap-2'>
                      <span className='text-xs font-semibold'>{formatDateRange(event.start, event.end)}</span>
                      <span className='text-xs font-normal opacity-80'>{event.title}</span>
                    </span>
                ))}
            </span>
        </div>  
    </div>
  )
}

export default JulCalendar