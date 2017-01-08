import React from 'react';
import data from './data';
import {Link} from 'react-router';
import MenteeProf from './menteeprof.jsx';

var MentorProf = React.createClass({
	getInitialState:function(){
		return {users:{}}
	},
	componentWillMount(){
		this.setState({users: data.getUser()})
	},
  	render: function() {
      console.log("mentorprof")
    return (
      <div>
   

<h2 className="mentor">Samantha Thomas</h2>
                  
                    <div className="panel-body">
                      <div className="row">
                       <center> 
                       <div className="col-md-3 col-lg-3 " > <img alt="User Pic" src="http://www.creativedigest.co.uk/wp-content/uploads/2014/03/greta-soloman-1200x900.jpg" className="img-circle img-responsive" /> </div>
                       </center>
                       <br /><br /> <br />
                        <div className=" col-md-6 col-lg-6 "> 
                          <table className="table table-user-information">
                          <tbody>
                              <tr>
                                <td>Role:</td>
                               <td>Mentor</td>  
                              </tr>
                              <tr>
                                <td>Description:</td>
                                <td>Hi, I am a self-taught coder. I've been learning through Codecademy and FreeCodeCamp. I am hoping to improve on my JavaScript and learn React/Redux.</td>
                              </tr>
                              <tr>
                                <td>Skills:</td>
                                <td>JavaScript, HTML, CSS</td>
                              </tr>
                              <tr>
                                <td>Education:</td>
                                <td>BS in Fine Arts from NYU</td>
                              </tr>
                               <tr>
                                <td>Availability:</td>
                                <td>2 Hrs/Week/In Person</td>
                              </tr>
                              <tr>
                                <td>Contact:</td>
                                <td>sam@gmail.com</td>
                              </tr>

                            </tbody>
                          </table>
                  
                       <center>  

                       <Link to="MenteeProf" className="button">See your mentee!</Link>
                       <Link to="/" className="button">Logout</Link>
                       </center>
                        </div>
                      </div>
                    </div>
                      

















      </div>
    )
  }
})

export default MentorProf;







   /*<center>
            <h1>Mentor Profile:</h1>
            <h1>Name:</h1>
            <p>{this.state.users.mentor[0].name}</p>
            <h1>Description:</h1>
            <p>{this.state.users.mentor[0].description}</p>
            <h1>Skills:</h1>
            <p>{this.state.users.mentor[0].skills}</p>
            <h1>This is your match:</h1>
            <Link to='MenteeProf'>I'm your Mentee</Link>
            {this.props.children}
      </center>
/////////////*/
