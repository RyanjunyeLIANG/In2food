import React from 'react';

//import router function
// import { Link } from 'react-router-dom';

//import components
import NavButton from '../UI/NavButton';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {    
    return (
      <div className="btn-group-vertical">
        {/* Inventory Link */}
        <Link to="/dashboard/inventory" className="router-link">
          <NavButton type="button" imgSrc="#">
            <p>Inventory</p>
          </NavButton>
        </Link>

        {/* Report Link */}
        <Link to="/dashboard/report" className="router-link">
          <NavButton type="button" imgSrc="#">
            <p>Report</p>
          </NavButton>
        </Link>

        {/* Packing Slip link */}
        <Link to="/dashboard/packing-slip" className="router-link">
          <NavButton type="button" imgSrc="#">
            <p>Packing Slip</p>
          </NavButton>
        </Link>

        {/* User creation link */}
        <Link to="/dashboard/user-creation" className="router-link">
          <NavButton type="button" imgSrc="#">
            <p>User Creation</p>
          </NavButton>
        </Link>
      </div>
    );
  }
}