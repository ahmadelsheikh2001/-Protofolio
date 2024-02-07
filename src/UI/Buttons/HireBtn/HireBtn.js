import { useNavigate } from 'react-router-dom';
import ButtonTransition from '../ButtonTransition';
import { useTranslation } from 'react-i18next';

import './HireBtn.css';
import { useState } from 'react';


const HireBtn = ({ path }) => {

  const navigate = useNavigate();
  const {t, i18n} = useTranslation();
  const [blur, setBlur] = useState(false);

  return (
    <ButtonTransition>
      <button 
        onClick={() => path && navigate(`${path}`)} 
        className={`hire_btn center ${blur ? 'blur' : ''}`}
        onMouseEnter={() => setBlur(false)}
        onMouseLeave={() => setBlur(true)}
      >
        <span>{t('Hire_me')}</span>
        <div className="bullets">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
        <div className='wave'></div>
      </button>
    </ButtonTransition>
  )
};

export default HireBtn;