import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import './dropDown.css';

const DropMenu = props => {


  const closeDropMenu = e => {
    if(e?.target?.id !== props.id) {
      props.setState(false);
    }

  };

  useEffect(() => {
    document.body.addEventListener('click', closeDropMenu);
    return () => {
      document.body.removeEventListener('click', closeDropMenu);
    };
  }, []);

  return (
      <motion.ul
        id='dropDown_menu' 
        className='drop_menu'
        initial={{scale: 0, x: '-50%', y: '-50%', opacity: .3}}
        animate={{scale: 1, x: '-50%', y: '10%', opacity: 1}}
        exit={{scale: 0, x: '-50%', y: '-50%', opacity: .3}}
        transition={{ type: "spring", stiffness: 120, bounce: .3 }}
        >
      
        {props.children}
      </motion.ul>
  )
}

export default DropMenu