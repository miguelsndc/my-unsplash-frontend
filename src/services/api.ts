import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://miguelsndc-unsplash.herokuapp.com',
});
