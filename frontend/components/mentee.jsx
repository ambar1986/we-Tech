import React from 'react';
import ThankMessage from './thankMessage';
import {Link} from 'react-router';

var Mentee = React.createClass({
	render(){
		return(
			<div>
			<hr className='break' />
				<center>
				<h2>Sign Up to be a Mentee</h2>
				<form>
					<input 
					className="input"
					type='text' 
					placeholder='First Name'/>

					<input 
					className="input"
					type='text' 
					placeholder='Last Name' />
					
					<input 
					className="input"
					type='text' 
					placeholder='Email' />

					<input
					className="desc"
					type="text"
					placeholder="Description"
					/>
					
					<imput 
					className="input"
					type='text' 
					placeholder='Education' />
					
					<input 
					className="input"
					type='text' 
					placeholder='Current Skills'/>
					
	 				<input 
	 				className="input"
	 				type='text' 
	 				placeholder='Skills to Improve On/Gain'/>
	 				
	 				<input 
	 				className="input"
	 				type='text' 
	 				placeholder='GitHub Link if Applicable'/>
	 				
	 				<input
	 				className="desc" 
	 				type='text' 
	 				placeholder='Anything else we need to know about you?'/>

	 				<br /><br />
	 					
	 				<Link to='ThankMessage'><button
	 				className='button' 
	 				type="submit">Submit
	 				</button></Link>	
				</form>
				</center>
			</div>
		)
	}

})

export default Mentee;

			