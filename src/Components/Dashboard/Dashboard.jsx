import React from 'react';
import { Redirect } from 'react-router-dom';

//import components
import Nav from './Nav';
import DashboardRouter from '../Routers/DashboardRouter';
import MainLogo from '../UI/Logo';
// import FakeAuth from '../FakeAuth';

//import CSS
import '../../styles/dashboard.css';

export default class Dashboard extends React.Component {

  //Class constructor
  constructor(props) {
    super(props);

    this.state = {
      signOutRedirect: false,
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  //Event handler
  handleLogout() {
    this.setState(()=>({signOutRedirect: true}));
  }

  //HTML View
  render() {
    // let username = FakeAuth.username;
    if(this.state.signOutRedirect === true) {
      return <Redirect to="/login" />
    }
    
    return (
      <div className="row full-screen">
        <div className="text-center col-2 padding-fix">
          <p className="dashboardLogo"><MainLogo /></p>
          <Nav />
          <hr></hr>
          {/* Logout button */}
          <div className="text-center full-width">
            <button className="btn btn-secondary" onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
        <div className="col-10 padding-fix" id="dashboardBody">
          <DashboardRouter />
        </div>
      </div>
    );
  }
};