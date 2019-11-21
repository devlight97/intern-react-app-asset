import {
  LOAD_POST_LIST_DATA,
  LOAD_POST_LIST_DATA_FAIL,
  LOAD_POST_LIST_DATA_SUCCESS,
  COUNT_POST_TOTAL,
} from './constants';

const initialState = {
  isFetching: false,
  posts: [],
  failReason: null,
  page: 1,
  keyword: '',
  postTotal: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case LOAD_POST_LIST_DATA:
    return { ...state, ...payload };

  case LOAD_POST_LIST_DATA_FAIL:
    return { ...state, ...payload };

  case LOAD_POST_LIST_DATA_SUCCESS:
    return { ...state, ...payload };

  case COUNT_POST_TOTAL:
    return { ...state, ...payload };

  default:
    return state;
  }
}
