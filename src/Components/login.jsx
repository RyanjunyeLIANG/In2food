import React from 'react';
import {login, userAuth } from './Api/Auth';

 
//import react-router functions
import { Redirect } from 'react-router-dom';

//import CSS components
// import { Button } from 'react-bootstrap';

//import CSS
import '../styles/login.css';

//import fake Authorisation
// import FakeAuth from './FakeAuth';

//import UI components
import MainLogo from './UI/Logo';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //Fake Login User data
      // data: {
      //   user: {
      //     username: "tester",
      //     password: "test"
      //   }
      // },

      //Dynamic variables
      emailInput: "",
      password: "",
      isLoading: false,
      userAuthenticating: false,
      errorMessage: '',
      loginErrors: "d-none",
      redirectToReferrer: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const isLogin = localStorage.getItem('usertoken');
    if(isLogin) {
      this.setState({ userAuthenticating: true });
      userAuth().then(res => {
        if(res) {
          this.setState(() => ({
            redirectToReferrer: true,
            userAuthenticating: false
          }))
        } else {
          this.setState({ userAuthenticating: false })
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = { 'email': this.state.emailInput, 'password': this.state.password };
    this.setState(() => ({ isLoading: true }));
    //Use simple login logic for prototype only
    // this.loginAuthentication(username, password);
    
    /* axios for calling the backend API, we'll use this later on */
    login(user).then(res => {
      if(res.data.error) {
        this.setState(() => ({
          loginErrors: "d-block",
          errorMessage: res.data.error,
          isLoading: false
        }));
      } else {
        console.log("User Login successful", res.data.user.name);
        console.log(localStorage.getItem('usertoken'));
        this.setState(() => ({
          redirectToReferrer: true,
          isLoading: false
        }));
      }
    }
    );
  }

  // Login Authentication
  // loginAuthentication(username, password) {
  //   const userdata = this.state.data.user;

  //   //Authentication
  //   if(username === userdata.username && password === userdata.password) {
  //     FakeAuth.authenticate(userdata.username);
  //     console.log("User Login successful", FakeAuth.username);
  //     this.setState(() => ({redirectToReferrer: true}));
  //   } else {
  //     this.setState(() => ({loginErrors: "d-block"}));
  //     console.log("Login error.");
  //   }
  // }

  render() {
    const { redirectToReferrer } = this.state;

    if(redirectToReferrer === true) {
      return <Redirect to="/dashboard" />
    }

    if(this.state.userAuthenticating) {
      return <div><strong>Authenticating...</strong></div>
    }

    let submitButton = 'Submit';
    if(this.state.isLoading) {
      submitButton = 'Loading...'
    }
    
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tab titles */}
          
          {/* Icon */}
          <div className="fadeIn first logo">
            <MainLogo />
          </div>

          {/* Login Error indicator */}
    <p id="errorIndicator" className={`alert alert-danger ${this.state.loginErrors}`}>{this.state.errorMessage}</p>
          {/* Login Form */}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text" 
              id="emailInput" 
              className="fadeIn second" 
              name="emailInput" 
              placeholder="email"
              value={this.state.emailInput}
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
            <button type="submit" className="fadeIn fourth" disabled={ this.state.isLoading }>{ submitButton }</button>
          </form>
          
          {/* Remind Password */}
          <div id="formFooter">
            {/* <a className="underlineHover" href="/fake">Forgot Password?</a> */}
          </div>
        </div>
      </div>
    );
  }
}