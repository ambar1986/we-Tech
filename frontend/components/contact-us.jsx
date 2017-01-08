import React from 'react'
import data from './data'

var ContactUs = React.createClass({
	getInitialState:function(){
		return {contact:{}}
	},
	componentWillMount(){
		this.setState({contact: data.getContact()})
	},
  	render: function() {
    return (
      <div>
      <center>

        <h6>Contact Us:</h6>
        	<p>{this.state.contact.address}</p>
          <p>{this.state.contact.phone}</p>
          <p>{this.state.contact.email}</p>
      </center>
      </div>
    )
  }
})

export default ContactUs;