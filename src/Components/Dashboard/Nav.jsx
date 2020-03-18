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
        <Link to="/dashboard/inventory" className="router-link">
          <NavButton type="button" imgSrc="#">
            <p>Inventory</p>
          </NavButton>
        </Link>
        <Link to="/dashboard/packing-slip">
          <NavButton type="button" imgSrc="#">
            <p>Packing Slip</p>
          </NavButton>
        </Link>
        <Link to="/dashboard/user-creation" className="router-link">
          <NavButton type="button" imgSrc="#">
            <p>User Creation</p>
          </NavButton>
        </Link>
      </div>
    );
  }
}