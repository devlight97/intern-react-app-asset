import { combineReducers } from 'redux';
import homeReducer from '../pages/Home/home.reducer';

export default combineReducers({
  home: homeReducer,
});