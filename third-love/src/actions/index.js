import { FETCH_INFO, SAVE_SWATCH_DATA } from '../constants';
import axios from 'axios';

export function fetchInfo() {
  const response = axios.get('https://www.mocky.io/v2/5c6c3a92320000e83bbef971');

  return {
    type: FETCH_INFO,
    payload: response
  };
}

export function saveSwatchData(data) {
  return {
    type: SAVE_SWATCH_DATA,
    payload: data
  }
}
