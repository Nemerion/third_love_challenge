import { combineReducers } from 'redux';
import infoReducer from './info';
import swatchReducer from './swatch';

export default combineReducers({
  info: infoReducer,
  swatch: swatchReducer
});
