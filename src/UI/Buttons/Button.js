import React from 'react'

import './button.css';
const Button = (props,{onSubmit}) => {
  console.log(props.validation);
  return (
    <button className='main_btn flex pointer' onClick={props.onClick} {...props.data}>
      <span className='flex'>{props.children}</span>  
      <div className='wave'></div>
    </button>  
  )
}

export default Button