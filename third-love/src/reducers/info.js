import { FETCH_INFO } from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_INFO:
      return {...state, ...action.payload.data.product};
    default:
      return state;
  }
}
