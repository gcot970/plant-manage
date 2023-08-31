import axios from 'axios';

// Define the search function to call the API
const search = (query) =>
  axios.get(`https://perenual.com/api/species-list?page=1&q=${query}&key=sk-P8Bu64e419d0d84221951`);

  export default search