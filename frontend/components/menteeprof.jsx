import React from 'react';
import data from './data';
import {Link} from 'react-router';
import MentorProf from './mentorprof.jsx';
import Home from './home.jsx';

var MenteeProf = React.createClass({
  	render: function() {
    return (
      <center><div>
      <hr className='break' />

       <h2 className="mentee">Samantha Thomas</h2>
                  
          <div className="panel-body">
            <div className="row">
                       
              <div className="col-md-3 col-lg-3 " > <img alt="User Pic" src="http://www.creativedigest.co.uk/wp-content/uploads/2014/03/greta-soloman-1200x900.jpg" className="img-circle img-responsive" /> </div>
                     
                    
                        <div className=" col-md-6 col-lg-6 "> 
                          <table className="table table-user-information">
                          <tbody>
                              <tr>
                                <td>Role:</td>
                               <td>Mentee</td>  
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
                  
                    

                       <Link to="MentorProf" className="button">See your mentor!</Link>
                       <Link to="/" className="button">Logout</Link>
                      
                        </div>
                      </div>
                    </div>

      </div></center>
    )
  }
})

export default MenteeProf;