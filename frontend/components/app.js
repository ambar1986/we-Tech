import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Home from './home';
import Mentor from './mentor';
import About from './about.jsx';
import Login from './login.jsx';
import ContactUs from './contact-us.jsx'
import '../app.css';

var App = React.createClass({
	render(){
		return(
			<div>
				
				<center><img className="logo" src={require('../images/weTech-logo.png')} /></center>
				
				<nav className="navbar navbar-inverse">
		          <div className="container-fluid">
		            <div className="nav navbar-nav">
		              <Link to='/'>Home</Link> 
		              <Link to='Mentor'>Sign Up</Link>
		              <Link to='About'>About</Link>
		              <Link to='Login'>Login</Link>
		              <Link to='ContactUs'>Contact Us:</Link>
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
		<Route path="Mentor" component={Mentor} />
		<Route path="About" component={About} />
		<Route path="Login" component={Login} />
		<Route path="Mentee" component={Mentee} />
		<Route path="ContactUs" component={ContactUs} />
		</Route>
	</Router>, 
	document.getElementById('root'))