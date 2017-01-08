import React from 'react'
import data from './data'

var About = React.createClass({
	getInitialState:function(){
		return {about:{}, elegible:{}}
	},
	componentWillMount(){
		this.setState({about: data.getAbout(), elegible: data.getElegible()})
	},
  	render: function() {
    return (
      <div>
      <center>
        <h1>About</h1>
        	<p>{this.state.about.text}</p>
        <h1>Who is Elegible?</h1>
        <p>{this.state.elegible.mentor}</p>
        <p>{this.state.elegible.mentee}</p>
      </center>
      </div>
    )
  }
})

export default About;