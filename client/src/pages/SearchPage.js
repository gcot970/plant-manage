import React, { useState, useEffect } from 'react';
import './searchPage.css';
import SearchResults from '../components/SearchResultContainer.js';
import search from './utils/searchConfig' 


function SearchPage() {
  // State to store user input and search results
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  // Function to handle search input changes
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search form submission
  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      // Call the API with the searchQuery
      const response = await search(searchQuery);
      console.log('API Response:', response)
      setResults(response.data); // Assuming the API response contains an array of results
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
      {/* Render the SearchResults component with the results */}
      <SearchResults data={results} />
    </div>
  );
}

export default SearchPage;




