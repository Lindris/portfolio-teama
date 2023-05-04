import React from 'react';
import './Button.css';


const Button = ({ message = ''}) => {
 return (
  <button className = 'button' type='button'>
  {message}
  </button>
 );
};

export default Button;