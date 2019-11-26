import {
  LOAD_POST_DATA,
  LOAD_POST_DATA_SUCCESS,
  LOAD_POST_DATA_FAIL,
} from '../pages/PostDetail/constants';

import postServices from '../services/post.services';

// ACTION:
export const loadPostDataFail = (failReason) => ({
  type: LOAD_POST_DATA_FAIL,
  payload: {
    isFetching: false,
    failReason,
  }
});

export const loadPostDataSuccess = (post) => ({
  type: LOAD_POST_DATA_SUCCESS,
  payload: {
    isFetching: false,
    post,
    failReason: null,
  }
});


// MIDDLEWARES:
export const loadPostData = (postId) => {
  return async (dispatch) => {
    dispatch({
      type: LOAD_POST_DATA,
      payload: { isFetching: true },
    });
    
    try {
      const { data } = await postServices.getPostById(postId);
      const post = data[0];
      dispatch(loadPostDataSuccess(post));
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 404) dispatch(loadPostDataFail('Not found'));
        else dispatch(loadPostDataFail('Error Unknowed'));
      } else {
        dispatch(loadPostDataFail('Can not connect to server'));
      }
    }
  };
};