import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';

class DetailPage extends Component {
    
    render() {
        return (
          <div>
          <h1>Hello</h1>
          
          </div>
        );
      }
    }


export default withAuth(DetailPage);