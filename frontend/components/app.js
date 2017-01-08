import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Home from './home';
import Elegible from './elegible';
import Mentor from './mentor';

var App = React.createClass({
	render(){
		return(
			<div>
				<div className="logo-class">
					<img className="logo" src={require('../images/weTech-logo.png')} />
				</div>

				<nav className="navbar navbar-inverse">
		          <div className="container-fluid">
		            <div className="nav navbar-nav">
		              <Link to='/'>Home</Link> 
		              <Link to='Elegible'>Eligibility</Link>
		              <Link to='Mentor'>Sign Up</Link>
	            	</div>
	          	  </div>
	        	</nav>
	        	{this.props.children}			
        	</div>
		)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path="Elegible" component={Elegible} />
		<Route path="Mentor" component={Mentor} />
		</Route>
	</Router>, 
	document.getElementById('root'))