import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';





class Private extends Component {
  
  render() {


    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <h3 onClick={this.props.logout}>Log out</h3>
    
   
        
      </div>
    )
  }
}

export default withAuth(Private);
