import React from 'react';
import { Redirect } from 'react-router-dom';

//import components
import Nav from './Nav';
import DashboardRouter from '../Routers/DashboardRouter';
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
      // <headers className="d-flex align-items-center flex-column bd-highlight mb-3">
      //   <div class="btn-group-vertical" role="group" aria-label="...">
      //     <button type="button" class="btn btn-warning"><img src="#"></img><p>Inventory</p></button>
      //     <button type="button" class="btn btn-secondary">Reports</button>
      //     <button type="button" class="btn btn-secondary">Packing Slips</button>
      //     <button type="button" class="btn btn-secondary">User management</button>
      //   </div>
      //   <h2>Hi, {username}</h2>
      //   <h3>This is the dashboard after login.</h3>
      //   <div>
      //     <h3>Hi Marco!</h3>
      //   </div>
      //   <button className="btn btn-secondary" onClick={this.handleLogout}>Logout</button>
      // </headers>
      <div className="row">
        <div className="text-center col-2 padding-fix">
          <p>Logo component</p>
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