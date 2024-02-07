import { useState } from 'react';
import ButtonTransition from '../ButtonTransition';
import { useNavigate } from 'react-router-dom';

import './MainBtn.css';

const MainBtn = ({ children, path }) => {

  const navigate = useNavigate();
  const [blur, setBlur] = useState(false);


  return (
    <ButtonTransition>
      <button
       className={`main_btn flex center ${blur ? 'blur' : ''}`}
       onClick={() => path && navigate(`${path}`)} 
       onMouseEnter={() => setBlur(false)}
       onMouseLeave={() => setBlur(true)}
       >
        <span className='flex'>{children}</span>  
        <div className='wave'></div>
      </button>
    </ButtonTransition>
  );
};

export default MainBtn;