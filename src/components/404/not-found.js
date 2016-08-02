import React from 'react';
import './not-found.css';

var NotFound = React.createClass({
	render() {
		return (
			<div className="404 not-found-wrapper">
				    <h1 className="error">Not Found</h1>
				    <h2 className="code">404</h2>
				    <h2 className="text">Sorry!!</h2>
			</div>
		)
	}
});

export default NotFound;
