import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Profile from './pages/Profile';
import Signup from './pages/SignupPage';
import Login from './pages/Login';
import Landing from './pages/Landing';
import CalendarPage from './pages/calendarPage';
import NavTabs from './pages/NavTabs';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Landing />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              {/* <Route 
                path="/profile" 
                element={<Profile />}
              /> */}
              <Route 
                path="/calendar"
                element= { 
                        <div>
                          <NavTabs/>  
                          <CalendarPage />
                        </div>
                        }
                        /> 
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;



// import React, { useState } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';


// import Login from './pages/Login';
// import CalendarPage from './pages/calendarPage'; // Import the CalendarPage component
// import Landing from './pages/Landing.js';
// import NavTabs from './pages/NavTabs';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />,  },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/calendar',
//     element: (
//       <div>
//         <NavTabs/>  
//         <CalendarPage />
//       </div>
//     ),
//   },
// ]);

// function App() {

//   return (
//     <React.StrictMode>
//       <RouterProvider router={router}>
//         <div>
//           <CalendarPage />
//         </div>
//       </RouterProvider>
//     </React.StrictMode>
//   );
// }

// export default App;
