'Use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

//pls put props into this

class Menu extends Component {
  render() {
    return (
      <div id="menu">
        <span>X</span>
        <ul>
          <li>
            <Link to='/private'>My Favourites</Link>
          </li>
          <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>
            <span>Log out</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default withAuth(Menu);