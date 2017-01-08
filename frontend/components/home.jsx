import React from 'react'
import data from './data'

var Home = React.createClass({
	render: function(){
		return(
			<div>

				<center><img className="mission" src={require('../images/mission.jpg')} /></center>

			</div>
		)
	}
})

export default Home;