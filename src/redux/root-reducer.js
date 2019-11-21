import { combineReducers } from 'redux';
import homeReducer from '../pages/Home/home.reducer';
import postDetailReducer from '../pages/PostDetail/reducer';
import newsReducer from '../pages/News/reducer';

export default combineReducers({
  home: homeReducer,
  postDetail: postDetailReducer,
  news: newsReducer,
});