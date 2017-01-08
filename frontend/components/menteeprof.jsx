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
    return (
      <div>
        <div className="container">
              <div className="row">
              <div className="col-md-5  toppad  pull-right col-md-offset-3 ">
                
               <br />
              </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
                  <div className="panel panel-info">
                  <Link to="/" className="btn btn-primary">Logout</Link>
                    <div className="panel-heading">
                      <h3 className="panel-title">Vanessa Montoya</h3>
                    </div>
                    <div className="panel-body">
                      <div className="row">
                       <center> <div className="col-md-3 col-lg-3 " > <img alt="User Pic" src="http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png" className="img-circle img-responsive" /> </div></center>
                        <div className=" col-md-9 col-lg-9 "> 
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
                                <td><Link to="Homefo@support.com">Vanessa@gmail.com</Link></td>
                              </tr>
                               
                              
                             <center> <td>This is your match:</td></center>
                      
                              
                            
                             
                            </tbody>
                          </table>
                       <center>   <Link to="MentorProf" className="btn btn-primary">See your mentor!</Link></center>
                        </div>
                      </div>
                    </div>
                                 </div>
                </div>
              </div>
           </div>





 {this.props.children}







      </div>
    )
  }
})

export default MenteeProf;