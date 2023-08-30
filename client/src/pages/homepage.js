import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Homepage() {
    return {
        <div className="homepage">
        <div className="searchbox"><h1>Search for your plant</h1>
          <div className="searchbox-section">
          <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Search"
            name="search"
            type="search"
            value={formState.searchl}
            onChange={handleChange}
          />
          </form>
          </div>
          </div>
          </div>
      

};
export default Homepage;