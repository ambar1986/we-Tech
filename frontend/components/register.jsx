import React from 'react';
import {Link} from 'react-router';
import Mentor from './mentor';
import Mentee from './mentee';

var Register = React.createClass({
	render: function(){
		return (
			<div>
				<hr className='break' />
				<br />
				<center>

				<div className="join">

				<Link to='Mentor'><button
				className="button"
				type="submit">Mentor Application</button></Link>

				<Link to='Mentee'><button
				className="button"
				type="submit">Mentee Application</button></Link>

				<br /><br />

				<a href='http://www.elle.com/culture/tech/a35725/women-in-tech-2016/' target='_blank'><img className="women" src='http://ell.h-cdn.co/assets/16/19/1600x900/hd-aspect-1463178132-elle-womenintech-header.jpg' /></a>
				</div>
				</center>

				<br /> <br />
			</div>
		)
	}
})

export default Register;