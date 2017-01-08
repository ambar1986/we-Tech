import React from 'react';
import {Link} from 'react-router';
import Mentor from './mentor';
import Mentee from './mentee';

var Register = React.createClass({
	render: function(){
		return (
			<div>
				<hr className='break' />
				<center>
				<h2>Join Our Mission</h2>

				<Link to='Mentor'><button
				className="button"
				type="submit">Mentor Application</button></Link>

				<Link to='Mentee'><button
				className="button"
				type="submit">Mentee Application</button></Link>
				</center>
			</div>
		)
	}
})

export default Register;