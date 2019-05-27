import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import async from './middlewares/async';
import thunk from 'redux-thunk';

// This approach do nothing special to the code, but to testing, because the provider is easier to mock.

export default ({ children, initialState = {} }) => { // the '= {}' is an initialization, to avoid 'unsigned' errors
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(async)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
