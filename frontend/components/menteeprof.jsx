import React from 'react';
import data from './data';
import {Link} from 'react-router';
import MentorProf from './mentorprof.jsx';

var MenteeProf = React.createClass({
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
            <p>{this.state.users.mentee[0].name}</p>
            <h1>Description:</h1>
            <p>{this.state.users.mentee[0].description}</p>
            <h1>Skills:</h1>
            <p>{this.state.users.mentee[0].skills}</p>
            <h1>This is your match:</h1>
            <Link to='MentorProf'>I'm your mentor!</Link>
            {this.props.children}
      </center>
      </div>
    )
  }
})

export default MenteeProf;