//Search area
import React from 'react';

// import { useState, useEffect } from 'react';
// import ResultList from ' ';

// import search from '../utils/API';

// const SearchResultContainer = () => {
//     const [results, setResults] = useState([]);

//     const searchPerenual = async (query) => {
//         const response = await search(query);
//         setResults(response.data.data);
//     };

//     useEffect(() => {
//         searchPerenual('flowerName');
//     }, []);

//     return (
//         <div>
//             {''}
//             <ResultList results={results}/>
//         </div>
//     );
// };

// export default SearchResultContainer;
function ResultList(props) {
    return (
      <ul className="list-group">
        {props.results.map((result) => (
          <li className="list-group-item" key={result.id}>
            <img
              alt={result.title}
              className="img-fluid"
              src={result.images.original.url}
            />
          </li>
        ))}
      </ul>
    );
  }
  
  export default ResultList;