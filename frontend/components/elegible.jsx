import React from 'react';
import data from './data';

var Elegible = React.createClass({
	getInitialState:function(){
		return {elegible:{}}
	},
	componentWillMount(){
		this.setState({elegible: data.getElegible()})
	},
	render(){
		return(
			<center>
			<div>
			<h1>Who is Elegible?</h1>
				<p>{this.state.elegible.mentor}</p>
				<p>{this.state.elegible.mentee}</p>
			</div>
			</center>
			)
	}
})

export default Elegible;

