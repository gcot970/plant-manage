import React from 'react';

function SearchResults({ data }) {
  // Check if there are any results
  if (data.length === 0) {
    return <p>No results found.</p>;
  }

  const firstResult = data.data[0]; // Get the first result at index 0

  return (
    <div className="search-results">
      <div className="search-result-card">
        
        <img src={firstResult.default_image.original_url} alt="Plant" />

        <h2>Common name: {firstResult.common_name}</h2>
         <h2>Scientific name: {firstResult.scientific_name}</h2>
         <h2> Sunlight: {firstResult.sunlight}</h2>
        <h2>Watering: {firstResult.watering}</h2>
        <p>{firstResult.description}</p>
   
      </div>
    </div>
  );
}

export default SearchResults;