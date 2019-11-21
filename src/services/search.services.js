import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.baseURL,
  timeout: 5000,
})

const getAutoCompleteSearchData = () => {
  return new Promise((resolve, reject) => {
    const err = false;
    const data = [1,2,3,4,5];
    if (err) return reject(err);
    return resolve(data);
  });
};

export default {
  getAutoCompleteSearchData,

  getSuggestionSearch(keyword) {
    return api.get(`/search/suggestion?keyword=${keyword}`);
  },
};
