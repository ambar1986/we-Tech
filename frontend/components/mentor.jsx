import React from 'react';
import ThankMessage from './thankMessage';
import {Link} from 'react-router';

var Mentor = React.createClass({
	render: function(){
		return(
			<div>
			<hr className='break' />
				<center><h2 className="title">Sign Up to be a Mentor</h2></center>

				<center><form>
				<input
				className="input"
				type="text"
				placeholder="First Name"
				/>

				<input
				className="input"
				type="text"
				placeholder="Last Name"
				/>

				<input
				className="input"
				type="text"
				placeholder="Email"
				/>

				<input
				className="desc"
				type="text"
				placeholder="Description"
				/>

				<input
				className="input"
				type="text"
				placeholder="Skills"
				/>

				<input
				className="input"
				type="text"
				placeholder="Education"
				/>

				<input
				className="input"
				type="text"
				placeholder="GitHub Link"
				/>
				
				<input
				className="input"
				type="text"
				placeholder="LinkedIn Link"
				/>

				<input
				className="input"
				type="text"
				placeholder="Personal Site"
				/>

				<br /><br />

				<Link to='ThankMessage'><button
				className="button"
				type="submit">Submit
				</button></Link>
				</form></center>

			</div>
		)
	}
})

export default Mentor;