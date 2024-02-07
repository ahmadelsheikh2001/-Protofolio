import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonTransition from '../ButtonTransition';

import './SecBtn.css';

const SecBtn = ({ children, path }) => {

  const navigate = useNavigate();

  return (
    <ButtonTransition>
      <button 
        onClick={() => path && navigate(`${path}`)} 
        className='sec_btn flex center'
        >
        <span className='flex'>{children}</span>  
        <div className='wave'></div>
      </button>
    </ButtonTransition>
  );
};

export default SecBtn;