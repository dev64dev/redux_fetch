import { combineReducers } from 'redux';
import { attackReducer, siteNameReducer } from './attackReducer';

export default combineReducers({
  attackReducer,
  siteNameReducer,
});
