import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import './index.css';

render(
	<App />,
	document.getElementById('root')
);
