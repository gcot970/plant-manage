//Search area

import { useState, useEffect } from 'react';
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
            {''}
            <ResultList results={results}/>
        </div>
    );
};

export default SearchResultContainer;