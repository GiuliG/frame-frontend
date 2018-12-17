import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {

  renderIsLoggedIn = () => {
    return (
      <ul className="logged-in">
        <li>
          <Link to='/'>
            <img src={process.env.PUBLIC_URL + '/icons/cam-shutter-solid.svg'} alt="scan a painting" />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <img src={process.env.PUBLIC_URL + '/icons/home-solid.svg'} alt="to homepage" className="homeicon" />
          </Link>
        </li>
        <li>
          <span onClick={this.renderMenu}>
            <img src={process.env.PUBLIC_URL + '/icons/user-circle-solid.svg'} alt={this.props.user.username} />
          </span>
        </li>
      </ul>
    )
  }

  renderIsNotLoggedIn = () => {
    return (
      <ul className="logged-out">
        <li>
          <Link to='/signup'>
            <img src={process.env.PUBLIC_URL + '/icons/user-plus-solid.svg'} alt="sign up" className="signupicon" />
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <img src={process.env.PUBLIC_URL + '/icons/sign-in-alt-solid.svg'} alt="log in" />
          </Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <nav id="navbar">
        {this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn()}
      </nav>
    )
  }
}

export default withAuth(Navbar);