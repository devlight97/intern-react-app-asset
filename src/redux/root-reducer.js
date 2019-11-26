import { combineReducers } from 'redux';
import homeReducer from '../reducers/home.reducer';
import postDetailReducer from '../reducers/post-detail.reducer';
import newsReducer from '../reducers/news.reducer';

export default combineReducers({
  home: homeReducer,
  postDetail: postDetailReducer,
  news: newsReducer,
});