import axiosOriginal from 'axios';

const axios = axiosOriginal.create({
  baseURL: process.env.baseUrl,
});

export default axios;
