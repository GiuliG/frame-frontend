import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';


class Navbar extends Component {

  renderIsLoggedIn = () => {
    return <div className="logged-in">
      <Link to='/'><img src={process.env.PUBLIC_URL + '/icons/cam-shutter-solid.svg'} alt="scan a painting" /></Link>
      <Link to='/'><img src={process.env.PUBLIC_URL + '/icons/home-solid.svg'} alt="to homepage" className="homeicon"/></Link>
      <Link to='/private'><img src={process.env.PUBLIC_URL + '/icons/user-circle-solid.svg'} alt={this.props.user.username} /></Link>
    </div>
  }

  renderIsNotLoggedIn = () => {
    return <div className="logged-out">
      <Link to='/signup'><img src={process.env.PUBLIC_URL + '/icons/user-plus-solid.svg'} alt="sign up" className="signupicon"/></Link>
      <Link to='/login'><img src={process.env.PUBLIC_URL + '/icons/sign-in-alt-solid.svg'} alt="log in" /></Link>
    </div>
  }

  render() {
    return (
      <div id="navbar">
        { this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn() }
      </div>
    )
  }
}

export default withAuth(Navbar);