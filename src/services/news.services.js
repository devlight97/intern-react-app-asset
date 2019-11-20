const getSearchResultPost = () => {
  return new Promise((resolve, reject) => {
    const err = false;
    const data = [1,2,3,4,5];
    if (err) return reject(err);
    return resolve(data);
  });
};

export default {
  getSearchResultPost,
};