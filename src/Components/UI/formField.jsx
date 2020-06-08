import React from 'react';

export default function formField(props) {
  return (
    <p className={ props.className }>
      <label htmlFor={ props.name }>{ props.name }:</label> 
      <input type={ props.type } id={ props.name } name={ props.name } required
      minLength="4" maxLength="55" size="10" onChange={ props.onChange } />
    </p>
  );
}