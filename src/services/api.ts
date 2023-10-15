import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api/';

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}people/`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
