
import './App.css';
import React from "react";
import Login from './pages/Login';
import Signup from "./pages/Signup";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup/>,
  }
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Signup />
      </header>
    </div>
  );
}

export default App;
