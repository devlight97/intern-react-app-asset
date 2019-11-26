import {
  NEWS_LOAD_POST_LIST_DATA,
  NEWS_LOAD_POST_LIST_DATA_FAIL,
  NEWS_LOAD_POST_LIST_DATA_SUCCESS,
  NEWS_COUNT_POST_TOTAL,
} from '../constants/action-type';

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

  case NEWS_LOAD_POST_LIST_DATA:
    return { ...state, ...payload };

  case NEWS_LOAD_POST_LIST_DATA_FAIL:
    return { ...state, ...payload };

  case NEWS_LOAD_POST_LIST_DATA_SUCCESS:
    return { ...state, ...payload };

  case NEWS_COUNT_POST_TOTAL:
    return { ...state, ...payload };

  default:
    return state;
  }
}
