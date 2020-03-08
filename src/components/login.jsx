import React, { Component } from 'react';
// import axios from 'axios';

//import CSS components
// import { Button } from 'react-bootstrap';

//import CSS
import '../styles/login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        user: {
          username: "tester",
          password: "test"
        }
      },
      username: "",
      password: "",
      loginErrors: "",
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

  loginAuthentication(username, password) {
    const userdata = this.state.data.user;

    //Authentication Debugger
    if(username === userdata.username && password === userdata.password) {
      console.log("User Login successful", userdata.username);
    } else {
      console.log("Login error.");
    }
  }

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tab titles */}

          {/* Icon */}
          <div className="fadeIn first">
            <img src="#" id="icon" alt="In2food Icon" />
          </div>

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