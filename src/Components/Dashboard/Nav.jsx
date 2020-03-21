import React from 'react';

//import router function
// import { Link } from 'react-router-dom';

//import components
import NavButton from '../UI/Dashboard/NavButton';
import { Link } from 'react-router-dom';

//import icons
import inventoryIcon from '../UI/Icons/boxes1.png';
import reportIcon from '../UI/Icons/statistics1.png';
import packingIcon from '../UI/Icons/document1.png';
import userIcon from '../UI/Icons/user1.png';

export default function Nav() {
  const pageList = [
    {
      name: "Inventory", /* Name of the page */
      icon: {inventoryIcon}.inventoryIcon /* Icon location, Format: {Component object}.[value name], Return: String of url */
    },
    {
      name: "Reports", 
      icon: {reportIcon}.reportIcon
    },
    {
      name: "Packing Slips", 
      icon: {packingIcon}.packingIcon
    },
    {
      name: "User Creation", 
      icon: {userIcon}.userIcon
    }
  ];

  return (
    <div className="btn-group-vertical">
      {pageList.map((list, index) => {
        let listLink = list.name.replace(" ", "-");
        return ( 
          <Link to={`/dashboard/${listLink}`} className="router-link" key={index}>
            <NavButton type="button" imgSrc={list.icon} imgAlt={list.name}>
            <p>{list.name}</p>
            </NavButton>
          </Link>
        );
      })}
    </div>
  );
}