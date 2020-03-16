import React from 'react';

//import css
import '../../styles/NavButton.css';

export default function NavButton({children, type, imgSrc}) {
  const classNameGroup = "btn btn-info navbar-button"
  return(
    <button type={type} className={classNameGroup}>
      <img src={imgSrc} alt={"img"}></img>
      {children}
    </button>
  );
}