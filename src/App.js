
import './App.css';
import React from "react"
import Login from './pages/Login';
import Landing from './pages/Landing.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,  },
  {
    path: "/login",
    element: <Login />,
  },
  
  
]);

function App() {
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
