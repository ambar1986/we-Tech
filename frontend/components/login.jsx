var React = require('react');
import '../loginCSS.css'

var Login = React.createClass({
	render(){
		return(
			<div id='login'>
				<div className= "container">
					<div className="wrapper">
						<form action="" method="post" name="Login_Form" className="form-signin">       
						    <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
							  <hr className="colorgraph"/><br/>
							  
							  <input type="text" className="form-control" name="Username" placeholder="Username" required="" autoFocus="" />
							  <input type="password" className="form-control" name="Password" placeholder="Password" required=""/>     		  
							 
							  <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Login</button>  			
						</form>			
					</div>
				</div>
			</div>
		)
	}
})
export default Login

