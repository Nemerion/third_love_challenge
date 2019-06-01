import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from './middlewares/async';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
  reducer,
  applyMiddleware(async)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);
