import axios from 'axios';
const axiosConfig = axios.create({
  baseURL: 'https://comics-api.vercel.app',
});

export default axiosConfig;
