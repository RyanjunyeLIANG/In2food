import React, { Component } from 'react';
// import axios from 'axios';

//import react-router functions
import { Redirect } from 'react-router-dom';

//import CSS components
// import { Button } from 'react-bootstrap';

//import CSS
import '../styles/login.css';

//import fake Authorisation
import fakeAuth from './fake-auth';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Fake Login User data
      data: {
        user: {
          username: "tester",
          password: "test"
        }
      },

      //Dynamic variables
      username: "",
      password: "",
      loginErrors: "d-none",
      redirectToReferrer: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    
    //Use simple login logic for prototype only
    this.loginAuthentication(username, password);
    
    /* axios for calling the backend API, we'll use this later on */
    // axios.post(
    //   'http://localhost:3000/sessions',
    //   {
    //     user: {
    //       username: username,
    //       password: password
    //     }
    //   },
    // ).then(res => {
    //   console.log("response from login", res);
    // }).catch(err => {
    //   console.log("login error", err);
    // });
  }

  // Login Authentication
  loginAuthentication(username, password) {
    const userdata = this.state.data.user;

    //Authentication
    if(username === userdata.username && password === userdata.password) {
      fakeAuth.authenticate(userdata.username);
      console.log("User Login successful", fakeAuth.username);
      this.setState(() => ({redirectToReferrer: true}));
    } else {
      this.setState(() => ({loginErrors: "d-block"}));
      console.log("Login error.");
    }
  }

  render() {
    const { redirectToReferrer } = this.state;

    if(redirectToReferrer === true) {
      return <Redirect to="/management" />
    }
    
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tab titles */}
          
          {/* Icon */}
          <div className="fadeIn first logo">
            <img src={require('../images/In2foodLogo185x76px.png')} id="logo" alt="In2food Logo" />
          </div>

          {/* Login Error indicator */}
    <p id="errorIndicator" className={`alert alert-danger ${this.state.loginErrors}`}>Login Error!</p>
          {/* Login Form */}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text" 
              id="usernameInput" 
              className="fadeIn second" 
              name="username" 
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            <input 
              type="password" 
              id="passwordInput" 
              className="fadeIn third" 
              name="password" 
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <input type="submit" className="fadeIn fourth" />
          </form>
          
          {/* Remind Password */}
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    );
  }
}