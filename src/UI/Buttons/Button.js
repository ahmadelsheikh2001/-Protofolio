import React from 'react'

import './button.css';
const Button = (props) => {
  return (
    <button disabled={!props.validation} className='main_btn flex' onClick={props.onClick} {...props.data}>
      <span className='flex'>{props.children}</span>  
      <div className='wave'></div>
    </button>  
  )
}

export default Button