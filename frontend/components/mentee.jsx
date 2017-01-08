import React from 'react'


var Mentee = React.createClass({
	render(){
		return(
			<div id='login'>
				Register to get a mentor
				<form>
					
					<input type='text' placeholder='First Name'/>
					<imput type='text' placeholder='Last Name' />
					<imput type='email' placeholder='Email' />
					<input type='Password' placeholder='Password'/>
					<imput type='text' placeholder='Education' />
					<input type='text' placeholder='Current Skills'/>
					Description - Why do you want to be a mentee? Who are you? What do you hope to do in the future?
					<input type='text' placeholder='Skills to Improve On/Gain'/>
					<input type='url' placeholder='Do you have a Github?'/>
					<input type='text' placeholder='Anything else we need to know about you'/>
					<input type='button'>Create an account!</input>
				</form>
			</div>
		)
	}

})

export default Mentee;