import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '~redux/store'
import 'antd/dist/antd.css';

import DefaultLayout from '~src/layout/default'


ReactDOM.render((
  <Provider store={store}>
    <Router>
      <DefaultLayout />
    </Router>
  </Provider>
), document.getElementById('root'))