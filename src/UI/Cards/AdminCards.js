import React from 'react'

import './cards.css';

const AdminCards = props => {
  return (
    <div className='admin_card'>
      <div className='card_bgk'></div>
      {props.children}
    </div>
  )
};

export default AdminCards