import axios from 'axios';

const baseURL = process.env.VUE_APP_DEV_API_URL;

const instance = axios.create({
  baseURL,
});

export { instance };
