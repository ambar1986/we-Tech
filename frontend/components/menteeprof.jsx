import React from 'react';
import data from './data';
import {Link} from 'react-router';
import MentorProf from './mentorprof.jsx';
import Home from './home.jsx';

var MenteeProf = React.createClass({
	getInitialState:function(){
		return {users:{}}
	},
	componentWillMount(){
		this.setState({users: data.getUser()})
	},
  	render: function() {
      console.log("working?????????????????")
    return (
      <div>
      <hr className='break' />

              
                      <h2 className="mentee">Samantha Thomas</h2>
                  
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
                                <td>Department:</td>
                                <td>Programming</td>
                              </tr>
                              <tr>
                                <td>Description</td>
                                <td>{this.state.users.mentee[0].description}</td>
                              </tr>
                              <tr>
                                <td>skills</td>
                                <td>{this.state.users.mentee[0].skills}</td>
                              </tr>
                              <tr>
                                <td>Home Address</td>
                                <td>New York, New York</td>
                              </tr>
                              <tr>
                                <td>Email</td>
                                <td><Link to="Homefo@support.com">sam@gmail.com</Link></td>
                              </tr>

                            </tbody>
                          </table>
                  
                       <center>  

                       <Link to="MentorProf" className="button">See your mentor!</Link>
                       <Link to="/" className="button">Logout</Link>
                       </center>
                        </div>
                      </div>
                    </div>
                      
 
      

 {this.props.children}
      </div>
    )
  }
})

export default MenteeProf;