// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://101.53.133.52:1338', // Base URL for your API
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE', // Replace with your actual token
  },
});

export default axiosInstance;
