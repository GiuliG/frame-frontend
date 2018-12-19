import React, { Component } from 'react';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';
import formErrors from '../helpers/formErrors';
import { Link } from 'react-router-dom';


class Login extends Component {
  state = {
    email: "",
    password: "",
    wrongEmailPassword: false,
    isEmpty: false,
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState({
      wrongEmailPassword: false,
      isEmpty: false,
    });


    auth.login({ email, password })
    .then( (user) => {
      this.props.setUser(user);
    })
    .catch( (error) => {
      console.log(error)
      const {wrongEmailPassword, isEmpty} = formErrors.handleError(error);
      this.setState({
        email: '',
        password: '',
        wrongEmailPassword, 
        isEmpty
      })
    });
  }

  handleError = () => {
    const {wrongEmailPassword, isEmpty} = this.state;
    if(wrongEmailPassword){
      return 'Email and password do not match'
    } else if (isEmpty) {
      return 'Please fill the fields'
    } else {
      return ''
    }
  }


  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { email, password } = this.state;
    const error = this.handleError();
    return (
      <div className="container">
        <h1>Login</h1>
        <p className="small-text">Log in or <Link to='/signup' className="primary-link">sign up</Link> to browse the MET Collection.</p>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <input type="submit" value="Login" />
          { error ? <p className="error-sms">{error}</p> : <p className="error-sms"></p> }
          
        </form>
      </div>
    )
  }
}

export default withAuth(Login);