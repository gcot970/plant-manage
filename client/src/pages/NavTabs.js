import React from 'react';
import "./navTabs.css";
import { handleLogout } from '../components/handleLogout';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-light">
      <ul class="nav justify-content-end nav-underline">
        <li class="nav-item">
          <a class="nav-item nav-link active"

            href="#searchpage"
            onClick={() => handlePageChange('SearchPage')}

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
            href="#calendar"
            onClick={() => handlePageChange('Calendar')}

            className={currentPage === 'Calendar' ? 'nav-link active' : 'nav-link'}
          >
            Schedule Watering
          </a>
        </li>
        <li className="nav-item">
          <button onClick={handleLogout} className="nav-link logout-button">
            Logout
          </button>
          </li>
      </ul>
    </nav >
  );
}

export default NavTabs;