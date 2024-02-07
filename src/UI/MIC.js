import React from 'react';
import { MicIcon } from './Icons';

import './Icon.css';

const MIC = props => {

  return (
    <button 
    className={`mic-btn ${props.recording ? 'active' : ''}`}
    type='button' onClick={props.onREC} >
      <MicIcon />  
    </button>
  )
}

export default MIC