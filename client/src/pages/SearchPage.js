import React, { useState } from 'react';
import './searchPage.css'; 
// import SearchResultContainer from '../components/SearchResultContainer';
import ResultList from '../components/ResultList';

function SearchPage() {
  // State to store user input
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input changes
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search form submission
  const handleSearch = (event) => {
    event.preventDefault();
  
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <h1>Need More Plant Info?</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchPage;