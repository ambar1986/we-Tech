var React = require('react');
import  MenteeProf from './menteeprof.jsx'
import {Link} from 'react-router'
import '../loginCSS.css'

var Login = React.createClass({
render(){
	return(

		<div id='login'>
				<hr className="break" />
			<div className= "container">
				<div className="wrapper">
					<form name="Login_Form" className="form-signin">       
					    <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
						  <input type="text" className="form-control" name="Username" placeholder="Username" />
						  <input type="text" className="form-control" name="Password" placeholder="Password" />     		  
				 		  <Link to="MenteeProf"><button className="button">Login</button></Link>
					</form>
				</div>
			</div>
		</div>
	)
}
})
export default Login

