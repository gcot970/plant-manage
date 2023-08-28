import { useState, useEffect } from 'react';
import ResultList from './ResultList';

// Import our search method
import search from '../utils/API';

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);
//   const [number, setNumber] = useState(0);
    const [searchText, setSearchText] = useState('');

  // Method to get search results and set state
  const searchGiphy = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };



  // We want to run this method when the component first loads so that we have images of plants to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchGiphy(searchText);
  }, [searchText]);

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <input value={searchText} onChange={event => setSearchText(event.target.value)}></input>
      <ResultList results={results} />
      {/* <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Add</button>
      <button onClick={() => setNumber(number + 1)}>Minus</button> */}
    </div>
  );
};

export default SearchResultContainer;