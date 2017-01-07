import React from 'react'
import data from './data'

var About = React.createClass({
	getInitialState:function(){
		return {about:{}}
	},
	componentWillMount(){
		this.setState({about: data.getAbout()})
	},
  	render: function() {
    return (
      <div>
      <center>
        <h1>About</h1>
        	<p>{this.state.about.text}</p>
      </center>
      </div>
    )
  }
})

export default About;