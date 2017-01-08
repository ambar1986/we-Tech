import React from 'react';
import data from './data';
import {Link} from 'react-router';
import MenteeProf from './menteeprof.jsx';

var MentorProf = React.createClass({
	getInitialState:function(){
		return {users:{}}
	},
	componentWillMount(){
		this.setState({users: data.getUser()})
	},
  	render: function() {
    return (
      <div>
      <center>
            <h1>Name:</h1>
            <p>{this.state.users.mentor[0].name}</p>
            <h1>Description:</h1>
            <p>{this.state.user.mentor[0].description}</p>
            <h1>Skills:</h1>
            <p>{this.state.users.mentor[0].skills}</p>
            <h1>This is your match:</h1>
            <Link to='MentorProf'>I'm your Mentee</Link>
            {this.props.children}
      </center>
      </div>
    )
  }
})

export default MentorProf;