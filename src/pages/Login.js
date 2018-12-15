import React, { Component } from 'react';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';
import formErrors from '../helpers/formErrors';
import { Link } from 'react-router-dom';


class Login extends Component {
  state = {
    email: "",
    password: "",
    //wrongEmailPassword: false,
    //isEmpty: false,
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    //this.setState({
      //wrongEmailPassword: false,
      //isEmpty: false,
    //});


    auth.login({ email, password })
    .then( (user) => {
      this.props.setUser(user);
    })
    .catch( (error) => {
      console.log(error)
      //const {wrongEmailPassword, isEmpty} = formErrors.handleError(error);
      //this.setState({
        //email: '',
        //password: '',
        //wrongEmailPassword, 
        //isEmpty
      //})
    });
  }

  //handleError = () => {
    //const {wrongEmailPassword, isEmpty} = this.state;
    //if(wrongEmailPassword){
      //return 'email and/or password are invalid'
    //} else if (isEmpty) {
      //return 'Please fill the fields'
    //} else {
      //return ''
    //}
  //}


  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { email, password } = this.state;
    //const error = this.handleError();
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Email:</label>
        <input type="text" name="email" value={email} onChange={this.handleChange}/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        <input type="submit" value="Login" />
        {/*{ error ? <p className="error-sms">{error}</p> : <p className="error-sms"></p> }*/}
        <p className="small-text">New member?<Link to='/signup' className="primary-link"> Sign up</Link></p>
      </form>
    )
  }
}

export default withAuth(Login);