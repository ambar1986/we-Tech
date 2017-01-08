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
              <h1>Contact Us:</h1>
          <form>
            Name:
            <input type='text' placeholder='Your name' /><br/>
            Email:
            <input type='email' placeholder='your Email' /><br/>
            <input type='text' placeholder='have a comment?'/>
          </form>

        	<p>{this.state.contact.address}</p>
          <p>{this.state.contact.phone}</p>
          <p>{this.state.contact.email}</p>
      </center>
      </div>
    )
  }
})

export default ContactUs;