import React from 'react';
import data from './data';
import {Link} from 'react-router';
import MenteeProf from './menteeprof.jsx';

var MentorProf = React.createClass({
  render:function(){
    return (
      <center><div>
      <hr className='break' />
      <h2 className="mentee">Claire Monroe</h2>
                  
                    <div className="panel-body">
                   
                       <div className="col-md-4 col-lg-4 " > <img alt="User Pic" src="https://abm-website-assets.s3.amazonaws.com/labdesignnews.com/s3fs-public/embedded_image/2016/09/TRIA_Jeannie%20Pierce%20Thacker_Headshot.jpg" className="img-circle img-responsive" /> </div>
                    
          
                        <div className=" col-md-7 col-lg-7 "> 
                          <table className="table table-user-information">
                          <tbody>
                              <tr>
                                <td>Role:</td>
                               <td>Mentor</td>  
                              </tr>
                              <tr>
                                <td>Description:</td>
                                <td>Hi, I am a frontend developer at Facebook. </td>
                              </tr>
                              <tr>
                                <td>Skills:</td>
                                <td>React, Redux, React-Native, Angular, JavaScript, HTML, CSS</td>
                              </tr>
                              <tr>
                                <td>Education:</td>
                                <td>Computer Science from MIT</td>
                              </tr>
                               <tr>
                                <td>Availability:</td>
                                <td>2 Hrs/Week/In Person</td>
                              </tr>
                              <tr>
                                <td>Contact:</td>
                                <td>claire@facebook.com</td>
                              </tr>

                            </tbody>
                          </table>
                  
                       <Link to="MenteeProf" className="button">See your mentee!</Link>
                       <Link to="/" className="button">Logout</Link>
                      
                        </div>
                      </div>
                    
                      
      </div></center>
    )
  }
})

export default MentorProf;
