import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {

  renderIsLoggedIn = () => {
    return (
      <ul className="logged-in">
        <li>
          <Link to='/'>
            <img className="icon" src={process.env.PUBLIC_URL + '/icons/cam-shutter-solid.svg'} alt="scan a painting" />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <img className="icon homeicon" src={process.env.PUBLIC_URL + '/icons/home-solid.svg'} alt="to homepage" />
          </Link>
        </li>
        <li>
          <Link to='/me/menu'>
            <img className="icon" src={process.env.PUBLIC_URL + '/icons/user-circle-solid.svg'} alt={this.props.user.username} />
          </Link>
        </li>
      </ul>
    )
  }

  renderIsNotLoggedIn = () => {
    return (
      <ul className="logged-out">
        <li>
          <Link to='/signup'>
            <img className="icon signupicon" src={process.env.PUBLIC_URL + '/icons/user-plus-solid.svg'} alt="sign up" />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <img className="icon homeicon" src={process.env.PUBLIC_URL + '/icons/home-solid.svg'} alt="to homepage" />
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <img className="icon" src={process.env.PUBLIC_URL + '/icons/sign-in-alt-solid.svg'} alt="log in" />
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