import { SAVE_SWATCH_DATA } from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_SWATCH_DATA:
      return action.payload;
    default:
      return state;
  }
}
