import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const events = [
  {
    id: 21,
    title: "Resumption",
    start: new Date(2024, 0, 8, 0, 0), 
    end: new Date(2024, 0, 8, 0, 0),
    type: 'blue'
  },
  {
    id: 22,
    title: "EYFS & Primary Parent's Discussion Day",
    start: new Date(2024, 0, 21, 0, 0), 
    end: new Date(2024, 0, 21, 0, 0),
    type: 'yellow'
  },
    {
      id: 24,
      title: "Secondary & College Parent's Discussion Day",
      start: new Date(2024, 0, 28, 0, 0), 
      end: new Date(2024, 0, 28, 0, 0),
      type: 'pink'
    },
  ];
  const localizer = momentLocalizer(moment);

const JanCalendar = () => {

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
  const initialDate = new Date(2024, 0, 1)

  return (
    <div className='flex w-fit border border-transparent bg-white'>
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
        <div className="py-7">
            <h2 className='text-lg font-semibold mb-4 mt-3'>Events for January 2024</h2>
            <span className='flex flex-col gap-3 w-[19rem]'>
                {events.map((event) => (
                    <span key={event.id} className='flex gap-2 items-center'>
                        <span className='text-xs font-semibold'>{formatDateRange(event.start, event.end)}</span>
                        <span className='text-sm font-normal opacity-80'>{event.title}</span>
                    </span>
                ))}
            </span>
        </div>  
    </div>
  )
}

export default JanCalendar