import React from 'react'
import data from './data'

var Home = React.createClass({
	getInitialState:function(){
		return {home:{}}
	},
	componentWillMount(){
		this.setState({home: data.getHome()})
	},
  	render: function() {
    return (
      <div>
      <center>
        <h1>Mission</h1>
        	<p>{this.state.home.mission}</p>
      </center>
      </div>
    )
  }
})

export default Home;