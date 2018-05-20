import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Transactions from './containers/transactions/'
import Panel from './containers/panel/'

import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/' render={() => <Panel />} />
	      <Switch>
	        <Route exact path='/' component={Transactions} />
	        <Route path='/transactions/:id' component={Transactions} />
	      </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);