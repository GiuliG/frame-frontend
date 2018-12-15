import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';
import formErrors from '../helpers/formErrors';


class Signup extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    isAlreadyUser: false,
    isEmpty: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    
    this.setState({
      isAlreadyUser: false,
      isEmpty: false,
    });
   
    auth.signup({ username, email, password })
      .then( (user) => {
        this.setState({
            username: "",
            email: "",
            password: "",
        });
        this.props.setUser(user)
      })
      .catch( (error) => {
        const {isAlreadyUser, isEmpty} = formErrors.handleError(error);
        this.setState({
          email: '',
          password: '',
          isAlreadyUser,
          isEmpty
        });
      });
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleError = () => {
    const { isAlreadyUser , isEmpty} = this.state;
    if(isEmpty){
      return 'Please fill fields'
    } else if (isAlreadyUser) {
      return 'User already exists'
    } else {
      return ''
    }
  }

  render() {
    const { username, email, password } = this.state;
    const error = this.handleError();
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <input type="submit" value="Signup" />
        </form>
        { error ? <p className="error-sms">{error}</p> : <p className="error-sms"></p> }

        <p>Already have an account? 
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default withAuth(Signup);