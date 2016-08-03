/* Dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

/* App Components */
import App from './components/App/App';
import NotFound from './components/404/not-found';

/* Styles */
import './index.css';


/* Routes */
let routes = (
	<Router history={browserHistory}>
	  <Route path='/' component={App}/>
	  <Route path='*' component={NotFound}/>
	</Router>
)

ReactDOM.render(routes, document.querySelector('#root'));
