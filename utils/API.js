import axios from 'axios';

const search = (query) =>
    axios.get(`https://perenual.com/api/species-list?q=${query}page=1&key=sk-P8Bu64e419d0d84221951`);

export default search;