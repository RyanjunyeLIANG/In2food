import React from 'react';

import FakeAuth from '../FakeAuth';

import { Redirect } from 'react-router-dom';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signOutRedirect: false,
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.setState(()=>({signOutRedirect: true}));
  }

  render() {
    let username = FakeAuth.username;
    if(this.state.signOutRedirect === true) {
      return <Redirect to="/login" />
    }
    
    return (
      <>
      <h2>Hi, {username}</h2>
      <h3>This is the dashboard after login.</h3>
      <button className="btn btn-secondary" onClick={this.handleLogout}>Logout</button>
      </>
    );
  }
};