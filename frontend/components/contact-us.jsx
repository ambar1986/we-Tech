import React from 'react'

var ContactUs = React.createClass({
  	render: function() {
    return (
      <div>
      <hr className="break" />
      <center>
          <h2>Contact Us</h2>
            <p>Please feel free to contact us with any comments or concerns.</p>
          <form>
            <input 
            type='text' 
            placeholder='Full Name' />
            <br/>

            <input 
            type='text' 
            placeholder='Email' />
            <br/>

            <input 
            className='desc'
            type='text' 
            placeholder='Message'/>

              <br /><br />

            <button
            className="button"
            type="submit">Submit
            </button>
          </form>

      </center>
      </div>
    )
  }
})

export default ContactUs;