import React from 'react';

var ThankMessage = React.createClass({
  	render: function() {
    return (
      <div>
      <hr className='break' />
      <center>
            <h2>Thank you for your interest in the mentorship!</h2>
            <p>We will review your application and get back to you shortly.</p>
      </center>
      </div>
    )
  }
})

export default ThankMessage;