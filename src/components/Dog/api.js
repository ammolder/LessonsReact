import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-pai-key'] = process.env.REACT_APP_API_KEY;

export const fetchBreeds = async () => {
  const r = await axios.get('/breeds');
  return r.data;
};
export const fetchBDogByBreed = async breedId => {
  const r = await axios.get('/images/search', {
    params: { breed_id: breedId },
  });
  return r.data[0];
};
