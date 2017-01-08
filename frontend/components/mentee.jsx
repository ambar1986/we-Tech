import React from 'react'


var Mentee = React.createClass({
	render(){
		return(
			<div id='login'>
				Register to get a mentor
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

export default Mentee;