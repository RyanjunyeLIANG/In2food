import React from 'react';

//import css
import '../../../styles/NavButton.css';

export default function NavButton({children, ...props}) {
  const classNameGroup = "btn btn-info navbar-button"
  return(
    <button type={props.type} className={classNameGroup}>
      <img src={props.imgSrc} alt={props.imgAlt} className="responsive-image"></img>
      {children}
    </button>
  );
}