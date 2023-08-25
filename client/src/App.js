import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Login from './pages/Login';
import CalendarPage from './pages/calendarPage'; // Import the CalendarPage component
import Landing from './pages/Landing.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/calendar',
    element: (
      <div>
        <h1>Schedule Watering</h1>
        <CalendarPage />
      </div>
    ),
  },
]);

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <div>
          <CalendarPage />
        </div>
      </RouterProvider>
    </React.StrictMode>
  );
}

export default App;
