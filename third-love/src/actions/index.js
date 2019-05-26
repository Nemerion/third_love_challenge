import { FETCH_INFO } from '../constants';
import axios from 'axios';

export function fetchInfo() {
  const response = axios.get('http://www.mocky.io/v2/5c6c3a92320000e83bbef971');

  return {
    type: FETCH_INFO,
    payload: response
  };
}
