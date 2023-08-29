import React from 'react';
import "./navTabs.css";


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-light">
      <ul class="nav justify-content-end nav-underline">
        <li class="nav-item">
          <a class="nav-item nav-link active"
            href="#SearchPage"
            onClick={() => handlePageChange('Home')}

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link active"
            href="#Profile"
            onClick={() => handlePageChange('Profile')}

            className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
          >
            My Profile
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link active"
            href="#CalendarPage"
            onClick={() => handlePageChange('CalendarPage')}

            className={currentPage === 'CalendarPage' ? 'nav-link active' : 'nav-link'}
          >
            Schedule Watering
          </a>
        </li>
      </ul>
    </nav >
  );
}

export default NavTabs;