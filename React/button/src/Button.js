import React from 'react';
import './Button.css'; // Optional: You can create a separate CSS file for styling the button.

const Button = (props) => {
  return (
      <button className="button" onClick={props.onClick}>
        {props.label}
      </button>
  );
};

export default Button;
