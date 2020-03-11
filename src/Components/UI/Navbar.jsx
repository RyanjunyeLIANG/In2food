import React from 'react';

//import css
import '../../styles/navbar.css';

export default function Navbar({type, imgSrc, linkHref, text}) {
  const classNameGroup = "btn btn-primary navbar-button"
  return(
    <button type={type} className={classNameGroup} href={linkHref} text={text}>
      <img src={imgSrc}></img>
      <p>{text}</p>
    </button>
  );
}