import React from 'react';
import './H3Component.css';



const H3Component = ({ message = ''}) => {
 return (
  <h3 className='small-text' type='text'>
  {message}
</h3>
 );
};

export default H3Component;