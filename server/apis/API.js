import axios from 'axios';

const search = (query) =>
    axios.get(`https://perenual.com/api/species-list?page=1&q={query}&key=sk-P8Bu64e419d0d84221951`);

export default search;

//Search area

/*import { useState, useEffect } from 'react';
import ResultList from ' ';

import search from '../utils/API';

const SearchResultContainer = () => {
    const [results, setResults] = useState([]);

    const searchPerenual = async (query) => {
        const response = await search(query);
        setResults(response.data.data);
    };

    useEffect(() => {
        searchPerenual('flowerName');
    }, []);

    return (
        <div>
            { pass results to ResultsList component to map over}
            <ResultList results={results}/>
        </div>
    );
};

export default SearchResultContainer;*/