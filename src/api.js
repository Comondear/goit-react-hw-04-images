import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28916923-d414eade46dc2c6542ccb3cb8';
const IMAGES_PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: IMAGES_PER_PAGE,
  total: 'total',
};

export const fetchImages = async (query, page) => {
  const config = {
    params: {
      q: query,
      page: page,
    },
  };
  const response = await axios.get('', config);
  return response.data;
};

// import PropTypes from 'prop-types';

// export function fetchImages(query, page) {
//   return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=30416408-c6842ca729ef5a51b1af270dd&image_type=photo&orientation=horizontal&per_page=12
// `).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(new Error('Something went wrong! Please retry'));
//   });
// }

// fetchImages.propTypes = {
//   query: PropTypes.string.isRequired,
//   page: PropTypes.number.isRequired,
// };
