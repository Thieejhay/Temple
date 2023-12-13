import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const events = [
    {
          id: 40,
          title: "EYFS & Pri Parent's Discussion Day",
          start: new Date(2024, 4, 4, 0, 0),
          end: new Date(2024, 4, 4, 0, 0),
          type: 'yellow'
        },
        {
          id: 41,
          title: "Sec & Col Parent's Discussion Day",
          start: new Date(2024, 4, 11, 0, 0),
          end: new Date(2024, 4, 11, 0, 0),
          type: 'pink'
        },
        {
          id: 42,
          title: "Boarders' Visiting Day",
          start: new Date(2024, 4, 18, 0, 0),
          end: new Date(2024, 4, 18, 0, 0),
          type: 'green'
        },
          {
            id: 44,
            title: "Cycle Test",
            start: new Date(2024, 4, 20, 0, 0),
            end: new Date(2024, 4, 24, 0, 0),
            type: 'purple'
          },
          {
            id: 45,
            title: "KS4 Parent's Forum",
            start: new Date(2024, 4, 25, 0, 0),
            end: new Date(2024, 4, 25, 0, 0),
            type: 'orange'
          },
          {
            id: 46,
            title: "Children's Day",
            start: new Date(2024, 4, 27, 0, 0),
            end: new Date(2024, 4, 27, 0, 0),
            type: 'purple'
          },
          {
            id: 47,
            title: "ELD Parent's Forum",
            start: new Date(2024, 4, 30, 0, 0),
            end: new Date(2024, 4, 30, 0, 0),
            type: 'orange'
          },
  ];
  const localizer = momentLocalizer(moment);

const MayCalendar = () => {

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
  const initialDate = new Date(2024, 4, 1)

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
            <h2 className='text-lg font-semibold mb-1 mt-1'>Events for May 2024</h2>
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

export default MayCalendar