import { FETCH_INFO } from '../constants';
import { combineReducers } from 'redux';

function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_INFO:
      return {...state, ...action.payload.data.product};
    default:
      return state;
  }
}

export default combineReducers({
  info: reducer
});
