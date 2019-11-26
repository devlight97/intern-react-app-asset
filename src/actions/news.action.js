import {
  LOAD_POST_LIST_DATA,
  LOAD_POST_LIST_DATA_FAIL,
  LOAD_POST_LIST_DATA_SUCCESS,
  COUNT_POST_TOTAL,
} from '../pages/News/constants';

import postServices from '../services/post.services';

export const loadPostListDataFail = (failReason) => ({
  type: LOAD_POST_LIST_DATA_FAIL,
  payload: {
    isFetching: false,
    failReason,
  }
});

export const loadPostListDataSuccess = (posts, page, keyword) => ({
  type: LOAD_POST_LIST_DATA_SUCCESS,
  payload: {
    isFetching: false,
    posts,
    failReason: null,
    page,
    keyword,
  }
});

export const loadPostListData = (page, keyword) => {
  return async (dispatch) => {
    dispatch({
      type: LOAD_POST_LIST_DATA,
      payload: { isFetching: true },
    });

    try {
      const { data } = await postServices.getAllPost(page, keyword);
      const posts = data;
      dispatch(loadPostListDataSuccess(posts, page, keyword));
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 404) dispatch(loadPostListDataFail('Not found'));
        else dispatch(loadPostListDataFail('Error Unknowed'));
      } else {
        dispatch(loadPostListDataFail('Can not connect to server'));
      }
    }
  };
};

export const countPostTotal = (keyword) => {
  return async (dispatch) => {
    try {
      const { data: postTotal } = await postServices.getCountAllPost(keyword);
      dispatch({
        type:  COUNT_POST_TOTAL,
        payload: {
          postTotal,
        },
      });
    } catch (error) {
      
    }
  };

};
