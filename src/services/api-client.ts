import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f5debe707b484acbaa5cf9468875651c',
  },
});
