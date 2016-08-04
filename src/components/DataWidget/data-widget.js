import React from 'react';
import './data-widget.css';

/* Base class for data widgets */
var DataWidget = React.createClass({
	propTypes: {
		featured: React.PropTypes.bool,
        title: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        data: React.PropTypes.oneOfType([
			      React.PropTypes.string,
			      React.PropTypes.number
		])
	},
    getInitialState() {
    	return { title: '', type: '', data:0 }
    },
	render() {
		return (
			<div className={this.props.featured? 'data-widget featured-window' :'data-widget'}>
               <header className="data-widget-header">{this.props.title}  <span className="data-widget-data-type">({this.props.type})</span></header>
               <div className="data-widget-body">
                   {this.props.data}
               </div>
			</div>
		)
	}
});

export default DataWidget;
