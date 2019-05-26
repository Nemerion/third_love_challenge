import { FETCH_INFO } from '../constants';
import { combineReducers } from 'redux';

function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_INFO:
    const info = action.payload.data.product;
      return [...state, info];
    default:
      return state;
  }
}

export default combineReducers({
  info: reducer
});
