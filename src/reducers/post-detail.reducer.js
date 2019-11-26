import {
  POST_DETAIL_LOAD_POST_DATA,
  POST_DETAIL_LOAD_POST_DATA_FAIL,
  POST_DETAIL_LOAD_POST_DATA_SUCCESS,
} from '../constants/action-type';

const initialState = {
  post: {},
  isFetching: false,
  failReason: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case POST_DETAIL_LOAD_POST_DATA:
    return { ...state, ...payload };

  case POST_DETAIL_LOAD_POST_DATA_FAIL:
    return { ...state, ...payload };

  case POST_DETAIL_LOAD_POST_DATA_SUCCESS:
    return { ...state, ...payload };

  default:
    return state
  };
};
