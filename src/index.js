import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

injectTapEventPlugin();

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
 </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
