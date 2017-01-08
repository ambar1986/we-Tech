import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import $ from "jquery";
import Home from './home';
import Mentor from './mentor';
import Mentee from './mentee.jsx';
import About from './about.jsx';
import Login from './login.jsx';
import ContactUs from './contact-us.jsx';
import MenteeProf from './menteeprof.jsx';
import MentorProf from './mentorprof.jsx';
import '../app.css';
import '../loginCSS.css'
import Register from './register';
import ThankMessage from './thankMessage';
import ContactMessage from './contactMessage';

var App = React.createClass({
	render(){
		return(
			<div>
				
				<center><Link to='/'><img className="logo" src={require('../images/weTech-logo.png')} /></Link></center>
		            <div className="navbar">
		              <Link to='/'>Home</Link> 
		              <Link to='About'>About</Link>
		              <Link to='Register'>Registration</Link>
		              <Link to='Login'>Login</Link>
		              <Link to='ContactUs'>Contact Us</Link>
	            	</div>

	        	{this.props.children}			
        	</div>
		)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path="Register" component={Register} />
		<Route path="About" component={About} />
		<Route path="Login" component={Login} />
		<Route path="Mentor" component={Mentor} />
		<Route path="Mentee" component={Mentee} />
		<Route path="MenteeProf" component={MenteeProf} />
		<Route path="MentorProf" component={MentorProf} />
		<Route path="ContactUs" component={ContactUs} />
		<Route path="ThankMessage" component={ThankMessage} />
		<Route path="ContactMessage" component={ContactMessage} />
		</Route>
	</Router>, 
	document.getElementById('root'))