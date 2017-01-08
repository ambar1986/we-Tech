import React from 'react';

var Mentor = React.createClass({
	render: function(){
		return(
			<div>
				<h2 className="title">Sign Up to be a Mentor</h2>

				<form>
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
				className="input"
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

				<input
				className="submit"
				type="submit"
				/>
				</form>

			</div>
		)
	}
})

export default Mentor;