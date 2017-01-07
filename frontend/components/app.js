import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Home from './home';

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
		              <Link to='#'>About</Link>
		              <Link to='#'>FAQ</Link>
		              <Link to='#'>Sign Up</Link>
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

		</Route>
	</Router>, 
	document.getElementById('root'))