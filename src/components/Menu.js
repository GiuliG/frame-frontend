'Use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Menu extends Component {
  render() {
    return (
      <div id="menu">
        <span className="close" onClick={this.props.history.goBack}>
          <img className="icon" src={process.env.PUBLIC_URL + '/icons/close.svg'} alt="close" />
        </span>
        <ul>
          <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>
            <Link to='/private'>My Favourites</Link>
          </li>
          <li>
            <span onClick={this.props.logout}>Log out</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default withAuth(Menu);