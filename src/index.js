import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* import css */
import './index.css';
import './css/cart.css';
import './css/menu_cart.css';
import './css/notice.css';
import './css/login.css';

/* store */
import {createStore} from 'redux';
import myReducer from './reducers/index';
import {Provider} from 'react-redux';

/* lien ket voi reducer */
const store = createStore(myReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
