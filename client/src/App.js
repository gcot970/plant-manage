import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Login from './pages/Login';
import MyCalendar from './components/MyCalendar'; // Import the MyCalendar component
import CalendarPage from './pages/calendarPage'; // Import the CalendarPage component

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/calendar', // Define a new route for the calendar
    element: (
      <div>
        <h1>Schedule Watering</h1>
        <CalendarPage />
      </div>
    ),
  },
]);

function App() {
  // Initialize the state for events data
  const [events, setEvents] = useState([]);

  // Function to add a new event
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <div>
          {/* Render the MyCalendar component and pass events and addEvent as props */}
          <MyCalendar events={events} addEvent={addEvent} />

          {/* Render the CalendarPage component and pass events as props */}
          <CalendarPage events={events} />
        </div>
      </RouterProvider>
    </React.StrictMode>
  );
}

export default App;
