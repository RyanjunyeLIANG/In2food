import React from 'react';

export default function Banner(props) {
  return (
  <div name="banner" className="margin-fix padding-fix">
    <h1 className="text-center"> {props.name} </h1>
  </div>
  );
}