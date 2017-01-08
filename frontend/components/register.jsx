import React from 'react';
import {Link} from 'react-router';
import Mentor from './mentor';
import Mentee from './mentee';

var Register = React.createClass({
	render: function(){
		return (
			<div>
				<hr className='break' />

				<h2>Join Our Mission</h2>

				<Link to='Mentor'><button
				className="submit"
				type="submit">Mentor Application</button></Link>

				<Link to='Mentee'><button
				className="submit"
				type="submit">Mentee Application</button></Link>
			</div>
		)
	}
})

export default Register;