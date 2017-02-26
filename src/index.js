import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const storeInstance = Store();

ReactDOM.render(
 <Provider store={storeInstance}>
   <App />
 </Provider>,
 document.getElementById('root')
);
