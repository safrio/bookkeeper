import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Transactions from './components/transactions/'

import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <div>
	      <Switch>
	        <Route exact path='/' component={Transactions} />
	        <Route path='/transactions' component={Transactions} />
	      </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);