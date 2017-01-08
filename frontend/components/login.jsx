var React = require('react');

var Login = React.createClass({
	render(){
		return(
			<div id='login'>
				Login
				<form>
					Email
					<input type='text'/>
					Password
					<input type='Password'/>
					<input type='button'></input>
				</form>
			</div>
		)
	}
})
export default Login
