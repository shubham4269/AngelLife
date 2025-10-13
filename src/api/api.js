import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-domain.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

