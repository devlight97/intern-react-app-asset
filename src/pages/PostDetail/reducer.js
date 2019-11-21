import {
  LOAD_POST_DATA,
  LOAD_POST_DATA_FAIL,
  LOAD_POST_DATA_SUCCESS,
} from './constants';

const initialState = {
  post: {},
  isFetching: false,
  failReason: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case LOAD_POST_DATA:
    return { ...state, ...payload };

  case LOAD_POST_DATA_FAIL:
    return { ...state, ...payload };

  case LOAD_POST_DATA_SUCCESS:
    return { ...state, ...payload };

  default:
    return state
  };
};
