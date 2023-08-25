import React, { useState, useCallback, useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  // Define events state and addEvent function locally in CalendarPage
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event Name');
      if (title) {
        // Create a new event and update the events state
        const newEvent = { start, end, title };
        console.log('Before addEvent:', newEvent);
        addEvent(newEvent);
        console.log('After addEvent:', newEvent);
      }
    },
    [addEvent]
  );

  const handleSelectEvent = useCallback(
    (event) => {
      window.alert(event.title); // Display event details on event click (optional)
    },
    []
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(2023, 7, 23), // Set your desired default date
      scrollToTime: new Date(1970, 1, 1, 6), // Set your desired scroll time
    }),
    []
  );

  return (
    <div>
      <Fragment>
        <div className="height600">
          <Calendar
            dayLayoutAlgorithm="no-overlap"
            defaultDate={defaultDate}
            defaultView={Views.WEEK} // Set your desired default view
            events={events}
            localizer={localizer}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            scrollToTime={scrollToTime}
          />
        </div>
      </Fragment>
    </div>
  );
};

CalendarPage.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.instanceOf(Date),
      end: PropTypes.instanceOf(Date),
      title: PropTypes.string,
    })
  ),
  // No need to specify addEvent as a prop since it's defined locally
};

export default CalendarPage;
