import React from 'react';



const H2Component = ({ message = ''}) => {
 return (
  <h3 className='small-text' type='text'>
  {message}
</h3>
 );
};

export default H2Component;