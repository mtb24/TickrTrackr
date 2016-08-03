import React from 'react';
import './data-widget.css';

/* Base class for data widgets */
class DataWidget extends React.Component {
	render() {
		return (
			<div className="data-widget">
               <header className="data-widget-header">{this.props.title}  <span className="data-widget-data-type">({this.props.type})</span></header>
               <div className="data-widget-body">
                   {this.props.data}
               </div>
			</div>
		)
	}
}

export default DataWidget;
