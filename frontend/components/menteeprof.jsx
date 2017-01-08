import React from 'react'
import data from './data'

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
            <h1>Skills:</h1>
            <p>{this.state.users.mentee[0].skills}</p>
      </center>
      </div>
    )
  }
})

export default MentorProf;