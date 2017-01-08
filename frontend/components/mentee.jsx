import React from 'react'


var Mentee = React.createClass({
	render(){
		return(
			<div id='login'>
				<h1>Register to get a mentor</h1>
				<form>
					<input type='text' placeholder='First Name'/>
					<input type='text' placeholder='Last Name' />
					<br/>
					<input type='email' placeholder='Email' />
					<input type='Password' placeholder='Password'/>
					<br/>
					<imput type='text' placeholder='Education' />
					<br/>
					<p>Description - Why do you want to be a mentee? Who are you? What do you hope to do in the future?</p>
					<input type='text' />
					<br/>
					<input type='text' placeholder='Current Skills'/>
					<br/>
	 				<input type='text' placeholder='Skills to Improve On/Gain'/>
	 				<br/>
	 				<input type='text' placeholder='Do you have a Github?'/>
	 				<br/>
	 				<input type='text' placeholder='Anything else we need to know about you'/>
	 					<br/>
	 				<input type='submit' placeholder='Create an account!'/>	
				</form>
			</div>
		)
	}

})

export default Mentee;

			