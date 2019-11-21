import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.baseURL,
  timeout: 5000,
})

const getSearchResultPost = () => {
  return new Promise((resolve, reject) => {
    const err = false;
    const data = [1, 2, 3, 4, 5];
    if (err) return reject(err);
    return resolve(data);
  });
};

export default {
  getSearchResultPost,
  getCountAllPost(keyword) {
    return api.get(`/search/count_by_keyword?type=post&keyword=${keyword}`);
  },
  getAllPost(page, keyword) {
    return axios.get(`http://192.168.1.14:8888/api/v1/search/get_post_by_keyword?keyword=${keyword}&page=${page}`);
    // return api.get(`/post/get_list?page=${page}&keyword=${keyword}`);
  },
  getPostById(id) {
    return api.get(`post/get_by_id?postID=${id}`);
  }
};